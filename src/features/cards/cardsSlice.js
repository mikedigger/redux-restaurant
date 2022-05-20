import { createSlice, createAsyncThunk, current } from '@reduxjs/toolkit';

import RestaurantService from '../../services/restaurantService';
import changeState from '../../utils';

const fetchCards = createAsyncThunk(
    'cards/fetchCards',
    async () => {
        const restaurantService = new RestaurantService();
        return await restaurantService.getDishes();
    }
)


const cardsSlice = createSlice({
    name: 'cards',
    initialState: {
        cards: [],
        status: null,
        error: null,
        cart: [],
        activeCard: {},
        addToOrder: []
    },
    reducers: {

        addToCart: (state, action) => {

            let { cards, cart } = state;
            const { payload } = action

            // cards.forEach(card => card.id === payload && !cart.some(item => item.id !== payload) ? cart.push(card) : null)


            cards.map(card => {
                if (card.id === payload) {
                    cart.push(card)
                    card.count = 1;
                    card.countActive = true;
                    card.cartIsActive = false
                }
            })
        },

        incrementCard: (state, action) => {
            const { cards, cart } = state;
            const { payload } = action;

            const changes = (card) => {
                return (
                    card.count = card.count + 1,
                    card.totalPrice = card.totalPrice + card.price,
                    card.countActive = true,
                    card.cartIsActive = false
                )
            }


            [cards, cart]
                .map(statePiece => changeState(statePiece)(changes, payload))
        },

        decrementCard: (state, action) => {
            const { cards, cart } = state;
            const { payload: id } = action

            const changes = (card) => {
                return (
                    card.count = card.count > 1 ? card.count - 1 : 1,
                    card.totalPrice = card.totalPrice > card.price
                        ? card.totalPrice - card.price
                        : card.price
                )
            }

            [cards, cart]
                .map(statePiece => changeState(statePiece)(changes, id))
        },

        removeItem: (state, action) => {
            const { cards, cart } = state;
            const { payload: id } = action;

            const reset = (card) => {
                return (
                    card.count = 0,
                    card.totalPrice = card.price,
                    card.countActive = false,
                    card.cartIsActive = true
                )
            }

            state.cart = cart.filter(item => item.id !== id);
            changeState(cards)(reset, id);
        },

        showActiveCard: (state, action) => {
            state.activeCard = state.cards.find(card => card.id === action.payload)
        },

        moveFromDetailsToCart: (state, action) => {
            if (!state.cart.some(item => item.id === action.payload.id)) {
                state.cart.push(action.payload);
            }
        },

        simulateAddToOrderCards: (state, action) => {
            let { cards } = state;
            const { payload } = action;


            if (cards.length !== 0) {
                const meat = state.cards.filter(dish => dish.type === 'meat');
                const hot = state.cards.filter(dish => dish.type === 'hot');
                const cold = state.cards.filter(dish => dish.type === 'cold');

                state.addToOrder = [meat, hot, cold]
                    .map((type, idx) => type[payload[idx]])

            }


        }
    },
    extraReducers: {
        [fetchCards.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [fetchCards.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.cards = action.payload;
        },
        [fetchCards.rejected]: (state, error) => {
            state.status = 'error';
            state.error = error;
        }
    }

})

export {
    fetchCards
};

export const {
    addToCart,
    incrementCard,
    decrementCard,
    removeItem,
    showActiveCard,
    moveFromDetailsToCart,
    simulateAddToOrderCards

} = cardsSlice.actions;

export default cardsSlice.reducer;
const initialState = {
    dishes: [],
    cart: [],
    activeDish: {},
    addToOrder: [],
    minimalOrder: 1500,
    acordion: [],
    promotion: []
}

const reducer = (state = initialState, action) => {

    const { type, payload } = action;

    switch (type) {
        case 'DISHES_LOADED':
            return {
                ...state,
                dishes: payload
            }

        case 'ADD_TO_CART':
            return {
                ...state,
                dishes: payload.updatedDishes,
                cart: payload.moveToCart
            }

        case 'DISH_AMOUNT_INCREASE':
            return {
                ...state,
                dishes: payload.updatedDishes,
                cart: payload.updatedCart
            }

        case 'DISH_AMOUNT_DECREASE':
            return {
                ...state,
                dishes: payload.updatedDishes,
                cart: payload.updatedCart
            }

        case 'REMOVE_FROM_CART':
            return {
                ...state,
                dishes: payload.updatedDishes,
                cart: payload.updatedCart
            }

        case 'SHOW_DISH_INFO':
            return {
                ...state,
                activeDish: payload
            }

        case 'LOAD_ADD_TO_ORDER':
            return {
                ...state,
                addToOrder: payload
            }

        case 'ADD_TO_CART_FROM_RECOMMENDS':
            return {
                ...state,
                dishes: payload.updatedDishes,
                cart: payload.updatedCart
            }
        
        case 'FETCH_FORM_DATA':
            return {
                ...state,
                formData: payload
            }

        case 'FETCH_ACORDION_DATA':
            return {
                ...state,
                acordion: payload
            }
        
        case 'OPEN_ACORDION_ITEM':
            return {
                ...state,
                acordion: payload
            }
        
        case 'PROMOTION_LOADED':
            return {
                ...state,
                promotion: payload
            }

        default:
            return state;
    }
}


export default reducer;
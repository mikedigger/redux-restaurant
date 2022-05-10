const initialState = {
    dishes: [],
    cart: [],
    activeDish: {},
    addToOrder: [],
    minimalOrder: 1500,
    // form: {}
    // form: {

    //     contacts: {
    //         name: '',
    //         phone: 0
    //     },

    //     delivery: {
    //         tabs: {
    //             companyDelivery: true,
    //             userDelivery: false
    //         },
    //         companyDelivery: {
    //             street: '',
    //             streetNumber: 0,
    //             flatNumber: 0,
    //             entrance: 0,
    //             floor: 0,
    //             comment: ''
    //         },
    //         userDelivery: {
    //             address: ''
    //         }
    //     },

    //     payoff: {
    //         tabs: {
    //             cash: true,
    //             card: false,
    //             online: false
    //         },
    //         cash: {
    //             rest: 0
    //         },
    //         online: {
    //             number: 0,
    //             expires: '',
    //             cvv: 0
    //         },
    //         ChannelMergerNode: {}
    //     },

    //     time: {
    //         tabs: {
    //             quickly: true,
    //             toTime: false
    //         },
    //         quickly: {
    //             setTime: '',
    //             personNumber: 0,
    //             call: false
    //         }
    //     },

    //     conditionsAgreement: false

    //     // get: '', // delivery, pickup
    //     // pay: '', // cash, card, online
    //     // time: '', // soon, toTime
    // }
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

        default:
            return state;
    }
}


export default reducer;
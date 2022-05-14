

// load dishes
const dishesLoaded = (dishes) => {
    return {
        type: 'DISHES_LOADED',
        payload: dishes
    }
}

const arrUpdate = (arr, insertIndex, changes) => {
    return [
        ...arr.slice(0, insertIndex),
        changes,
        ...arr.slice(insertIndex + 1)
    ]
}

const getTargetDishInfo = (arr, id) => {
    console.log()
    const target = arr.find(dish => dish.id === id);
    const targetDishIndex = arr.indexOf(target);
    return [
        target,
        targetDishIndex
    ]
}

const addToCart = (params) => {

    const { id, dishes, cart } = params;
    const [target, targetDishIndex] = getTargetDishInfo(dishes, id);

    const dishUpdate = {
        ...target,
        count: target.count + 1,
        countActive: true,
        cartIsActive: false
    }

    const updatedDishes = arrUpdate(dishes, targetDishIndex, dishUpdate);
    const moveToCart = arrUpdate(cart, cart.at(-1), dishUpdate);

    return {
        type: 'ADD_TO_CART',
        payload: {
            updatedDishes,
            moveToCart
        }
    }
}

const dishAmountIncrease = (params) => {
    const { id, dishes, cart } = params;
    const [target, targetDishIndex] = getTargetDishInfo(dishes, id);
    const [, cartDishIndex] = getTargetDishInfo(cart, id);

    const dishUpdate = {
        ...target,
        count: target.count + 1,
        totalPrice: target.totalPrice + target.price
    }

    const updatedDishes = arrUpdate(dishes, targetDishIndex, dishUpdate);
    const updatedCart = arrUpdate(cart, cartDishIndex, dishUpdate);

    return {
        type: 'DISH_AMOUNT_INCREASE',
        payload: {
            updatedDishes,
            updatedCart
        }
    }
}

const dishAmountDecrease = (params) => {
    const { id, dishes, cart } = params;
    const [target, targetDishIndex] = getTargetDishInfo(dishes, id);
    const [, cartDishIndex] = getTargetDishInfo(cart, id);

    const dishUpdate = {
        ...target,
        count: target.count > 0 ? target.count - 1 : 0,
        totalPrice: target.totalPrice > 0 ? target.totalPrice - target.price : 0
    }

    const updatedDishes = arrUpdate(dishes, targetDishIndex, dishUpdate);
    const updatedCart = arrUpdate(cart, cartDishIndex, dishUpdate);

    return {
        type: 'DISH_AMOUNT_DECREASE',
        payload: {
            updatedDishes,
            updatedCart
        }
    }
}

const removeFromCart = (params) => {
    const { id, cart, dishes } = params;
    const [, targetIndex] = getTargetDishInfo(cart, id);
    const [dishesTarget, dishesTargetIndex] = getTargetDishInfo(dishes, id);

    const dishUpdate = {
        ...dishesTarget,
        count: 0,
        countActive: false,
        cartIsActive: true
    }

    return {
        type: 'REMOVE_FROM_CART',
        payload: {
            updatedCart: [
                ...cart.slice(0, targetIndex),
                ...cart.slice(targetIndex + 1)
            ],
            updatedDishes: arrUpdate(dishes, dishesTargetIndex, dishUpdate)
        }
    }

}

const showDishInfo = (params) => {
    const { id, dishes } = params;
    const target = dishes.find(dish => dish.id === id);
    return {
        type: 'SHOW_DISH_INFO',
        payload: target
    }
}

const moveFromOrderToCart = (params) => {

    const { id, addToOrder, cart, dishes } = params;

    const [target] = getTargetDishInfo(addToOrder, id);
    const [targetInCart, targetInCartIndex] = getTargetDishInfo(cart, id);
    const [, targetInDishesIndex] = getTargetDishInfo(cart, id);

    const result = {
        ...target,
        count: target.count + 1,
    }

    if (targetInCart) {
        var updatedTarget = {
            ...targetInCart,
            count: targetInCart.count + 1,
            totalPrice: targetInCart.totalPrice + targetInCart.price
        }
    }

    return {
        type: 'ADD_TO_CART_FROM_RECOMMENDS',
        payload: {
            updatedCart: targetInCart
                ? arrUpdate(cart, targetInCartIndex, updatedTarget)
                : arrUpdate(cart, cart.at(-1), result),
            updatedDishes: targetInCart
                ? arrUpdate(dishes, targetInDishesIndex, updatedTarget)
                : arrUpdate(dishes, targetInDishesIndex, result)
        }
    }

}


const loadAddToOrder = (dishes) => {
    const chance = () => Math.floor(Math.random() * 6);

    const meat = dishes.filter(dish => dish.type === 'meat')
    const hot = dishes.filter(dish => dish.type === 'hot')
    const cold = dishes.filter(dish => dish.type === 'cold')

    const dish1 = meat[chance()]
    const dish2 = hot[chance()]
    const dish3 = cold[chance()]
    const dish4 = meat[chance()]

    return {
        type: 'LOAD_ADD_TO_ORDER',
        payload: [dish1, dish2, dish3, dish4]

    }
}

const fetchFormData = (data) => {
    return {
        type: 'FETCH_FORM_DATA',
        payload: data
    }

}

const fetchAcordionData = (data) => {
    return {
        type: 'FETCH_ACORDION_DATA',
        payload: data
    }
}

const openAccordionItem = (params) => {

    const { id, acordion } = params;
    const [target, targetIndex] = getTargetDishInfo(acordion, id);

    const changes = {
        ...target,
        active: !target.active

    }

    return {
        type: 'OPEN_ACORDION_ITEM',
        payload: arrUpdate(acordion, targetIndex, changes)
    }
}

const promotionLoaded = (data) => {
    return {
        type: 'PROMOTION_LOADED',
        payload: data
    }
}


export {
    dishesLoaded,

    addToCart,
    dishAmountIncrease,
    dishAmountDecrease,
    removeFromCart,
    showDishInfo,
    moveFromOrderToCart,
    loadAddToOrder,
    fetchFormData,

    fetchAcordionData,
    openAccordionItem,

    promotionLoaded
}
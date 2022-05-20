import { useSelector, useDispatch } from 'react-redux';

import {
    incrementCard,
    decrementCard,
    removeItem
} from '../cardsSlice';

import CartDish from '../CartDish';


const CartDishList = () => {

    const dispatch = useDispatch();
    const { cart } = useSelector(state => state.cards);
    const renderItems = () => {
        return (
            cart.map(dish => {
                const { id, ...rest } = dish;
                return (
                    <CartDish
                        key={id}
                        dishAmountIncrease={() => dispatch(incrementCard(id))}
                        dishAmountDecrease={() => dispatch(decrementCard(id))}
                        removeItem={() => dispatch(removeItem(id))}
                        {...rest} />
                )
            })
        )
    }

    return (
        <div className="rounded-[10px] bg-base-fill">
            {renderItems()}
        </div>
    )
}

export default CartDishList;
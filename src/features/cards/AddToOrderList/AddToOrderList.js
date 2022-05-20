
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
    simulateAddToOrderCards,
    moveFromDetailsToCart
} from '../cardsSlice';
import SectionTitle from '../../../components/common/SectionTitle';
import AddToOrderItem from './AddToOrderItem';
import OrderSum from './OrderSum';

const AddToOrderList = () => {

    const { addToOrder, cart } = useSelector(state => state.cards)
    const dispatch = useDispatch();
    const total = cart.reduce((sum, dish) => sum += dish.totalPrice, 0);
    const diff = 1500 - total;
    const difference = diff <= 0 ? 0 : diff


    useEffect(() => {
        dispatch(simulateAddToOrderCards([
            Math.floor(Math.random() * 6),
            Math.floor(Math.random() * 6),
            Math.floor(Math.random() * 6),
        ]))
    }, [dispatch])

    const renderItems = () => {
        return (
            addToOrder.map(dish => {
                const { id, ...rest } = dish;
                return (
                    <AddToOrderItem
                        key={id}
                        moveFromOrderToCart={() => dispatch(moveFromDetailsToCart(dish))}
                        {...rest}
                    />
                )
            })
        )
    }


    return (
        <section>
            <SectionTitle
                title='Додати до замовлення' />
            <div className='bg-base-fill rounded-[10px] mb-[20px] des:flex tab:mb-[80px]'>
                {renderItems()}
            </div>
            <OrderSum
                minimalOrder={1500}
                total={total}
                difference={difference} />
        </section>
    )
}


export default AddToOrderList;
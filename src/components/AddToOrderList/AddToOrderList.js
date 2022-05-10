import React from 'react';
import { connect } from 'react-redux';

import SectionTitle from '../common/SectionTitle';
import AddToOrderItem from './AddToOrderItem';
import OrderSum from './OrderSum';
import { moveFromOrderToCart } from '../../actions'
import Spinner from '../common/Spinner';


const AddToOrderList = ({ addToOrder, minimalOrder, cart, moveFromOrderToCart, dishes }) => {

    const total = cart.reduce((sum, dish) => sum += dish.totalPrice, 0);
    const diff = minimalOrder - total;
    const difference = diff <= 0 ? 0 : diff

    if (!addToOrder) return <Spinner />
    return (
        <section>
            <SectionTitle
                title='Додати до замовлення' />
            <div className='bg-base-fill rounded-[10px] mb-[20px] des:flex tab:mb-[80px]'>
                {
                    addToOrder.map(({ id, ...rest }) => {
                        const args = { id, addToOrder, cart, dishes }
                        return (
                            <AddToOrderItem
                                key={id}
                                moveFromOrderToCart={() => moveFromOrderToCart(args)}
                                {...rest}
                            />
                        )
                    })
                }
            </div>
            <OrderSum
                minimalOrder={minimalOrder}
                total={total}
                difference={difference}/>
        </section>
    )
}

const mapStateToProps = ({ cart, addToOrder, dishes, minimalOrder }) => ({ cart, addToOrder, dishes, minimalOrder });

const mapDispatchToProps = { moveFromOrderToCart };


export default connect(mapStateToProps, mapDispatchToProps)(AddToOrderList);
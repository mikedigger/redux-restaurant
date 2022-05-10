import React from 'react';
import { connect } from 'react-redux';

import { dishAmountIncrease, dishAmountDecrease, removeFromCart } from '../../actions';
import CartDish from '../CartDish';


const CartDishList = (props) => {

    const { cart, dishes } = props;
    const { dishAmountIncrease,  dishAmountDecrease, removeFromCart} = props;

    return (
            <div className="rounded-[10px] bg-base-fill">
                {
                    cart.map(dish => {
                        const { id, ...rest } = dish;
                        const args = {id, cart, dishes}
                        return (
                            <CartDish
                                key={id}
                                dishAmountIncrease={() => dishAmountIncrease(args)}
                                dishAmountDecrease={() => dishAmountDecrease(args)}
                                removeFromCart={() => removeFromCart(args)}
                                {...rest} />
                        )
                    })
                }
            </div>
    )
}

const mapStateToProps = ({ cart, dishes }) => ({ cart, dishes });
const mapDispatchToProps = {
    dishAmountIncrease,
    dishAmountDecrease,
    removeFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(CartDishList);
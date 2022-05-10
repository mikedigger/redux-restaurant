import React from 'react';
import { connect } from 'react-redux';

import CartDishList from '../CartDishList/CartDishList';
import SectionTitle from '../common/SectionTitle';
import BackLink from '../common/BackLink';
import AddToOrderList from '../AddToOrderList';

const CartPage = ({ cart }) => {


    return (
        <section className='pt-[30px] pb-[30px] tab:pb-[80px]'>
            <div className="container">

                <div className='des:pl-[140px] mb-[30px] tab:mb-[80px]'>
                    <BackLink
                        mod='pl-0'
                        txt='На головну' />
                    <div className="flex items-baseline gap-[20px]">
                        <SectionTitle
                            mod='!mb-0'
                            title='Кошик' />
                        <div className="text-accent">(у кошику {cart.length} позиції)</div>
                    </div>
                </div>
                <div className="w-full max-w-[1210px] mx-auto">
                    <div className="mb-[35px]">
                        <CartDishList />
                    </div>
                    <AddToOrderList />
                </div>
            </div>
        </section>
    )
}

const mapStateToProps = ({ cart }) => ({ cart});

export default connect(mapStateToProps)(CartPage);
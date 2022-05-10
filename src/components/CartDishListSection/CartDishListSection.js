import React from 'react';

import CartDishList from '../CartDishList';
import BackLink from '../common/BackLink';
import SectionTitle from '../SectionTitle';

const CartDishSection = () => {
    return (
        <section>
            <div className="container">
                <BackLink
                    mod='p-0 mb-20px tab:pl-[140px]'
                    txt='назад до вибору страв' />
                <header className='flex items-center gap-[7px] mb-30px tab:pl-[140px] tab:gap-[15px] tab:mb-70px'>
                    <SectionTitle title='Кошик' />
                    <span className="text-accent text-[15px] font-medium">(у кошику 0 товарів)</span>
                </header>
                <CartDishList />
            </div>
        </section>
    )
}

export default CartDishSection;
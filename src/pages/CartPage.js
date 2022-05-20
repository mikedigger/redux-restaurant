import { useSelector } from 'react-redux';

import SectionTitle from '../components/common/SectionTitle';
import BackLink from '../components/common/BackLink';
import CartDishList from '../features/cards/CartDishList';
import AddToOrderList from '../features/cards/AddToOrderList';

const CartPage = () => {

    const { cart } = useSelector(state => state.cards)

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

export default CartPage;
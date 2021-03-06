import { useState } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../common/Logo';
import Hamburger from './Hamburger';
import PopupNav from './PopupNav';
import TelContact from './TelContact';
import HeaderCart from './HeaderCart';
import SetDeliveryAddress from './SetDeliveryAddress';
import { routePath } from '../../../routing/routePath';

const Header = () => {

    const [burgerActive, setBurgerActive] = useState(false);

    if (burgerActive) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }

    return (
        <header
            id='header'
            className="py-[12px] tab:py-[25px] border-b border-solid border-[#ffffff1a]">
            <div className="container">
                <div className="flex items-center justify-between flex-wrap tab:gap-[70px]">
                    <Hamburger
                        burgerActive={burgerActive}
                        setBurgerActive={setBurgerActive} />
                    <Logo mod='tab:order-none' />
                    <Link
                        className='tab:order-2 z-[4]'
                        to={routePath.cart}>
                        <HeaderCart />
                    </Link>
                    <div className="tab:m-0 tab:flex-1 tab:order-1 flex gap-[30px] items-center flex-auto mt-[9px] w-full">
                        <SetDeliveryAddress mod='des:max-w-[555px] w-full' />
                        <TelContact mod='hidden des:flex flex-grow flex-shrink-0' />
                    </div>
                    <PopupNav burgerActive={burgerActive} />
                </div>
            </div>
        </header>
    )
}


export default Header;
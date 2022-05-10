import React from 'react';
// import './Footer.css';
import Logo from '../common/Logo'

const Footer = () => {
    return (
        <footer className="mt-auto pt-[27px] pb-[47px] bg-foo-grad des:py-[27px]">
            <div className="container">
                <div className="relative flex flex-col items-center text-center mob:flex-row mob:justify-between mob:items-center mob:text-left des:justify-start mob:gap-[55px]">
                    <a
                        href='#header'
                        className="w-[54px] h-[54px] rounded-circle bg-white flex items-center justify-center absolute top-[30px] left-[15px] group mob:static des:w-[64px] des:h-[64px] des:align-start des:mt-[25px]">
                        <i className="icon-arrow text-[30px] text-[#2E2B2C] scale-y-[-1] group-hover:text-accent des:text-[40px]"></i>
                    </a>
                    <div className="mb-[25px] mob:mb-0 des:mr-[87px]">
                        <Logo mod='mx-auto mb-[15px] mob:mx-0' />
                        <small className="text-[12px] mb-[7px] block font-medium">
                            © ЛНУ ім. Івана Франка <br />
                            Всі права захищені. 1667-2022
                        </small>
                        <ul>
                            <li><a href="#" className=" font-medium text-[14px] border-b border-solid border-[#ffffff33] hover:border-0 hover:text-accent">Угода користувача</a></li>
                            <li><a href="#" className=" font-medium text-[14px] border-b border-solid border-[#ffffff33] hover:border-0 hover:text-accent">Карта сайту</a></li>
                            <li><a href="#" className=" font-medium text-[14px] border-b border-solid border-[#ffffff33] hover:border-0 hover:text-accent">Політика конфіденційності</a></li>
                        </ul>
                    </div>
                    <div>
                        <ul className="des:flex des:gap-[35px]">
                            <li><a href="#" className="text-[16px] text-white hover:border-0 hover:text-accent des:text-[20px]">Про ресторан</a></li>
                            <li><a href="#" className="text-[16px] text-white hover:border-0 hover:text-accent des:text-[20px]">Умови доставки</a></li>
                            <li><a href="#" className="text-[16px] text-white hover:border-0 hover:text-accent des:text-[20px]">Повернення товару</a></li>
                            <li><a href="#" className="text-[16px] text-white hover:border-0 hover:text-accent des:text-[20px]">Акції</a></li>
                        </ul>
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer;
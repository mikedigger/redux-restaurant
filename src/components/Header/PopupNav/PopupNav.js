import React from 'react';

const PopupNav = ({ burgerActive }) => {

    const navClasses = 'z-[4] fixed top-0 left-0 w-full h-full flex invisible items-center opacity-0 duration-300';
    const navActiveClasses = 'opacity-100 !visible bg-base-fill'

    return (
        <div className={burgerActive ? `${navClasses} ${navActiveClasses}` : `${navClasses}`}>
            <div className="container">
                <nav>
                    <ul className="flex flex-col gap-[30px]">
                        {
                            ['Холодні закуски', 'Гарячі закуски', 'М\'ясні страви', 'Наше кафе', 'Контакти'].map((item, idx) => {
                                return (
                                    <li key={idx}>
                                        <a  href="#"
                                            className="text-[18px] font-semibold relative before:absolute before:bottom-[-3px] before:w-0 before:h-[2px] before:bg-accent hover:before:w-full hover:text-accent text-white duration-300 before:duration-300">
                                            {item}
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default PopupNav;
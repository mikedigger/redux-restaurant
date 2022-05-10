import React from 'react';

const Hamburger = ({mod, burgerActive, setBurgerActive}) => {

    let barClasses = 'block h-[4px] w-[25px] bg-accent duration-300 rounded-[5px]';

    let bar2ActiveClasses = 'translate-x-[-10px] opacity-0 bg-white';
    let bar1ActiveClasses = 'translate-y-[6px] rotate-45 bg-white';
    let bar3ActiveClasses = 'translate-y-[-2px] -rotate-45 bg-white';

    return (
        <>
            <button
                onClick={() => setBurgerActive((burgerActive) => !burgerActive)}
                className={`w-[40px] flex flex-col justify-center items-center cursor-pointer z-[4] ${mod}`}>
                <span
                    className={burgerActive ? `${barClasses} ${bar1ActiveClasses}` : `${barClasses} translate-y-[-4px]`}>
                </span>
                <span
                    className={burgerActive ? `${barClasses} ${bar2ActiveClasses}` : `${barClasses}`}>
                </span>
                <span
                    className={burgerActive ? `${barClasses} ${bar3ActiveClasses}` : `${barClasses} translate-y-[4px]`}>
                </span>
                <p className='uppercase mt-[8px] font-bold text-[12px] text-white'>Меню</p>
            </button>
        </>
    )
}

export default Hamburger;
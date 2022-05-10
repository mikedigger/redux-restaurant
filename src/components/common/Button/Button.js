import React from 'react';

const Button = ({ children, mod, eventHandler, testRef}) => {
    return (
        <button
            ref={testRef}
            onClick={eventHandler}
            className={`font-semibold rounded-10 border border-solid border-transparent bg-accent p-[7px] text-white text-xs tab:text-sm duration-300 hover:bg-white hover:border-accent hover:text-accent flex items-center justify-center ${mod}`}>
            {children}
        </button>
    )
}

export default Button;
import React from 'react';


const FormItem = ({ inputType, placeholder, required = false, ...rest }) => {
    return (
        <input
            className='rounded-[10px] border-[1px] border-solid border-[#ffffff1a] px-[12px] py-[20px] text-[16px] bg-transparent focus:bg-accent focus:outline-none placeholder:text-white tab:basis-1/2 tab:w-1/2'
            placeholder={placeholder}
            type={inputType}
            required={required}
            {...rest} />
    )
}

const FormItemContainer = ({ children, title }) => {
    return (
        <div className="py-[30px] px-[25px] bg-base-fill rounded-[10px] text-white">
            <h3 className="font-bold text-[16px] mb-[30px]">{title}</h3>
            <div className="flex flex-col gap-[15px]">
                {children}
            </div>
        </div>
    )
}

const CheckBox = ({ children, inputName, containerMod, mod }) => {

    const classes = `absolute w-full h-full top-0 left-0 rounded-circle overflow-hidden outline-[2px] outline outline-white outline-offset-1 peer-checked:!outline-accent pointer-events-none ${mod}`;

    return (
        <div className="flex items-center gap-[10px]">
            <div
                className={`relative w-[14px] h-[14px] shrink-0 ${containerMod}`}>
                <input
                    name={inputName}
                    type="checkbox"
                    className="peer absolute opacity-0 cursor-pointer w-full h-full" />
                <div className={classes}></div>
            </div>
            <label
                className='text-[12px]'
                htmlFor={inputName}>
                {children}
            </label>
        </div>
    )
}



export {
    CheckBox,
    FormItemContainer,
    FormItem
}
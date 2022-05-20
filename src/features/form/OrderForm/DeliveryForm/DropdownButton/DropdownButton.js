import { useState } from 'react'

const DropdownButton = ({ data }) => {

    const [dropdownActive, setDropDownActive] = useState(false);
    const [dropdownValue, setDropdownValue] = useState('Виберіть ресторан')

    let dropdownClasses = `absolute top-full left-0 w-full bg-base-fill border-[1px] border-t-0 border-solid border-[#ffffff1a] rounded-b-[10px] hidden `;

    let greenArrowClasses = 'block w-0 h-0 border-solid border-t-[9px] border-x-[6.5px] border-t-accent border-x-transparent absolute top-1/2 right-[30px] -translate-y-1/2'

    if (dropdownActive) {
        dropdownClasses += ' !block';
        greenArrowClasses += ' !border-t-0 !border-b-[9px]  !border-b-accent !border-t-transparent'
    }

    const renderItems = () => {
        return (
            data.map(({ value, id }) => {
                return (
                    <li
                        onClick={() => setDropdownValue(value)}
                        className='p-[10px] cursor-pointer hover:bg-accent duration-300'
                        key={id}>
                        {value}
                    </li>
                )
            })
        )
    }

    return (
        <div
            onClick={() => setDropDownActive(state => !state)}
            className="rounded-[10px] border-[1px] border-solid border-[#ffffff1a] px-[12px] py-[20px] text-[16px] bg-transparent focus:bg-accent focus:outline-none placeholder:text-white tab:basis-1/2 tab:w-1/2 relative">
            {dropdownValue}
            <ul className={dropdownClasses}>
                { renderItems() }
            </ul>
            <span className={greenArrowClasses}></span>
        </div>
    )
}

export default DropdownButton
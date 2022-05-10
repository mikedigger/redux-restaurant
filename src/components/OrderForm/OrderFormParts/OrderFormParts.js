import React from 'react';
import Button from '../../common/Button';
import { Link } from 'react-router-dom';

import nightImg from '../../../assets/images/night.png'

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


const TabHeader = ({ data, eventHandler }) => {
    // delivery
    return (
        <div className="rounded-[10px] border-[1px] border-solid border-accent flex overflow-hidden tab:w-1/3">
            {
                data.map(({ value, active, id }, idx) => {

                    let tabItemClass = `px-[40px] py-[20px] flex justify-center text-[12px] hover:bg-accent duration-300 `;
                    tabItemClass += data.length === 2 ? 'w-1/2 basis-1/2 ' : 'w-1/3 basis-1/3 ';
                    const tabItemClassActive = tabItemClass + 'bg-accent';

                    return (
                        <div
                            onClick={eventHandler}
                            key={id}
                            className={active ? tabItemClassActive : tabItemClass}>
                            {value}
                        </div>
                    )
                })
            }
        </div>
    )
}

const RoundedCheckbox = ({ children, containerMod, mod }) => {

    const classes = `absolute w-full h-full top-0 left-0 rounded-circle overflow-hidden outline-[2px] outline outline-white  outline-offset-1 peer-checked:!bg-accent peer-checked:!outline-accent pointer-events-none ${mod}`;

    return (
        <div className="flex items-center gap-[10px]">
            <div
                className={`relative w-[14px] h-[14px] shrink-0 ${containerMod}`}>
                <input
                    type="checkbox"
                    className="peer absolute opacity-0 cursor-pointer" />
                <div className={classes}></div>
            </div>
            <label
                className='text-[12px]'
                htmlFor="">
                {children}
            </label>
        </div>
    )
}

// -------------------------------

const ContactInfo = ({ data }) => {
    return (
        <FormItemContainer title='1. Контактна інформація'>
            <div className="flex flex-col gap-[15px] tab:flex-row">
                {
                    data.map(item => <FormItem key={item.id} {...item} />)
                }
            </div>
        </FormItemContainer>
    )
}

const Delivery = ({ data }) => {
    console.log(data)

    const {tabs, delivery, pickup} = data;

    console.log(delivery)

    return (
        <FormItemContainer title="2. Доставка">
            <TabHeader data={tabs} />
            <div className="flex flex-col gap-[15px] tab:flex-row flex-nowrap">
                {
                    delivery.map(input => <FormItem key={input.id} {...input} />)
                }
            </div>
            <div className="">
                <div className="mb-[15px]">Виберіть ресторан</div>
                <div className="rounded-[10px] border-[1px] border-solid border-[#ffffff1a] px-[12px] py-[20px] text-[16px] bg-transparent focus:bg-accent focus:outline-none placeholder:text-white tab:basis-1/2 tab:w-1/2 relative">
                    Виберіть ресторан
                    <ul className='absolute top-full left-0 w-full bg-base-fill border-[1px] border-t-0 border-solid border-[#ffffff1a] rounded-b-[10px]'>
                        {
                            pickup.map(({value, id}) => {
                                return (
                                    <li
                                        className='p-[10px] cursor-pointer hover:bg-accent duration-300'
                                        key={id}>
                                        {value}
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <span className="block w-0 h-0 border-solid border-t-[9px] border-x-[6.5px] border-t-accent border-x-transparent absolute top-1/2 right-[30px] -translate-y-1/2"></span>
                </div>
            </div>
        </FormItemContainer>
    )
}

const Payoff = ({ data }) => {

    const {tabs, inputs} = data;

    return (
        <FormItemContainer title="3. Оплата">
            <TabHeader data={tabs} />
            <div className="flex flex-col gap-[15px] tab:flex-row flex-nowrap">
                {
                    inputs.map(input => <FormItem key={input.id} {...input} />)
                }
            </div>
        </FormItemContainer>
    )
}

const DeliveryTime = ({ data }) => {

    const {tabs, inputs, checkboxes} = data;

    return (
        <FormItemContainer title="4. Час доставки">
            <TabHeader data={tabs} />
            <div className="flex flex-col gap-[15px] tab:flex-row flex-nowrap">
                {
                    inputs.map(input => <FormItem key={input.id} {...input} />)
                }
            </div>
            <div className='mt-[15px]'>
                <div className="font-bold text-[16px] mb-[20px]">Передзвонити?</div>
                <div className="flex gap-[20px] pl-[3px]">
                    {
                        checkboxes.map(({id, placeholder}) => {
                            return (
                                <RoundedCheckbox
                                    key={id}>
                                    {placeholder}
                                </RoundedCheckbox>

                            )
                        })
                    }
                </div>
            </div>
        </FormItemContainer>
    )

}

const MakeOrder = () => {
    return (
        <div className='py-[30px] px-[25px] bg-base-fill rounded-[10px] text-white flex flex-col items-center gap-[12px] tab:flex-row tab:justify-between'>
            <Button mod='min-w-[210px] w-fit min-h-[51px] !font-bold !text-[14px] tab:order-1'>
                Оформити замовлення
            </Button>
            <div className="max-w-[260px] tab:max-w-none tab:order-none">
                <RoundedCheckbox
                    containerMod='!w-[18px] !h-[18px]'
                    mod='rounded-[3px] bg-white outline-0 !w-[18px] !h-[18px] after:block peer-checked:!bg-white after:hidden peer-checked:after:block after:w-[9px] after:h-[14px] after:border-solid after:border-accent after:border-r-[4px] after:border-b-[4px] after:rotate-45 after:ml-[1px] after:mt-[-3px] flex items-center justify-center mr-[10px]'>
                    Я згоден на обробку моїх персональних данних згідно з
                    <span className='text-accent underline pl-[4px]'>
                        <Link to=''>Умовами</Link>
                    </span>
                </RoundedCheckbox>
            </div>
        </div>
    )
}

const DeliveryUnavailiable = () => {
    return (
        <div className="py-[30px] px-[25px] bg-[#2B2829] rounded-[10px] text-white flex flex-col mob:flex-row items-center gap-[40px] tab:gap-[100px] justify-between">
            <div className="flex flex-col gap-[10px]">
                <h3 className="font-bold text-[18px] tab:text-[22px]">Сьогодні ми вже не доставляємо</h3>
                <p className="text-[16px] tab:text-[18px]">Замовлення приймаються до 20:50, робимо доставку до 21.30</p>
            </div>
            <div className="overflow-hidden flex-shrink-0 w-[155px] h-[131px]">
                <img
                    className='block w-full h-full object-contain'
                    src={nightImg}
                    alt="картинка яка зображує відпочинок" />
            </div>
        </div>
    )
}

export {
    ContactInfo,
    Delivery,
    Payoff,
    DeliveryTime,
    MakeOrder,
    DeliveryUnavailiable
}
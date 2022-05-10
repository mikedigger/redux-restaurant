import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import Button from '../common/Button';

function DishCard(props) {

    const { id, img, title, descr, weight, totalPrice, count, cartIsActive, countActive } = props;
    const { addToCart, dishAmountIncrease, dishAmountDecrease, showDishInfo } = props;


    let dishCardCountClasses = 'w-[30px] h-[30px] !rounded-circle font-bold text-[16px] absolute right-[-10px] top-[-10px] line-height-[1] hidden ';

    let dishCardButtonClasses = 'min-w-[128px] px-[15px] py-[12px] text-[14px] line-height-[1] gap-[10px] flex ';

    let dishCardCounterClasses = 'w-[65px] h-[45px] rounded-[10px] text-[15px] flex ';

    if (countActive) dishCardCountClasses += '!flex';

    if (!cartIsActive) dishCardButtonClasses += 'hidden';
    if (cartIsActive) dishCardCounterClasses += 'hidden';


    return (
        <div
            onClick={showDishInfo}
            className="cursor-pointer h-full rounded-[10px] relative text-white bg-base-fill flex flex-col pb-[15px] justify-between">
            <Link to={`/products/${id}`}>

                <Button mod={dishCardCountClasses}>{count}</Button>
                <div className="overflow-hidden min-h-[215px] basis-[75%] rounded-t-[10px]">
                    <img className='h-full w-full object-contain block'
                        src={img}
                        alt={title} />
                </div>
                <div className="pt-[18px] px-[15px]">
                    <header className="flex justify-between items-center mb-[10px]">
                        <h3 className="font-bold text-white text-[20px] basis-[50%]">{title}</h3>
                        <div className="text-right basis-[50%]">Маса: {weight}г</div>
                    </header>
                    <p className="line-height-[1.4] mb-[15px] text-white">{descr}</p>
                </div>
            </Link>
            <footer
                // onClick={onCloseCountersOnClickOutside}
                // ref={ref}
                className="flex justify-between items-center pt-[18px] px-[15px]">
                <Button
                    // testRef={counters}
                    eventHandler={dishAmountDecrease}
                    mod={dishCardCounterClasses} >
                    <i className="icon-minus !text-[5px]"></i>
                </Button>

                <div className="text-white text-[20px] font-semibold">{totalPrice} ₴</div>

                <Button
                    // eventHandler={() => { onToCartButtonClicked(); onGetDishToCart() }}
                    eventHandler={addToCart}
                    mod={dishCardButtonClasses}>
                    <>
                        <span>В кошик</span>
                        <i className="icon-cart text-[20px]"></i>
                    </>
                </Button>

                <Button
                    // testRef={counters}
                    eventHandler={dishAmountIncrease}
                    mod={dishCardCounterClasses} >
                    <i className="icon-plus"></i>
                </Button>
            </footer>
        </div >
    )
}

export default DishCard;
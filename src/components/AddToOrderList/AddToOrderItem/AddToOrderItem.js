import React from 'react';
import Button from '../../common/Button';


const AddToOrderItem = ({img, title, price, moveFromOrderToCart}) => {
    return (
        <div className="flex items-center gap-[20px] p-[20px] relative overflow-hidden des:flex-col w-full">
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-cart-grad des:bottom-auto des:left-auto des:right-0 des:top-0 des:h-full des:w-[1px]"></span>
            <div className="flex-grow flex-shrink-0 overflow-hidden max-w-[111px] max-h-[82px] rounded-[10px] des:max-w-none des:max-h-[170px]">
                <img src={img} alt={title} />
            </div>
            <div className="w-full tab:basis-1/2 tab:flex tab:items-center tab:justify-between tab:flex-1 tab:gap-[50px] des:flex-col des:gap-[15px]">
                <h3 className="font-bold text-white text-[16px] mb-[20px] tab:text-[18px] tab:mb-[4px]">{title}</h3>
                <div className="tab:basis-1/2 tab:w-full flex gap-[15px] tab:gap-[20px] items-center justify-between flex-wrap des:flex-col">
                    <div className="flex gap-[10px] items-center tab:text-[20px]">
                        <span className='text-[12px] text-[#C6CED1]'>Додати</span>
                        <Button
                            eventHandler={moveFromOrderToCart}
                            mod='w-[28px] h-[28px] flex-grow flex-shrink-0 !rounded-circle des:w-[18px] des:h-[18px]'>
                            <i className="icon-plus text-[12px] des:text-[8px]"></i>
                        </Button>
                    </div>
                    <div className="tab:text-[20px] text-white font-bold">{price} ₴</div>

                </div>
            </div>
        </div>
    )
}

export default AddToOrderItem
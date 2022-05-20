import Button from '../../../components/common/Button';

const CartDish = (props) => {

    const { img, title, descr, totalPrice, count } = props;
    const { dishAmountIncrease, dishAmountDecrease, removeItem } = props;

    return (
        <div className="flex items-center gap-[20px] p-[20px] relative overflow-hidden">
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-cart-grad"></span>
            <div className="flex-grow flex-shrink-0 overflow-hidden max-w-[111px] max-h-[82px] rounded-[10px]">
                <img src={img} alt={title} />
            </div>
            <div className="tab:basis-1/2 tab:flex tab:items-center tab:justify-between tab:flex-1 tab:gap-[50px]">
                <div>
                    <h3 className="font-bold text-white text-[16px] mb-[20px] tab:text-[18px] tab:mb-[4px]">{title}</h3>
                    <p className="hidden tab:block tab:max-w-[280px]">{descr}</p>

                </div>
                <div className="tab:basis-1/2 tab:w-full flex gap-[15px] tab:gap-[20px] items-center justify-between flex-wrap font-bold text-white des-l:gap-[130px]">
                    <div className="flex gap-[10px] items-center tab:text-[20px]">
                        <Button
                            eventHandler={dishAmountDecrease}
                            mod='w-[18px] h-[18px] flex-grow flex-shrink-0 tab:w-[28px] tab:h-[28px] !rounded-circle'>
                            <i className="icon-minus text-[3px] tab:text-[4px]"></i>
                        </Button>
                        <div>{count}</div>
                        <Button
                            eventHandler={dishAmountIncrease}
                            mod='w-[18px] h-[18px] flex-grow flex-shrink-0 tab:w-[28px] tab:h-[28px] !rounded-circle'>
                            <i className="icon-plus text-[8px] tab:text-[12px]"></i>
                        </Button>
                    </div>
                    <div className="tab:text-[20px]">{totalPrice} ₴</div>
                    <Button
                        eventHandler={removeItem}
                        mod='flex-grow-0 w-[18px] h-[18px] flex-grow flex-shrink-0 tab:w-[28px] tab:h-[28px] !rounded-circle'>
                        <i className="icon-close text-[8px] tab:text-[12px]"></i>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default CartDish
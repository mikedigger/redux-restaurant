import { Link } from 'react-router-dom';
import Button from '../../../../components/common/Button';
import { routePath } from '../../../../routing/routePath';

const OrderSum = ({total, minimalOrder, difference}) => {
    return (
        <div className="bg-base-fill rounded-[10px] py-[20px] px-[45px] text-center text-white flex flex-col gap-[20px] tab:flex-row tab:text-left tab:justify-between tab:max-w-[760px] tab:mx-auto">
            <div className="">
                <div className="font-medium text-[18px] mb-[5px]">
                    Сума: <span className='font-bold text-[25px]'> {total} ₴</span>
                </div>
                <div className="font-medium text-[12px] mb-[10px]">
                    До безплатної доставки бракує:
                    <span className="text-accent"> {difference} ₴</span>
                </div>
                <div className="">Мінімальна сума замовлення {minimalOrder} ₴</div>
            </div>
            <Link to={routePath.order}>
                <Button
                    mod='mx-auto py-[17px] px-[40px] !text-[14px] font-bold tab:mx-0 tab:!text-[18px]'>
                    Оформити замовлення
                </Button>
            </Link>
        </div>
    )
}

export default OrderSum
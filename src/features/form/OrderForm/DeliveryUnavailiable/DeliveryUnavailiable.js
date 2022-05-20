import nightImg from '../../../../assets/images/night.png';

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

export default DeliveryUnavailiable
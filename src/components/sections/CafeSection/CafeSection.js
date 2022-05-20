import SectionTitle from '../../common/SectionTitle';

const CafeSection = () => {

    const renderContent = () => {
        return (
            [
                { icon: 'onion', descr: 'найсвіжіші продукти' },
                { icon: 'flash', descr: 'швидка доставка' },
                { icon: 'chef', descr: 'найкращі кухарі' },
                { icon: 'onion', descr: 'найсвіжіші продукти' }
            ].map(({ icon, descr }, idx) => {
                return (
                    <div key={idx} className="group hover:text-accent pt-[40px] pb-[30px] px-[15px] bg-base-fill text-center duration-300 des:pt-[66px] des:pb-[40px] des:px-[21px]">
                        <i className={`text-[70px] icon-${icon}`}></i>
                        <p className="pt-[25px] text-[18px] text-white capitalize group-hover:text-accent cafe-card-descr">{descr}</p>
                    </div>
                )
            })
        )
    }

    return (
        <section className="py-[30px] no-repeat bg-center bg-no-repeat bg-cover bg-cafe-bg tab:p-[70px] tab:mx-[40px] tab:bottom-[-90px] tab:z-[3]">
            <div className="container">
                <div className="items-center des:flex tab:gap-[60px] des-lg:gap-[160px] des:justify-center">
                    <div className="mb-[40px] des:mb-0 des:basis-[50%]">
                        <SectionTitle
                            noGreenStrip
                            title='Наша їдальня' />
                        <p className="text-[14px] mb-[30px] des-lg:text-[20px] des-m:mb-[60px]">
                            Ну хто не чув про їдальню у Львівському національному університеті ім. Івана Франка? Через своє зручне місце розташування (знаходиться неподалік площі Ринок), вона користується великою популярністю серед туристів та місцевих жителів. Головна столова розташована на першому поверсі університету, окрім неї в корпусі діють 3 буфети, де можна з’їсти свіжої випічки та випити гарячих напоїв. У буфети та саму столову пускають усіх, адже вхід до університету вільний, студентські квитки на вході також не перевіряють. В столовій можна поласувати гарячими стравами: супами, варениками, пельменями, домашнім борщем, є салати на вибір та другі страви на ваш смак. Також тут продають свіжу випічку.
                        </p>
                        <button className="bg-[#ffffff0d] border-[1px] border-solid border-base-light rounded-[10px] py-[15px] px-[20px] uppercase min-w-[180px] text-right duration-300 font-bold text-[13px] des:py-[20px] des:px-[25px] des:min-w-[223px] hover:bg-base-light hover:text-base-fill">Подивитися меню</button>
                    </div>
                    <div className="des:basis-[50%]">
                        <div className="grid gap-[15px] mob:grid-cols-2 des:grid-cols-1 des-m:grid-cols-2">
                            { renderContent() }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CafeSection;
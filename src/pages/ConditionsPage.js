import Map from '../components/sections/Map';
import SectionTitle from '../components/common/SectionTitle';
import Accordion from '../features/accordion/Accordion';

const ConditionsPage = () => {
    return (
        <main>
            <section className='pt-[40px] pb-[40px] tab:pt-[80px]'>
                <div className="container">
                    <SectionTitle title='Умови доставки' />
                    <div className="flex flex-col gap-[40px] tab:flex-row tab:gap-[20px]">
                        <div className="tab:basis-1/2">
                            <Accordion />
                        </div>
                        <div className="relative min-w-[345px] min-h-[290px] rounded-[10px] overflow-hidden tab:basis-1/2">
                            <Map />
                        </div>
                    </div>
                </div>
            </section>
            <section className='py-[40px] bg-[#211F20]'>
                <div className="container">
                    <div className="flex flex-col gap-[15px] tab:gap-[35px]">
                        <div className="flex flex-col gap-[15px] tab:flex-row tab:gap-[100px]">

                            <div className="flex flex-col gap-[10px]">
                                <div className="text-[18px] text-white font-bold tab:text-[22px]">Графік роботи доставки</div>
                                <div className='tab:text-[22px]'>10:00 - 21:00</div>
                            </div>

                            <div className="flex flex-col gap-[10px]">
                                <div className="text-[18px] text-white font-bold tab:text-[22px]">Графік роботи кафе</div>
                                <div className='tab:text-[22px]'>08:00 - 21:00</div>
                            </div>

                        </div>

                        <div className="flex flex-col gap-[10px] tab:max-w-[700px]">
                            <div className="text-[18px] text-white font-bold tab:text-[22px]">Мінімальне замовлення:</div>
                            <div className="tab:text-[22px] leading-[1.6]">Безкоштовна доставка пішим курєром при сумі замовлення від 400&nbsp;₴. Доставка оператором таксі при будь-якій сумі замовлення - згідно тарифів перевізника.</div>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    )
}

export default ConditionsPage
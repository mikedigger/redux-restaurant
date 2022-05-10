import React, { useContext } from 'react';
// import Context from '../Context';
import SectionTitle from '../common/SectionTitle';
import Button from '../common/Button'

const ContactsSection = () => {
    // const { socialsData } = useContext(Context);
    return (
        <section className="relative pt-[20px] pb-[500px] tab:pt-[220px] tab:pb-[40px]">
            <div className="after:pointer-events-none after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-[#00000080] after:z-[2]">
                <iframe
                    className='absolute top-0 left-0 w-full h-full z-1'
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2573.1188684797635!2d24.019985115709368!3d49.840223979395766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add717532da69%3A0xf0cb97b8441ff1fe!2z0LLRg9C70LjRhtGPINCj0L3RltCy0LXRgNGB0LjRgtC10YLRgdGM0LrQsCwgMSwg0JvRjNCy0ZbQsiwg0JvRjNCy0ZbQstGB0YzQutCwINC-0LHQu9Cw0YHRgtGMLCA3OTAwMA!5e0!3m2!1suk!2sua!4v1648649557046!5m2!1suk!2sua"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>

            </div>
            <div className="container">
                <div className="relative bg-[#2e2b2c] shadow-[0_0_70px_rgba(0,0,0,0.15)] rounded-[15px] pt-[30px] px-[15px] pb-[35px] z-[2] tab:max-w-[530px] tab:py-[25px] tab:px-[40px]">
                    <header className="text-center tab:text-left">
                        <SectionTitle
                            noGreenStrip
                            title='Контакти' />
                    </header>
                    <div className="pt-[15px] pb-[30px] relative mb-[30px] before:absolute before:left-0 before:w-full before:h-[1px] after:absolute after:left-0 after:w-full after:h-[1px] before:bg-contact-grad after:contact-grad before:top-0 after:bottom-0">
                        <div className="flex gap-[17px] mt-[25px] ;first:mt-0">
                            <i className="icon-location text-[24px] text-accent"></i>
                            <div>
                                <div className="text-[14px] text-base-light">Наша адреса:</div>
                                <address className="text-[16px] font-semibold text-white not-italic">
                                    м. Львів <br />
                                    вул. Університетська, 1
                                </address>
                            </div>
                        </div>
                        <div className="flex gap-[17px] mt-[25px] ;first:mt-0">
                            <i className="icon-message text-[24px] text-accent"></i>
                            <div>
                                <div className="text-[14px] text-base-light">Наша пошта:</div>
                                <a
                                    href='mailto:halyna.mygal@lnu.edu.ua'
                                    className="text-[16px] font-semibold text-white">
                                    halyna.mygal@lnu.edu.ua
                                </a>
                            </div>
                        </div>
                    </div>
                    <footer>
                        <div className="text-center flex flex-col items-center mb-[20px] mob:flex-row mob:gap-[15px] justify-between">
                            <Button
                                mod='py-[20px] px-[25px] uppercase text-center text-[13px] max-w-[220px] mb-[20px] mob:mb-0'
                                children='Забронювати столик' />
                            <a href="tel:0322394293">
                                <div className="font-bold text-[23px] text-white">+38 (032) 239 42 93</div>
                                <div>Дзвоніть або залишайте заявку</div>
                            </a>
                        </div>
                        <div className="flex items-center justify-center">
                            <span className="font-semibold text-[16px] text-white mr-[25px]">Ми у соцмережах: </span>
                            {
                                // socialsData.map(({ icon, ref }, idx) => {
                                //     return (
                                //         <a
                                //             key={idx}
                                //             href={ref}
                                //             className="text-[19px] duration-300 hover:text-accent ml-[10px] first:ml-0">
                                //             <i className={`icon-${icon} contacts-social-icon`}></i>
                                //         </a>
                                //     )
                                // })
                            }
                        </div>
                    </footer>
                </div>
            </div>
        </section>
    )
}

export default ContactsSection
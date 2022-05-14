import React from 'react';
import SectionTitle from '../common/SectionTitle';
import Button from '../common/Button';
import Map from '../Map';

const ContactsSection = () => {

    return (
        <section className="relative pt-[20px] pb-[500px] tab:pt-[220px] tab:pb-[40px]">
            <Map />
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
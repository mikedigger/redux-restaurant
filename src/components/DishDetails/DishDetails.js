import React from 'react';
import { connect } from 'react-redux';

import Button from '../common/Button';
import BackLink from '../common/BackLink';

import defaultImg from '../../assets/images/dishImg.png';


const DishDetails = ({ activeDish  }) => {

    const { img = defaultImg, title = 'Dish', descr = 'description', totalWeight = 0, totalPrice = 0, nutritionalValueSum = {} } = activeDish;
    const { proteins = 0, fats = 0, carbohydrates = 0, kilocalories = 0 } = nutritionalValueSum;

    return (
        <section className="pt-[50px] des:max-w-[1210px] des:mx-auto des:w-full">
            <BackLink
                mod='w-[26px] h-[26px] rounded-circle'
                txt='Повернутися назад' />

            <div className="bg-base-fill rounded-[10px] overflow-hidden tab:flex">
                <div className="max-h-[275px] overflow-hidden mob:w-[85%] mob:mt-[30px] mob:mx-auto tab:w-[auto] tab:m-0 tab:basis-1/2 tab:max-h-[400px]">
                    <img className="w-full h-full block object-cover" src={img} alt={title} />
                </div>
                <div className="px-[20px] py-[25px] tab:basis-1/2 tab:flex tab:flex-col tab:justify-between tab:gap-[30px] des:gap-[100px] des:pt-[40px] des:pb-[25px] des:pl-[50px] des:pr-[150px]">
                    <div className="text-center tab:text-left">
                        <h2 className="font-bold text-white text-[20px] uppercase des:[text-32px] mb-[6px]">{title}</h2>
                        <p className="mb-[15px]">{descr}</p>

                    </div>
                    <div>
                        <div className="text-[14px] mb-[20px] text-center tab:text-left">Маса: {totalWeight}г</div>
                        <div className="flex items-center justify-center gap-[25px] mb-[30px] tab:justify-start">
                            <Button
                                // eventHandler={() => showDishInfo(activeDish)}
                                mod='group p-[6px] text-[14px] min-w-[145px] flex gap-[20px] justify-between items-center'>
                                <span className='p-[9px]'>Кошик</span>
                                <i className="icon-bag text-[19px] border-l-[1px] border-solid border-[#ffffff4d] px-[9px] pt-[9px] pb-[15px] group-hover:border-l-accent"></i>
                            </Button>
                            <div className="font-bold text-[25px] text-white">
                                {totalPrice} ₴
                            </div>

                        </div>
                        <table className="w-full">
                            <thead>
                                <tr className="border-b-[1px] border-solid border-[#ffffff1a]">
                                    <th className='text-center pb-[5px] font-normal tab:text-left'>Білки</th>
                                    <th className='text-center pb-[5px] font-normal tab:text-left'>Жири</th>
                                    <th className='text-center pb-[5px] font-normal tab:text-left'>Вуглеводи</th>
                                    <th className='text-center pb-[5px] font-normal tab:text-left'>Ккал</th>
                                    <th className='text-center pb-[5px] font-normal tab:text-left'>Маса</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{proteins}</td>
                                    <td className='text-center tab:text-left pt-[5px]'>{fats}</td>
                                    <td className='text-center tab:text-left pt-[5px]'>{carbohydrates}</td>
                                    <td className='text-center tab:text-left pt-[5px]'>{kilocalories}</td>
                                    <td className='text-center tab:text-left pt-[5px]'>{totalWeight} г</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    )
}

const mapStateToProps = ({ activeDish }) => ({ activeDish })

export default connect(mapStateToProps)(DishDetails)
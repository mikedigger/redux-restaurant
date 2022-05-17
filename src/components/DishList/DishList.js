import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { connect } from 'react-redux';

import Spinner from '../common/Spinner';
import { withRestaurantService } from '../hoc';
import { addToCart, dishAmountIncrease, dishAmountDecrease, showDishInfo } from '../../actions';
import { compose } from 'redux';

import DishCard from '../DishCard';

import 'swiper/css';

const DishList = (props) => {
    const { data, dishes, cart } = props;
    const { addToCart, dishAmountIncrease, dishAmountDecrease, showDishInfo } = props;

    if (!data) return <Spinner />

    return (
        <div
            className="overflow-hidden pt-[10px]">
            <Swiper
                className='overflow-visible w-[84%] des-l:w-[96%]'
                loop
                spaceBetween={15}
                breakpoints={{
                    600: { slidesPerView: 2 },
                    900: { slidesPerView: 3 },
                    1200: { slidesPerView: 4 },
                }}>
                {
                    data.map(dish => {
                        const { id, ...dishProps } = dish;
                        const args = { id, dishes, cart };
                        return (
                            <SwiperSlide
                                className='min-h-full h-auto'
                                key={id}>
                                <DishCard
                                    id={id}
                                    dishAmountIncrease={() => dishAmountIncrease(args)}
                                    addToCart={() => addToCart(args)}
                                    dishAmountDecrease={() => dishAmountDecrease(args)}
                                    showDishInfo={() => showDishInfo({ dishes, id })}
                                    {...dishProps} />
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    )
}

const mapStateToProps = ({ dishes, cart }) => ({ dishes, cart });

const mapDispatchToProps = {
    addToCart,
    dishAmountIncrease,
    dishAmountDecrease,
    showDishInfo
}

export default compose(
    withRestaurantService(),
    connect(mapStateToProps, mapDispatchToProps)
)(DishList);

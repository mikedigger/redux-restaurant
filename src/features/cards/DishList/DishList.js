import { Swiper, SwiperSlide } from 'swiper/react';
import { useDispatch } from 'react-redux';

import {
    addToCart,
    incrementCard,
    decrementCard,
    showActiveCard
} from '../cardsSlice';
import DishCard from '../DishCard';

import 'swiper/css';


const DishList = ({ data }) => {

    const dispatch = useDispatch();

    const renderItems = () => {
        return (
            data.map(dish => {
                const { id, ...dishProps } = dish;
                return (
                    <SwiperSlide
                        className='min-h-full h-auto'
                        key={id}>
                        <DishCard
                            id={id}
                            showActiveCard={() => dispatch(showActiveCard(id))}
                            addToCart={() => dispatch(addToCart(id))}
                            incrementCard={() => dispatch(incrementCard(id))}
                            decrementCard={() => dispatch(decrementCard(id))}
                            {...dishProps} />
                    </SwiperSlide>
                )
            })
        )
    }

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
                { renderItems() }
            </Swiper>
        </div>
    )
}

export default DishList;

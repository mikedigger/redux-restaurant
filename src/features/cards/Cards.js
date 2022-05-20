

import { useSelector } from 'react-redux';
import Spinner from '../../components/common/Spinner';

import DishListSection from './DishListSection';

const Cards = () => {

    const { cards } = useSelector(state => state.cards);

    if (cards.length === 0) return <Spinner />
    
    const coldData = cards.filter(dish => dish.type === 'cold');
    const hotData = cards.filter(dish => dish.type === 'hot');
    const meatData = cards.filter(dish => dish.type === 'meat');

    return (
        <>
            <DishListSection
                title='Холодні страви'
                data={coldData}/>
            <DishListSection
                title='Гарячі страви'
                data={hotData}/>
            <DishListSection
                title='Мясні страви'
                data={meatData}/>
        </>
    )
}

export default Cards
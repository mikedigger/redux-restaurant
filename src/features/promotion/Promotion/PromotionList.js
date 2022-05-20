import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchPromotion } from '../promotionSlice';
import Spinner from '../../../components/common/Spinner';
import PromotionItem from './PromotionItem';


const PromotionList = () => {

    const dispatch = useDispatch();
    const { data } = useSelector(state => state.promotion)

    useEffect(() => {
        dispatch(fetchPromotion())
    }, [dispatch]);

    if (data.length === 0) return <Spinner />

    const renderItems = () => data.map(item => <PromotionItem key={item.id} {...item} />)

    return (
        <div className='grid gap-[30px] grid-cols-1 tab:grid-cols-2 des:grid-cols-3 tab:[gap-x-20px] tab:gap-y-[50px]'>
            { renderItems() }
        </div>
    )
}

export default PromotionList;
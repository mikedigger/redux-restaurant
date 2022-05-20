import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchForm } from '../formSlice';
import Spinner from '../../../components/common/Spinner';

import DeliveryForm from './DeliveryForm';
import ContactForm from './ContactForm';
import PayoffForm from './PayoffForm';
import DeliveryTimeForm from './DeliveryTimeForm';
import DeliveryUnavailiable from './DeliveryUnavailiable';
import MakeOrder from './MakeOrder';

const OrderForm = () => {

    const dispatch = useDispatch();
    const { data } = useSelector(state => state.form)
    const currentHour = new Date().getHours();
    const deliveryAvailiable = currentHour > 21.5 || currentHour < 8.5 ? <DeliveryUnavailiable /> : null
    const { contact, delivery, payoff, deliveryTime } = data;

    useEffect(() => {
        dispatch(fetchForm())
    }, [dispatch]);

    if (data.length === 0) return <Spinner />

    return (
        <form
            action=""
            className="flex flex-col gap-[20px]">
            {
                deliveryAvailiable
            }
            <ContactForm data={contact} />
            <DeliveryForm data={delivery} />
            <PayoffForm data={payoff} />
            <DeliveryTimeForm data={deliveryTime} />
            <MakeOrder />
        </form>
    )
}

export default OrderForm;
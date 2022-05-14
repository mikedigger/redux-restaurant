import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { withRestaurantService } from '../hoc'
import { fetchFormData } from '../../actions';
import Spinner from '../common/Spinner';

import DeliveryForm from './DeliveryForm';
import ContactForm from './ContactForm';
import PayoffForm from './PayoffForm';
import DeliveryTimeForm from './DeliveryTimeForm';
import DeliveryUnavailiable from './DeliveryUnavailiable';
import MakeOrder from './MakeOrder';

const OrderForm = ({ restaurantService, fetchFormData, formData }) => {

    useEffect(() => {
        const formData = restaurantService.getFormData();
        fetchFormData(formData)
    }, []);

    if (!formData) return <Spinner />

    const { contact, delivery, payoff, deliveryTime } = formData;

    const currentHour = new Date().getHours();

    const deliveryAvailiable = currentHour > 21.5 || currentHour < 8.5 ? <DeliveryUnavailiable /> : null

    return (
        <form
            action=""
            className="flex flex-col gap-[20px]">
            {
                deliveryAvailiable
            }
            <ContactForm data={contact}/>
            <DeliveryForm data={delivery}/>
            <PayoffForm data={payoff}/>
            <DeliveryTimeForm data={deliveryTime}/>
            <MakeOrder />
        </form>
    )
}

const mapStateToProps = ({ formData }) => ({ formData });
const mapDispatchToProps = { fetchFormData }

export default compose(
    withRestaurantService(),
    connect(mapStateToProps, mapDispatchToProps)
)(OrderForm)
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { withRestaurantService } from '../hoc'
import { fetchFormData } from '../../actions';
import Spinner from '../common/Spinner';

import {
    ContactInfo,
    Delivery,
    Payoff,
    DeliveryTime,
    MakeOrder,
    DeliveryUnavailiable
} from './OrderFormParts'

const OrderForm = ({ restaurantService, fetchFormData, formData }) => {

    useEffect(() => {
        const formData = restaurantService.getFormData();
        fetchFormData(formData)
    }, []);

    if (!formData) return <Spinner />

    const { contact, delivery, payoff, deliveryTime } = formData;

    console.log(delivery)



    return (
        <form
            action=""
            className="flex flex-col gap-[20px]">
            <DeliveryUnavailiable />
            <ContactInfo data={contact}/>
            <Delivery data={delivery}/>
            <Payoff data={payoff}/>
            <DeliveryTime data={deliveryTime}/>
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
import React from 'react';
import BackLink from '../common/BackLink';
import SectionTitle from '../common/SectionTitle';
import OrderForm from '../OrderForm';



const OrderindPage = () => {
    return (
        <section className="pt-[50px] pb-[90px]">
            <div className="container !max-w-[1040px] mx-auto ">
                <BackLink txt='до кошика'/>
                <SectionTitle 
                    title='Оформлення замовлення'/>
                <OrderForm />
            </div>
        </section>
    )
}

export default OrderindPage
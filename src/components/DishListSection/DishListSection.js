import React from 'react';
import { connect } from 'react-redux';

import DishList from '../DishList';
import SectionTitle from '../common/SectionTitle'

const DishListSection = ({ title, type, dishes }) => {

    const dishesType = dishes.filter(dish => dish.type === type)

    return (
        <section className='pt-[35px] pb-[50px] relative'>
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-section-grad"></span>
            <div className="container">
                <SectionTitle title={title} />
            </div>
            <DishList
                data={dishesType} />
        </section>
    )
}

const mapStateToProps = ({ dishes }) => ({ dishes })

export default connect(mapStateToProps)(DishListSection)
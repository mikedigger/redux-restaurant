import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import { connect } from 'react-redux';

import { withRestaurantService } from '../hoc';
import { dishesLoaded, loadAddToOrder } from '../../actions';
import { compose } from 'redux';


import {
    MainPage,
    CartPage,
    ProductCardPage,
    OrderindPage,
    DeliveryPage,
    DiscountPage
} from '../pages';

import Header from '../Header';
import Footer from '../Footer';


const App = ({ restaurantService, dishesLoaded, loadAddToOrder }) => {

    useEffect(() => {
        const fetchedDishes = restaurantService.getDishes();
        dishesLoaded(fetchedDishes);
        loadAddToOrder(fetchedDishes);
    }, []);


    return (
        <div className='h-screen flex flex-col'>
            <Header />
            <Routes>
                {/* <Route
                    path='/'
                    element={<MainPage />} />
                <Route
                    path='/cart'
                    element={<CartPage />} />
                <Route
                    path='/products/:id'
                    element={<ProductCardPage />} /> */}
                <Route
                    path='/'
                    // path='/ordering'
                    element={<OrderindPage />} />
                {/* <Route
                    path='/delivery'
                    element={<DeliveryPage />} />
                <Route
                    path='/discount'
                    element={<DiscountPage />} /> */}
            </Routes>
            <Footer />
        </div>
    )
}

const mapDispatchToProps = {
    dishesLoaded,
    loadAddToOrder
}

export default compose(
    withRestaurantService(),
    connect(null, mapDispatchToProps)
)(App);

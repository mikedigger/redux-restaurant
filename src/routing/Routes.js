import { Routes, Route } from 'react-router-dom';
import { routePath } from './routePath';

import {
    MainPage,
    CartPage,
    ProductCardPage,
    OrderindPage,
    ConditionsPage,
    PromotionPage
} from '../pages';

const { root, cart, product, order, conditions, promotion } = routePath;

const Routing = () => {
    return (
        <Routes>
            <Route
                path={root}
                element={<MainPage />} />
            <Route
                path={cart}
                element={<CartPage />} />

            <Route
                path={product}
                element={<ProductCardPage />} />

            <Route
                path={order}
                element={<OrderindPage />} />
            <Route
                path={conditions}
                element={<ConditionsPage />} />

            <Route
                path={promotion}
                element={<PromotionPage />} />
        </Routes>
    )
}

export default Routing;

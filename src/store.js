import { configureStore } from '@reduxjs/toolkit';

import cardsSliceReducer from './features/cards/cardsSlice';
import formReducer from './features/form/formSlice';
import accordionReducer from './features/accordion/accordionSlice';
import promotionReducer from './features/promotion/promotionSlice';

const store = configureStore({
    reducer: {
        cards: cardsSliceReducer,
        form: formReducer,
        accordion: accordionReducer,
        promotion: promotionReducer

    }
})

export default store;

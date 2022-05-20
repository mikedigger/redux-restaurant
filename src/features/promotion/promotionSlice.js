import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import RestaurantService from '../../services/restaurantService';

const fetchPromotion = createAsyncThunk(
    'promotion/fetchData',
    async () => {
        const restaurantService = new RestaurantService();
        return await restaurantService.getPromotionData()

    }
)

const promotionSlice = createSlice({
    name: 'promotion',
    initialState: {
        status: null,
        error: null,
        data: []
    },
    reducers: {},
    extraReducers: {
        [fetchPromotion.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [fetchPromotion.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.data = action.payload;
        },
        [fetchPromotion.rejected]: (state, error) => {
            state.status = 'error';
            state.error = error;
        },
    }
})

export {
    fetchPromotion
}

export default promotionSlice.reducer;
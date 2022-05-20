import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import RestaurantService from '../../services/restaurantService';

const fetchForm = createAsyncThunk(
    'form/fetchForm',
    async () => {
        const restaurantService = new RestaurantService();
        return await restaurantService.getForm();
    }
)

const formSlice = createSlice({
    name: 'form',
    initialState: {
        status: null,
        error: null,
        data: []
    },
    reducers: {

    },
    extraReducers: {
        [fetchForm.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [fetchForm.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.data = action.payload;
        },
        [fetchForm.rejected]: (state, error) => {
            state.status = 'error';
            state.error = error;
        },
    }
})

export { fetchForm };

export default formSlice.reducer;
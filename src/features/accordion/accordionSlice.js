import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import RestaurantService from '../../services/restaurantService';

const fetchAccordion = createAsyncThunk(
    'accordion/fetchData',
    async () => {
        const restaurantService = new RestaurantService();
        return await restaurantService.getAccordion();
    }
)

const accordionSlice = createSlice({
    name: 'accordion',
    initialState: {
        status: null,
        data: [],
        error: null
    },
    reducers: {
        openAccordionItem: (state, action) => {
            state.data.map(item => {
                if (item.id === action.payload) {
                    item.active = !item.active
                }
            })
        }
    },
    extraReducers: {
        [fetchAccordion.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [fetchAccordion.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.data = action.payload;
        },
        [fetchAccordion.rejected]: (state, error) => {
            state.status = 'error';
            state.error = error;
        },
    }
})

export {
    fetchAccordion
}

export const { openAccordionItem } = accordionSlice.actions;
export default accordionSlice.reducer;
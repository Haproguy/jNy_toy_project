import { configureStore } from '@reduxjs/toolkit';
import stationSlice from './slices/stationSlice';

const store = configureStore({
    reducer: {
        station: stationSlice.reducer,
    },
});

export default store;
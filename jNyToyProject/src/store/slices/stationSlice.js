import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    stationName: '',
    arrivalStation: []
};

const stationSlice = createSlice({
    name: "station",
    initialState,
    reducers: {
        recordName: (state, action) => {
            state.stationName = action.payload;
        },
        arrivalTrain: (state, action) => {
            state.arrivalStation = [...action.payload];
        }
    }
});

export default stationSlice;
export const { recordName, arrivalTrain } = stationSlice.actions;

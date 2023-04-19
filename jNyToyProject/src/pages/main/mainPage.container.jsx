import MainPageView from "./mainPage.presenter";
import { useState, useEffect, useRef } from "react";
import axios from 'axios';
import { useSelector, useDispatch } from "react-redux";
import { recordName, arrivalTrain } from "../../store/slices/stationSlice";
import { trainID } from "../../assets/funtions";

export default function MainPage() {
    const [arrival, setArrival] = useState('');
    const [json, setJson] = useState();
    const arrivalRef = useRef('');

    const dispatch = useDispatch();

    const Name = (stationName) => {
        dispatch(recordName(stationName));
    }
    const arri = (info) => {
        dispatch(arrivalTrain(info))
    }

    const recordingName = useSelector((state) => {
        return state.station.stationName;
    })

    const arrivingTrain = useSelector((state) => {
        return state.station.arrivalStation;
    })

    const arrivalClickHandler = async () => {
        const train = arrivalRef.current.value;
        Name(train);
        const res = await axios.post('http://localhost:8080/users', {
            arrival: train
        });

        const data = await JSON.parse(res.data);
        const realtimeData = data.realtimeArrivalList;
        try {
            arri(realtimeData);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <MainPageView
            arrivalClickHandler={arrivalClickHandler}
            arrivalRef={arrivalRef} />
    );
}
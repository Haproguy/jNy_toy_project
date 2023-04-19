import MainPageView from "./mainPage.presenter";
import { useState, useEffect, useRef } from "react";

export default function MainPage() {
    const [arrival, setArrival] = useState('');
    const [json, setJson] = useState();
    const arrivalRef = useRef('');
    const arrivalClickHandler = async () => {
        setArrival(arrivalRef.current.value);
        // const res = await fetch(`http://swopenAPI.seoul.go.kr/api/subway/4b6965764370726f32377250684c56/json/realtimeStationArrival/0/5/${arrival}`)
        // const data = res.json();
        const res = await axios.post('http://localhost:8080/users' , {
            arrival : arrival
        });
        const data = await res.json();

        try {
            setJson(data);
        } catch (error) {
            console.log(error);
        }
    }

    console.log(json);

    return (
        <MainPageView
            arrivalClickHandler={arrivalClickHandler}
            arrivalRef={arrivalRef} />
    );
}
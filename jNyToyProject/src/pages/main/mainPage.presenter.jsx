import { useSelector } from "react-redux";
import { trainID } from "../../assets/funtions";

export default function MainPageView(props) {
    const { arrivalClickHandler, arrivalRef } = props;

    const recordingName = useSelector((state) => {
        return state.station.stationName;
    })

    const arrivingTrain = useSelector((state) => {
        return state.station.arrivalStation;
    })

    return (
        <div>
            <input type="text" ref={arrivalRef} />
            <button onClick={arrivalClickHandler}>click</button>
            {recordingName && <h2>{recordingName}역 도착정보</h2>}
            {recordingName && arrivingTrain.map(data => {
                return (
                    <>
                        <h3>{data.trainLineNm}</h3>
                        <div>{trainID(+data.subwayId)}</div>
                        <div>{data.arvlMsg2}</div>
                        <div>종착역 : {data.bstatnNm}</div>
                    </>
                );
            })}
        </div>
    );
}
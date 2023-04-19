export default function MainPageView(props) {
    const { arrivalClickHandler, arrivalRef } = props;

    return (
        <div>
            <input type="text" ref={arrivalRef} />
            <button onClick={arrivalClickHandler}>click</button>
        </div>
    );
}
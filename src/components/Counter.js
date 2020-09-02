import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../static/Counter.css";

const Counter = (props) => {
    // static methods
    // const handleBreakDecrease = () => {
    //     updateBreakCount(props.time - 1);
    // };
    // const handleBreakIncrease = () => {
    //     updateBreakCount(props.time + 1);
    // };
    let minus_button_id;
    let plus_button_id;
    let time_id;
    if (props.title === "Break Length") {
        minus_button_id = "break-decrement";
        plus_button_id = "break-increment";
        time_id = "break-length";
    } else {
        minus_button_id = "session-decrement";
        plus_button_id = "session-increment";
        time_id = "session-length";
    }
    return (
        <div className="timer-container">
            <h3>{props.title}</h3>
            <div className="controls">
                <button
                    id={minus_button_id}
                    title={props.title}
                    updatecount="minus"
                    onClick={props.onClick}
                >
                    <FontAwesomeIcon
                        className="control-icon"
                        icon="minus"
                    />
                </button>
                <span id={time_id}>{props.time}</span>
                <button
                    id={plus_button_id}
                    title={props.title}
                    updatecount="plus"
                    onClick={props.onClick}
                >
                    <FontAwesomeIcon
                        className="control-icon"
                        icon="plus"
                    />
                </button>
            </div>
        </div>
    );
};

export default Counter;

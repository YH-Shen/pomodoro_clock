import React, { useState } from "react";

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

    return (
        <div className="timer-container">
            <h3>{props.title}</h3>
            <div className="controls">
                <button
                    title={props.title}
                    updateCount="minus"
                    onClick={props.onClick}
                >
                    <FontAwesomeIcon
                        className="control-icon"
                        icon="minus"
                    />
                </button>
                <span>{props.time}</span>
                <button
                    title={props.title}
                    updateCount="plus"
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

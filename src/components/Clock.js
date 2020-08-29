import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../static/Clock.css";

const Clock = (props) => {
    return (
        <div className="clock-container">
            <h1>{props.current}</h1>
            <span>{props.time}</span>
            <div className="controls">
                <button
                // title={props.title}
                // updateCount="minus"
                // onClick={props.handlePlayPause}
                >
                    <FontAwesomeIcon
                        className="control-icon"
                        icon="play"
                    />
                </button>

                <button
                // title={props.title}
                // updateCount="plus"
                // onClick={props.onClick}
                >
                    <FontAwesomeIcon
                        className="control-icon"
                        icon="sync-alt"
                    />
                </button>
            </div>
        </div>
    );
};

export default Clock;

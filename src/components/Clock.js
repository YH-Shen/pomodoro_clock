import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Music from "./Music";

import "../static/Clock.css";
const convertToTime = (timeCount) => {
    // take the time count (25*60)
    // convert to minutes and seconds
    let minutes = Math.floor(timeCount / 60);
    let seconds = timeCount % 60;
    seconds = seconds > 9 ? seconds : "0" + seconds;
    // console.log(`${minutes}:${seconds}`);
    return `${minutes}:${seconds}`;
};

const Clock = (props) => {
    // ==============================================================
    //  initialization
    // ==============================================================
    const { sessionCount, breakCount } = props;

    const [isPlaying, updateIsPlaying] = useState(false);
    const [timeCount, updateTimeCount] = useState(sessionCount * 60);
    const [currentTimer, updateCurrentTimer] = useState("Session");

    let loop;
    // ==============================================================
    //  hooks
    // ==============================================================

    useEffect(() => {
        const returningCallback = () => {
            clearInterval(loop);
        };
        // Playing
        if (!isPlaying) {
            clearInterval(loop);
            return returningCallback;
        }

        // Not Playing
        const timeOut = timeCount === 0;
        if (timeOut) {
            updateCurrentTimer(
                currentTimer === "Session" ? "Break" : "Session"
            );
            updateTimeCount(
                currentTimer === "Session"
                    ? breakCount * 60
                    : sessionCount * 60
            );
        } else {
            // setInterval
            loop = setInterval(() => {
                // update timeCount
                updateTimeCount((t) => t - 1);
            }, 1000);
        }
        return returningCallback;
    }, [isPlaying, timeCount]);

    useEffect(() => {
        updateTimeCount(sessionCount * 60);
    }, [sessionCount]);

    const handlePlayPause = () => {
        // console.log("play pause");
        // console.log("isPlaying", isPlaying);
        console.log(currentTimer);

        updateIsPlaying(!isPlaying);
    };

    const handleReset = () => {
        updateTimeCount(
            currentTimer === "Session"
                ? sessionCount * 60
                : breakCount * 60
        );
    };

    return (
        <div className="clock-container">
            <h1>{currentTimer}</h1>
            <span>{convertToTime(timeCount)}</span>
            <div>{Music()}</div>
            <div className="controls">
                <button
                    // title={props.title}
                    // updateCount="minus"
                    onClick={handlePlayPause}
                >
                    <FontAwesomeIcon
                        className="control-icon"
                        icon={isPlaying ? "pause" : "play"}
                    />
                </button>

                <button
                    // title={props.title}
                    // updateCount="plus"
                    onClick={handleReset}
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

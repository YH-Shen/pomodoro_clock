import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
    const [isPlaying, updateIsPlaying] = useState(false);
    const [timeCount, updateTimeCount] = useState(25 * 60);
    const [currentSession, updateCurrentSession] = useState(
        "Session"
    );
    const [breakCount, updateBreakCount] = useState(5);
    const [sessionCount, updateSessionCount] = useState(25);

    let loop;
    const handlePlayPause = () => {
        // console.log("play pause");
        // console.log("isPlaying", isPlaying);
        console.log(currentSession);

        updateIsPlaying(!isPlaying);
    };

    useEffect(() => {
        if (!isPlaying) {
            // clearInterval
            // updateIsPlaying(false);
            clearInterval(loop);
            // updateIsPlaying(true);
        } else {
            if (timeCount === 0) {
                updateCurrentSession(
                    currentSession === "Session" ? "Break" : "Session"
                );
                updateTimeCount(
                    currentSession === "Session"
                        ? breakCount * 60
                        : sessionCount * 60
                );
            } else {
                // setInterval
                // update timeCount
                // console.log("setinterval", timeCount);
                loop = setInterval(() => {
                    updateTimeCount((t) => t - 1);
                    // console.log("interval", timeCount);
                }, 1000);
            }
        }
        return () => {
            clearInterval(loop);
        };
    }, [isPlaying, timeCount]);

    return (
        <div className="clock-container">
            <h1>{currentSession}</h1>
            <span>{convertToTime(timeCount)}</span>
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

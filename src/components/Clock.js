import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../static/Clock.css";

const Clock = (props) => {
    // ==============================================================
    //  initialization
    // ==============================================================
    const { sessionCount, breakCount } = props;
    const secondsInAMinute = 60;

    const [isPlaying, updateIsPlaying] = useState(false);
    const [timeCount, updateTimeCount] = useState(
        sessionCount * secondsInAMinute
    );
    const [currentTimer, updateCurrentTimer] = useState("Session");

    let loop;
    // ==============================================================
    //  helpers
    // ==============================================================

    const convertToTime = (timeCount) => {
        // take the time count (25*secondsInAMinute)
        // convert to minutes and seconds
        let minutes = Math.floor(timeCount / secondsInAMinute);
        let seconds = timeCount % secondsInAMinute;
        seconds = seconds > 9 ? seconds : "0" + seconds;
        // console.log(`${minutes}:${seconds}`);
        return `${minutes}:${seconds}`;
    };

    const musicPlayPause = (status) => {
        let beep = document.getElementById("audio");
        if (status === "play") return beep.play();
        // if reset
        beep.currentTimer = 0;
        return beep.pause();
    };

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
                    ? breakCount * secondsInAMinute
                    : sessionCount * secondsInAMinute
            );
            // Music("play");
            musicPlayPause("play");
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
        updateTimeCount(sessionCount * secondsInAMinute);
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
                ? sessionCount * secondsInAMinute
                : breakCount * secondsInAMinute
        );
        // Music("reset");
        musicPlayPause("reset");
    };

    return (
        <div className="clock-container">
            <h1>{currentTimer}</h1>
            <span>{convertToTime(timeCount)}</span>
            {/* <div>{Music()}</div> */}
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

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

    let loop;
    const handlePlayPause = () => {
        console.log("play pause");
        console.log("isPlaying", isPlaying);
        updateIsPlaying(!isPlaying);
    };
    useEffect(() => {
        if (isPlaying) {
            // clearInterval
            // updateIsPlaying(false);
            clearInterval(loop);
            // updateIsPlaying(true);
        } else {
            // setInterval
            // update timeCount
            console.log("setinterval", timeCount);

            loop = setInterval(() => {
                updateTimeCount((t) => t - 1);
                console.log("interval", timeCount);
            }, 1000);
        }
        return () => {
            clearInterval(loop);
        };
        // console.log("clear");
    }, [isPlaying, timeCount]);

    // const handlePlayPause = () => {
    //     // console.log(timeCount, "isPlaying: ", isPlaying);
    //     // updateIsPlaying(!isPlaying);

    //     if (isPlaying) {
    //         updateIsPlaying(false);
    //         // updateIsPlaying((isPlaying) => false);
    //         clearInterval(loop);

    //         console.log(timeCount, "isPlaying: ", isPlaying);
    //     } else if (!isPlaying) {
    //         loop = setInterval(() => {
    //             // updateTimeCount(timeCount - 1);
    //             updateTimeCount((timeCount) => timeCount - 1);

    //             console.log(timeCount, "isPlaying: ", isPlaying);
    //         }, 1000);
    //         updateIsPlaying(true);
    //         // updateIsPlaying((isPlaying) => true);
    //     }
    // };

    // useEffect(() => {

    // });

    return (
        <div className="clock-container">
            <h1>{props.currentSession}</h1>
            <span>{convertToTime(timeCount)}</span>
            <div className="controls">
                <button
                    // title={props.title}
                    // updateCount="minus"
                    onClick={handlePlayPause}
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

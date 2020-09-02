import React, { useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
// import { fab } from "@fortawesome/free-brands-svg-icons";
import {
    faMinus,
    faPlus,
    faPlay,
    faPause,
    faSyncAlt,
} from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Counter from "./components/Counter";
import Clock from "./components/Clock";
import Music from "./components/Music";

import "./App.css";

library.add(faMinus, faPlus, faPlay, faPause, faSyncAlt);

function App() {
    // state init
    const [breakCount, updateBreakCount] = useState(5);
    const [sessionCount, updateSessionCount] = useState(25);

    // const [clockCount, updateClockCount] = useState(25 * 60);
    const [currentTimer] = useState("Session");
    const handleClearCount = () => {
        updateBreakCount(5);
        updateSessionCount(25);
    };

    const handleClick = (e) => {
        // extract component name and button name from e: e.g.: break + plus

        let update = e.target.getAttribute("updatecount");
        let title = e.target.getAttribute("title");

        // update breakCount or sessionCount accordingly
        let operand = update === "plus" ? 1 : -1;
        // breakCount or sessionCount cannot be below 0 or above 60
        if (
            (title === "Break Length" &&
                (breakCount + operand === 0 ||
                    breakCount + operand === 61)) ||
            (title === "Session Length" &&
                (sessionCount + operand === 0 ||
                    sessionCount + operand === 61))
        )
            return;

        title === "Break Length"
            ? updateBreakCount(breakCount + operand)
            : updateSessionCount(sessionCount + operand);
    };

    const breakProps = {
        title: "Break Length",
        time: breakCount,
        onClick: handleClick,
    };
    const sessionProps = {
        title: "Session Length",
        time: sessionCount,
        onClick: handleClick,
    };
    const clockProps = {
        time: "",
        currentSession: currentTimer,
        isPlaying: false,
        breakCount: breakCount,
        sessionCount: sessionCount,
        onClearCount: handleClearCount,
        // loop: undefined,
    };

    return (
        <div className="App">
            <h1>Pomodoro Timer</h1>

            <div className="Counters">
                <div id="break-label">
                    {Counter({ ...breakProps })}
                </div>
                <div id="session-label">
                    {Counter({ ...sessionProps })}
                </div>
            </div>
            {Music()}
            <div className="Clock">{Clock({ ...clockProps })}</div>

            {/* <footer>Designed by meeeee</footer> */}
        </div>
    );
}

export default App;

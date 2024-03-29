import React, { useState } from "react";

// import { connect } from "react-redux";

import Counter from "./components/Counter";
import Clock from "./components/Clock";
import Music from "./components/Music";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";

import "./App.css";

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faMinus,
    faPlus,
    faPlay,
    faPause,
    faSyncAlt,
    faCheck,
    faTrash,
    faClock,
    faListUl,
    faPlusSquare,
    faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
// import { faPlusSquare } from "@fortawesome/free-regular-svg-icons";
library.add(
    faMinus,
    faPlus,
    faPlay,
    faPause,
    faSyncAlt,
    faPlusSquare,
    faCheck,
    faTrash,
    faClock,
    faListUl,
    faChevronDown
);

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
        <Router>
            <div>
                <Switch>
                    <Route path="/toDoList">
                        <Header />
                        {/* {ToDoList()} */}
                        <ToDoList className="ToDoList" />
                    </Route>

                    <Route path="/">
                        <Header />

                        <div className="App">
                            <div className="body">
                                <div className="Counters">
                                    <h2>Pomodoro Timer</h2>
                                    <div id="break-label">
                                        {Counter({ ...breakProps })}
                                    </div>
                                    <div id="session-label">
                                        {Counter({ ...sessionProps })}
                                    </div>
                                </div>
                                <div className="Clock">
                                    {Clock({ ...clockProps })}
                                </div>
                            </div>

                            {/* {Music()} */}
                            <Music />

                            {/* <footer>Designed by meeeee</footer> */}
                        </div>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;

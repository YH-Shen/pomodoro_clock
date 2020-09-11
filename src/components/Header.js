import React from "react";
import { Link } from "react-router-dom";
import "../static/Header.css";

const Header = (props) => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Pomodoro Timer</Link>
                    </li>
                    <li>
                        <Link to="/toDoList">To-Do List</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Header;

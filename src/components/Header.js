import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../static/Header.css";

const Header = (props) => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">
                            <div>
                                <FontAwesomeIcon
                                    icon="clock"
                                    size="2x"
                                />
                                <br />
                                Pomodoro Timer
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/toDoList">
                            <div>
                                <FontAwesomeIcon
                                    icon="list-ul"
                                    size="2x"
                                />
                                <br />
                                To-Do List
                            </div>
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Header;

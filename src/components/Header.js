import React from "react";
import { Link } from "react-router-dom";
const Header = (props) => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
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

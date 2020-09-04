import React from "react";
import Form from "./Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faPlusSquare } from "@fortawesome/free-regular-svg-icons";

const ToDoList = (props) => {
    return (
        <>
            <span>To-Do List Works</span>
            {Form()}
        </>
    );
};

export default ToDoList;

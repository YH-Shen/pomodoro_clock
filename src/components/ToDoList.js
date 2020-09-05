import React, { useState } from "react";
import Form from "./Form";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import { faPlusSquare } from "@fortawesome/free-regular-svg-icons";

const ToDoList = (props) => {
    const [inputText, updateInputText] = useState("");
    const [todos, setTodos] = useState([]);
    return (
        <>
            <span>To-Do List Works</span>
            <Form
                inputText={inputText}
                todos={todos}
                setTodos={setTodos}
                updateInputText={updateInputText}
            />
            <div className="todo-container">
                <ul className="todo-list"></ul>
            </div>
        </>
    );
};

export default ToDoList;

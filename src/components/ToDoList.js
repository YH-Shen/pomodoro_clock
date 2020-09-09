import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Form from "./Form";
import VisibilityFilters from "./VisibilityFilters";
import { getTodosByVisibilityFilter } from "../redux/selectors";

import Todo from "./Todo";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import { faPlusSquare } from "@fortawesome/free-regular-svg-icons";

const ToDoList = ({ todos }) => {
    // Hooks
    const [inputText, updateInputText] = useState("");
    // const [todos, updateTodos] = useState([]);
    const [status, updateStatus] = useState("all");
    const [filteredTodos, setFilteredTodos] = useState([]);

    // run once when app starts
    // useEffect(() => {
    //     getLocalTodos();
    // }, []);

    // useEffect
    // useEffect(() => {
    //     const filterHandler = () => {
    //         switch (status) {
    //             case "completed":
    //                 setFilteredTodos(
    //                     todos.filter((todo) => todo.completed)
    //                 );
    //                 break;
    //             case "uncompleted":
    //                 setFilteredTodos(
    //                     todos.filter((todo) => !todo.completed)
    //                 );
    //                 break;
    //             default:
    //                 setFilteredTodos(todos);
    //         }
    //     };

    // // Save todos to local
    // const saveLocalTodos = () => {
    //     localStorage.setItem("todos", JSON.stringify(todos));
    // };

    //     filterHandler();
    //     // saveLocalTodos();
    // }, [todos, status]);
    // Save to local

    // const getLocalTodos = () => {
    //     if (localStorage.getItem("todos") === null) {
    //         localStorage.setItem("todos", JSON.stringify([]));
    //     } else {
    //         let todoLocal = JSON.parse(localStorage.getItem("todos"));
    //         updateTodos(todoLocal);
    //     }
    // };
    console.log(todos);
    return (
        <>
            <h1>To-Do List</h1>
            <Form
            // inputText={inputText}
            // todos={todos}
            // updateTodos={updateTodos}
            // updateInputText={updateInputText}
            // updateStatus={updateStatus}
            />
            <VisibilityFilters />
            <div className="todo-container">
                <ul className="todo-list">
                    {todos.map((todo) => (
                        <Todo
                            text={todo.content}
                            key={todo.id}
                            todo={todo}
                            // todos={todos}
                            // updateTodos={updateTodos}
                        />
                    ))}
                </ul>
            </div>
        </>
    );
};

const mapStateToProps = (state) => {
    const { visibilityFilter } = state;
    const todos = getTodosByVisibilityFilter(state, visibilityFilter);
    // Destructure
    // const { todos, visibilityFilter } = state;

    return { todos };
};

export default connect(mapStateToProps)(ToDoList);

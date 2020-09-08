import React, { useState, useEffect } from "react";
import Form from "./Form";
import Todo from "./Todo";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import { faPlusSquare } from "@fortawesome/free-regular-svg-icons";

const ToDoList = (props) => {
    // Hooks
    const [inputText, updateInputText] = useState("");
    const [todos, updateTodos] = useState([]);
    const [status, updateStatus] = useState("all");
    const [filteredTodos, setFilteredTodos] = useState([]);

    // run once when app starts
    // useEffect(() => {
    //     getLocalTodos();
    // }, []);

    // useEffect
    useEffect(() => {
        const filterHandler = () => {
            switch (status) {
                case "completed":
                    setFilteredTodos(
                        todos.filter((todo) => todo.completed)
                    );
                    break;
                case "uncompleted":
                    setFilteredTodos(
                        todos.filter((todo) => !todo.completed)
                    );
                    break;
                default:
                    setFilteredTodos(todos);
            }
        };

        // // Save todos to local
        // const saveLocalTodos = () => {
        //     localStorage.setItem("todos", JSON.stringify(todos));
        // };

        filterHandler();
        // saveLocalTodos();
    }, [todos, status]);
    // Save to local

    const getLocalTodos = () => {
        if (localStorage.getItem("todos") === null) {
            localStorage.setItem("todos", JSON.stringify([]));
        } else {
            let todoLocal = JSON.parse(localStorage.getItem("todos"));
            updateTodos(todoLocal);
        }
    };
    return (
        <>
            <h1>To-Do List</h1>
            <Form
                inputText={inputText}
                todos={todos}
                updateTodos={updateTodos}
                updateInputText={updateInputText}
                updateStatus={updateStatus}
            />
            <div className="todo-container">
                <ul className="todo-list">
                    {filteredTodos.map((todo) => (
                        <Todo
                            text={todo.text}
                            key={todo.id}
                            todo={todo}
                            todos={todos}
                            updateTodos={updateTodos}
                        />
                    ))}
                </ul>
            </div>
        </>
    );
};

// const mapStateToProps = (state) => {
//     // const { visibilityFilter } = state;
//     // const todos = getTodosByVisibilityFilter(state, visibilityFilter);
//     const
//     return { todos };
// };

export default ToDoList;

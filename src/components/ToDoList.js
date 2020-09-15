import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Form from "./Form";
import VisibilityFilters from "./VisibilityFilters";
import { getTodosByVisibilityFilter } from "../redux/selectors";
import { addTodo } from "../redux/actions.js";

import axios from "axios";
import Todo from "./Todo";
import "../static/ToDoList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import { faPlusSquare } from "@fortawesome/free-regular-svg-icons";

const ToDoList = ({ todos, addTodo }) => {
    // Hooks
    // const [inputText, updateInputText] = useState("");
    // const [todos, updateTodos] = useState([]);
    // const [status, updateStatus] = useState("all");
    // const [filteredTodos, setFilteredTodos] = useState([]);

    // run once when app starts
    // useEffect(() => {
    //     // getLocalTodos();
    //     console.log("only runs once when app starts");
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

    // Save todos to local
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
    // console.log(todos);
    // setup interceptor for axios
    axios.interceptors.response.use(
        (response) => {
            // console.log(response.data);
            response.data.forEach((todo) => {
                todo.title = todo.title.substring(0, 23);
            });

            return response;
        },
        (error) => {
            return Promise.reject(error);
        }
    );

    // run once when app starts
    useEffect(() => {
        // getLocalTodos();

        console.log(todos.length);
        if (todos.length === 0) {
            axios
                .get(
                    "https://jsonplaceholder.typicode.com/todos?_limit=3"
                )
                .then((res) =>
                    res.data.forEach((todo) => {
                        addTodo(todo.title);
                        // console.log(todo.title);
                    })
                );
        }
    }, []);
    return (
        <div className="Todo-List-Main">
            <h1>To-Do List</h1>
            <div className="input-container">
                <Form />
                <VisibilityFilters />
                <div id="select-down">
                    <FontAwesomeIcon icon="chevron-down" />
                </div>
            </div>

            <div className="todo-container">
                <ul className="todo-list">
                    {todos.map((todo) => (
                        <Todo
                            text={todo.content}
                            key={todo.id}
                            todo={todo}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    const { visibilityFilter } = state;
    const todos = getTodosByVisibilityFilter(state, visibilityFilter);
    // Destructure
    // const { todos, visibilityFilter } = state;
    // console.log(todos);
    return { todos };
};

export default connect(mapStateToProps, { addTodo })(ToDoList);

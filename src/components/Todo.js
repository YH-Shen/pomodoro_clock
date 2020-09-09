import React from "react";
import { connect } from "react-redux";
import { toggleTodo } from "../redux/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../static/Todo.css";

const Todo = ({ todo, toggleTodo }) => {
    // const { text, updateTodos, todo, todos } = props;
    // // Events
    // const deleteHandler = () => {
    //     updateTodos(todos.filter((el) => el.id !== todo.id));
    //     // console.log(todo);
    // };
    // const completeHandler = () => {
    //     updateTodos(
    //         todos.map((item) => {
    //             if (item.id === todo.id)
    //                 return {
    //                     ...item,
    //                     completed: !item.completed,
    //                 };
    //             return item;
    //         })
    //     );
    // };
    // const completeHandler = (id, togggleTodo) => {
    //     toggleTodo(id);
    // };
    return (
        <>
            <div className="Todo">
                <li
                    className={`todo-item ${
                        todo.completed ? "completed" : ""
                    }`}
                >
                    {todo.content}
                </li>
                <button
                    onClick={() => toggleTodo(todo.id)}
                    className="complete-btn"
                >
                    <FontAwesomeIcon icon="check" />
                </button>
                <button
                    // onClick={deleteHandler}
                    className="trash-btn"
                >
                    <FontAwesomeIcon icon="trash" />
                </button>
            </div>
        </>
    );
};
export default connect(null, { toggleTodo })(Todo);

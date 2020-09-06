import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../static/Todo.css";

const Todo = (props) => {
    const { text, updateTodos, todo, todos } = props;
    // Events
    const deleteHandler = () => {
        updateTodos(todos.filter((el) => el.id !== todo.id));
        // console.log(todo);
    };
    const completeHandler = () => {
        updateTodos(
            todos.map((item) => {
                if (item.id === todo.id)
                    return {
                        ...item,
                        completed: !item.completed,
                    };
                return item;
            })
        );
    };
    return (
        <>
            <div className="Todo">
                <li
                    className={`todo-item ${
                        todo.completed ? "completed" : ""
                    }`}
                >
                    {text}
                </li>
                <button
                    onClick={completeHandler}
                    className="complete-btn"
                >
                    <FontAwesomeIcon icon="check" />
                </button>
                <button onClick={deleteHandler} className="trash-btn">
                    <FontAwesomeIcon icon="trash" />
                </button>
            </div>
        </>
    );
};
export default Todo;

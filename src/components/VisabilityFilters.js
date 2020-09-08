import React from "react";
import { connect } from "react-redux";
import ToDoList from "./ToDoList";

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case "SHOW_ALL":
            return todos;
        case "SHOW_COMPLETED":
            return todos.filter((task) => task.completed);
        case "SHOW_UNCOMPLETED":
            return todos.filter((task) => !task.completed);
        default:
            throw new Error("Unknown Filter" + filter);
    }
};

const mapStatetoProps = (state) => ({
    todos: getVisibleTodos(state.todos, state.visibilityFilter),
});

export default connect(mapStatetoProps)(ToDoList);

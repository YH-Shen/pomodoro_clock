import React from "react";
import { connect } from "react-redux";
import ToDoList from "./ToDoList";
import { setFilter } from "../redux/actions";

// const statusHandler = (e) => {
//     // console.log(e.target.value);
//     updateStatus(e.target.value);
// };
const statusHandler = (e, setFilter) => {
    setFilter(e.target.value);
};
const VisibilityFilters = ({ setFilter }) => {
    return (
        <div className="select">
            <select
                name="todos"
                className="filter-todo"
                onChange={(event) => {
                    statusHandler(event, setFilter);
                }}
            >
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
            </select>
        </div>
    );
};

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case "SHOW_COMPLETED":
            return todos.filter((task) => task.completed);
        case "SHOW_UNCOMPLETED":
            return todos.filter((task) => !task.completed);
        case "SHOW_ALL":
        default:
            return todos;
    }
};

const mapStatetoProps = (state) => ({
    // todos: getVisibleTodos(state.todos, state.visibilityFilter),
    activeFilter: state.visibilityFilter,
});

export default connect(mapStatetoProps, { setFilter })(
    VisibilityFilters
);

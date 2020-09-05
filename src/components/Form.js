import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Form = (props) => {
    const { updateInputText, todos, setTodos, inputText } = props;
    const getTodo = () => {
        return document.getElementById("todo-input").value;
    };
    const inputTextHandler = (e) => {
        e.preventDefault();
        // get input text
        let todo = getTodo();
        // update input text to todos
        updateInputText(todo);
        setTodos([...todos, { text: todo, completed: false }]);
        // clear input field
        updateInputText("");
        document.getElementById("todo-input").value = "";
    };
    return (
        <form>
            <input type="text" id="todo-input" />
            <button
                className="todo-button"
                type="submit"
                onClick={inputTextHandler}
            >
                {/* <FontAwesomeIcon icon="coffe" /> */}
                <FontAwesomeIcon
                    icon={["far", "plus-square"]}
                    size="2x"
                />
            </button>
            <div className="select">
                <select name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
};

export default Form;

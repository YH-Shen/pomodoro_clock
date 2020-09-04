import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faPlusSquare } from "@fortawesome/free-regular-svg-icons";

const Form = (props) => {
    return (
        <form>
            <input type="text" className="todo-input" />
            <button className="todo-button" type="submit">
                <FontAwesomeIcon icon="coffee" />
                {/* <FontAwesomeIcon icon={["far", "plus-square"]} /> */}
            </button>
        </form>
    );
};

export default Form;

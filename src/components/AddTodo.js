import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../redux/actions.js";

const Addtodo = () => {
    return <div></div>;
};

export default connect(null, { addTodo })(Addtodo);

import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import TodoForm from "./TodoForm";

import { createTodo } from "../../actions";
import { render } from "@testing-library/react";

class CreateTodo extends Component {
  onSubmit = (formValues) => {
    this.props.createTodo(formValues);
  };

  render() {
    return (
      <div>
        <h3>Todo Create</h3>
        <TodoForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

const wrapped = reduxForm({
  form: "todosCreate",
})(CreateTodo);

export default connect(null, { createTodo })(wrapped);

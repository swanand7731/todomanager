import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchTodos, editTodo } from "../../actions";
import TodoForm from "./TodoForm";
import _ from "lodash";

class EditTodo extends Component {
  componentDidMount() {
    this.props.fetchTodos();
  }

  onSubmit = (formValues) => {
    console.log(formValues);
    this.props.editTodo(formValues, this.props.match.params.id);
  };

  render() {
    return (
      <div>
        <h3>Edit Todo</h3>
        <TodoForm
          onSubmit={this.onSubmit}
          initialValues={_.pick(
            this.props.todo,
            "title",
            "description",
            "complete"
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    todo: state.todos[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, { fetchTodos, editTodo })(EditTodo);

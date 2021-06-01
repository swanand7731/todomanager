import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchTodos } from "../../actions";

class TodoList extends Component {
  componentDidMount() {
    this.props.fetchTodos();
  }

  renderList() {
    if (!this.props.todos) {
      return <div>Loading...</div>;
    }

    return this.props.todos.map((todo) => {
      return (
        <li key={todo.id} className="list-group-item">
          <h3>{todo.title}</h3>
          <p>{todo.description}</p>
          <input
            type="checkbox"
            className="form-check-input me-1"
            checked={todo.complete}
            disabled
          />
          <div
            className="btn-group float-end"
            aria-label="btn group"
            role="group"
          >
            <Link to={`/todos/edit/${todo.id}`} className="btn btn-primary">
              Edit
            </Link>
            <Link to={`/todos/delete/${todo.id}`} className="btn btn-danger">
              Delete
            </Link>
          </div>
        </li>
      );
    });
  }

  render() {
    console.log(this.props.todos);
    return (
      <div>
        <h1>TodoList</h1>
        <hr />
        <ul className="list-group">{this.renderList()}</ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: Object.values(state.todos),
  };
};
export default connect(mapStateToProps, { fetchTodos })(TodoList);

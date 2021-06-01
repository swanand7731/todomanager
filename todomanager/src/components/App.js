import React from "react";
import { Router, Route } from "react-router-dom";
import CreateTodo from "./todos/CreateTodo";
import EditTodo from "./todos/EditTodo";
import TodoList from "./todos/TodoList";
import DeleteTodo from "./todos/DeleteTodo";
import history from "../history";
const App = () => {
  return (
    <div className="container-fluid">
      <Router history={history}>
        <div>
          <Route path="/" exact component={TodoList} />
          <Route path="/todos/new" component={CreateTodo} />
          <Route path="/todos/edit/:id" component={EditTodo} />
          <Route path="/todos/delete/:id" component={DeleteTodo} />
        </div>
      </Router>
    </div>
  );
};

export default App;

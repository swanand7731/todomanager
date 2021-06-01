import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import todosReducer from "./todosReducer";

export default combineReducers({
  form: formReducer,
  todos: todosReducer,
});

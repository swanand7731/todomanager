import {
  CREATE_TODO,
  EDIT_TODO,
  FETCH_TODOS,
  FETCH_TODO,
  DELETE_TODO,
} from "./types";
import history from "../history";
import todosApi from "../api/todos";

export const createTodo = (formValues) => async (dispatch) => {
  const response = await todosApi.post("/todos", formValues);
  console.log(response);
  dispatch({ type: CREATE_TODO, payload: response.data });
  history.push("/");
};

export const fetchTodos = () => async (dispatch) => {
  const response = await todosApi.get("/todos");
  dispatch({ type: FETCH_TODOS, payload: response.data });
};

export const fetchTodo = (id) => async (dispatch) => {
  const response = await todosApi.get(`/todos/${id}`);
  dispatch({ type: FETCH_TODO, payload: response.data });
};

export const editTodo = (formValues, id) => async (dispatch) => {
  const response = await todosApi.patch(`/todos/${id}`, formValues);
  dispatch({ type: EDIT_TODO, payload: response.data });
  history.push("/");
};

export const deleteTodo = (id) => async (dispatch) => {
  const response = await todosApi.delete(`/todos/${id}`);
  dispatch({ type: DELETE_TODO, payload: response.data });
};

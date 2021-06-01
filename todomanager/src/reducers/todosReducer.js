import _ from "lodash";
import {
  CREATE_TODO,
  EDIT_TODO,
  FETCH_TODOS,
  FETCH_TODO,
  DELETE_TODO,
} from "../actions/types";

const todosReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_TODO:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case FETCH_TODOS:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    default:
      return state;
  }
};

export default todosReducer;

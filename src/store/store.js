import { createStore } from "redux";
import { createAction, createReducer } from "@reduxjs/toolkit";

const addToDo = createAction("ADD");
const deleteToDo = createAction("DELETE");

// Redux toolkit + Immer => Available mutate
// mutable OR new state
// return 할때는 새로운 state여야 한다.
const reducer = createReducer([], {
  [addToDo]: (state, action) => {
    state.push({ text: action.payload.text, id: action.payload.id });
  },
  [deleteToDo]: (state, action) => {
    return state.filter((toDo) => toDo.id !== action.payload);
  },
});

const store = createStore(reducer);

export const actionCreators = {
  addToDo,
  deleteToDo,
};

export default store;

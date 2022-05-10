import { createStore } from "redux";

const ADD = "ADD";
const DELETE = "DELETE";

const addToDo = (text) => {
  return {
    type: ADD,
    id: Date.now(),
    text,
  };
};

const deleteToDo = (id) => {
  return {
    type: DELETE,
    id: parseInt(id),
  };
};

JSON.parse(localStorage.getItem("toDos")) || localStorage.setItem("toDos", JSON.stringify([]));

const reducer = (state = JSON.parse(localStorage.getItem("toDos")), action) => {
  switch (action.type) {
    case ADD:
      const addItem = [{ text: action.text, id: action.id }, ...state];
      localStorage.setItem("toDos", JSON.stringify(addItem));
      return addItem;
    case DELETE:
      const delItem = state.filter((toDo) => toDo.id !== action.id);
      localStorage.setItem("toDos", JSON.stringify(delItem));
      return delItem;
    default:
      return state;
  }
};

const store = createStore(reducer);

export const actionCreators = {
  addToDo,
  deleteToDo,
};

export default store;

import { createStore } from "redux";

const plus = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const countModifier = (state = 0) => {
  return state;
};

const countStore = createStore(countModifier);

// store: data 를 담는 저장소
// state: 변하는 data
// reducer: data 를 modify 하는 function
console.log(countStore); // {dispatch: ƒ, subscribe: ƒ, getState: ƒ, replaceReducer: ƒ, @@observable: ƒ}
console.log(countStore.getState()); // 0

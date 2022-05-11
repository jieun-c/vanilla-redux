import { useState } from "react";
import { connect } from "react-redux";
import ToDo from "../components/todo";
import { add } from "../store/store";

const Home = ({ toDos, addToDo, ...rest }) => {
  const [text, setText] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    const id = Date.now();
    addToDo(text, id);
    setText("");
  };

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        <button>ADD</button>
      </form>
      <ul>
        {toDos.map((toDo, idx) => (
          <ToDo {...toDo} key={idx} />
        ))}
      </ul>
    </>
  );
};

// vanilla 에서 사용했던 getState() 대신에
// react 에서는 mapStateToProps 를 사용했다.
function mapStateToProps(state) {
  return { toDos: state };
}

function mapDispatchToProps(dispatch) {
  return {
    addToDo: (text, id) => dispatch(add({ text, id })),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

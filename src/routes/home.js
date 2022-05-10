import { useState } from "react";
import { connect } from "react-redux";
import ToDo from "../components/todo";
import { actionCreators } from "../store/store";

const Home = ({ toDos, addToDo, ...rest }) => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    addToDo(text);
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
        {toDos.map((toDo) => (
          <ToDo {...toDo} key={toDo.id} />
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

function mapDispatchToProps(dispatch, ownProps) {
  return {
    addToDo: (text) => dispatch(actionCreators.addToDo(text)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

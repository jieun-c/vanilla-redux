import { useState } from "react";
import { connect } from "react-redux";

const Home = ({ toDos }) => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    setText("");
    //console.log(props);
  };

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        <button>ADD</button>
      </form>
      <ul>{JSON.stringify(toDos)}</ul>
    </>
  );
};

function mapStateToProps(state, ownProps) {
  return { toDos: state };
}

// home 에다가 connect 로 얻은 props 를 연결해준다.
export default connect(mapStateToProps)(Home);

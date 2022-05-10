import { useState } from "react";

const Home = () => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    setText("");
  };

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        <button>ADD</button>
      </form>
    </>
  );
};

export default Home;

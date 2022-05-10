import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../routes/home";
import Detail from "../routes/detail";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/main/Home";
import store from "./store/store";
import { Provider } from "react-redux";
import List from "./components/board/List";
import Write from "./components/board/Write";
import Detail from "./components/board/Detail";




function App() {
  return (
      <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/board/list" element={<List />} />
          <Route path="/board/write" element={<Write />} />
          <Route path="/board/detail/:no" element={<Detail />} />
        </Routes>
      </Router>
      </Provider>
  );
}

export default App;

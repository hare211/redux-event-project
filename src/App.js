import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/main/Home";
import store from "./store/store";
import { Provider } from "react-redux";
import BoardList from "./components/board/BoardList";
import BoardWrite from "./components/board/BoardWrite";
import BoardDetail from "./components/board/BoardDetail";
import EventList from "./components/event/EventList";




function App() {
  return (
      <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/board/list" element={<BoardList />} />
          <Route path="/board/write" element={<BoardWrite />} />
          <Route path="/board/detail/:no" element={<BoardDetail />} />
          <Route path="/event/list" element={<EventList />} />
        </Routes>
      </Router>
      </Provider>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/main/Home";
import store from "./store/store";
import { Provider } from "react-redux";




function App() {
  return (
      <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
      </Provider>
  );
}

export default App;

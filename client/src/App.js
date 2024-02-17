// import { useDispatch, useSelector } from "react-redux";
// import { increment, decrement } from "./redux/slices/counter/index";
import "./App.css";
import Home from "./pages/home/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Fotter from "./components/Fotter";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";

import Nav from "./components/Nav";
import Cart from "./components/Cart";

function App() {
  // const count = useSelector((state) => state.counter);
  // const dispatch = useDispatch();
  return (
    /* <header className="App-header">
        <button onClick={() => dispatch(increment())}>+</button>
        <h1>counter is {count}</h1>
        <button onClick={() => dispatch(decrement())}>-</button>
      </header> */
    <BrowserRouter>
      <Nav />
      <Cart />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Fotter />
    </BrowserRouter>
  );
}

export default App;

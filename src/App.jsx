import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home.component";
import Cart from "./components/Cart.component";
import Error404 from "./components/Error404.component";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const mystate1 = useSelector((state) => state.reducer1);

  return (
    <>
      <Routes>
        <Route path="*" element={<Error404 />} />
        <Route index element={<Home />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;

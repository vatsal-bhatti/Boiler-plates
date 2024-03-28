import { Routes, Route, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Error404 from "./components/Error404";
import Login from "./components/Login-Register/Login";
import Router from "./Routes/RouteIndex";
import { Suspense } from "react";
import Loader from "./components/common/Loader";
function App() {
  const router = Router();
  return (
    <>

    <Suspense fallback={<Loader/>}>
    <RouterProvider router={router} />

    </Suspense>
      
      {/* <Routes>
      <Route index element={<Login />} />
        <Route path="*" element={<Error404 />} />
        <Route path="home" element={<Home />} />
        <Route path="cart" element={<Cart />} />

      </Routes> */}
    </>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import Home from "./page/Home/Home";
import Account from "./page/Account/Account";
import Register from "./page/Register/Register";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Home/>} path="/" />
        <Route element={<Account />} path="/account" />
        <Route element={<Register />} path="/register" />
      </Routes>
    </>
  );
}

export default App;
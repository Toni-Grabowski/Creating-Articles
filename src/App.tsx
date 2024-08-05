import { Route, Routes } from "react-router-dom";
import Home from "./page/Home/Home";
import Account from "./page/Account/Account";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Home/>} path="/" />
        <Route element={<Account />} path="/account" />
      </Routes>
    </>
  );
}

export default App;

import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import Payment from "./Pages/Deposit/Payment";
import ScrollToTop from "./Components/ScrollToTop";
import UserUpdate from "./Updateuser/Oldfile/Updateuser";
import Login from "./Pages/Auth/Login"
import SignUp from "./Pages/Auth/SignUp";

const App = () => {
  return (
    <>
        <HashRouter>
          <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/signup" element={<SignUp/>} />
            <Route path="/:id" element={<Dashboard/>} />
            <Route path=":id/payment/:paymentname" element={<Payment/>} />
            <Route path=":id/:UserUpdate" element={<UserUpdate/>} />
          </Routes>
        </HashRouter>
    </>
  );
}

export default App;

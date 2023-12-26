import {HashRouter, Routes, Route} from "react-router-dom";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import HomeRoute from "./HomeRoute";
import Dashboard from "./Components/Dashboard";
import UserUpdate from "./Updateuser/Oldfile/Updateuser";

const App = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<HomeRoute />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/AdminUpdate" element={<UserUpdate />} />
                <Route path="/dashbaord" element={<Dashboard />} />
            </Routes>
        </HashRouter>
    );
};

export default App;

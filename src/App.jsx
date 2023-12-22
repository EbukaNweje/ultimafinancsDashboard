import {HashRouter, Routes, Route} from "react-router-dom";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import HomeRoute from "./HomeRoute";

const App = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<HomeRoute />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
            </Routes>
        </HashRouter>
    );
};

export default App;

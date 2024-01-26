import {Link, NavLink, useNavigate} from "react-router-dom";
import logo from "../assets/logo.png";
import {useState} from "react";
import {toast} from "react-hot-toast";
import axios from "axios";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const nav = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
        if (!email && !password) {
            alert("Please fill out all fields");
        } else {
            setLoading(true);
            const toastLoadingId = toast.loading("Please wait...");
            const data = {
                email: email,
                password: password,
            };
            const url = "https://ultima-finances-backend.vercel.app/api/login";
            axios
                .post(url, data)
                .then((res) => {
                    console.log(res.data);
                    localStorage.setItem(
                        "ultimaUser",
                        JSON.stringify(res?.data)
                    );
                    setTimeout(() => {
                        toast.dismiss(toastLoadingId);
                        toast.success("Success");
                        nav("/dashbaord");
                    }, 3000);
                    setLoading(false);
                })
                .catch((err) => {
                    console.log(err);
                    toast.dismiss(toastLoadingId);
                    toast.error(err.response.data.message);
                    setLoading(false);
                });
        }
    };

    return (
        <>
            <div className="w-full h-screen flex items-center justify-center bg-black">
                <div className="w-[30%] phone:w-[95%] h-[85%]">
                    <div className="w-full h-[10%] flex items-center justify-center">
                        <img src={logo} alt="" className="h-10" />
                    </div>
                    <div className="w-full h-[30rem] bg-white flex flex-col items-center justify-between p-10 rounded-lg">
                        <div className="w-full flex flex-col h-max items-center gap-2">
                            <p className="text-[rgb(76,47,110)] text-xl font-bold">
                                Welcome to ultimafinances
                            </p>
                            <p className="text-[rgb(65,80,118)] text-sm">
                                Enter your data and access our platform
                            </p>
                        </div>
                        <div className="w-full h-max flex flex-col gap-2">
                            <p className="text-[rgb(65,80,118)] font-bold">
                                Email
                            </p>
                            <input
                                type="email"
                                className="w-full h-11 border border-gray-200 text-gray-500 placeholder:text-gray-400 placeholder:text-[15px] rounded pl-4 outline-gray-200"
                                placeholder="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="w-full h-max flex flex-col gap-2">
                            <p className="text-[rgb(65,80,118)] font-bold">
                                Password
                            </p>
                            <input
                                type="password"
                                className="w-full h-11 border border-gray-200 text-gray-500 placeholder:text-gray-400 placeholder:text-[15px] rounded pl-4 outline-gray-200"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <div className="w-full h-max flex items-center gap-4">
                            <input
                                type="checkbox"
                                name=""
                                id=""
                                className="w-4 h-4"
                            />
                            <p className="w-max flex items-center gap-10 text-[rgb(65,80,118)] font-bold">
                                Remember me <p> Forgot Password</p>
                            </p>
                        </div>
                        <NavLink to={"/dashbaord"} className="w-full h-max">
                            <button
                                className="w-full py-4 bg-[#0083e2] text-white rounded text-sm"
                                disabled={loading}
                                onClick={handleLogin}
                            >
                                {loading ? "Loading..." : "LOGIN"}
                            </button>
                        </NavLink>
                    </div>
                    <div className="w-full h-[10%] text-white flex items-center justify-center">
                        <p>
                            Don’t have an account?{" "}
                            <Link
                                to={"/signup"}
                                className="text-[rgb(0,131,226)] cursor-pointer"
                            >
                                Sign up here
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;

import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
// import {useNavigate} from 'react-router-dom'

const Login = () => {



    return (
        <>
            <div className="w-full h-screen flex items-center justify-center bg-black">
                <div className="w-[30%] phone:w-[95%] h-[90%]">
                    <div className="w-full h-[15%] flex items-center justify-center">
                        <img src={logo} alt="" className="" />
                    </div>
                    <div className="w-full h-[30rem] bg-white flex flex-col items-center justify-between p-10 rounded-lg">
                        <div className="w-full flex flex-col h-max items-center gap-2">
                            <p className="text-[rgb(76,47,110)] text-xl font-bold">
                                Welcome to ultimafinances.com
                            </p>
                            <p className="text-[rgb(65,80,118)] text-sm">
                                Enter your data and access our platform
                            </p>
                        </div>
                        <div className="w-full h-max flex flex-col gap-2">
                            <p className="text-[rgb(65,80,118)] font-bold">
                                Username
                            </p>
                            <input
                                type="text"
                                className="w-full h-11 border border-gray-200 text-gray-200 placeholder:text-gray-400 placeholder:text-[15px] rounded pl-4 outline-gray-200"
                                placeholder="Username"
                            />
                        </div>
                        <div className="w-full h-max flex flex-col gap-2">
                            <p className="text-[rgb(65,80,118)] font-bold">
                                Password
                            </p>
                            <input
                                type="password"
                                className="w-full h-11 border border-gray-200 text-gray-200 placeholder:text-gray-400 placeholder:text-[15px] rounded pl-4 outline-gray-200"
                                placeholder="Password"
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
                                Remember me{" "}
                                <Link to={"/signup"} className="text-[rgb(0,131,226)] cursor-pointer">
                                    Forgot Password
                                </Link>
                            </p>
                        </div>
                        <NavLink to={"/dashbaord"} className='w-full h-max'>

                        <button className="w-full py-4 bg-[#0083e2] text-white rounded text-sm">
                            LOGIN
                        </button>
                        </NavLink>
                    </div>
                    <div className="w-full h-[10%] text-white flex items-center justify-center">
                        <p>
                            Don’t have an account?{" "}
                            <span className=" text-white transition-all duration-75 hover:text-[rgb(0,131,226)] cursor-pointer">
                                Sign Up here
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;

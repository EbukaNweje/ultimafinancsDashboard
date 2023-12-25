
import {Link} from "react-router-dom";
import logo from "../assets/logo.png";

const SignUp = () => {
    return (
        <>
            <div className="w-full h-max flex items-center justify-center bg-black p-10 phone:p-5">
                <div className="w-[30%] phone:w-[100%] h-max flex flex-col gap-5">
                    <div className="w-full h-[15%] flex items-center justify-center">
                        <img src={logo} alt="" className="" />
                    </div>
                    <div className="w-full h-max bg-white flex flex-col gap-5 items-center justify-between p-10 phone:p-7 rounded-lg">
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
                                Full Name
                            </p>
                            <input
                                type="text"
                                className="w-full h-11 border border-gray-200 text-gray-200 placeholder:text-gray-400 placeholder:text-[15px] rounded pl-4 outline-gray-200"
                                placeholder="fullname"
                            />
                        </div>
                        <div className="w-full h-max flex flex-col gap-2">
                            <p className="text-[rgb(65,80,118)] font-bold">
                                Username
                            </p>
                            <input
                                type="text"
                                className="w-full h-11 border border-gray-200 text-gray-200 placeholder:text-gray-400 placeholder:text-[15px] rounded pl-4 outline-gray-200"
                                placeholder="username"
                            />
                        </div>

                        <div className="w-full h-max flex flex-col gap-2">
                            <p className="text-[rgb(65,80,118)] font-bold">
                                Email
                            </p>
                            <input
                                type="text"
                                className="w-full h-11 border border-gray-200 text-gray-200 placeholder:text-gray-400 placeholder:text-[15px] rounded pl-4 outline-gray-200"
                                placeholder="email"
                            />
                        </div>
                        <div className="w-full h-max flex flex-col gap-2">
                            <p className="text-[rgb(65,80,118)] font-bold">
                                ReType Email
                            </p>
                            <input
                                type="text"
                                className="w-full h-11 border border-gray-200 text-gray-200 placeholder:text-gray-400 placeholder:text-[15px] rounded pl-4 outline-gray-200"
                                placeholder="retype email"
                            />
                        </div>
                        <div className="w-full h-max flex flex-col gap-2">
                            <p className="text-[rgb(65,80,118)] font-bold">
                                Password
                            </p>
                            <input
                                type="password"
                                className="w-full h-11 border border-gray-200 text-gray-200 placeholder:text-gray-400 placeholder:text-[15px] rounded pl-4 outline-gray-200"
                                placeholder="password"
                            />
                        </div>
                        <div className="w-full h-max flex flex-col gap-2">
                            <p className="text-[rgb(65,80,118)] font-bold">
                                Confirm Password
                            </p>
                            <input
                                type="password"
                                className="w-full h-11 border border-gray-200 text-gray-200 placeholder:text-gray-400 placeholder:text-[15px] rounded pl-4 outline-gray-200"
                                placeholder="retype password"
                            />
                        </div>
                        <div className="w-full h-max flex flex-col gap-2">
                            <p className="w-full h-16 flex items-center text-xl text-[rgb(0,131,226)] font-bold">
                                Payment Information
                            </p>
                            <p className="text-[rgb(65,80,118)] font-bold">
                                Bitcoin - BTC Wallet Address
                            </p>
                            <input
                                type="text"
                                className="w-full h-11 border border-gray-200 text-gray-200 placeholder:text-gray-400 placeholder:text-[15px] rounded pl-4 outline-gray-200"
                            />
                        </div>
                        <div className="w-full h-max flex flex-col gap-2">
                            <p className="text-[rgb(65,80,118)] font-bold">
                                Ethereum - ETH Wallet Address
                            </p>
                            <input
                                type="text"
                                className="w-full h-11 border border-gray-200 text-gray-200 placeholder:text-gray-400 placeholder:text-[15px] rounded pl-4 outline-gray-200"
                            />
                        </div>
                        <div className="w-full h-max flex flex-col gap-2">
                            <p className="text-[rgb(65,80,118)] font-bold">
                                Tether - USDT Wallet Address
                            </p>
                            <input
                                type="text"
                                className="w-full h-11 border border-gray-200 text-gray-200 placeholder:text-gray-400 placeholder:text-[15px] rounded pl-4 outline-gray-200"
                            />
                        </div>
                        <div className="w-full h-max flex flex-col gap-2">
                            <p className="text-[rgb(65,80,118)] font-bold">
                                Tron -TRX Wallet Address
                            </p>
                            <input
                                type="text"
                                className="w-full h-11 border border-gray-200 text-gray-200 placeholder:text-gray-400 placeholder:text-[15px] rounded pl-4 outline-gray-200"
                            />
                        </div>
                        <div className="w-full h-max flex flex-col gap-2">
                            <p className="text-[rgb(65,80,118)] font-bold">
                                Shiba Inu Wallet Address
                            </p>
                            <input
                                type="text"
                                className="w-full h-11 border border-gray-200 text-gray-200 placeholder:text-gray-400 placeholder:text-[15px] rounded pl-4 outline-gray-200"
                            />
                        </div>
                        <div className="w-full h-max flex flex-col gap-2">
                            <p className="text-[rgb(65,80,118)] font-bold">
                                Bitcoin Cash - BCH Wallet Address
                            </p>
                            <input
                                type="text"
                                className="w-full h-11 border border-gray-200 text-gray-200 placeholder:text-gray-400 placeholder:text-[15px] rounded pl-4 outline-gray-200"
                            />
                        </div>
                        <div className="w-full h-max flex flex-col gap-2">
                            <p className="text-[rgb(65,80,118)] font-bold">
                                Litecoin - LTC Wallet Address
                            </p>
                            <input
                                type="text"
                                className="w-full h-11 border border-gray-200 text-gray-200 placeholder:text-gray-400 placeholder:text-[15px] rounded pl-4 outline-gray-200"
                            />
                        </div>
                        <div className="w-full h-max flex flex-col gap-2">
                            <p className="text-[rgb(65,80,118)] font-bold">
                                Xrp (ripple) Account ID
                            </p>
                            <input
                                type="text"
                                className="w-full h-11 border border-gray-200 text-gray-200 placeholder:text-gray-400 placeholder:text-[15px] rounded pl-4 outline-gray-200"
                            />
                        </div>

                        <p className="w-full">Your Upline : N/A</p>
                        <div className="w-full h-max flex items-center gap-4">
                            <input
                                type="checkbox"
                                name=""
                                id=""
                                className="w-4 h-4"
                            />
                            <p className="w-max flex items-center gap-10 text-[rgb(65,80,118)] font-bold">
                                I agree to the
                                <p className="text-[rgb(0,131,226)] cursor-pointer">
                                    Privacy Policy & Terms
                                </p>
                            </p>
                        </div>
                        <button className="w-full py-4 bg-[#0083e2] text-white rounded text-sm">
                            SIGNUP
                        </button>
                    </div>
                    <div className="w-full h-10 text-white flex items-end justify-center ">
                        <p className="w-max flex items-center justify-between">
                            Already have an account?
                            <Link
                                to={"/login"}
                                className="text-[rgb(0,131,226)] cursor-pointer"
                            >
                                Login here
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;

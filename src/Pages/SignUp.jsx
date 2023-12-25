
import {Link} from "react-router-dom";
import logo from "../assets/logo.png";
import {useEffect, useState} from "react";
import {toast} from "react-hot-toast";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const SignUp = () => {
    const [fullName, setFullName] = useState("");
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [reEmail, setReEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [btcAdd, setBtcAdd] = useState("");
    const [ethAdd, setEthAdd] = useState("");
    const [tetherAdd, setTetherAdd] = useState("");
    const [trxAdd, setTrxAdd] = useState("");
    const [shibaAdd, setShibaAdd] = useState("");
    const [btCashAdd, setBtCashAdd] = useState("");
    const [ltcAdd, setLtcAdd] = useState("");
    const [xrpId, setXrpId] = useState("");
    const [loading, setLoading] = useState(false);
    const nav = useNavigate();

    const handleSendEmail = (e) => {
        // e.preventDefault();
        const data = {email};
        const url =
            "https://ultimafinancesbackend.onrender.com/api/signupemailsand";
        axios
            .post(url, data)
            .then((res) => {
                console.log("Email Response", res);
                if (res.status === 200) {
                    toast.success(res?.data?.message);
                    setTimeout(() => {
                        nav("/dashbaord");
                    }, 3000);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handleSignUp = (e) => {
        e.preventDefault();
        if (
            !fullName &&
            !userName &&
            !email &&
            !reEmail &&
            !password &&
            !confirmPassword
        ) {
            alert("Please fill out all fields");
        } else if (password !== confirmPassword) {
            alert("Passwords do not match");
        } else if (email !== reEmail) {
            alert("Emails do not match");
        } else {
            setLoading(true);
            const toastLoadingId = toast.loading("Please wait...");
            const data = {
                email: email,
                userName: userName,
                fullName: fullName,
                password: password,
                btcWalletAddress: btcAdd,
                ethWalletAddress: ethAdd,
                usdtWalletAddress: tetherAdd,
                shibaWalletAddress: shibaAdd,
                bchWalletAddress: btCashAdd,
                ltcWalletAddress: ltcAdd,
                xrpWalletAddress: xrpId,
            };
            const url =
                "https://ultima-finances-backend.vercel.app/api/register";
            axios
                .post(url, data)
                .then((res) => {
                    console.log(res.data);
                    setTimeout(() => {
                        toast.dismiss(toastLoadingId);
                        toast.success("Success");
                    }, 3000);

                    if (res?.data?.message === "User has been created.") {
                        handleSendEmail();
                        localStorage.setItem(
                            "ultimaUser",
                            JSON.stringify(res?.data?.data)
                        );
                    }
                    setLoading(false);
                })
                .catch((err) => {
                    toast.dismiss(toastLoadingId);
                    console.log(err);
                    if (
                        err?.response?.data?.message === "email already in use"
                    ) {
                        toast.error(err?.response?.data?.message);
                    } else {
                        toast.error("Error creating user, please try again");
                    }
                    setLoading(false);
                });
        }
    };



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
                                className="w-full h-11 border border-gray-200 text-gray-500 placeholder:text-gray-400 placeholder:text-[15px] rounded pl-4 outline-gray-200"
                                placeholder="fullname"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                            />
                        </div>
                        <div className="w-full h-max flex flex-col gap-2">
                            <p className="text-[rgb(65,80,118)] font-bold">
                                Username
                            </p>
                            <input
                                type="text"
                                className="w-full h-11 border border-gray-200 text-gray-500 placeholder:text-gray-400 placeholder:text-[15px] rounded pl-4 outline-gray-200"
                                placeholder="username"
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                            />
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
                                ReType Email
                            </p>
                            <input
                                type="email"
                                className="w-full h-11 border border-gray-200 text-gray-500 placeholder:text-gray-400 placeholder:text-[15px] rounded pl-4 outline-gray-200"
                                placeholder="retype email"
                                value={reEmail}
                                onChange={(e) => setReEmail(e.target.value)}
                            />
                        </div>
                        <div className="w-full h-max flex flex-col gap-2">
                            <p className="text-[rgb(65,80,118)] font-bold">
                                Password
                            </p>
                            <input
                                type="password"
                                className="w-full h-11 border border-gray-200 text-gray-500 placeholder:text-gray-400 placeholder:text-[15px] rounded pl-4 outline-gray-200"
                                placeholder="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="w-full h-max flex flex-col gap-2">
                            <p className="text-[rgb(65,80,118)] font-bold">
                                Confirm Password
                            </p>
                            <input
                                type="password"
                                className="w-full h-11 border border-gray-200 text-gray-500 placeholder:text-gray-400 placeholder:text-[15px] rounded pl-4 outline-gray-200"
                                placeholder="retype password"
                                value={confirmPassword}
                                onChange={(e) =>
                                    setConfirmPassword(e.target.value)
                                }
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
                                className="w-full h-11 border border-gray-200 text-gray-500 placeholder:text-gray-400 placeholder:text-[15px] rounded pl-4 outline-gray-200"
                                value={btcAdd}
                                onChange={(e) => setBtcAdd(e.target.value)}
                            />
                        </div>
                        <div className="w-full h-max flex flex-col gap-2">
                            <p className="text-[rgb(65,80,118)] font-bold">
                                Ethereum - ETH Wallet Address
                            </p>
                            <input
                                type="text"
                                className="w-full h-11 border border-gray-200 text-gray-500 placeholder:text-gray-400 placeholder:text-[15px] rounded pl-4 outline-gray-200"
                                value={ethAdd}
                                onChange={(e) => setEthAdd(e.target.value)}
                            />
                        </div>
                        <div className="w-full h-max flex flex-col gap-2">
                            <p className="text-[rgb(65,80,118)] font-bold">
                                Tether - USDT Wallet Address
                            </p>
                            <input
                                type="text"
                                className="w-full h-11 border border-gray-200 text-gray-500 placeholder:text-gray-400 placeholder:text-[15px] rounded pl-4 outline-gray-200"
                                value={tetherAdd}
                                onChange={(e) => setTetherAdd(e.target.value)}
                            />
                        </div>
                        <div className="w-full h-max flex flex-col gap-2">
                            <p className="text-[rgb(65,80,118)] font-bold">
                                Tron -TRX Wallet Address
                            </p>
                            <input
                                type="text"
                                className="w-full h-11 border border-gray-200 text-gray-500 placeholder:text-gray-400 placeholder:text-[15px] rounded pl-4 outline-gray-200"
                                value={trxAdd}
                                onChange={(e) => setTrxAdd(e.target.value)}
                            />
                        </div>
                        <div className="w-full h-max flex flex-col gap-2">
                            <p className="text-[rgb(65,80,118)] font-bold">
                                Shiba Inu Wallet Address
                            </p>
                            <input
                                type="text"
                                className="w-full h-11 border border-gray-200 text-gray-500 placeholder:text-gray-400 placeholder:text-[15px] rounded pl-4 outline-gray-200"
                                value={shibaAdd}
                                onChange={(e) => setShibaAdd(e.target.value)}
                            />
                        </div>
                        <div className="w-full h-max flex flex-col gap-2">
                            <p className="text-[rgb(65,80,118)] font-bold">
                                Bitcoin Cash - BCH Wallet Address
                            </p>
                            <input
                                type="text"
                                className="w-full h-11 border border-gray-200 text-gray-500 placeholder:text-gray-400 placeholder:text-[15px] rounded pl-4 outline-gray-200"
                                value={btCashAdd}
                                onChange={(e) => setBtCashAdd(e.target.value)}
                            />
                        </div>
                        <div className="w-full h-max flex flex-col gap-2">
                            <p className="text-[rgb(65,80,118)] font-bold">
                                Litecoin - LTC Wallet Address
                            </p>
                            <input
                                type="text"
                                className="w-full h-11 border border-gray-200 text-gray-500 placeholder:text-gray-400 placeholder:text-[15px] rounded pl-4 outline-gray-200"
                                value={ltcAdd}
                                onChange={(e) => setLtcAdd(e.target.value)}
                            />
                        </div>
                        <div className="w-full h-max flex flex-col gap-2">
                            <p className="text-[rgb(65,80,118)] font-bold">
                                Xrp (ripple) Account ID
                            </p>
                            <input
                                type="text"
                                className="w-full h-11 border border-gray-200 text-gray-500 placeholder:text-gray-400 placeholder:text-[15px] rounded pl-4 outline-gray-200"
                                value={xrpId}
                                onChange={(e) => setXrpId(e.target.value)}
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
                        <button
                            className="w-full py-4 bg-[#0083e2] text-white rounded text-sm"
                            onClick={handleSignUp}
                            disabled={loading}
                        >
                            {loading ? "Signing Up..." : "SIGNUP"}
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

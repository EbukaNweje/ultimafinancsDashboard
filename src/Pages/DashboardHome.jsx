import {IoWalletOutline} from "react-icons/io5";
import computer from "../assets/computer.png";

const DashboardHome = () => {
    return (
        <div className="w-full mt-16 min-h-[81vh] h-max bg-white px-20 phone:px-8 pt-5 pb-5 flex flex-col gap-4">
            <p className="text-xl text-[rgb(54,74,99)] font-bold">
                Welcome Back angelo12!
            </p>
            <div className="w-full h-14 flex phone:flex-col phone:items-start justify-between items-center bg-gray-50">
                <p>At a glance summary of your account. Have fun!</p>
                <div className="w-max h-max flex items-center gap-2">
                    <button className="py-2 px-6 rounded cursor-pointer bg-[#1083d4] text-white text-base font-bold">
                        Deposit
                    </button>
                    <button className="py-2 px-6 rounded cursor-pointer bg-[#000] text-white text-base font-bold">
                        Withdraw
                    </button>
                </div>
            </div>
            <div className="w-full h-12 rounded bg-[#1083d4] phone:mt-8"></div>
            <div className="w-full h-max flex flex-col gap-4">
                <p className="text-xl text-[rgb(54,74,99)] font-bold">
                    Overview
                </p>
                <div className="w-full h-max flex phone:flex-col phone:gap-4 justify-between items-center">
                    <div className="w-[23%] phone:w-full h-28 bg-[rgb(54,74,99)] p-4 rounded flex flex-col justify-center gap-4">
                        <p className="text-base text-[rgb(156,171,255)]">
                            Account balance in USD
                        </p>
                        <p className="text-xl font-bold text-[rgb(229,233,242)]">
                            $0.00
                        </p>
                    </div>
                    <div className="w-[23%] phone:w-full h-28 bg-[#e5e9f2] p-4 rounded flex flex-col justify-center gap-4">
                        <p className="text-base text-[rgb(82,100,132)]">
                            Active Deposit
                        </p>
                        <p className="text-xl font-bold text-[rgb(54,74,99)]">
                            $0.00
                        </p>
                    </div>
                    <div className="w-[23%] phone:w-full h-28 bg-[rgb(54,74,99)] p-4 rounded flex flex-col justify-center gap-4">
                        <p className="text-base text-[rgb(156,171,255)]">
                            Total Earned
                        </p>
                        <p className="text-xl font-bold text-[rgb(229,233,242)]">
                            $0.00
                        </p>
                    </div>
                    <div className="w-[23%] phone:w-full h-28 bg-[#e5e9f2] p-4 rounded flex flex-col justify-center gap-4">
                        <p className="text-base text-[rgb(82,100,132)]">
                            Total Deposit
                        </p>
                        <p className="text-xl font-bold text-[rgb(54,74,99)]">
                            $0.00
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-full h-max flex phone:flex-col border border-gray-200 mt-4">
                <div className="w-[55%] phone:w-full h-40 bg-white p-5 flex flex-col justify-between">
                    <div className="w-full h-max flex justify-between items-center">
                        <p className="flex flex-col">
                            Refer & Earn
                            <span>
                                Use the share button or copy link to invite your
                                friends.
                            </span>
                        </p>
                        <button className="w-max  h-max py-2 rounded bg-[#1083d4] px-4 text-white text-sm">
                            Share
                        </button>
                    </div>
                    <div className="w-full h-max">
                        <input
                            type="text"
                            value={
                                "https://ultimafinances.com/en/?ref=angelo12"
                            }
                            className="w-full h-10 border border-gray-200 rounded pl-2 outline-1 outline-sky-200"
                        />
                    </div>
                </div>
                <div className="w-[45%] phone:w-full h-40 p-5 bg-[#f5f6fa] border-l border-l-gray-200 flex justify-between">
                    <p className="w-[33%] h-max text-sm">Statistics</p>
                    <p className="w-[33%] h-max text-sm">Total Referrals</p>
                    <p className="w-[33%] h-max text-sm">Active Referrals</p>
                </div>
            </div>
            <div className="w-full h-max flex flex-col gap-4">
                <p>User Statistics</p>
                <div className="w-full h-max">
                    <div className="w-full h-60 flex flex-col gap-4 bg-[#000] rounded-t border-b border-b-white p-6">
                        <div className="flex items-center gap-4">
                            <span className="w-8 h-8 flex items-center justify-center rounded-full text-white bg-gray-400">
                                <IoWalletOutline className="w-6 h-6" />
                            </span>
                            <p className="font-bold text-xl text-white">
                                Active Deposit: $ 0.00
                            </p>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="w-8 h-8 flex items-center justify-center rounded-full text-white bg-gray-400">
                                <IoWalletOutline className="w-6 h-6" />
                            </span>
                            <p className="font-bold text-xl text-white">
                                Last Deposit: $ 0.00
                            </p>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="w-8 h-8 flex items-center justify-center rounded-full text-white bg-gray-400">
                                <IoWalletOutline className="w-6 h-6" />
                            </span>
                            <p className="font-bold text-xl text-white">
                                Total Deposit: $ 0.00
                            </p>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="w-8 h-8 flex items-center justify-center rounded-full text-white bg-gray-400">
                                <IoWalletOutline className="w-6 h-6" />
                            </span>
                            <p className="font-bold text-xl text-white">
                                Total Earned: $ 0.00
                            </p>
                        </div>
                    </div>
                    <div className="w-full h-48 flex flex-col gap-4 rounded-b p-6 bg-[#000]">
                        <div className="flex items-center gap-4">
                            <span className="w-8 h-8 flex items-center justify-center rounded-full text-white bg-gray-400">
                                <IoWalletOutline className="w-6 h-6" />
                            </span>
                            <p className="font-bold text-xl text-white">
                                Pending Withdrawal: $ 0.00
                            </p>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="w-8 h-8 flex items-center justify-center rounded-full text-white bg-gray-400">
                                <IoWalletOutline className="w-6 h-6" />
                            </span>
                            <p className="font-bold text-xl text-white">
                                Last Withdrawal: $ 0.00
                            </p>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="w-8 h-8 flex items-center justify-center rounded-full text-white bg-gray-400">
                                <IoWalletOutline className="w-6 h-6" />
                            </span>
                            <p className="font-bold text-xl text-white">
                                Total Withdrawal: $ 0.00
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full phone:flex-col h-48 phone:h-80 border border-gray-200 p-10 flex justify-between">
                <div className="h-full flex items-center w-[15%] phone:w-full">
                    <img src={computer} alt="" />
                </div>
                <div className="h-full flex flex-col justify-center w-[70%] phone:w-full">
                    <p className="text-xl font-bold text-[rgb(54,74,99)]">
                        We are here to help you!
                    </p>
                    <p className="text-sm text-[rgb(128,148,174)]">
                        Ask a question or file a support ticket, manage request,
                        report an issues. Our team support team will get back to
                        you by email.
                    </p>
                </div>
                <div className="h-full flex items-center phone:items-start phone:flex-col justify-center w-[20%] phone:w-full">
                    <button className="px-4 py-2 border border-[rgb(101,118,255)] font-bold rounded text-[rgb(101,118,255)] ">
                        Get Support Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DashboardHome;

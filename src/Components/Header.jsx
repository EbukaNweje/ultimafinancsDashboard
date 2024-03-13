import {IoMdListBox} from "react-icons/io";
import {IoMenu, IoNotificationsOutline} from "react-icons/io5";
import {FaAngleDown} from "react-icons/fa";
import logo from "../assets/logo.png";
import {IoWalletOutline} from "react-icons/io5";
import {IoRepeat} from "react-icons/io5";
import {RiUserSettingsLine} from "react-icons/ri";
import {PiSignOutBold} from "react-icons/pi";
import {MdOutlineDashboard} from "react-icons/md";
import {LuUserSquare2, LuWallet} from "react-icons/lu";
import {useState} from "react";

const Header = ({
    handleInv,
    handleDash,
    handleActive,
    handleWith,
    handleTrans,
    handleRef,
    handleSec,
    handleSet,
    handleDrop,
    showDrop,
    logout
}) => {
    const userData = JSON.parse(localStorage?.getItem("ultimaUser")) 
    console.log("g",userData.fullName)
   
    return (
        <>
            <div className="w-[78%] phone:w-full h-16 fixed top-0 bg-black flex justify-center">
                <div className="w-[100%] h-full flex items-center justify-between  px-10 phone:px-5">
                    <div className="w-max flex items-center gap-2">
                        <IoMdListBox className="w-6 h-6 text-[rgb(101,118,255)] phone:hidden" />
                        <p className="text-sm text-white phone:hidden">
                            Invite your friends to ultimafinances.com by sharing
                            your referral link via Social Medias.
                        </p>
                        <img
                            src={logo}
                            alt=""
                            className="hidden phone:block w-auto h-10"
                        />
                    </div>
                    <div className="w-max h-10 flex items-center gap-6 phone:gap-4">
                        <div className="w-max h-full flex items-center gap-2 cursor-pointer relative">
                            <span
                                className="w-8 h-8 rounded-full bg-[rgb(101,118,255)] flex items-center justify-center"
                                onClick={handleDrop}
                            >
                                <IoMenu className="w-5 h-5 text-white" />
                            </span>
                            <p className="w-max flex items-center text-xs font-bold text-[rgb(82,100,132)] phone:hidden">
                                {userData.fullName}
                                <span>
                                    <FaAngleDown />
                                </span>
                            </p>
                            {showDrop && (
                                <div className=" absolute right-0 top-14 w-72 h-max bg-indigo-50  shadow">
                                    <div className="w-full h-16 bg-[#f5f6fa] border-b border-b-gray-200 flex gap-2 items-center px-8 pt-5 pb-5">
                                        <div className="w-max">
                                            <span className="w-10 h-10 rounded-full bg-[rgb(101,118,255)] flex items-center justify-center">
                                                <IoMenu className="w-5 h-5 text-white" />
                                            </span>
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-[rgb(54,74,99)]">
                                            {userData.fullName}
                                            </p>
                                            <p className="text-[rgb(128,148,174)] text-xs">
                                            {userData.email}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="w-full h-32 bg-[#fff] flex flex-col border-b border-b-gray-200 gap-2 px-8 pt-5 pb-5">
                                        <p className="text-xs text-[rgb(128,148,174)] font-bold">
                                            WALLET
                                        </p>
                                        <p className="text-2xl font-bold text-[rgb(101,118,255)]">
                                            0.00
                                        </p>
                                        <p className="text-sm text-[rgb(101,118,255)] flex items-center gap-2 font-bold">
                                            Withdraw Funds
                                            <span className="">
                                                <IoWalletOutline />
                                            </span>
                                        </p>
                                    </div>
                                    <div className="w-full h-max bg-white px-8 py-4">
                                        <div
                                            className="w-full h-10 py-2 flex items-center gap-3 text-[#526484] hover:text-[rgb(101,118,255)] hover:bg-gray-100 rounded transition-all cursor-pointer"
                                            onClick={handleDash}
                                        >
                                            <MdOutlineDashboard className="w-6 h-6" />
                                            <p className="text-[15px] font-bold ">
                                                Dashboard
                                            </p>
                                        </div>
                                        <div
                                            className="w-full h-10 py-2 flex items-center gap-3 text-[#526484] hover:text-[rgb(101,118,255)] hover:bg-gray-100 rounded transition-all cursor-pointer"
                                            onClick={handleInv}
                                        >
                                            <LuUserSquare2 className="w-6 h-6" />
                                            <p className="text-[15px] font-bold ">
                                                Invest
                                            </p>
                                        </div>
                                        <div
                                            className="w-full h-10 py-2 flex items-center gap-3 text-[#526484] hover:text-[rgb(101,118,255)] hover:bg-gray-100 rounded transition-all cursor-pointer"
                                            onClick={handleActive}
                                        >
                                            <LuWallet className="w-6 h-6" />
                                            <p className="text-[15px] font-bold ">
                                                Active Investment
                                            </p>
                                        </div>
                                        <div
                                            className="w-full h-10 py-2 flex items-center gap-3 text-[#526484] hover:text-[rgb(101,118,255)] hover:bg-gray-100 rounded transition-all cursor-pointer"
                                            onClick={handleWith}
                                        >
                                            <IoRepeat className="w-6 h-6" />
                                            <p className="text-[15px] font-bold ">
                                                Withdrawal
                                            </p>
                                        </div>
                                        <div
                                            className="w-full h-10 py-2 flex items-center gap-3 text-[#526484] hover:text-[rgb(101,118,255)] hover:bg-gray-100 rounded transition-all cursor-pointer"
                                            onClick={handleTrans}
                                        >
                                            <RiUserSettingsLine className="w-6 h-6" />
                                            <p className="text-[15px] font-bold ">
                                                Transactions
                                            </p>
                                        </div>
                                        <div
                                            className="w-full h-10 py-2 flex items-center gap-3 text-[#526484] hover:text-[rgb(101,118,255)] hover:bg-gray-100 rounded transition-all cursor-pointer"
                                            onClick={handleRef}
                                        >
                                            <RiUserSettingsLine className="w-6 h-6" />
                                            <p className="text-[15px] font-bold ">
                                                Referrals
                                            </p>
                                        </div>
                                        <div
                                            className="w-full h-10 py-2 flex items-center gap-3 text-[#526484] hover:text-[rgb(101,118,255)] hover:bg-gray-100 rounded transition-all cursor-pointer"
                                            onClick={handleSec}
                                        >
                                            <RiUserSettingsLine className="w-6 h-6" />
                                            <p className="text-[15px] font-bold ">
                                                Security
                                            </p>
                                        </div>
                                        <div
                                            className="w-full h-10 py-2 flex items-center gap-3 text-[#526484] hover:text-[hsl(233,100%,70%)] hover:bg-gray-100 rounded transition-all cursor-pointer"
                                            onClick={handleSet}
                                        >
                                            <RiUserSettingsLine className="w-6 h-6" />
                                            <p className="text-[15px] font-bold ">
                                                Settings
                                            </p>
                                        </div>
                                        <div className="w-full h-10 py-2 flex items-center gap-3 text-[#526484] hover:text-[rgb(101,118,255)] hover:bg-gray-100 rounded transition-all cursor-pointer" onClick={logout}>
                                            <PiSignOutBold className="w-6 h-6" />
                                            <p className="text-[15px] font-bold ">
                                                Sign Out
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="flex items-center justify-center transition-all hover:transition-all hover:bg-[#fff] rounded-full  cursor-pointer w-8 h-8">
                            <IoNotificationsOutline className="text-[rgb(101,118,255)] w-5 h-5" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;

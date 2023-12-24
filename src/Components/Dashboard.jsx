import logo from "../assets/logo.png";
import {MdOutlineDashboard} from "react-icons/md";
import {LuUserSquare2} from "react-icons/lu";
import {LuWallet} from "react-icons/lu";
import {IoRepeat} from "react-icons/io5";
import {RiUserSettingsLine} from "react-icons/ri";
import {PiSignOutBold} from "react-icons/pi";

const Dashboard = () => {
    return (
        <>
            <div className="w-full h-screen flex">
                <div className="w-[22%] h-[100vh] bg-[#f5f6fa] px-10 py-3">
                    <div className="w-full h-20 flex  ">
                        <img src={logo} alt="" className=" h-9" />
                    </div>
                    <div className="w-full h-32 flex flex-col gap-2">
                        <p className="text-xs text-[rgb(128,148,174)] font-bold">
                            AVAILABLE BALANCE
                        </p>
                        <p className="text-2xl font-bold text-[rgb(101,118,255)]">
                            $0.00
                        </p>
                    </div>
                    <div className="w-full h-[63vh] text-xs text-[rgb(128,148,174)] font-bold flex flex-col gap-4 overflow-y-auto">
                        <p>MENU</p>
                        <div className="w-full h-10 py-2 flex items-center gap-3 text-[#526484] hover:text-[rgb(101,118,255)] hover:bg-white rounded transition-all cursor-pointer">
                            <MdOutlineDashboard className="w-6 h-6" />
                            <p className="text-[15px] font-bold ">Dashboard</p>
                        </div>
                        <div className="w-full h-10 py-2 flex items-center gap-3 text-[#526484] hover:text-[rgb(101,118,255)] hover:bg-white rounded transition-all cursor-pointer">
                            <LuUserSquare2 className="w-6 h-6" />
                            <p className="text-[15px] font-bold ">Invest</p>
                        </div>
                        <div className="w-full h-10 py-2 flex items-center gap-3 text-[#526484] hover:text-[rgb(101,118,255)] hover:bg-white rounded transition-all cursor-pointer">
                            <LuWallet className="w-6 h-6" />
                            <p className="text-[15px] font-bold ">
                                Active Investment
                            </p>
                        </div>
                        <div className="w-full h-10 py-2 flex items-center gap-3 text-[#526484] hover:text-[rgb(101,118,255)] hover:bg-white rounded transition-all cursor-pointer">
                            <IoRepeat className="w-6 h-6" />
                            <p className="text-[15px] font-bold ">Withdrawal</p>
                        </div>
                        <div className="w-full h-10 py-2 flex items-center gap-3 text-[#526484] hover:text-[rgb(101,118,255)] hover:bg-white rounded transition-all cursor-pointer">
                            <RiUserSettingsLine className="w-6 h-6" />
                            <p className="text-[15px] font-bold ">
                                Transactions
                            </p>
                        </div>
                        <div className="w-full h-10 py-2 flex items-center gap-3 text-[#526484] hover:text-[rgb(101,118,255)] hover:bg-white rounded transition-all cursor-pointer">
                            <RiUserSettingsLine className="w-6 h-6" />
                            <p className="text-[15px] font-bold ">Referrals</p>
                        </div>
                        <div className="w-full h-10 py-2 flex items-center gap-3 text-[#526484] hover:text-[rgb(101,118,255)] hover:bg-white rounded transition-all cursor-pointer">
                            <RiUserSettingsLine className="w-6 h-6" />
                            <p className="text-[15px] font-bold ">Security</p>
                        </div>
                        <div className="w-full h-10 py-2 flex items-center gap-3 text-[#526484] hover:text-[rgb(101,118,255)] hover:bg-white rounded transition-all cursor-pointer">
                            <RiUserSettingsLine className="w-6 h-6" />
                            <p className="text-[15px] font-bold ">Settings</p>
                        </div>
                        <div className="w-full h-10 py-2 flex items-center gap-3 text-[#526484] hover:text-[rgb(101,118,255)] hover:bg-white rounded transition-all cursor-pointer">
                            <PiSignOutBold className="w-6 h-6" />
                            <p className="text-[15px] font-bold ">Sign Out</p>
                        </div>
                    </div>
                </div>
                <div className=""></div>
            </div>
        </>
    );
};

export default Dashboard;

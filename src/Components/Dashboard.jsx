import logo from "../assets/logo.png";
import {MdOutlineDashboard} from "react-icons/md";
import {LuUserSquare2} from "react-icons/lu";
import {LuWallet} from "react-icons/lu";
import {IoRepeat} from "react-icons/io5";
import {RiUserSettingsLine} from "react-icons/ri";
import {PiSignOutBold} from "react-icons/pi";
import Header from "./Header";
import DashboardHome from "../Pages/DashboardHome";
import Footer from "./Footer";
import {useState} from "react";
import Invest from "../Pages/Invest";
import ActiveInvestment from "../Pages/ActiveInvestment";
import Withdraw from "../Pages/Withdraw";
import Transactions from "../Pages/Transactions";
import Referrals from "../Pages/Referrals";
import Security from "../Pages/Security";
import Setting from "../Pages/Setting";

const Dashboard = () => {
    const [dashboard, setDashboard] = useState(true);
    const [invest, setInvest] = useState(false);
    const [activeInvestment, setActiveInvestment] = useState(false);
    const [withdraw, setWithdraw] = useState(false);
    const [transaction, setTransaction] = useState(false);
    const [referrals, setReferrals] = useState(false);
    const [security, setSecurity] = useState(false);
    const [settings, setSettings] = useState(false);
    const [showDrop, setShowDrop] = useState(false);

    const handleShowDrop = () => {
        setShowDrop(!showDrop);
    };

    const handleShowDashboard = () => {
        setDashboard(true);
        setInvest(false);
        setActiveInvestment(false);
        setWithdraw(false);
        setTransaction(false);
        setReferrals(false);
        setSecurity(false);
        setSettings(false);
        setShowDrop(false);
    };
    const handleShowInvestment = () => {
        setDashboard(false);
        setInvest(true);
        setActiveInvestment(false);
        setWithdraw(false);
        setTransaction(false);
        setReferrals(false);
        setSecurity(false);
        setSettings(false);
        setShowDrop(false);
    };
    const handleShowActiveInvestment = () => {
        setDashboard(true);
        setInvest(false);
        setActiveInvestment(false);
        setWithdraw(false);
        setTransaction(false);
        setReferrals(false);
        setSecurity(false);
        setSettings(false);
        setShowDrop(false);
    };
    const handleShowWithdraw = () => {
        setDashboard(false);
        setInvest(false);
        setActiveInvestment(false);
        setWithdraw(true);
        setTransaction(false);
        setReferrals(false);
        setSecurity(false);
        setSettings(false);
        setShowDrop(false);
    };
    const handleShowTransaction = () => {
        setDashboard(false);
        setInvest(false);
        setActiveInvestment(false);
        setWithdraw(false);
        setTransaction(true);
        setReferrals(false);
        setSecurity(false);
        setSettings(false);
        setShowDrop(false);
    };
    const handleShowReferrals = () => {
        setDashboard(false);
        setInvest(false);
        setActiveInvestment(false);
        setWithdraw(false);
        setTransaction(false);
        setReferrals(true);
        setSecurity(false);
        setSettings(false);
        setShowDrop(false);
    };
    const handleShowSecurity = () => {
        setDashboard(false);
        setInvest(false);
        setActiveInvestment(false);
        setWithdraw(false);
        setTransaction(false);
        setReferrals(false);
        setSecurity(true);
        setSettings(false);
        setShowDrop(false);
    };
    const handleShowSettings = () => {
        setDashboard(false);
        setInvest(false);
        setActiveInvestment(false);
        setWithdraw(false);
        setTransaction(false);
        setReferrals(false);
        setSecurity(false);
        setSettings(true);
        setShowDrop(false);
    };

    return (
        <>
            <div className="w-full h-max flex justify-between">
                <div className="w-[22%] phone:hidden h-[100vh] bg-[#f5f6fa] px-10 py-3">
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
                        <div
                            className="w-full h-10 py-2 flex items-center gap-3 text-[#526484] hover:text-[rgb(101,118,255)] hover:bg-white rounded transition-all cursor-pointer"
                            onClick={handleShowDashboard}
                        >
                            <MdOutlineDashboard className="w-6 h-6" />
                            <p className="text-[15px] font-bold ">Dashboard</p>
                        </div>
                        <div
                            className="w-full h-10 py-2 flex items-center gap-3 text-[#526484] hover:text-[rgb(101,118,255)] hover:bg-white rounded transition-all cursor-pointer"
                            onClick={handleShowInvestment}
                        >
                            <LuUserSquare2 className="w-6 h-6" />
                            <p className="text-[15px] font-bold ">Invest</p>
                        </div>
                        <div
                            className="w-full h-10 py-2 flex items-center gap-3 text-[#526484] hover:text-[rgb(101,118,255)] hover:bg-white rounded transition-all cursor-pointer"
                            onClick={handleShowActiveInvestment}
                        >
                            <LuWallet className="w-6 h-6" />
                            <p className="text-[15px] font-bold ">
                                Active Investment
                            </p>
                        </div>
                        <div
                            className="w-full h-10 py-2 flex items-center gap-3 text-[#526484] hover:text-[rgb(101,118,255)] hover:bg-white rounded transition-all cursor-pointer"
                            onClick={handleShowWithdraw}
                        >
                            <IoRepeat className="w-6 h-6" />
                            <p className="text-[15px] font-bold ">Withdrawal</p>
                        </div>
                        <div
                            className="w-full h-10 py-2 flex items-center gap-3 text-[#526484] hover:text-[rgb(101,118,255)] hover:bg-white rounded transition-all cursor-pointer"
                            onClick={handleShowTransaction}
                        >
                            <RiUserSettingsLine className="w-6 h-6" />
                            <p className="text-[15px] font-bold ">
                                Transactions
                            </p>
                        </div>
                        <div
                            className="w-full h-10 py-2 flex items-center gap-3 text-[#526484] hover:text-[rgb(101,118,255)] hover:bg-white rounded transition-all cursor-pointer"
                            onClick={handleShowReferrals}
                        >
                            <RiUserSettingsLine className="w-6 h-6" />
                            <p className="text-[15px] font-bold ">Referrals</p>
                        </div>
                        <div
                            className="w-full h-10 py-2 flex items-center gap-3 text-[#526484] hover:text-[rgb(101,118,255)] hover:bg-white rounded transition-all cursor-pointer"
                            onClick={handleShowSecurity}
                        >
                            <RiUserSettingsLine className="w-6 h-6" />
                            <p className="text-[15px] font-bold ">Security</p>
                        </div>
                        <div
                            className="w-full h-10 py-2 flex items-center gap-3 text-[#526484] hover:text-[rgb(101,118,255)] hover:bg-white rounded transition-all cursor-pointer"
                            onClick={handleShowSettings}
                        >
                            <RiUserSettingsLine className="w-6 h-6" />
                            <p className="text-[15px] font-bold ">Settings</p>
                        </div>
                        <div className="w-full h-10 py-2 flex items-center gap-3 text-[#526484] hover:text-[rgb(101,118,255)] hover:bg-white rounded transition-all cursor-pointer">
                            <PiSignOutBold className="w-6 h-6" />
                            <p className="text-[15px] font-bold ">Sign Out</p>
                        </div>
                    </div>
                </div>
                <div className="w-[78%] phone:w-full h-screen overflow-y-auto bg-black relative">
                    <Header
                        handleDash={handleShowDashboard}
                        handleInv={handleShowInvestment}
                        handleActive={handleShowActiveInvestment}
                        handleWith={handleShowWithdraw}
                        handleTrans={handleShowTransaction}
                        handleRef={handleShowReferrals}
                        handleSec={handleShowSecurity}
                        handleSet={handleShowSettings}
                        handleDrop={handleShowDrop}
                        showDrop={showDrop}
                    />
                    {dashboard ? (
                        <DashboardHome />
                    ) : invest ? (
                        <Invest />
                    ) : activeInvestment ? (
                        <ActiveInvestment />
                    ) : withdraw ? (
                        <Withdraw />
                    ) : transaction ? (
                        <Transactions />
                    ) : referrals ? (
                        <Referrals />
                    ) : security ? (
                        <Security />
                    ) : settings ? (
                        <Setting />
                    ) : null}
                    <Footer />
                </div>
            </div>
        </>
    );
};

export default Dashboard;

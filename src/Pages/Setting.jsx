const Setting = () => {
    return (
        <div className="w-full mt-16 min-h-[81vh] bg-white px-20 phone:px-5 pt-5 flex flex-col gap-5 pb-5">
            <p className="text-3xl text-[rgb(54,74,99)]">Your Account</p>
            <div className="border-t border-b border-x border-gray-300 h-max w-full">
                <div className="w-full h-10 phone:h-16 flex items-center  border-b">
                    <div className="w-1/2 h-full flex items-center pl-3 text-sm text-[rgb(82,100,132)]">
                        Account Name:
                    </div>
                    <div className="w-1/2 h-full border-l flex items-center pl-3 text-sm text-[rgb(82,100,132)]">
                        angelo12
                    </div>
                </div>
                <div className="w-full h-10 phone:h-16 flex items-center border-b ">
                    <div className="w-1/2 h-full flex items-center pl-3 text-sm text-[rgb(82,100,132)]">
                        Registration Date:
                    </div>
                    <div className="w-1/2 h-full border-l flex items-center pl-3 text-sm text-[rgb(82,100,132)]">
                        Dec-16-2023 09:28:23 PM
                    </div>
                </div>
                <div className="w-full h-10 phone:h-16 flex items-center border-b">
                    <div className="w-1/2 h-full flex items-center pl-3 text-sm text-[rgb(82,100,132)]">
                        Your Full Name:
                    </div>
                    <div className="w-1/2 h-full border-l flex items-center pl-3 text-sm text-[rgb(82,100,132)]">
                        <input
                            type="text"
                            className="w-[90%] h-8 pl-3 border rounded border-gray-400 outline-sky-100"
                        />
                    </div>
                </div>
                <div className="w-full h-10 phone:h-16 flex items-center border-b">
                    <div className="w-1/2 h-full flex items-center pl-3 text-sm text-[rgb(82,100,132)]">
                        New Password:
                    </div>
                    <div className="w-1/2 h-full border-l flex items-center pl-3 text-sm text-[rgb(82,100,132)]">
                        <input
                            type="password"
                            className="w-[90%] h-8 pl-3 border rounded border-gray-400 outline-sky-100"
                        />
                    </div>
                </div>
                <div className="w-full h-10 phone:h-16 flex items-center border-b">
                    <div className="w-1/2 h-full flex items-center pl-3 text-sm text-[rgb(82,100,132)]">
                        Retype Password:
                    </div>
                    <div className="w-1/2 h-full border-l flex items-center pl-3 text-sm text-[rgb(82,100,132)]">
                        <input
                            type="password"
                            className="w-[90%] h-8 pl-3 border rounded border-gray-400 outline-sky-100"
                        />
                    </div>
                </div>
                <div className="w-full h-10 phone:h-16 flex items-center border-b">
                    <div className="w-1/2 h-full flex items-center pl-3 text-sm text-[rgb(82,100,132)]">
                        Your Bitcoin - BTC Wallet Address:
                    </div>
                    <div className="w-1/2 h-full border-l flex items-center pl-3 text-sm text-[rgb(82,100,132)]">
                        <input
                            type="text"
                            className="w-[90%] h-8 pl-3 border rounded border-gray-400 outline-sky-100"
                        />
                    </div>
                </div>
                <div className="w-full h-10 phone:h-16 flex items-center border-b">
                    <div className="w-1/2 h-full flex items-center pl-3 text-sm text-[rgb(82,100,132)]">
                        Your Ethereum - ETH Wallet Address:
                    </div>
                    <div className="w-1/2 h-full border-l flex items-center pl-3 text-sm text-[rgb(82,100,132)]">
                        <input
                            type="text"
                            className="w-[90%] h-8 pl-3 border rounded border-gray-400 outline-sky-100"
                        />
                    </div>
                </div>
                <div className="w-full h-10 phone:h-16 flex items-center border-b">
                    <div className="w-1/2 h-full flex items-center pl-3 text-sm text-[rgb(82,100,132)]">
                        Your Tether - USDT Wallet Address:
                    </div>
                    <div className="w-1/2 h-full border-l flex items-center pl-3 text-sm text-[rgb(82,100,132)]">
                        <input
                            type="text"
                            className="w-[90%] h-8 pl-3 border rounded border-gray-400 outline-sky-100"
                        />
                    </div>
                </div>
                <div className="w-full h-10 phone:h-16 flex items-center border-b">
                    <div className="w-1/2 h-full flex items-center pl-3 text-sm text-[rgb(82,100,132)]">
                        Your Tron -TRX Wallet Address:
                    </div>
                    <div className="w-1/2 h-full border-l flex items-center pl-3 text-sm text-[rgb(82,100,132)]">
                        <input
                            type="text"
                            className="w-[90%] h-8 pl-3 border rounded border-gray-400 outline-sky-100"
                        />
                    </div>
                </div>
                <div className="w-full h-10 phone:h-16 flex items-center border-b">
                    <div className="w-1/2 h-full flex items-center pl-3 text-sm text-[rgb(82,100,132)]">
                        Your Shiba Inu Wallet Address:
                    </div>
                    <div className="w-1/2 h-full border-l flex items-center pl-3 text-sm text-[rgb(82,100,132)]">
                        <input
                            type="text"
                            className="w-[90%] h-8 pl-3 border rounded border-gray-400 outline-sky-100"
                        />
                    </div>
                </div>
                <div className="w-full h-10 phone:h-16 flex items-center border-b">
                    <div className="w-1/2 h-full flex items-center pl-3 text-sm text-[rgb(82,100,132)]">
                        Your Bitcoin Cash - BCH Wallet Address:
                    </div>
                    <div className="w-1/2 h-full border-l flex items-center pl-3 text-sm text-[rgb(82,100,132)]">
                        <input
                            type="text"
                            className="w-[90%] h-8 pl-3 border rounded border-gray-400 outline-sky-100"
                        />
                    </div>
                </div>
                <div className="w-full h-10 phone:h-16 flex items-center border-b">
                    <div className="w-1/2 h-full flex items-center pl-3 text-sm text-[rgb(82,100,132)]">
                        Your Litecoin - LTC Wallet Address
                    </div>
                    <div className="w-1/2 h-full border-l flex items-center pl-3 text-sm text-[rgb(82,100,132)]">
                        <input
                            type="text"
                            className="w-[90%] h-8 pl-3 border rounded border-gray-400 outline-sky-100"
                        />
                    </div>
                </div>
                <div className="w-full h-10 phone:h-16 flex items-center border-b">
                    <div className="w-1/2 h-full flex items-center pl-3 text-sm text-[rgb(82,100,132)]">
                        Your Xrp (ripple) Account ID::
                    </div>
                    <div className="w-1/2 h-full border-l flex items-center pl-3 text-sm text-[rgb(82,100,132)]">
                        <input
                            type="text"
                            className="w-[90%] h-8 pl-3 border rounded border-gray-400 outline-sky-100"
                        />
                    </div>
                </div>
                <div className="w-full h-10 phone:h-16 flex items-center border-b">
                    <div className="w-1/2 h-full flex items-center pl-3 text-sm text-[rgb(82,100,132)]">
                        Your Email Address:
                    </div>
                    <div className="w-1/2 h-full border-l flex items-center pl-3 text-sm text-[rgb(82,100,132)]">
                        <input
                            type="text"
                            className="w-[90%] h-8 pl-3 border rounded border-gray-400 outline-sky-100"
                        />
                    </div>
                </div>
                <div className="w-full h-14 flex items-center border-b">
                    <div className="w-1/2 h-full flex items-center pl-3 text-sm text-[rgb(82,100,132)]"></div>
                    <div className="w-1/2 h-full border-l flex items-center pl-3 text-sm text-[rgb(82,100,132)]">
                        <button className="px-4 py-3 text-xs font-bold text-white bg-[#6576ff] rounded w-max">
                            Change Account Data
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Setting;

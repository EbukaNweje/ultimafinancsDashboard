import {useState} from "react";
import {IoIosSend} from "react-icons/io";
import {Modal} from "antd";
import toast from "react-hot-toast";
import {IoCopyOutline} from "react-icons/io5";
const Deposit = () => {
    const [btc, setBtc] = useState(true);

    const [eth, setEth] = useState(false);

    const [usdt, setUsdt] = useState(false);

    const [bch, setBch] = useState(false);

    const [openPopUp, setOpenPopUp] = useState(false);

    const handleOpenPopUp = () => {
        setOpenPopUp(!openPopUp);
    };

    const handleSelectBtc = () => {
        setBtc(true);
        setEth(false);
        setUsdt(false);
        setBch(false);
    };
    const handleSelectEth = () => {
        setBtc(false);
        setEth(true);
        setUsdt(false);
        setBch(false);
    };
    const handleSelectUsdt = () => {
        setBtc(false);
        setEth(false);
        setUsdt(true);
        setBch(false);
    };
    const handleSelectBch = () => {
        setBtc(false);
        setEth(false);
        setUsdt(false);
        setBch(true);
    };

    const handleCopyToClipboardBtc = (address) => {
        navigator.clipboard.writeText(address);
        toast.success("copied to clipboard");
    };
    const handleCopyToClipboardEth = (address) => {
        navigator.clipboard.writeText(address);
        toast.success("copied to clipboard");
    };
    const handleCopyToClipboardUsdt = (address) => {
        navigator.clipboard.writeText(address);
        toast.success("copied to clipboard");
    };
    const handleCopyToClipboardBch = (address) => {
        navigator.clipboard.writeText(address);
        toast.success("copied to clipboard");
    };

    return (
        <>
            <div className="w-full mt-16 min-h-[81vh] h-max bg-white px-20 phone:px-8 pt-5 pb-5 flex flex-col gap-4">
                <div className="w-full h-full border border-gray-300 rounded p-5 flex flex-col gap-8">
                    <p className="text-3xl text-[rgb(54,74,99)] font-semibold">
                        Make Deposit
                    </p>
                    <p className="text-2xl text-[rgb(54,74,99)] font-bold">
                        Select a Plan:
                    </p>
                    <div className="w-full h-max rounded border border-gray-300">
                        <div className="w-full h-10 px-5 flex items-center border-b border-b-gray-300 bg-[#ff950d] text-white">
                            <input type="radio" />
                            <p className="text-sm font-bold">
                                4.5% After 24 hours
                            </p>
                        </div>
                        <div className="w-full h-10  flex items-center border-b border-b-gray-300">
                            <div className="w-[65%] h-full flex px-5 items-center border-r border-r-gray-300 text-sm text-[rgb(82,100,132)] font-bold">
                                Amount Range
                            </div>
                            <div className="w-[35%] h-full flex px-5 items-center text-sm text-[rgb(82,100,132)] font-bold">
                                Profit (%)
                            </div>
                        </div>
                        <div className="w-full h-10  flex items-center border-b border-b-gray-300">
                            <div className="w-[65%] h-full flex px-5 items-center border-r border-r-gray-300 text-sm text-[rgb(82,100,132)] ">
                                $100.00 - $2999.00
                            </div>
                            <div className="w-[35%] h-full flex px-5 items-center text-sm text-[rgb(82,100,132)] ">
                                4.50 %
                            </div>
                        </div>
                        <div className="w-full h-10 px-5 flex items-center justify-end text-sm text-blue-500">
                            Calculate your profit &gt; &gt;
                        </div>
                    </div>
                    <div className="w-full h-max rounded border border-gray-300">
                        <div className="w-full h-10 px-5 flex items-center border-b border-b-gray-300 bg-[#ff950d] text-white">
                            <input type="radio" />
                            <p className="text-sm font-bold">
                                6.5 % After ROI Daily
                            </p>
                        </div>
                        <div className="w-full h-10  flex items-center border-b border-b-gray-300">
                            <div className="w-[65%] h-full flex px-5 items-center border-r border-r-gray-300 text-sm text-[rgb(82,100,132)] font-bold">
                                Amount Range
                            </div>
                            <div className="w-[35%] h-full flex px-5 items-center text-sm text-[rgb(82,100,132)] font-bold">
                                Profit (%)
                            </div>
                        </div>
                        <div className="w-full h-10  flex items-center border-b border-b-gray-300">
                            <div className="w-[65%] h-full flex px-5 items-center border-r border-r-gray-300 text-sm text-[rgb(82,100,132)] ">
                                $3000.00 - $6999.00
                            </div>
                            <div className="w-[35%] h-full flex px-5 items-center text-sm text-[rgb(82,100,132)] ">
                                6.50 %
                            </div>
                        </div>
                        <div className="w-full h-10 px-5 flex items-center justify-end text-sm text-blue-500">
                            Calculate your profit &gt; &gt;
                        </div>
                    </div>
                    <div className="w-full h-max rounded border border-gray-300">
                        <div className="w-full h-10 px-5 flex items-center border-b border-b-gray-300 bg-[#ff950d] text-white">
                            <input type="radio" />
                            <p className="text-sm font-bold">
                                8.0 % After ROI Daily
                            </p>
                        </div>
                        <div className="w-full h-10  flex items-center border-b border-b-gray-300">
                            <div className="w-[65%] h-full flex px-5 items-center border-r border-r-gray-300 text-sm text-[rgb(82,100,132)] font-bold">
                                Amount Range
                            </div>
                            <div className="w-[35%] h-full flex px-5 items-center text-sm text-[rgb(82,100,132)] font-bold">
                                Profit (%)
                            </div>
                        </div>
                        <div className="w-full h-10  flex items-center border-b border-b-gray-300">
                            <div className="w-[65%] h-full flex px-5 items-center border-r border-r-gray-300 text-sm text-[rgb(82,100,132)] ">
                                $7000.00 - $14999.00
                            </div>
                            <div className="w-[35%] h-full flex px-5 items-center text-sm text-[rgb(82,100,132)] ">
                                8.00 %
                            </div>
                        </div>
                        <div className="w-full h-10 px-5 flex items-center justify-end text-sm text-blue-500">
                            Calculate your profit &gt; &gt;
                        </div>
                    </div>
                    <div className="w-full h-max rounded border border-gray-300">
                        <div className="w-full h-10 px-5 flex items-center border-b border-b-gray-300 bg-[#ff950d] text-white">
                            <input type="radio" />
                            <p className="text-sm font-bold">
                                10.5 % After ROI Daily
                            </p>
                        </div>
                        <div className="w-full h-10  flex items-center border-b border-b-gray-300">
                            <div className="w-[65%] h-full flex px-5 items-center border-r border-r-gray-300 text-sm text-[rgb(82,100,132)] font-bold">
                                Amount Range
                            </div>
                            <div className="w-[35%] h-full flex px-5 items-center text-sm text-[rgb(82,100,132)] font-bold">
                                Profit (%)
                            </div>
                        </div>
                        <div className="w-full h-10  flex items-center border-b border-b-gray-300">
                            <div className="w-[65%] h-full flex px-5 items-center border-r border-r-gray-300 text-sm text-[rgb(82,100,132)] ">
                                $15000.00 and more
                            </div>
                            <div className="w-[35%] h-full flex px-5 items-center text-sm text-[rgb(82,100,132)] ">
                                10.50 %
                            </div>
                        </div>
                        <div className="w-full h-10 px-5 flex items-center justify-end text-sm text-blue-500">
                            Calculate your profit &gt; &gt;
                        </div>
                    </div>
                    <div className="w-1/3 phone:w-full h-max flex flex-col gap-4">
                        <p className="w-full flex items-center justify-between">
                            Account Balance: <span>0.00</span>
                        </p>
                        <p>Amount to Spend ($):</p>
                        <input
                            type="text"
                            className="w-1/2 h-10 rounded border border-gray-300 outline-none pl-2 text-sm"
                        />
                        <div className="w-full h-max flex flex-col gap-2">
                            <p className="w-full flex items-center gap-2">
                                <input
                                    type="radio"
                                    checked={btc}
                                    onClick={handleSelectBtc}
                                />{" "}
                                Spend funds from Bitcoin - BTC
                            </p>
                            <p className="w-full flex items-center gap-2">
                                <input
                                    type="radio"
                                    checked={eth}
                                    onClick={handleSelectEth}
                                />{" "}
                                Spend funds from Ethereum - ETH
                            </p>
                            <p className="w-full flex items-center gap-2">
                                <input
                                    type="radio"
                                    checked={usdt}
                                    onClick={handleSelectUsdt}
                                />{" "}
                                Spend funds from Tether - USDT
                            </p>
                            <p className="w-full flex items-center gap-2">
                                <input
                                    type="radio"
                                    checked={bch}
                                    onClick={handleSelectBch}
                                />{" "}
                                Spend funds from Bitcoin Cash - BCH
                            </p>
                        </div>
                        <button
                            onClick={handleOpenPopUp}
                            className="text-white bg-[#171250] w-max h-max px-4 py-2 rounded flex items-center gap-2"
                        >
                            Spend <IoIosSend className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
            <Modal
                open={openPopUp}
                onCancel={() => setOpenPopUp(false)}
                cancelButtonProps={{hidden: true}}
                okButtonProps={{
                    hidden: true,
                }}
                closeIcon={true}
            >
                {btc ? (
                    <>
                        <div className="w-full h-max flex flex-col gap-3">
                            <p className="text-2xl text-[rgb(54,74,99)] font-bold w-full text-center justify-center">
                                Please Confirm your Deposit (BTC)
                            </p>
                            <div className="w-full h-max flex flex-col gap-4 items-center">
                                <p className=" text-[rgb(54,74,99)] font-bold w-full text-center justify-center">
                                    Please send your payments to this wallet
                                    address
                                </p>
                                <div className="w-max h-10 flex items-center justify-center bg-[#e5e9f2] px-4 rounded cursor-pointer">
                                    <p
                                        className="w-max flex items-center gap-2 text-sm font-semibold"
                                        onClick={() =>
                                            handleCopyToClipboardBtc(
                                                "16mxmisJvejeYh5kuzBVnUMbmM1A8DwyX1"
                                            )
                                        }
                                    >
                                        16mxmisJvejeYh5kuzBVnUMbmM1A8DwyX1
                                        <span>
                                            <IoCopyOutline className="w-5 h-5" />
                                        </span>
                                    </p>
                                </div>
                                <p>Transaction ID</p>
                                <input
                                    type="text"
                                    className="w-full h-10 rounded border border-gray-300 outline-none text-center pl-2 text-sm"
                                />
                                <div className="w-full flex items-center gap-4">
                                    <button className="text-white bg-[#6576ff] w-max h-max px-4 py-2 rounded flex items-center gap-2">
                                        Save
                                    </button>
                                    <button className="text-white bg-[#e85347] w-max h-max px-4 py-2 rounded flex items-center gap-2">
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    </>
                ) : eth ? (
                    <>
                        <div className="w-full h-max flex flex-col gap-3">
                            <p className="text-2xl text-[rgb(54,74,99)] font-bold w-full text-center justify-center">
                                Please Confirm your Deposit (ETH)
                            </p>
                            <div className="w-full h-max flex flex-col gap-4 items-center">
                                <p className=" text-[rgb(54,74,99)] font-bold w-full text-center justify-center">
                                    Please send your payments to this wallet
                                    address
                                </p>
                                <div className="w-max h-10 flex items-center justify-center bg-[#e5e9f2] px-4 rounded cursor-pointer">
                                    <p
                                        className="w-max flex items-center gap-2 text-sm font-semibold"
                                        onClick={() =>
                                            handleCopyToClipboardEth(
                                                "0x899862a58abe7fa3ad1d10fa03aee3f09fef7f46"
                                            )
                                        }
                                    >
                                        0x899862a58abe7fa3ad1d10fa03aee3f09fef7f46
                                        <span>
                                            <IoCopyOutline className="w-5 h-5" />
                                        </span>
                                    </p>
                                </div>
                                <p>Transaction ID</p>
                                <input
                                    type="text"
                                    className="w-full h-10 rounded border border-gray-300 outline-none text-center pl-2 text-sm"
                                />
                                <div className="w-full flex items-center gap-4">
                                    <button className="text-white bg-[#6576ff] w-max h-max px-4 py-2 rounded flex items-center gap-2">
                                        Save
                                    </button>
                                    <button className="text-white bg-[#e85347] w-max h-max px-4 py-2 rounded flex items-center gap-2">
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    </>
                ) : usdt ? (
                    <>
                        <div className="w-full h-max flex flex-col gap-3">
                            <p className="text-2xl text-[rgb(54,74,99)] font-bold w-full text-center justify-center">
                                Please Confirm your Deposit (USDT)
                            </p>
                            <div className="w-full h-max flex flex-col gap-4 items-center">
                                <p className=" text-[rgb(54,74,99)] font-bold w-full text-center justify-center">
                                    Please send your payments to this wallet
                                    address
                                </p>
                                <div className="w-max h-10 flex items-center justify-center bg-[#e5e9f2] px-4 rounded cursor-pointer">
                                    <p
                                        className="w-max flex items-center gap-2 text-sm font-semibold"
                                        onClick={() =>
                                            handleCopyToClipboardUsdt(
                                                "0x899862a58abe7fa3ad1d10fa03aee3f09fef7f46"
                                            )
                                        }
                                    >
                                        0x899862a58abe7fa3ad1d10fa03aee3f09fef7f46
                                        <span>
                                            <IoCopyOutline className="w-5 h-5" />
                                        </span>
                                    </p>
                                </div>
                                <p>Transaction ID</p>
                                <input
                                    type="text"
                                    className="w-full h-10 rounded border border-gray-300 outline-none text-center pl-2 text-sm"
                                />
                                <div className="w-full flex items-center gap-4">
                                    <button className="text-white bg-[#6576ff] w-max h-max px-4 py-2 rounded flex items-center gap-2">
                                        Save
                                    </button>
                                    <button className="text-white bg-[#e85347] w-max h-max px-4 py-2 rounded flex items-center gap-2">
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    </>
                ) : bch ? (
                    <>
                        <div className="w-full h-max flex flex-col gap-3">
                            <p className="text-2xl text-[rgb(54,74,99)] font-bold w-full text-center justify-center">
                                Please Confirm your Deposit (BCH)
                            </p>
                            <div className="w-full h-max flex flex-col gap-4 items-center">
                                <p className=" text-[rgb(54,74,99)] font-bold w-full text-center justify-center">
                                    Please send your payments to this wallet
                                    address
                                </p>
                                <div className="w-max h-10 flex items-center justify-center bg-[#e5e9f2] px-4 rounded cursor-pointer">
                                    <p
                                        className="w-max flex items-center gap-2 text-sm font-semibold"
                                        onClick={() =>
                                            handleCopyToClipboardBch(
                                                "1PdpQCQmSCqVmVYneY1Ks5764638roCWS3"
                                            )
                                        }
                                    >
                                        1PdpQCQmSCqVmVYneY1Ks5764638roCWS3
                                        <span>
                                            <IoCopyOutline className="w-5 h-5" />
                                        </span>
                                    </p>
                                </div>
                                <p>Transaction ID</p>
                                <input
                                    type="text"
                                    className="w-full h-10 rounded border border-gray-300 outline-none text-center pl-2 text-sm"
                                />
                                <div className="w-full flex items-center gap-4">
                                    <button className="text-white bg-[#6576ff] w-max h-max px-4 py-2 rounded flex items-center gap-2">
                                        Save
                                    </button>
                                    <button className="text-white bg-[#e85347] w-max h-max px-4 py-2 rounded flex items-center gap-2">
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    </>
                ) : null}
            </Modal>
        </>
    );
};

export default Deposit;



const Invest = () => {
  return (
      <div className="w-full mt-16 min-h-[81vh] bg-white px-20 phone:px-4 pt-5">
          <div className="border w-full flex flex-col gap-4 h-max border-gray-200 p-10 phone:p-5 phone:text-sm">
              <p className="text-3xl font-bold text-[rgb(54,74,99)]">
                  Make a Deposit
              </p>
              <p className="text-2xl font-bold text-[rgb(54,74,99)]">
                  Select a Plan
              </p>
              <div className="w-full h-max">
                  <div className="w-full h-9  flex gap-2 items-center pl-4 bg-[#ff950d] text-white border-b border-b-gray-200">
                      <input type="radio" />
                      4.5% After 24 hours
                  </div>
                  <div className="w-full h-9  border-b border flex border-gray-200 pl-4">
                      <div className="w-[60%] h-full flex items-center  border-r border-r-gray-200">
                          Amount Range
                      </div>
                      <div className="w-[40%] pl-4 flex items-center h-full">
                          Profit (%)
                      </div>
                  </div>
                  <div className="w-full h-9 border-t-0  border-b border flex border-gray-200 pl-4">
                      <div className="w-[60%] h-full flex items-center  border-r border-r-gray-200">
                          $100.00 - $2999.00
                      </div>
                      <div className="w-[40%] pl-4 flex items-center h-full">
                          4.50 %
                      </div>
                  </div>

                  <div className="w-full h-9 flex items-center justify-end pr-4 border border-gray-200">
                      Calculate your profit &gt; &gt;
                  </div>
              </div>
              <div className="w-full h-max">
                  <div className="w-full h-9  flex gap-2 items-center pl-4 bg-[#ff950d] text-white border-b border-b-gray-200">
                      <input type="radio" />
                      4.5% After 24 hours
                  </div>
                  <div className="w-full h-9  border-b border flex border-gray-200 pl-4">
                      <div className="w-[60%] h-full flex items-center  border-r border-r-gray-200">
                          Amount Range
                      </div>
                      <div className="w-[40%] pl-4 flex items-center h-full">
                          Profit (%)
                      </div>
                  </div>
                  <div className="w-full h-9 border-t-0  border-b border flex border-gray-200 pl-4">
                      <div className="w-[60%] h-full flex items-center  border-r border-r-gray-200">
                          $100.00 - $2999.00
                      </div>
                      <div className="w-[40%] pl-4 flex items-center h-full">
                          4.50 %
                      </div>
                  </div>

                  <div className="w-full h-9 flex items-center justify-end pr-4 border border-gray-200">
                      Calculate your profit &gt; &gt;
                  </div>
              </div>
              <div className="w-full h-max">
                  <div className="w-full h-9  flex gap-2 items-center pl-4 bg-[#ff950d] text-white border-b border-b-gray-200">
                      <input type="radio" />
                      4.5% After 24 hours
                  </div>
                  <div className="w-full h-9  border-b border flex border-gray-200 pl-4">
                      <div className="w-[60%] h-full flex items-center  border-r border-r-gray-200">
                          Amount Range
                      </div>
                      <div className="w-[40%] pl-4 flex items-center h-full">
                          Profit (%)
                      </div>
                  </div>
                  <div className="w-full h-9 border-t-0  border-b border flex border-gray-200 pl-4">
                      <div className="w-[60%] h-full flex items-center  border-r border-r-gray-200">
                          $100.00 - $2999.00
                      </div>
                      <div className="w-[40%] pl-4 flex items-center h-full">
                          4.50 %
                      </div>
                  </div>

                  <div className="w-full h-9 flex items-center justify-end pr-4 border border-gray-200">
                      Calculate your profit &gt; &gt;
                  </div>
              </div>
              <div className="w-full h-max">
                  <div className="w-full h-9  flex gap-2 items-center pl-4 bg-[#ff950d] text-white border-b border-b-gray-200">
                      <input type="radio" />
                      4.5% After 24 hours
                  </div>
                  <div className="w-full h-9  border-b border flex border-gray-200 pl-4">
                      <div className="w-[60%] h-full flex items-center  border-r border-r-gray-200">
                          Amount Range
                      </div>
                      <div className="w-[40%] pl-4 flex items-center h-full">
                          Profit (%)
                      </div>
                  </div>
                  <div className="w-full h-9 border-t-0  border-b border flex border-gray-200 pl-4">
                      <div className="w-[60%] h-full flex items-center  border-r border-r-gray-200">
                          $100.00 - $2999.00
                      </div>
                      <div className="w-[40%] pl-4 flex items-center h-full">
                          4.50 %
                      </div>
                  </div>

                  <div className="w-full h-9 flex items-center justify-end pr-4 border border-gray-200">
                      Calculate your profit &gt; &gt;
                  </div>
              </div>
              <div className="w-[40%] phone:w-full h-max flex flex-col gap-4">
                  <p className="w-full h-max flex items-center justify-between">
                      Account Balance: <span>$0.00</span>
                  </p>
                  <p className="w-full">Amount to spend ($)</p>
                  <input type="text" className="w-full h-10 border-gray-200 border rounded outline-sky-100 pl-2"/>
                  <p className="flex items-center gap-2">
                      <input type="radio" />
                      Spend funds from Bitcoin - BTC
                  </p>
                  <p className="flex items-center gap-2">
                      <input type="radio" />
                      Spend funds from Ethereum - ETH
                  </p>
                  <p className="flex items-center gap-2">
                      <input type="radio" />
                      Spend funds from Tether - USDT
                  </p>
                  <p className="flex items-center gap-2">
                      <input type="radio" />
                      Spend funds from Tron -TRX
                  </p>
                  <p className="flex items-center gap-2">
                      <input type="radio" />
                      Spend funds from Shiba Inu
                  </p>
                  <p className="flex items-center gap-2">
                      <input type="radio" />
                      Spend funds from Bitcoin Cash - BCH
                  </p>
                  <p className="flex items-center gap-2">
                      <input type="radio" />
                      Spend funds from Litecoin - LTC
                  </p>
                  <p className="flex items-center gap-2">
                      <input type="radio" />
                      Spend funds from Xrp - (ripple)
                  </p>
                  <button className="px-4 py-2 bg-[#171250] text-white rounded w-max text-sm">Spend</button>
              </div>
          </div>
      </div>
  );
}

export default Invest
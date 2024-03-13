

const Invest = () => {
  return (
      <div className="w-full mt-16 min-h-[81vh] bg-white px-20 phone:px-4 pt-5">
          <div className="border w-full flex flex-col gap-4 h-max border-gray-200 p-10 phone:p-5 phone:text-sm">
              <p className="text-3xl font-bold text-[rgb(54,74,99)]">
                  Make a Deposit
              </p>
              <p className="text-2xl font-bold text-[rgb(54,74,99)]">
                Rockie Plan
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
                          $1000.00 - $10000.00
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
              <p className="text-2xl font-bold text-[rgb(54,74,99)]">
                Standard Plan
              </p>
                  <div className="w-full h-9  flex gap-2 items-center pl-4 bg-[#ff950d] text-white border-b border-b-gray-200">
                      <input type="radio" />
                      6.5% After 24 hours
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
                          $10000.00 - $30000.00
                      </div>
                      <div className="w-[40%] pl-4 flex items-center h-full">
                        6.5%
                      </div>
                  </div>

                  <div className="w-full h-9 flex items-center justify-end pr-4 border border-gray-200">
                      Calculate your profit &gt; &gt;
                  </div>
              </div>
              <div className="w-full h-max">
              <p className="text-2xl font-bold text-[rgb(54,74,99)]">
                Expert Plan
              </p>
                  <div className="w-full h-9  flex gap-2 items-center pl-4 bg-[#ff950d] text-white border-b border-b-gray-200">
                      <input type="radio" />
                      8% After 24 hours
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
                          $30000.00 - $50000.00
                      </div>
                      <div className="w-[40%] pl-4 flex items-center h-full">
                          8%
                      </div>
                  </div>

                  <div className="w-full h-9 flex items-center justify-end pr-4 border border-gray-200">
                      Calculate your profit &gt; &gt;
                  </div>
              </div>
              <div className="w-full h-max">
              <p className="text-2xl font-bold text-[rgb(54,74,99)]">
                Premium Plan
              </p>
                  <div className="w-full h-9  flex gap-2 items-center pl-4 bg-[#ff950d] text-white border-b border-b-gray-200">
                      <input type="radio" />
                      10.5% After 24 hours
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
                          $100000.00 - UNLIMITED
                      </div>
                      <div className="w-[40%] pl-4 flex items-center h-full">
                          10.5%
                      </div>
                  </div>

                  <div className="w-full h-9 flex items-center justify-end pr-4 border border-gray-200">
                      Calculate your profit &gt; &gt;
                  </div>
              </div>
          </div>
      </div>
  );
}

export default Invest
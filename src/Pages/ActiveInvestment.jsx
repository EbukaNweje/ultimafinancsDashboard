

const ActiveInvestment = () => {
  return (
      <div className="w-full mt-16 pb-5 min-h-[81vh] bg-white px-20 phone:px-4 pt-5">
          <div className="border w-full flex flex-col gap-4 h-max border-gray-200 p-10 phone:p-5 text-sm font-semibold phone:text-sm">
              <p className="text-3xl font-bold text-[rgb(54,74,99)]">
                  Make a Deposit
              </p>
              <p className="text-2xl font-bold text-[rgb(54,74,99)]">
                  Total: $0.00
              </p>
              <div className="w-full h-max">
                  <div className="w-full h-9  flex gap-2 items-center justify-center  pl-4 bg-[#1b2238] text-white border-b border-b-gray-200">
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

                  <div className="w-full h-9 font-bold flex items-center justify-start pl-4 border border-gray-200">
                      No deposit for this plan
                  </div>
              </div>
              <div className="w-full h-max">
                  <div className="w-full h-9  flex gap-2 items-center justify-center  pl-4 bg-[#1b2238] text-white border-b border-b-gray-200">
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
                          $3000.00 - $6999.00
                      </div>
                      <div className="w-[40%] pl-4 flex items-center h-full">
                          6.5
                      </div>
                  </div>

                  <div className="w-full h-9 font-bold flex items-center justify-start pl-4 border border-gray-200">
                      No deposit for this plan
                  </div>
              </div>
              <div className="w-full h-max">
                  <div className="w-full h-9  flex gap-2 items-center justify-center  pl-4 bg-[#1b2238] text-white border-b border-b-gray-200">
                      8.0% After 24 hours
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
                          $7000.00 - $14999.00
                      </div>
                      <div className="w-[40%] pl-4 flex items-center h-full">
                          8.0 %
                      </div>
                  </div>

                  <div className="w-full h-9 font-bold flex items-center justify-start pl-4 border border-gray-200">
                      No deposit for this plan
                  </div>
              </div>
              <div className="w-full h-max">
                  <div className="w-full h-9  flex gap-2 items-center justify-center  pl-4 bg-[#1b2238] text-white border-b border-b-gray-200">
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
                          $15000.00 and more
                      </div>
                      <div className="w-[40%] pl-4 flex items-center h-full">
                          10.50 %
                      </div>
                  </div>

                  <div className="w-full h-9 font-bold flex items-center justify-start pl-4 border border-gray-200">
                      No deposit for this plan
                  </div>
              </div>
          </div>
      </div>
  );
}

export default ActiveInvestment
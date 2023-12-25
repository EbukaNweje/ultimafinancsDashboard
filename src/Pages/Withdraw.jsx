import "./WithdrawStyle.css";

const Withdraw = () => {
  return (
    <div className="w-full mt-16 min-h-[81vh] bg-white px-20 pt-5">
        <div className="WithdrawBody">
            <h1>Ask for withdrawal:</h1>
            
              <p className="justList">Account Balance:	$0.00</p>
            <ul>

                <li>
                  <div className="ListSpace">
                    <p>Pending Withdrawals:	</p>
                  <span className="ListSpace2">$0.00</span>
                  </div>
                </li>

                <li>
                  <div className="ListSpace">
                  <p>Your Bitcoin - BTC Account:	</p> 
                  <span className="ListSpace2">Wallet Address: not set</span>
                  </div>
                </li>
                <li>
                  <div className="ListSpace">
                  <p>Your Ethereum - ETH Account:</p>	 
                  <span className="ListSpace2">Wallet Address: not set</span>
                  </div>
                </li>
                <li>
                  <div className="ListSpace">
                 <p> Your Tether - USDT Account:</p>
                  <span className="ListSpace2">Wallet Address: not set</span>
                  </div>
                </li>
                <li>
                  <div className="ListSpace">
                  Your Tron -TRX Account:	 
                  <span className="ListSpace2">Wallet Address: not set</span>
                  </div>
                </li>
                <li>
                  <div className="ListSpace">
                  <p> Your Shiba Inu Account:	 </p>
                  <span className="ListSpace2">Wallet Address: not set</span>
                  </div>
                  </li>
                <li>
                  <div className="ListSpace">
                  <p> Your Bitcoin Cash - BCH Account:</p>	 
                  <span className="ListSpace2">Wallet Address: not set</span>
                  </div>
                </li>
                <li>
                <div className="ListSpace">
                  <p> Your Litecoin - LTC Account:	</p>
                 <span className="ListSpace2">Wallet Address: not set</span>
                </div>
                </li>
                <li>
                  <div className="ListSpace">
                  <p>Your Xrp (ripple) Account:	</p>
                  <span className="ListSpace2">Account ID: not set</span>
                  </div>
                </li>
            </ul>
            
            <p className="Funds">You have no funds to withdraw.</p>
        </div>
    </div>
  )
}

export default Withdraw
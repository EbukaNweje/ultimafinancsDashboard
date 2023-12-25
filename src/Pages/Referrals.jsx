import "./ReferralsStyle.css"

const Referrals = () => {
  return (
    <div className="w-full mt-16 min-h-[81vh] bg-white px-20 pt-5">
        <div className="ReferralsBody">
          <h1>Your Referrals:</h1>

          <div className="Ref">
            <label>Your Referral Link:</label>
            <input type="text" value="https://ultimafinances.com/" readOnly/>
          </div>

          <div className="LastPart">
            <div className="LastPartWork">
              <p>Referrals:</p>
              <span>0</span>
            </div>
            <div className="LastPartWork">
              <p>Active referrals:</p>
              <span>0</span>
            </div>
            <div className="LastPartWork">
              <p>Total referral commission:</p>
              <span>$0.00</span>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Referrals
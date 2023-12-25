import "./SecurityStyle.css"

const Security = () => {
  return (
    <div className="w-full mt-16 min-h-[81vh] bg-white px-20 pt-5">
        <div className="SecurityBody">
          <h1>Advanced login security settings:</h1>

          <div className="Security">
              <p>Detect IP Address Change Sensitivity</p>
              <div className="SecurityInput">
                <input type="radio"  name="w"/>
                <p>Disabled</p>
              </div>
              <div className="SecurityInput">
                <input type="radio"  name="w"/>
                <p>Medium</p>
              </div>
              <div className="SecurityInput">
                <input type="radio" name="w" />
                <p>High</p>
              </div>
          </div>

          <div className="Security">
              <p>Detect Browser Change</p>
              <div className="SecurityInput">
                <input type="radio"  name="ww"/>
                <p>Disabled</p>
              </div>
              <div className="SecurityInput">
                <input type="radio"  name="ww"/>
                <p>Enabled</p>
              </div>
          </div>

          <button className="Btn">Set</button>
        </div>
    </div>
  )
}

export default Security
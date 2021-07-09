import './register.css';
import { HiOutlineTicket } from 'react-icons/hi';
import { BsThreeDots } from 'react-icons/bs';
import lottery_img from '../assets/lottery_img.png';

const Register = () => {
  return (
    <div className="register">

      {/* LEFT SIDE START */}
      <div className="leftPanel">
        <div className="leftPanelLogo">
          <span><HiOutlineTicket size={30} /></span>
          <span>Lottery Display</span>
        </div>

        <div className="leftPanelText">
          <p>A few clicks away from</p>
          <p>creating your Lottery Display</p>
        </div>


        <div className="leftPanelImage"
          style={{ backgroundImage: `url(${lottery_img})` }}>
        </div>

        <div className="leftPanelDots">
          <BsThreeDots size={50} />
        </div>
      </div>
      {/* LEFT SIDE ENDS */}

      {/* RIGHT SIDE STARTS */}

      <div className="rightPanel">
        <div className="rightPanelContainer">

          <div className="rightPanelRegister">
            <h3>Register</h3>
          </div>

          <div className="rightPanelText">
            <h4>Manage all your lottery efficiently</h4>
            <p>Let's get you all set up so you can verify your personal account and begin <br />setting up your profile.</p>
          </div>

          <div className="rightPanelForm">

            <div className="rightPanelRow1">
              <span>
                <label>First Name</label>
                <input
                  type="text"
                />
              </span>

              <span>
                <label>Last Name</label>
                <input
                  type="text"
                />
              </span>
            </div>

            <div className="rightPanelRow1">
              <span>
                <label>Phone Number</label>
                <input
                  type="text"
                />
              </span>

              <span>
                <label>Email</label>
                <input
                  type="text"
                />
              </span>
            </div>

            <div className="rightPanelRow1">
              <span>
                <label>Password</label>
                <input
                  type="password"
                />
              </span>

              <span>
                <label>Confirm Password</label>
                <input
                  type="password"
                />
              </span>
            </div>

          </div>

          <div className="rightPanelAgreement">
            <span>
              <input
                type="checkbox" />
                <label>Yes, i want to receive Lottery Display emails</label>
            </span>
            <span>
              <input
                type="checkbox" />
                <label>I agree to all the Term, Privacy Policy and Fees</label>
            </span>
          </div>

          <div className="rightPanelButton">
            <button>Create Account</button>
          </div>

          <div className="rightPanelBotText">
            <p>Already have an account? Log in</p>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE ENDS */}
    </div>
  );
}

export default Register;
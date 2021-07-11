import './login.css';
import { HiOutlineTicket } from 'react-icons/hi';

const Login = () => {
  return (
    <div className="login">
      {/* LEFT PANEL */}
      <div className="leftPanel">

        <div className="leftPanelText">
          <span>Make it simple, but<br />significant Lottery Display</span>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="rightPanel">

        <div className="rightPanelLogo">
          <span><HiOutlineTicket size={40} color="#09166a" /></span>
          <span>Lottery Display</span>
        </div>

        <div className="rightPanelLoginContainer">
          <span>Login</span>
          <span>Login to your account</span>
          <span>Thank you for get back to Lottery Display, lets access our the<br /> best recommendation for you</span>
          <span>
            <label>Username</label>
            <input type="text" />
          </span>

          <span>
            <label>Password</label>
            <input type="text" />
          </span>

          <div className="rightPanelReset">
            <div>
              <input type="checkbox" />
              <label>Remember me</label>
            </div>
            <label>Reset Password?</label>
          </div>

          <span><button>Sign In</button></span>
          <span>Don't have an account yet? Join Lottery Display</span>
        </div>
      </div>
    </div>
  );
}

export default Login;
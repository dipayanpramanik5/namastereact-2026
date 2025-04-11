import {LOGO_URL} from "../utils/constants";
import { useState } from "react";

// Header Component.
const Header = () => {

    const [btnNameReact, setBtnNameReact] = useState('Login');

    const loginClickHandler = () => {
      if (btnNameReact == 'Login') {
        setBtnNameReact("Logout");
      }
      else {
        setBtnNameReact("Login");
      }
    }   
    return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact US</li>
          <li>Cart</li>
          <button className="login-btn" onClick={() => loginClickHandler()}>{btnNameReact}</button>
        </ul>
      </div>
    </div>
    );
  };

export default Header;
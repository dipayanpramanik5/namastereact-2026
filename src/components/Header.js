import {LOGO_URL} from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

// Header Component.
const Header = () => {

    const [btnNameReact, setBtnNameReact] = useState('Login');
    const onlineStatus = useOnlineStatus();
    const  data = useContext(UserContext); // useContext to get the loggedInUser from UserContext
    
    // Subscribe to redux store using useSelector
    const cartItems = useSelector(store => store.cart.items); // get the items from the redux store
    const cartItemsCount = cartItems.length; // get the length of the items in the redux store
    const loginClickHandler = () => {
      if (btnNameReact == 'Login') {
        setBtnNameReact("Logout");
      }
      else {
        setBtnNameReact("Login");
      }
    }   
    return (
    <div className="flex justify-between bg-pink-50 shadow-lg">
      <div className="logo-container">
        <img className="h-27 align-middle" src={LOGO_URL}/>
      </div>
      <div className="nav-items">
        <ul className="flex py-10 px-5 space-x-4">
          <li>Online Status: {onlineStatus === true ?  "✅" : "❌" }</li>
          <li><Link to='/'>Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/cart">Cart - { cartItemsCount } Items</Link></li>
          <button className="login-btn" onClick={() => loginClickHandler()}>{btnNameReact}</button>
          <li className="px-4 font-bold">{btnNameReact == 'Logout' && "Hi " + data.loggedInUser}</li>
        </ul>
      </div>
    </div>
    );
  };

export default Header;
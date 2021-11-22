import React from "react";
import './_header.scss';

function Header() {
  return (
    <div className="header-container">
      <a href="#" className="header-logo-area">
        <img className="header-logo" src="https://sstk.biz/images/studystacklogo.svg" alt="logo"></img>
      </a>
      <div className="header-buttons-area">
        <a href="#" className="header-login">Log in</a>
        <a href="#" className="header-signup">Sign up</a>
      </div>
    </div>
  );
}
export default Header;

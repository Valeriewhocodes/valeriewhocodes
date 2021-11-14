import React from 'react';
function Header(){
return (
<div className="header-container">
    <div className="header-logo">
        <img src="https://sstk.biz/images/studystacklogo.svg"></img>
    </div>
    <div className="header-buttons-area">
        <button className="header-search">
            <img src="https://sstk.biz/images/search-icon.png"></img>
        </button>
        <button className="header-login">Log in</button>
        <button className="header-signup">Sign up</button>
    </div>
</div>

)
}
export default Header
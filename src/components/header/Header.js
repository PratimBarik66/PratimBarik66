import React from 'react'
import WebMatesLogo1 from './WebMatesLogo1.jpg';
import WebMatesLogoName1 from './WebMatesLogoName1.png';



function Header() {
  return (
    <div className="app_header">
      <img
        className="app_logo"
        src={WebMatesLogo1}
        alt=""
      />
      <img
        className="app_logo_name"
        src={WebMatesLogoName1}
        alt=""
      />
      
      <button className="button_signup">Log out</button>
      {/* <button className="button_login"></button> */}
      
    
    </div>
  )
}
export default Header


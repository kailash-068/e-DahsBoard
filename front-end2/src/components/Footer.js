import React from "react";

const Footer = () => {
    const year = new Date().getFullYear();
    return(
        <div className="footer">
            <h3>E-com DashBoard</h3>
            <p>Copyright ⓒ {year}</p>
        </div>
    )
}

export default Footer;
import React from 'react'
import './Footer.css'
import { AiFillLinkedin, AiFillInstagram, AiFillGithub } from 'react-icons/ai'

const Footer = () => {
    const OpenInNewTab = (url) => {
        window.open(url, '_blank').focus();
    }
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="footer-item"><h3 style={{ color: "violet", cursor: 'pointer' }}>Shopee</h3></div>
                <div className="footer-item"><span>docs</span></div>
                <div className="footer-item"><span onClick={() => OpenInNewTab("https://github.com/vm21242124")}>developer info</span></div>

                <div className="footer-item"><div className="social-network">

                    <AiFillLinkedin onClick={() => OpenInNewTab("https://www.linkedin.com/in/vinod-mali-9a2abb230/")} style={{ color: "blue", backgroundColor: "black", cursor: "pointer", fontSize: "25px" }} />
                    <AiFillInstagram onClick={() => OpenInNewTab("https://www.instagram.com/vm_2124/")} style={{ color: "pink", cursor: "pointer", fontSize: "25px" }} />
                    <AiFillGithub onClick={() => OpenInNewTab("https://github.com/vm21242124")} style={{ color: "white", cursor: "pointer", fontSize: "25px" }} />
                </div>

                </div>

            </div>

        </div>
    )
}

export default Footer
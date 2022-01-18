import React from "react";
import "../../asset/navbar.css";
import { BsArrowRightShort } from "react-icons/bs";
import { AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";

export default function Footer() {
  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        padding: "150px 0px 50px 0",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ width: "70%" }}>
          <h1 style={{ fontSize: "65px", fontWeight: "bold" }}>
            Start building with Mono
          </h1>
          <p style={{ fontSize: "34px", margin: "30px 0" }}>
            Access high-quality financial data and start processing payments
            directly from bank accounts in minutes.
          </p>
          <div>
            <button class="StartConnect2" style={{ marginRight: "30px" }}>
              Start now for free <BsArrowRightShort />
            </button>
            <button class="StartConnect3">
              Talk to Sales <BsArrowRightShort />
            </button>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "130px 0px 10x 0",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "70px 0",
            borderTop: "1px solid #7d7d7d",
            borderBottom: "1px solid #7d7d7d",
            width: "80%",
            margin: "100px 0 0 0",
          }}
        >
          <div>
            <ul className="footerList">
              <li>Products</li>
              <li>Connect</li>
              <li>Statement Pages</li>
              <li>DirectPay</li>
              <li>DirectPay Pages</li>
              <li>Portal</li>
              <li>Transactions</li>
              <li>Income</li>
              <li>Information</li>
              <li>Data Sync</li>
            </ul>
          </div>

          <div>
            <ul className="footerList">
              <li>Resources</li>
              <li>Developers</li>
              <li>Documentation</li>
              <li>API Reference</li>
              <li>SDKs</li>
              <li>Demo</li>
              <li>Join Slack</li>
              <li>Consumers</li>
            </ul>
          </div>

          <div>
            <ul className="footerList">
              <li>Company</li>
              <li>About us</li>
              <li>Partner stories</li>
              <li>Blog</li>
              <li>Coverage</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <ul className="footerList">
              <li>Legal</li>
              <li>End-User Policy</li>
              <li>Privacy Policy</li>
              <li>Developer Policy</li>
              <li>Terms of Use</li>
              <li>Cookies</li>
              <li>Security</li>
            </ul>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "10px 0px 10x 0",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "30px 0",
            width: "80%",
          }}
        >
          <div style={{ display: "flex" }}>
            <div
              className="companyLogo"
              style={{ backgroundColor: "white", marginRight: "20px" }}
            ></div>
            <span>© Mono Technologies Nigeria Limited</span>
          </div>
          <div style={{ display: "flex", fontSize: "20px" }}>
            <span style={{ marginRight: "20px" }}>
              <AiOutlineTwitter style={{ marginRight: "10px" }} />
              Twitter
            </span>
            <span>
              <AiFillLinkedin style={{ marginRight: "10px" }} /> LinkedIn
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { GiBackwardTime } from "react-icons/gi";

export default function Building() {
  return (
    <div>
      <div style={{ textAlign: "left" }}>
        <h1 className="bulid">
          Build for the future
          <br /> of digital finance.
        </h1>
        <p className="bring">
          Bring tomorrow's solutions to life, with our
          <br /> customer-focused solutions, today.
        </p>
      </div>

      <div>
        <div className="connect">
          <img
            src="https://monoassets.com/f/118499/x/17dc066d42/connect.svg"
            alt="error"
            width="80px"
          />
          <h3 className="connectText">Connect</h3>
          <p className="secure">
            Securely access financial accounts <br />
            for statements, transactions, and identity
          </p>
          <button className="StartConnect">
            Start with Connect <BsArrowRightShort className="arrowD" />
          </button>
        </div>
      </div>

      <div className="holdConnect23">
        <div className="connect2">
          <img
            src="https://monoassets.com/f/118499/x/4f8eb638fd/vector-1get-started-icon.svg"
            alt="error"
            width="40px"
          />
          <h3 className="connectText2">DirectPay</h3>
          <p className="secure2">
            Collect bank payments in your web or <br />
            mobile app. No cards. No chargebacks
          </p>
          <button className="StartConnect2">
            Start with DirectPay <BsArrowRightShort className="arrowD" />
          </button>
        </div>
        <div className="connect3">
          <img
            src="https://monoassets.com/f/118499/x/e9eb8d1c26/union.svg"
            alt="error"
            width="40px"
          />
          <h3 className="connectText3">Percept</h3>
          <p className="secure3">
            Money operations and reconciliation for all <br />
            your corporate accounts, in one dashboard
          </p>
          <button className="StartConnect3">
            Request access <GiBackwardTime className="arrowD" />
          </button>
        </div>
      </div>
    </div>
  );
}

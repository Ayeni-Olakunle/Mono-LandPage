import React from "react";
import { BsArrowRightShort } from "react-icons/bs";

export default function HeaderMe() {
  return (
    <div>
      <div className="holdFunding">
        <span className="new">NEW</span>
        <span className="funding">
          Announcing our $15 million Series A funding
        </span>
        <BsArrowRightShort style={{ fontSize: "20px", fontWeight: "bolder" }} />
      </div>
      <div>
        <h1 className="access">
          Reliably access
          <br />
          bank accounts
        </h1>
        <p className="monoHelp">
          Mono helps businesses to access high-quality
          <br />
          financial data and direct bank payments.
        </p>
      </div>
      <div style={{ textAlign: "left" }}>
        <button className="statted">
          Get started for free <BsArrowRightShort className="arrowD" />
        </button>
        <button className="statted2">
          Contact Sales <BsArrowRightShort className="arrowD" />
        </button>
      </div>
    </div>
  );
}

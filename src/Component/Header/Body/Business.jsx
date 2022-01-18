import React from "react";
import Photo from "../../../asset/card-pana.png";
import { BsArrowRightShort } from "react-icons/bs";

export default function Business() {
  return (
    <div>
      <div style={{ textAlign: "left" }}>
        <h1 className="bulid">
          Businesses building
          <br /> with Mono
        </h1>
        <p className="bring">
          Here are some of the interesting features and
          <br /> experiences powered by Mono.
        </p>
      </div>
      <div>
        <div className="busines">
          <ul className="unorderList">
            <li>Lending</li>
            <li>Financial Management</li>
            <li>Account Verification</li>
            <li>Payments</li>
          </ul>
          <div className="HoldCarbon">
            <div className="carbon">
              <h3 className="carbon1">
                Carbon's personalized
                <br /> loan offers
              </h3>
              <p className="carbon2">
                Carbon wanted to make their risk assessment and <br />
                borrower qualification better with high-quality data.
              </p>
              <p className="carbon2">
                Using Mono's Statement Pages, Carbon can receive its
                <br /> users' bank statements in minutes. They get cash flow
                <br /> on the accounts for up to 12 months, all seamlessly
                <br /> without writing a single line of code.
              </p>
              <button className="readmore">
                Read more about Statement Pages <BsArrowRightShort />
              </button>
            </div>
            <div>
              <img src={Photo} alt="" height="500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

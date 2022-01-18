import React from "react";
import { MdFormatQuote } from "react-icons/md";
import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";
export default function Review() {
  return (
    <div>
      <div style={{ textAlign: "left" }}>
        <h1 className="bulid">
          Why market leaders are
          <br /> choosing Mono
        </h1>
        <p className="bring">Here's what some of them are saying.</p>
      </div>
      <div className="holdReviewTwo">
        <div className="reviewText">
          <h1 style={{ fontSize: "80px" }}>
            <MdFormatQuote />
          </h1>
          <h3 style={{ fontSize: "40px", fontWeight: "bold" }}>
            It's important to go with a data provider that inspires confidence
            in users to give consent to share their data; this is one of our
            favourite things about Mono.
          </h3>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "100px",
            }}
          >
            <div className="smallImage"></div>
            <div style={{ marginLeft: "15px" }}>
              <h6
                style={{
                  fontSize: "18px",
                  fontWeight: 510,
                  padding: 0,
                  margin: 0,
                }}
              >
                Barima Effah-Adjei
              </h6>
              <span style={{ color: "gray" }}>Co-founder, Float</span>
            </div>
          </div>
        </div>
        <div className="reviewText">
          <h1 style={{ fontSize: "80px" }}>
            <MdFormatQuote />
          </h1>
          <h3 style={{ fontSize: "40px", fontWeight: "bold" }}>
            The onboarding and integration process with Mono was smooth. Our
            Engineering and Product teams use the dashboard to oversee our
            statement collection process.
          </h3>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "50px",
            }}
          >
            <div className="smallImage2"></div>
            <div style={{ marginLeft: "15px" }}>
              <h6
                style={{
                  fontSize: "18px",
                  fontWeight: 510,
                  padding: 0,
                  margin: 0,
                }}
              >
                Emmanuel Ogunsola
              </h6>
              <span style={{ color: "gray" }}>Product Manager, Aella</span>
            </div>
          </div>
        </div>
      </div>
      <div className="holdArrow">
        <div style={{ display: "flex" }}>
          <div className="smallerCircle"></div>
          <div className="smallerCircle2"></div>
        </div>
        <div style={{ display: "flex", fontSize: "30px" }}>
          <div className="navi">
            <BsArrowLeftShort />
          </div>
          <div className="navi2">
            <BsArrowRightShort />
          </div>
        </div>
      </div>
    </div>
  );
}

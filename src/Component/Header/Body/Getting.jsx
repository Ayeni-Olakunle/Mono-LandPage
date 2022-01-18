import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

export default function Getting() {
  return (
    <div>
      <div className="holdGetting">
        <h3 className="holdGettingText">Getting started</h3>
        <div className="holdPowerFul">
          <div style={{ textAlign: "left", padding: "50px" }}>
            <img
              src="https://monoassets.com/f/118499/x/10923dd075/icon_powerful-apis-1.svg"
              alt="error"
              width="80px"
            />
            <h1
              style={{ fontSize: "50px", margin: "20px 0", fontWeight: "bold" }}
            >
              Powerful APIs
              <br /> and easy-to-use
              <br /> resources
            </h1>
            <button
              style={{
                fontSize: "20px",
                color: "#0055c0",
                backgroundColor: "transparent",
                border: "none",
              }}
            >
              Read our API Docs <FiArrowUpRight />
            </button>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "end",
              padding: "0 30px",
            }}
          >
            <img
              src="https://monoassets.com/f/118499/540x380/1298b7c253/api-response-frame.png"
              alt="error"
              width="500px"
            />
          </div>
        </div>
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div
              style={{
                textAlign: "left",
                padding: "30px 20px",
                backgroundColor: "white",
                width: "30%",
                borderRadius: "25px",
                height: "400px",
              }}
            >
              <img
                src="https://monoassets.com/f/118499/x/04b09ee182/icon_plug-and-play-sdks.svg"
                alt="error"
                width="110px"
                height="110px"
              />
              <h1
                style={{
                  fontSize: "40px",
                  margin: "20px 0",
                  fontWeight: "bold",
                }}
              >
                Plug-and-play
                <br /> SDKs
              </h1>
              <button
                style={{
                  fontSize: "20px",
                  color: "#0055c0",
                  backgroundColor: "transparent",
                  border: "none",
                }}
              >
                Explore our SDKs
                <FiArrowUpRight />
              </button>
            </div>
            <div
              style={{
                textAlign: "left",
                padding: "30px 20px",
                backgroundColor: "white",
                width: "30%",
                borderRadius: "25px",
                height: "400px",
              }}
            >
              <img
                src="https://monoassets.com/f/118499/x/15f1b3037b/icon_beautiful-ux.svg"
                alt="error"
                width="110px"
                height="110px"
              />
              <h1
                style={{
                  fontSize: "40px",
                  margin: "20px 0",
                  fontWeight: "bold",
                }}
              >
                Beautiful
                <br /> seamless UX
              </h1>
              <button
                style={{
                  fontSize: "20px",
                  color: "#0055c0",
                  backgroundColor: "transparent",
                  border: "none",
                }}
              >
                See a demo
                <FiArrowUpRight />
              </button>
            </div>
            <div
              style={{
                textAlign: "left",
                padding: "30px 20px",
                backgroundColor: "white",
                width: "30%",
                borderRadius: "25px",
                height: "400px",
              }}
            >
              <img
                src="https://monoassets.com/f/118499/x/5d33f99a17/icon_slack.svg"
                alt="error"
                width="110px"
                height="110px"
              />
              <h1
                style={{
                  fontSize: "40px",
                  margin: "20px 0",
                  fontWeight: "bold",
                }}
              >
                Always-on <br />
                support
              </h1>
              <button
                style={{
                  fontSize: "20px",
                  color: "#0055c0",
                  backgroundColor: "transparent",
                  border: "none",
                }}
              >
                Join us on Slack
                <FiArrowUpRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

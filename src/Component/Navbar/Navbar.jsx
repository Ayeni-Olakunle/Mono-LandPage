import React from "react";
// import "../../asset/navbar.css";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function NavBar() {
  return (
    <div className="holdNav">
      <div className="companyLogo"></div>
      <div>
        <ul className="ulItSelf">
          <li className="LiItSelf">
            Why Mono <RiArrowDropDownLine style={{ fontSize: "30px" }} />
            <ul>
              <div className="holdSubMenu">
                <li className="listItSelf">
                  <div>
                    <img
                      src="https://monoassets.com/f/118499/x/fdd571b7d0/nav_icon_why_mono.svg"
                      alt="image"
                    />
                  </div>
                  <div style={{ marginLeft: "20px" }}>
                    <h4 className="chooseMono">Why Choose Mono</h4>
                    <span className="chooseMonoText">
                      Here's why 250+ Businesses & Developers
                      <br /> use Mono APIs
                    </span>
                  </div>
                </li>
                <li className="listItSelf">
                  <div>
                    <img
                      src="https://monoassets.com/f/118499/x/e137a1583c/pricing.svg"
                      alt="image"
                    />
                  </div>
                  <div style={{ marginLeft: "20px" }}>
                    <h4 className="chooseMono">Pricing</h4>
                    <span className="chooseMonoText">
                      Affordable pricing for developers, SMEs,
                      <br /> and enterprises
                    </span>
                  </div>
                </li>
                <li className="listItSelf">
                  <div>
                    <img
                      src="https://monoassets.com/f/118499/x/d7b4412424/nav_icon_demo.svg"
                      alt="image"
                    />
                  </div>
                  <div style={{ marginLeft: "20px" }}>
                    <h4 className="chooseMono">See a Demo</h4>
                    <span className="chooseMonoText">
                      Experience Mono APIs in action
                    </span>
                  </div>
                </li>
              </div>
            </ul>
          </li>
          <li className="LiItSelf">
            Products <RiArrowDropDownLine style={{ fontSize: "30px" }} />
            <ul>
              <div
                className="holdSubMenu"
                style={{ marginLeft: "-360px", padding: "20px 70px" }}
              >
                <div style={{ display: "flex" }}>
                  <div style={{ marginRight: "100px" }}>
                    <li className="listItSelf">
                      <div>
                        <img
                          src="https://monoassets.com/f/118499/x/17dc066d42/connect.svg"
                          alt="image"
                        />
                      </div>
                      <div style={{ marginLeft: "20px" }}>
                        <h4 className="chooseMono">Connect</h4>
                        <span className="chooseMonoText">
                          Financial account linking
                        </span>
                      </div>
                    </li>

                    <li className="listItSelf">
                      <div>
                        <img
                          src="https://monoassets.com/f/118499/x/58b645d888/directpay.svg"
                          alt="image"
                        />
                      </div>
                      <div style={{ marginLeft: "20px" }}>
                        <h4 className="chooseMono">DirectPay</h4>
                        <span className="chooseMonoText">
                          Direct bank payment collection
                        </span>
                      </div>
                    </li>

                    <li className="listItSelf">
                      <div>
                        <img
                          src="https://monoassets.com/f/118499/x/f04629fa31/portal.svg"
                          alt="image"
                        />
                      </div>
                      <div style={{ marginLeft: "20px" }}>
                        <h4 className="chooseMono">Portal</h4>
                        <span className="chooseMonoText">
                          Linked account management
                        </span>
                      </div>
                    </li>
                  </div>

                  <div>
                    <li className="listItSelf">
                      <div>
                        <img
                          src="https://monoassets.com/f/118499/x/464e7ff2da/statement-pages.svg"
                          alt="image"
                        />
                      </div>
                      <div style={{ marginLeft: "20px" }}>
                        <h4 className="chooseMono">Statement Pages</h4>
                        <span className="chooseMonoText">
                          No-code bank statement collection
                        </span>
                      </div>
                    </li>

                    <li className="listItSelf">
                      <div>
                        <img
                          src="https://monoassets.com/f/118499/x/4ec8eec578/direct-pay-pages.svg"
                          alt="image"
                        />
                      </div>
                      <div style={{ marginLeft: "20px" }}>
                        <h4 className="chooseMono">DirectPay Pages</h4>
                        <span className="chooseMonoText">
                          No-code bank payment collection
                        </span>
                      </div>
                    </li>

                    <li className="listItSelf">
                      <div>
                        <img
                          src="https://monoassets.com/f/118499/x/a451eadca5/percept.svg"
                          alt="image"
                        />
                      </div>
                      <div style={{ marginLeft: "20px" }}>
                        <h4 className="chooseMono">Percept</h4>
                        <span className="chooseMonoText">
                          Corporate finance management
                        </span>
                      </div>
                    </li>
                  </div>
                </div>
              </div>
            </ul>
          </li>
          <li className="LiItSelf">
            Learn <RiArrowDropDownLine style={{ fontSize: "30px" }} />
            <ul>
              <div
                className="holdSubMenu"
                style={{ marginLeft: "-137px", width: "270px" }}
              >
                <li className="listItSelf">
                  <div>
                    <img
                      src="https://monoassets.com/f/118499/x/1809dcf36d/about-us-icon.svg"
                      alt="image"
                    />
                  </div>
                  <div style={{ marginLeft: "20px" }}>
                    <h4 className="chooseMono">About us</h4>
                  </div>
                </li>
                <li className="listItSelf">
                  <div>
                    <img
                      src="https://monoassets.com/f/118499/x/d8c5f5c911/blog-icon.svg"
                      alt="image"
                    />
                  </div>
                  <div style={{ marginLeft: "20px" }}>
                    <h4 className="chooseMono">Blog</h4>
                  </div>
                </li>
                <li className="listItSelf">
                  <div>
                    <img
                      src="https://monoassets.com/f/118499/x/2329b5427d/tutorials-icon.svg"
                      alt="image"
                    />
                  </div>
                  <div style={{ marginLeft: "20px" }}>
                    <h4 className="chooseMono">Tutorials</h4>
                  </div>
                </li>
                <li className="listItSelf">
                  <div>
                    <img
                      src="https://monoassets.com/f/118499/x/8b9589ce43/product-icon.svg"
                      alt="image"
                    />
                  </div>
                  <div style={{ marginLeft: "20px" }}>
                    <h4 className="chooseMono">Coverage</h4>
                  </div>
                </li>
              </div>
            </ul>
          </li>
          <li className="LiItSelf">
            Developers <RiArrowDropDownLine style={{ fontSize: "30px" }} />
            <ul>
              <div className="holdSubMenu" style={{ marginLeft: "-90px" }}>
                <li className="listItSelf">
                  <div>
                    <img
                      src="https://monoassets.com/f/118499/x/ecc89061ed/overview-icon.svg"
                      alt="image"
                    />
                  </div>
                  <div style={{ marginLeft: "20px" }}>
                    <h4 className="chooseMono">Overview</h4>
                  </div>
                </li>
                <li className="listItSelf">
                  <div>
                    <img
                      src="https://monoassets.com/f/118499/x/37ee02a98e/docs-icon.svg"
                      alt="image"
                    />
                  </div>
                  <div style={{ marginLeft: "20px" }}>
                    <h4 className="chooseMono">Documentation</h4>
                  </div>
                </li>
              </div>
            </ul>
          </li>
        </ul>
      </div>
      <div>
        <button className="navBarSignInButton">Sign in</button>
      </div>
    </div>
  );
}

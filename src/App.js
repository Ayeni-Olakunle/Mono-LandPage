import "bootstrap/dist/css/bootstrap.min.css";
import Navabar from "./Component/Navbar/Navbar";
import HeaderMe from "./Component/Header/Header";
import Trusted from "./Component/Header/Body/Trusted";
import Building from "./Component/Header/Body/Building";
import Business from "./Component/Header/Body/Business";
import Review from "./Component/Header/Body/Review";
import Getting from "./Component/Header/Body/Getting";
import Footer from "./Component/Footer/Footer";
import phone from "./asset/payments.png";
import { Container, Row, Col } from "react-bootstrap";
import { IoMdArrowDropright } from "react-icons/io";
import "./asset/navbar.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col sm={12}>
            {" "}
            <Navabar />
          </Col>
        </Row>
        <Row style={{ marginTop: "100px" }}>
          <Col sm={7}>
            <HeaderMe />
          </Col>
          <Col sm={5}>
            <div>
              <img src={phone} alt="image" height="600px" width="450px" />
              <div className="holdReply">
                <p className="reply">
                  Reply <IoMdArrowDropright />
                </p>
              </div>
            </div>
          </Col>
        </Row>
        <Row style={{ marginTop: "100px" }}>
          <Col sm={12}>
            <Trusted />
          </Col>
        </Row>
        <Row style={{ marginTop: "100px" }}>
          <Col sm={12}>
            <Building />
          </Col>
        </Row>
        <Row style={{ marginTop: "100px" }}>
          <Col sm={12}>
            <Business />
          </Col>
        </Row>
        <Row style={{ marginTop: "100px" }}>
          <Col sm={12}>
            <Review />
          </Col>
        </Row>
      </Container>
      <Getting />
      <Footer />
    </div>
  );
}

export default App;

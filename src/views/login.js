import * as React from "react";
import "../style/login_new.scss";
import Imageex from "../assets/login/ex.bmp";
import imageid from "../assets/login/Loginid.png";
import imagepw from "../assets/login/Loginpw.png";

import {
  Navbar,
  Container,
  Nav,
  NavDrop,
  Button,
  Offcanvas,
  NavDropdown,
  Form,
  FormControl,
  Row,
  Col,
} from "react-bootstrap";
const Login_new = () => {
  const rGFereredffr = 1;
  return (
    <Container style={{ width: "660px" }}>
      <div className="logobox">
        <h3>선생님의 능력을 업그레이드 시켜드립니다 !</h3>
        <h3>체험 및 기능 연습을 위한 홈페이지 입니다.</h3>
        <h3>Login을 클릭하시면 시작됩니다!</h3>
      </div>
      <Row>
        <Col className="item" xs="6">
          <img src={Imageex} alt="" />
        </Col>
        <Col className="whitebox item" xs="6">
          <Row className="item" xs="1">
            <Col xs="4">이등분</Col>
            <Col xs="4">이등분</Col>
            <Col xs="4">이등분</Col>
          </Row>
          <Row className="item" xs="2">
            <div className="right_user">
              <Col xs="1">
                <img src={imageid} alt="" />
              </Col>
              <Col xs="11">
                <input type="text" className="inputbox" />
              </Col>
            </div>
          </Row>
          <Row className="item" xs="1">
            <div>
              <h2>Password</h2>
              <div className="right_user">
                <div className="pupple">
                  <img src={imagepw} alt="" style={{ height: "40px" }} />
                </div>

                <input type="text" style={{ height: "100%", width: "200px" }} />
              </div>
            </div>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Login_new;

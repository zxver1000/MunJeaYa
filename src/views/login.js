import "../style/login.scss";

import React from "react";
import { Link } from "react-router-dom";

import LoginImage from "../assets/login/login_image.png";
import LoginId from "../assets/login/login_id.png";
import LoginPw from "../assets/login/login_pw.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseChimney } from "@fortawesome/free-solid-svg-icons";

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
  return (
    <div className="login-box">
      <header>
        <h3>선생님의 능력을 업그레이드 시켜드립니다 !</h3>

        <h3>Login을 클릭하시면 시작됩니다!</h3>
      </header>
      <section className="login-main">
        <section className="top">
          <section className="left">
            <img src={LoginImage}></img>
          </section>
          <section className="right">
            <article>MEMBER LOGIN</article>
            <section className="login-id">
              <span>UserName</span>
              <div className="input">
                <img src={LoginId}></img>
                <input type="text"></input>
              </div>
            </section>
            <section className="login-pw">
              <span>Password</span>
              <div className="input">
                <img src={LoginPw}></img>
                <input type="password"></input>
              </div>
            </section>
            <Link to="/main">
              <section className="login-btn">
                <button>LOGIN</button>
              </section>
            </Link>
          </section>
        </section>
        <section className="bottom">
          <button>문제야 신규 회원가입</button>
          <p>아이디 정보 설정 완료하여 출고됩니다.</p>
          <div className="login-checkbox">
            <input type="checkbox" />
            <label>아이디 저장</label>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Login_new;

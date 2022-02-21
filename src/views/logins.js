import React from "react";
import { Navbar, Container, Nav, NavDrop, Button } from "react-bootstrap";
import { Link, Route, Switch } from "react-router-dom";
const Logins = () => {
  return (
    <div className="wrap">
      <div></div>
      <div className="login">
        <div>
          <img src="./pom.PNG" alt="" />
        </div>
        <h3>MunJeaYa</h3>
        <div className="login_sns">
          <li>
            <a href="" style={{ background: "khaki" }}></a>
          </li>
          <li>
            <a href="" style={{ background: "orange" }}></a>
          </li>
          <li>
            <a href="" style={{ background: "skyblue" }}></a>
          </li>
        </div>
        <div className="login_id">
          <h4>ID</h4>
          <input />
        </div>
        <div className="login_pw">
          <h4>Password</h4>
          <input />
        </div>
        <div className="login_etc">
          <div className="checkbox"></div>
          <a href="">Find ID </a>
          <div className="log_btn">
            <Link to="/main">
              <Button variant="primary">Login</Button>
            </Link>
          </div>
        </div>
        <div className="submit"></div>
      </div>
    </div>
  );
};

export default Logins;

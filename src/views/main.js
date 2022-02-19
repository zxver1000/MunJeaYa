import "../style/main.css";
import React, { useEffect, useState } from "react";
import image1 from "../assets/12_images.png";
import icon12 from "../assets/main_icon12.png";
import mainlog from "../assets/main_logo.png";
import { Link, Route, Switch } from "react-router-dom";
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
import { isCursorAtEnd } from "@testing-library/user-event/dist/utils";

function icon_insert(기본정보창상태변경) {
  var array = [];
  var s = "main_icon12";
  var urls = "../assets/main_icon12.png";
  var z = "button main_icon12";
  var class_name = "button main_icon";
  var num;

  for (let i = 1; i <= 12; i++) {
    class_name = "button main_icon";
    num = i;
    class_name = class_name + num;
    console.log(class_name);
    if (i == 6) {
      array.push(
        <Col>
          <Link to="/StudentManage">
            <a
              className={class_name}
              onClick={() => {
                기본정보창상태변경(true);
              }}
            ></a>
          </Link>
        </Col>
      );
    } else {
      array.push(
        <Col>
          <a
            className={class_name}
            onClick={() => {
              기본정보창상태변경(true);
            }}
          ></a>
        </Col>
      );
    }
  }

  return array;
}

const Main = () => {
  let [기본정보창상태, 기본정보창상태변경] = useState(false);

  return (
    <div>
      <Navbar bg="light" expand={false}>
        <Container fluid>
          <Navbar.Brand href="#" style={{ fontWeight: "bold" }}>
            Filpplus 구입문의 010-2004-1484
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>

      <Container className="background">
        <img src={mainlog} alt="" style={{ width: "100%", height: "200px" }} />

        {기본정보창상태 == true ? (
          <Container>
            <div
              className="nomal_box"
              onClick={() => {
                기본정보창상태변경(false);
              }}
            >
              <img src={image1} width="100%" />
            </div>
          </Container>
        ) : null}

        <div className="row">{icon_insert(기본정보창상태변경)}</div>
      </Container>
    </div>
  );
};

export default Main;

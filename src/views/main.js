import "../style/main.css";
import React, { useEffect, useState } from "react";
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
import CourseManage from "./CourseManage";
import StudentManage from "./StudentManage";
import TreeManage from "./TreeManage";
import PaperRegistration from "./PaperRegistration";
import ErrorCorrection from "./ErrorCorrection";
import ConfirmRepetition from "./ConfirmRepettion";

function 상단바() {
  return (
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
  );
}

function icon_insert(기본정보창상태변경) {
  var array = [];
  var class_name = "button main_icon";
  let icon_name = [
    "CreatePaper",
    "myPapers",
    "IncorrectManage",
    "RecordingCards",
    "CourseManage",
    "StudentManage",
    "TreeManage",
    "Createbook",
    "PaperRegistration",
    "ErrorCorrection",
    "ConfirmRepetition",
    "BasicInformation",
  ];
  for (let i = 1; i <= 12; i++) {
    class_name = "button main_icon" + i;

    array.push(
      <Col key={class_name} xs="6" md="6" lg="3">
        <Link
          to={icon_name[i - 1]}
          className={class_name}
          onClick={() => {
            기본정보창상태변경(true);
          }}
        ></Link>
      </Col>
    );
  }

  return array;
}

const Main = () => {
  let [기본정보창상태, 기본정보창상태변경] = useState(false);

  return (
    <Container>
      <Row xs="3" md="6" lg="3">
        {icon_insert(기본정보창상태변경)}
      </Row>
    </Container>
  );
};

export default Main;

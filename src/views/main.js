import "../style/main.css";
import React, { useEffect, useState } from "react";
import image1 from "../assets/12_images.png";
import icon12 from "../assets/main_icon12.png";
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
  var urls = "../assets/main_icon12.png";
  var url2 =
    "http://localhost:3000/react-flip/static/media/main_icon1.6d11817a5ef80923c88b.png";
  for (let i = 0; i < 12; i++) {
    if (i == 11) {
      array.push(
        <Col>
          <a
            className="button main_icon12"
            style={{ backgroundImage: `url({icon12})` }}
            onClick={() => {
              기본정보창상태변경(true);
            }}
          ></a>
        </Col>
      );
    } else {
      array.push(
        <Col>
          <a href="" className="button"></a>
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
          <Navbar.Brand href="#">Filpplus</Navbar.Brand>

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
        <div className="garbage"></div>
      </Container>

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

      <Container>
        <div className="row">{icon_insert(기본정보창상태변경)}</div>
      </Container>
    </div>
  );
};

export default Main;

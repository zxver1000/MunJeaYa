import "./style/App.css";
import "./style/main.css";

import { Link, Route, BrowserRouter, Switch } from "react-router-dom";
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
import Main from "./views/main";
import Logins from "./views/logins";
import StudentManage from "./views/StudentManage";
import CreatePapers from "./views/Createpaper";
import MyPapers from "./views/MyPapers";
import IncorrectManage from "./views/IncorrectManage";
import RecordingCards from "./views/RecordingCards";
import CourseManage from "./views/CourseManage";
import TreeManage from "./views/TreeManage";
import Createbook from "./views/Createbook";
import PaperRegistration from "./views/PaperRegistration";
import ErrorCorrection from "./views/ErrorCorrection";
import ConfirmRepetition from "./views/ConfirmRepettion";
import BasicInformation from "./views/BasicInformation";
import mainlog from "./assets/main_logo.png";
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

function App() {
  return (
    <div>
      <Route exact path="/">
        <Logins />
      </Route>
      {상단바()}

      <div className="background">
        <Link to="/main">
          <img className="main-background" src={mainlog} />
        </Link>

        <Switch>
          <Route exact path="/main">
            <Main />
          </Route>

          <Route exact path="/CreatePaper">
            <CreatePapers />
          </Route>

          <Route exact path="/myPapers">
            <MyPapers />
          </Route>
          <Route exact path="/IncorrectManage">
            <IncorrectManage />
          </Route>
          <Route exact path="/RecordingCards">
            <RecordingCards />
          </Route>
          <Route exact path="/CourseManage">
            <CourseManage />
          </Route>

          <Route exact path="/TreeManage">
            <TreeManage />
          </Route>
          <Route exact path="/Createbook">
            <Createbook />
          </Route>
          <Route exact path="/PaperRegistration">
            <PaperRegistration />
          </Route>

          <Route exact path="/ErrorCorrection">
            <ErrorCorrection />
          </Route>
          <Route exact path="/ConfirmRepetition">
            <ConfirmRepetition />
          </Route>
          <Route exact path="/BasicInformation">
            <BasicInformation />
          </Route>

          <Route exact path="/StudentManage">
            <StudentManage />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;

import "./style/App.css";
import "./style/main.css";
import navlogo from "./assets/nav_logo.png";
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Main from "./views/main";
import Logins from "./views/login";
import StudentManage from "./views/StudentManage";
import CreatePaper from "./views/CreatePaper";
import MyPapers from "./views/MyPapers";
import IncorrectManage from "./views/IncorrectManage";
import RecordingCards from "./views/RecordingCards";
import CourseManage from "./views/CourseManage";
import TreeManage from "./views/TreeManage";
import CreateBook from "./views/CreateBook";
import PaperRegistration from "./views/PaperRegistration";
import ErrorCorrection from "./views/ErrorCorrection";
import ConfirmRepetition from "./views/ConfirmRepettion";
import BasicInformation from "./views/BasicInformation";
import mainlog from "./assets/main_logo.png";
import Login_new from "./views/login";
function 상단바() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Link to="/main">
          <Navbar.Brand>
            <img src={navlogo} alt="" style={{ width: "200px" }} />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pom문제야 사이트</Nav.Link>
            <NavDropdown title="판매 제품" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">보급형</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">고급형</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
var 로고온 = false;
function App() {
  return (
    <div className="background">
      {상단바()}

      <div>
        <Link to="/main">
          <img className="main-background" src={mainlog} />
        </Link>

        <Switch>
          <Route exact path="/">
            <Logins />
          </Route>

          <Route exact path="/test">
            <Login_new />
          </Route>

          <Route exact path="/main">
            <Main />
          </Route>

          <Route exact path="/CreatePaper">
            <CreatePaper />
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
          <Route exact path="/CreateBook">
            <CreateBook />
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

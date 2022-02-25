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
import { faPhone } from "@fortawesome/free-solid-svg-icons";
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
            <img src={navlogo} alt="" style={{ width: "80px" }} />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link style={{ fontWeight: "bold" }}>㈜TalkingMath</Nav.Link>

            <NavDropdown
              title="판매 제품"
              id="collasible-nav-dropdown"
              style={{ fontWeight: "bold" }}
            >
              <NavDropdown.Item>보급형</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>고급형</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link style={{ fontWeight: "bold" }}>
              <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
              구매문의 010-2004-1484
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
            <h3 className="main_text">확인하시고자 하는 기능 클릭하세요</h3>

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

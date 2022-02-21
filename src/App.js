import "./style/App.css";
import "./style/main.css";

import { Link, Route, BrowserRouter, Switch } from "react-router-dom";
import { Navbar, Container, Nav, NavDrop, Button } from "react-bootstrap";
import Main from "./views/main";
import Logins from "./views/login/logins";
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

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Logins />
        </Route>

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
  );
}

export default App;

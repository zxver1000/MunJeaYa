import logo from './logo.svg';
import './App.css';
import Home from './pages/hom';
import './pages/main.css';
import Contact from './pages/contact';
import About from './pages/about';
import {Link,Route,BrowserRouter,Switch} from 'react-router-dom';
import Login from './pages/login';

import { Navbar,Container,Nav,NavDrop,Button} from 'react-bootstrap';
import Logins from './pages/logins';
import Main from './pages/main';
function Ea(){
  return(
    <div>
      <h3>hkhk</h3>
    </div>
  );

}

function App() {
  return (
    <div >
    
  
     <Switch>
        <Route exact path="/" component={Ea}>
        <Logins />
        </Route>

        <Route exact path="/main">
         
         <Main/>
        </Route>
     
        <Route exact  path="/contact">
         <Login/>
        </Route>
       
     </Switch>






  
      </div>
  );
}

export default App;


import React from 'react';
import { Navbar,Container,Nav,NavDrop,Button} from 'react-bootstrap';
import {Link, Route, Switch} from 'react-router-dom';
const Logins = () =>{


    return (
        <div class="wrap">
             <div>
      
    </div>
<div class="login">
    <div>
<img src="./pom.PNG" alt="" />
</div>
    <h3>MunJeaYa</h3>
    <div class="login_sns">
    <li><a href="" style={{background:'khaki'}}></a></li>
    <li><a href="" style={{background:'orange'}}></a></li>
    <li><a href="" style={{background:'skyblue'}}></a></li>
    
    </div>
    <div class="login_id">
        <h4>ID</h4>
        <input />
    </div>
    <div class="login_pw">
        <h4>Password</h4>
       <input />
           </div>
    <div class="login_etc">
        <div class="checkbox">
      
        </div>
        <a href="">Find ID </a>
        <div class="log_btn">
            
        
        <Link to="/main">
        <Button variant="primary">Login</Button>
        </Link>
    </div>
    </div>
    <div class="submit">
        
    </div>
</div>
</div>
    );
};

export default Logins;


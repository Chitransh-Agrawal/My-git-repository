import React, {Component} from 'react';
import  './Header.css';
import { Button } from '@material-ui/core';



class Header extends Component{

     

    render(){
        return <div className="header-main-container">
            <img id="logo-img" src='../../assets/logo.svg'/>

           <div id="book-btn">
           <Button   variant="contained" color="default" >Login</Button>
            <Button  variant="contained" color="primary" >Book Show</Button>

           </div>
           
        </div>;
    }
}

export default Header;
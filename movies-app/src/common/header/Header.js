import React, {Component} from 'react';
import  './Header.css';
import { Button } from '@material-ui/core';



class Header extends Component{

    render(){
        return <div className="header-main-container">
            <img id="logo-img" src='../../assets/logo.svg'/>
            <Button id="book-btn" variant="contained" color="primary" >BOOK NOW</Button>
        </div>;
    }
}

export default Header;
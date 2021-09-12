import React, {Component} from 'react';
import  './Header.css';



class Header extends Component{

    render(){
        return <div className="header-main-container">
            <img id="logo-img" src='../../assets/logo.svg'/>
        </div>;
    }
}

export default Header;
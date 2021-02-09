import React from 'react';
import "./Header.css";
import LanguageIcon from '@material-ui/icons/Language';
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar } from '@material-ui/core';

const Header = () => {
    return (
        <div className="header">
            <img className="logo" src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c513.png" alt="logo"/>
            <div className="headerCenter">
                <input type="text"/>
                <SearchIcon />
            </div>
            <div className="headerRight">
                <p>Become a host</p>
                <LanguageIcon />
                <ExpandMoreIcon />
                <Avatar />
            </div>
        </div>
    )
}

export default Header

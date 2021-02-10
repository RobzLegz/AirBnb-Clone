import React from 'react';
import "./Header.css";
import LanguageIcon from '@material-ui/icons/Language';
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <Link to="/">
                <img className="logo" src="https://lh3.googleusercontent.com/proxy/8TFn_fPd39I3et-xIQhCVTb8MWWqEyHIta42BI9NtTbWYO6y9nSipMPUDH5W-HwYSs6dsy1a3BYbkrHuUggQTFMXLNT4mrGgHo7mEmMok531biBb9KQ" alt="logo"/>
            </Link>
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

import { Button } from '@material-ui/core';
import React from 'react';
import "./SearchPage.css";

const SearchPage = () => {
    return (
        <div className="searchPage">
            <div className="searchPageInfo">
                <p>62 stays 11 january to 15 january 2 guest</p>
                <h1>Stays nearby</h1>
                <Button variant="outlined">Cancellation Flexibility</Button>
                <Button variant="outlined">Type of place</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Rooms and beds</Button>
                <Button variant="outlined">More filters</Button>
            </div>
        </div>
    )
}

export default SearchPage

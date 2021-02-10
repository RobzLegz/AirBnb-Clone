import { Button } from '@material-ui/core';
import React from 'react';
import "./SearchPage.css";
import SearchResult from './SearchResult';

const SearchPage = () => {
    return (
        <div className="searchPage">
            <div className="searchPageInfo">
                <p>62 stays · 11 january to 15 january · 2 guest</p>
                <h1>Stays nearby</h1>
                <Button variant="outlined">Cancellation Flexibility</Button>
                <Button variant="outlined">Type of place</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Rooms and beds</Button>
                <Button variant="outlined">More filters</Button>
            </div>
            <SearchResult 
                image="https://a0.muscache.com/im/pictures/e0b0c4e2-c777-427a-9eb8-991192651e4a.jpg?im_w=1200"
                rating={4.88}
                title="Sun Lounge Studio"
                description="It is a brand new studio flat on 3rd floor of a new completely renovated building with everything new - furniture, kitchen and large shower room"
                price={28}
                location="Liepāja, Latvia"
                total={33}
            />
            <SearchResult 
                image="https://a0.muscache.com/im/pictures/e0b0c4e2-c777-427a-9eb8-991192651e4a.jpg?im_w=1200"
                rating={4.88}
                title="Sun Lounge Studio"
                description="It is a brand new studio flat on 3rd floor of a new completely renovated building with everything new - furniture, kitchen and large shower room"
                price={28}
                location="Liepāja, Latvia"
                total={33}
            />
        </div>
    )
}

export default SearchPage

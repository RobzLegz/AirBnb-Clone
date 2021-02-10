import { Star } from '@material-ui/icons';
import FavoriteIcon from '@material-ui/icons/Favorite';
import React, { useState } from 'react';
import "./SearchResult.css";

const SearchResult = ({image, location, title, description, rating, price, total}) => {

    const [heartState, setHeartState] = useState("searchHeart")

    return (
        <div className="searchResult">
            <img src={image} alt={title}/>
            <FavoriteIcon onClick={() => setHeartState("likedHeart")} className={heartState} />
            <div className="searchResultInfo">
                <div className="searchResultInfoTop">
                    <p>{location}</p>
                    <h3>{title}</h3>
                    <p>___</p>
                    <p>{description}</p>
                </div>
                <div className="searchResultInfoBottom">
                    <div className="searchResultInfoStars">
                        <Star  />
                        <p><strong>{rating}</strong></p>
                    </div>
                    <div className="searchResultPrice">
                        <h2>{price}€/night</h2>
                        <p>{total}€ total</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchResult

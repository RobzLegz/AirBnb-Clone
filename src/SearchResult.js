import { FavoriteBorder, Star } from '@material-ui/icons';
import React from 'react';
import "./SearchResult.css";

const SearchResult = ({image, location, title, description, rating, price, total}) => {
    return (
        <div className="searchResult">
            <img src={image} alt={title}/>
            <FavoriteBorder className="searchHeart" />
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
                        <p>{total}€</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchResult

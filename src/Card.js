import React from 'react';
import "./Card.css";

const Card = ({source, title, description, price, titleOnly}) => {
    return (
        <div className={titleOnly ? "biggerCard" : "card"}>
            <img src={source} alt={title} />
            <div className="cardInfo">
                <h2>{title}</h2>
                <h4>{description}</h4>
                <h3>{price}</h3>
            </div>
        </div>
    )
}

export default Card

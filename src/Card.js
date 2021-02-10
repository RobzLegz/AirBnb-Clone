import React from 'react';
import "./Card.css";

const Card = ({source, title, description, price, aboutTitle}) => {
    return (
        <div className={ description ? "card" : "biggerCard"}>
            <img src={source} alt={title} />
            <div className="cardInfo">
                {aboutTitle && <h2 className="aboutTitle">{aboutTitle}</h2>}
                {title && <h2>{title}</h2>}
                <h4>{description}</h4>
                {price && <h3>{price}€/night</h3>}
            </div>
        </div>
    )
}

export default Card

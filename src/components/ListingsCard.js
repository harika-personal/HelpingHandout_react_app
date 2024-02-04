import React from 'react';
import '../styles/ListingsCard.css';

const ListingsCard = ({ imageUrl, location, isLocal, description, nameOfSource }) => {
    return (

        <div>
            <div className="card-container">
                {/* Image occupying the entire card */}
                <img src={imageUrl} alt="Card Image" className="card-image" />

                {/* Buttons positioned over the image */}
                <div className="button-container1">
                    <button className="location-button">{location}</button>
                    <br />
                    <br />
                    <button className="local-button">{isLocal}</button>
                </div>
                <div className="button-container2">
                    <p>{description}</p>
                </div>
            </div>
            <div className="source-name">
                {nameOfSource}
            </div>
        </div>
    );
}

export default ListingsCard;
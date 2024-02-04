import React from 'react';
import '../styles/ListingsCard.css';

const FlashVolunteersCard = ({imageUrl}) => { //{imageUrl, organizer, description}
return (

        <div>
            <div className="card-container">
                <img src={imageUrl} alt="Card Image" className="card-image" />
                <div className="button-container2">
                    <p>organiser</p>
                </div>
            </div>
            <div className="source-name">
                description description description description
            </div>
        </div>
    );
}
export default FlashVolunteersCard;
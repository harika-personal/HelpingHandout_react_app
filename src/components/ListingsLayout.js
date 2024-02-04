import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import ListingsCard from './ListingsCard';
import '../styles/ListingLayout.css';


export const BASE_API = process.env.REACT_APP_BASE_API_URL || "http://localhost:4000";
const ListingsGrid = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const response = await Axios.get(`${BASE_API}/listings`);
        console.log('response', response.data); // assuming the response has the data in the .data property
        setListings(response.data); // assuming the response has the data in the .data property
    } catch (error) {
        console.error('Error fetching listings:', error);
        // Handle the error according to your needs
      }
    };

    fetchListings();
  }, []);

  return (
    <div className="listings-grid">
      {listings.slice(0, 9).map((listing, index) => (
        <ListingsCard
          key={index}
          imageUrl={listing.image}
          location={listing.location}
          isLocal={listing.isLocal ? 'Local' : ''}
          description={listing.description}
          nameOfSource={listing.donor}
        />
      ))}
    </div>
  );
};

export default ListingsGrid;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ListingsCard from './ListingsCard';
import '../styles/ListingLayout.css';
import SearchBar from './searchBar';
import * as client from '../httprequests/client';
import "../styles/searchBar.css";
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


export const BASE_API = process.env.REACT_APP_BASE_API_URL || "http://localhost:4000";
const SearchedListings = () => {
    const [listings, setListings] = useState([]);
    const navigate = useNavigate();
    const [searchTermWhat, setSearchTermWhat] = useState('');
    const [searchTermWhere, setSearchTermWhere] = useState('');
    const isFormValid = () => {
        return searchTermWhat !== '' && searchTermWhere !== '';
    };

    const params = {
        paramWhat: searchTermWhat,
        paramWhere: searchTermWhere,
    };

    const handleSearch = async () => {
        console.log("searchTermWhat: ", searchTermWhat, "searchTermWhere: ", searchTermWhere);

        axios.get(`${BASE_API}/listings/search`, { params })
            .then((response) => {
                // Handle the response data here
                console.log(response.data);
                setListings(response.data);
                // navigate(`/listings?what=${searchTermWhat}&where=${searchTermWhere}`);
            })
            .catch((error) => {
                // Handle errors
                console.error(error);
            });

    };

    // useEffect(() => {
    //     const fetchListings = async () => {
    //         try {
    //             const response = await axios.get(`${BASE_API}/listings`);
    //             console.log('response', response.data); // assuming the response has the data in the .data property
    //             setListings(response.data); // assuming the response has the data in the .data property
    //         } catch (error) {
    //             console.error('Error fetching listings:', error);
    //             // Handle the error according to your needs
    //         }
    //     };

    //     fetchListings();
    // }, []);

    return (
        <>
            <div id="outer">

                <div id="search-wrapper">
                    <div className="field-wrapper">
                        <div className="field-title">What</div>
                        <input className="one"
                            type="text"
                            value={searchTermWhat}
                            placeholder="What are you looking for?"
                            onChange={(e) => setSearchTermWhat(e.target.value)}
                        />
                    </div>
                    <div id="stack" className="field-wrapper">
                        <div className="vertical-line">
                        </div>
                        <div>
                            <div className="field-title">Where</div>
                            <input
                                type="text"
                                value={searchTermWhere}
                                placeholder="What is your zip code?"
                                onChange={(e) => setSearchTermWhere(e.target.value)}
                            />
                        </div>

                    </div>

                    <button className="round" disabled={!isFormValid()} onClick={handleSearch} ><FontAwesomeIcon icon={faSearch} /></button>
                </div>
            </div>
            {listings.length > 0 && (
                <div>
                    <p>Searched Listings</p>
                    <div className="listings-grid">
                        {listings.slice(0, 9).map((listing, index) => (
                            <ListingsCard
                                key={index}
                                imageUrl={listing.image}
                                location={listing.location}
                                isLocal={listing.isLocal ? 'Local' : ''}
                                description={listing.description}
                                nameOfSource={listing.donor} />
                        ))}
                    </div>
                </div>

            )}
        </>
    );
};

export default SearchedListings;

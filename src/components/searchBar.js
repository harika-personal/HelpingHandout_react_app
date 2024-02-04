import React, {useState} from 'react';
import axios from 'axios';
import * as client from '../httprequests/client';
import "../styles/searchBar.css";
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

// import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export const BASE_API = process.env.REACT_APP_BASE_API_URL || "http://localhost:4000";


const SearchBar = () => {

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
        const result = await client.getAllListings({searchTermWhat, searchTermWhere });
        console.log(result); 
        navigate('/home/test');
    };
  
    return (
        <div id="outer">
            <div id="search-wrapper">
                <div class="field-wrapper">
                    <div  class="field-title">What</div>
                    <input class="one"
                    type="text"
                    value={searchTermWhat}
                    placeholder="What are you looking for?"
                    onChange={(e) => setSearchTermWhat(e.target.value)}
                    />
                </div>
                <div id="stack" class="field-wrapper">
                    <div class="vertical-line">
                        </div>
                    <div>
                        <div  class="field-title">Where</div>
                        <input
                        type="text"
                        value={searchTermWhere}
                        placeholder="What is your zip code?"
                        onChange={(e) => setSearchTermWhere(e.target.value)}
                        />
                    </div>

                </div>
                
                <button  class="round" disabled={!isFormValid()} onClick={handleSearch} ><FontAwesomeIcon icon={faSearch} /></button>
            </div>
        </div>
    );

};
export default SearchBar;
import React, {useState} from 'react';
import axios from 'axios';
import "../styles/searchBar.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export const BASE_API = process.env.REACT_APP_BASE_API_URL || "http://localhost:4000";


const SearchBar = () => {


    const [searchTermWhat, setSearchTermWhat] = useState('');
    const [searchTermWhere, setSearchTermWhere] = useState('');
    const isFormValid = () => {
        return searchTermWhat !== '' && searchTermWhere !== '';
        };

    const params = {
        paramWhat: searchTermWhat,
        paramWhere: searchTermWhere,
        };
        
    const handleSearch = () => {
      axios.get(`${BASE_API}/listings`, {params})
        .then((response) => {
          // Handle the response data here
          console.log(response.data);
        })
        .catch((error) => {
          // Handle errors
          console.error(error);
        });

        window.location.href = `/listings?what=${searchTermWhat}&where=${searchTermWhere}`;
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
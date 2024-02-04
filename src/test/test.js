import React, { useState, useEffect } from "react";
import * as client from "./client";
import * as listingsClient from "../httprequests/client";
import ListingsCard from "../components/ListingsCard";

function Test() {
    // const API = "http://localhost:4000/";
    const [user, setUser] = useState([]);

    const getUser = async () => {
        const user = await client.getUser();
        console.log(user);
        setUser(user);
    };
    const viewDonations = async () => {
        const listings = await listingsClient.getAllListings(); 
        console.log(listings);
        // setUser(user);
    };

    useEffect(() => {
        getUser();
        viewDonations();
    }, []);

    return (
        <div>
            <div>Helloooo</div>
            <div>FirstName: {user.firstName} </div>
            <div>LastName: {user.lastName} </div>
            <div>
                <ListingsCard 
                imageUrl="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                />
            </div>
        </div>
    );


}
export default Test;
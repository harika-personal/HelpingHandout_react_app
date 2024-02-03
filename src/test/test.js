import React, { useState, useEffect } from "react";
import * as client from "./client";

function Test() {
    const API = "http://localhost:4000/";
    const [user, setUser] = useState([]);

    const getUser = async () => {
        const user = await client.getUser();
        console.log(user);
        setUser(user);
    };

    useEffect(() => {
        getUser();
    }, []);

    return (
        <div>
            <div>Helloooo</div>
            <div>FirstName: {user.firstName} </div>
            <div>LastName: {user.lastName} </div>
        </div>
    );


}
export default Test;
import React, { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom";

const About = () => {

    const history = useHistory();
    const [userData, serUserData] = useState();

    const callAboutPage = async () => {
        try {
            const res = fetch('/about', {
                method: 'GET',
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });

            const data = await res.json();
            console.log(data);
            serUserData(data);

            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            } else {
                return About;
            }

        } catch (err) {
            console.log(err);
            history.push('/login');
        }
    }

    useEffect(() => {
        callAboutPage();
    });

    return (
        <div>
            <p>HI</p>
            <h1>About us</h1>
        </div>
    )
}

export default About

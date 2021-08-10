import React, {useEffect} from 'react'
import { useHistory } from "react-router-dom";

const Contact = () => {

    const history = useHistory();

    const callContactPage = async () => {
        try{
            const res = fetch('/contact', {
                method: 'GET',
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials:"include"
            });

            const data = await res.json();
            console.log(data);

            if( !res.status === 200){
                const error = new Error(res.error);
                throw error;
            }

        } catch (err) {
            console.log(err);
            history.push('/login');
        }
    }

useEffect(() => {
    callContactPage();
});

    return (
        <div>
            <p>HI</p>
            <h1>Contact us</h1>
        </div>
    )
}

export default Contact
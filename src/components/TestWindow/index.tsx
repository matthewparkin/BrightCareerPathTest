import { useEffect, useState } from 'react';
import { getQuestions } from '../helpers';
import './index.css';

export const TestWindow = () => {
    const apiBaseURl = "https://fhc-api.onrender.com"

    const [user, setUser] = useState<string | null>(null);
    const [error, setError] = useState('');


    useEffect(() => {
        const queryString = new URLSearchParams(window.location.search);
        const userParam = queryString.get("user");

        if (userParam) {
            setUser(userParam);
            if (user) {
                getQuestions(apiBaseURl, user).then((fetchedQuestions) => {
                    console.log("Fetched Questions:", fetchedQuestions);
                    return fetchedQuestions;
                })
            }
        } else {
            setError("User not logged in");
        }
    }, []);

    // Not the cleanest but it shows an error state if the user is not logged in. This wasn't part of 
    // the ask but is helpful to the user journey.
    if (error) {
        return <div className="error">{error}</div>;
    }

    return (
        <section className="testWindow">
            <div className="testWindow__Progress">
                <p>Test Window</p>
                <p>Progress: %</p>
            </div>

            <div className="testWindow__Footer">
                <p>To review your previous answers, scroll back before selecting "finish".</p>
            </div>

        </section>
    );
};

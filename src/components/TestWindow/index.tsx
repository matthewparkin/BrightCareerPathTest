import { useEffect, useState } from 'react';
import { getQuestions, submit } from '../helpers';
import './index.scss';
import { Question } from '../Question';

export const TestWindow = () => {
    const apiBaseURl = "https://fhc-api.onrender.com"
    const [user, setUser] = useState<string | null>(null);
    const [error, setError] = useState('');
    const [questions, setQuestions] = useState<{ questions: { text: string; id: string }[] | null }>({ questions: null });
    const [formState, setFormState] = useState({
        answers: {} as Record<string, number>
    });


    const onSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        if (!user) {
            setError("User isn't logged in");
            return;
        }

        submit(apiBaseURl, user, formState).then((response) => {
            console.log("Submission Response:", response);
        }).catch((error) => {
            console.error("Submission Error:", error);
            setError("An error occurred while submitting your answers.");
        });
    };


    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        console.log("Input Change:", { name, value });

        setFormState({
            ...formState,
            answers: {
                ...formState.answers,

                // questionId: name, // Assuming questionId is the name of the input
                // answer: parseInt(value),
            },
        });
    };

    useEffect(() => {
        const queryString = new URLSearchParams(window.location.search);
        const userParam = queryString.get("user");

        if (userParam) {
            setUser(userParam);
            getQuestions(apiBaseURl, userParam).then((fetchedQuestions) => {
                setQuestions(fetchedQuestions);
            }).catch((error) => {
                console.error("Error fetching questions:", error);
                setError("An error occurred while fetching questions.");
            });
        } else {
            setError("User not logged in");
        }
    }, []);

    // Not the cleanest but it shows an error state if the user is not logged in.
    if (error) {
        return <div className="testWindow__notPopulated">{error}</div>;
    }

    return (
        <form className="userForm" onSubmit={onSubmit} >
            <section className="testWindow">
                <div className="testWindow__Progress">
                    <p>Your Progress: %</p>
                </div>
                <div className="testWindow__Questions">
                    {
                        questions?.questions?.length ? (
                            questions.questions.map((question, index) => {
                                const { text, id } = question;
                                return (
                                    <div className="question" key={id}>
                                        <Question
                                            index={index}
                                            text={text}
                                        />
                                        <div className="testWindow__AnswerScale--answerScale">
                                            {[...Array(8)].map((_, value) => (
                                                <input
                                                    className="testWindow__AnswerScale__input"
                                                    key={value}
                                                    type="radio"
                                                    name={id}
                                                    value={value}
                                                    onChange={handleInputChange}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                );
                            })
                        ) : <div className="testWindow__notPopulated">Loading questions...</div>
                    }
                </div >

                <div className="testWindow__Footer">
                    <p>To review your previous answers, scroll back before selecting "finish".</p>
                </div>

                <button type="submit">Submit</button>

            </section>
        </form>
    );
};

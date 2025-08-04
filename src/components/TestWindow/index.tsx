import './index.css';

export const TestWindow = () => {
    const apiBaseURl = "https://fhc-api.onrender.com"

    getQuestions(apiBaseURl, "testUser");
    return (
        <section className="testWindow">
            <div className="testWindow__Progress">
                <p>Test Window</p>
                <p>Progress: %</p>
            </div>

            <div className="testWindow__Question">
                <p>Question 1/24</p>
                <p>What is your favourite colour?</p>
                Answer Scale
                <div className="testWindow__AnswerScale--buttons">
                    <button className="testWindow__AnswerScale--button">1</button>
                    <button className="testWindow__AnswerScale--button">2</button>
                    <button className="testWindow__AnswerScale--button">3</button>
                    <button className="testWindow__AnswerScale--button">4</button>
                    <button className="testWindow__AnswerScale--button">5</button>
                    <button className="testWindow__AnswerScale--button">6</button>
                    <button className="testWindow__AnswerScale--button">7</button>
                    <button className="testWindow__AnswerScale--button">8</button>

                </div>
                <div className="testWindow__AnswerScale--headings">
                    <p>Strongly Disagree</p>
                    <p>Strongly Agree</p>
                </div>
            </div>
            <div className="testWindow__Footer">
                <p>To review your previous answers, scroll back before selecting "finish".</p>
            </div>

        </section>
    );
};

// Pull these out
const getQuestions = async (baseURL: string, user: string) => {
    const url = `${baseURL}/questions?user=${user}`;

    try {
        const response = await fetch(url,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const result = await response.json();
        console.log(result);
    } catch (error) {
        if (error instanceof Error) {
            console.error(error.message);
        } else {
            console.error("An unknown error occurred");
        }
    }
}
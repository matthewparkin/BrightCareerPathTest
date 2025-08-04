
interface Props {
    questionNumber: number;
    text: string;
}

export const Question = ({
    questionNumber,
    text
}: Props
) => {

    return (
        <div className="testWindow__Question">
            <p>Question {questionNumber}/24</p>
            <p>In a job, I would be motivated by</p>
            <p>{text}</p>
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
    );
};

interface Props {
    index: number;
    text: string;
}

export const Question = ({
    index,
    text
}: Props
) => {

    return (
        <div className="testWindow__Questions--individual">
            <h3>Question {index + 1}</h3>
            <p>In a job, I would be motivated by</p>
            <p>{text}</p>
        </div>
    );
};

import { Card } from "../Card";
import "./index.scss";

export const CardsTab = () => {
    // This should probably break back into the base app - left it here incase I have some time to do the zoom feature shown in the design.
    // Either way good for cleanliness and separation of concerns.
    // const [zoomed, setZoomed] = useState(false);

    return (
        <section className="cardsTab">
            <Card
                title="24 questions"
                details="Answer 24 questions about your working style and career preferences."
                icon="/clipboard-question.svg"
            />
            <Card
                title="2 minutes"
                details="Gain insights into your future career in just two minutes."
                icon="/stopwatch.svg"
            />
            <Card
                title="Personalised advice"
                details="Receive personalised advice to guide you on your next steps."
                icon="/scissor-cutting.svg"
            />
        </section>
    );
};
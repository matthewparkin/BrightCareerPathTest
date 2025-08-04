import { Card } from "../Card";
import "./index.css";

export const CardsTab = () => {
    // This should probably break back into the base app - left it here incase I have some time to do the zoom feature shown in the design.
    // Either way good for cleanliness and separation of concerns.
    // const [zoomed, setZoomed] = useState(false);

    return (
        <section className="cardsTab">
            <Card
                title="24 questions"
                details="Answer 24 questions about your working style and career preferences."
                icon="clipboard-icon.png"
            />
            <Card
                title="24 questions"
                details="Answer 24 questions about your working style and career preferences."
                icon="clipboard-icon.png"
            />
            <Card
                title="24 questions"
                details="Answer 24 questions about your working style and career preferences."
                icon="clipboard-icon.png"
            />
        </section>
    );
};
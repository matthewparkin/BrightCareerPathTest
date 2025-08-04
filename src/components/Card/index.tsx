import './index.css'

interface Props {
    title: string;
    details: string;
    icon: string;
}

export const Card = ({ title, details, icon }: Props) => {
    // Could add this text to a text manifest - pre-defined text for each card (maybe as json). 
    return (
        <div className="card">
            <img src={icon} alt={`${title} icon`} />
            <h2>{title}</h2>
            <p>{details}</p>
        </div>
    );
};
import './Display.css'

export default function Display({ valor }) {
    return (
        <div className={`display ${valor.length > 10 ? "long" : ""}`}>
            {valor}
        </div>
    );
}

import { Link } from "@reach/router";
import "./CardMini.scss";

function CardMini({to, src, title, description, additional, modifier}){
    return (
        <Link to={to} className={`CardMini${modifier ? " CardMini--" + modifier : ""}`}>
            <img className="CardMini__image" src={src} alt={title}/>
            <div className="CardMini__content">
                <h3 className="CardMini__title">{title}</h3>
                <p className="CardMini__description">{description}</p>
            </div>
            <p className="CardMini__additional">{additional}</p>
        </Link>
    );
}

export default CardMini;
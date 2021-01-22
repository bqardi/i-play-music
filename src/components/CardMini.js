import { Link } from "@reach/router";
import "./CardMini.scss";

function CardMini({src, title, description, additional}){
    return (
        <Link to="/" className="CardMini">
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
import { Link } from "@reach/router";
import "./CardImage.scss";

function CardImage({to, src, alt, pointer, onClick}){
    if (to) {
        return (
            <Link to={to} className={`CardImage${pointer ? " CardImage--pointer" : ""}`} onClick={onClick}>
                <img className="CardImage__image" src={src} alt={alt}/>
            </Link>
        )
    }
    return (
        <button className={`CardImage${pointer ? " CardImage--pointer" : ""}`} onClick={onClick}>
            <img className="CardImage__image" src={src} alt={alt}/>
        </button>
    );
}

export default CardImage;
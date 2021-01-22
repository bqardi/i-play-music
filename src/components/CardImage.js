import { Link } from "@reach/router";
import "./CardImage.scss";

function CardImage({to, src, alt}){
    return (
        <Link to={to} className="CardImage">
            <img className="CardImage__image" src={src} alt={alt}/>
        </Link>
    );
}

export default CardImage;
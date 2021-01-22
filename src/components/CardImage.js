import { Link } from "@reach/router";
import "./CardImage.scss";

function CardImage({src, alt}){
    return (
        <Link to="/" className="CardImage">
            <img className="CardImage__image" src={src} alt={alt}/>
        </Link>
    );
}

export default CardImage;
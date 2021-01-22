import { Link } from "@reach/router";
import "./CardFadedBottom.scss";

function CardFadedBottom({to, src, children}){
    return (
        <Link to={to} className="CardFadedBottom" style={{backgroundImage: `url(${src})`}}>
            <span className="CardFadedBottom__content">
                {children}
            </span>
        </Link>
    );
}

export default CardFadedBottom;
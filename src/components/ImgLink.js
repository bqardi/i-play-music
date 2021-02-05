import { Link } from "@reach/router";
import "./ImgLink.scss";

function ImgLink({to, src, alt, modifier, ...props}){
    if (to) {
        return (
            <Link to={to} className={ `ImgLink${ modifier ? " ImgLink--" + modifier : "" }` } {...props}>
                <img className="ImgLink__icon" src={src} alt={alt}/>
            </Link>
        );
    }
    return (
        <button className={ `ImgLink${ modifier ? " ImgLink--" + modifier : "" }` } {...props}>
            <img className="ImgLink__icon" src={src} alt={alt}/>
        </button>
    );
}

export default ImgLink;
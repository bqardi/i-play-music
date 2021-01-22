import { Link } from "@reach/router";
import "./IconLink.scss";

function IconLink({to, src, alt, modifier}){
    if (to) {
        return (
            <Link to={to} className={ `IconLink${ modifier ? " IconLink--" + modifier : "" }` }>
                <img className="IconLink__icon" src={src} alt={alt}/>
            </Link>
        );
    }
    return (
        <button className={ `IconLink${ modifier ? " IconLink--" + modifier : "" }` }>
            <img className="IconLink__icon" src={src} alt={alt}/>
        </button>
    );
}

export default IconLink;
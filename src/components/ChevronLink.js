import { Link } from "@reach/router";
import "./ChevronLink.scss";

function ChevronLink({title, to}){
    return (
        <Link to={to} className="ChevronLink">
            {title}
            <svg className="ChevronLink__icon" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"></path></svg>
        </Link>
    );
}

export default ChevronLink;
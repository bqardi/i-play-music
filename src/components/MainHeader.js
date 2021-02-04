import IconLink from "./IconLink";
import "./MainHeader.scss";

function MainHeader({title, invert, transparent, ...other}){
    return (
        <header className={`MainHeader${transparent ? " MainHeader--transparent" : ""}`} {...other}>
            <IconLink onClick={() => window.history.back()} modifier={invert ? "invert" : ""} src="/images/icons/chevron-left.svg" title="Back"/>
            <h1 className="MainHeader__title">{title}</h1>
            <IconLink modifier={invert ? "invert" : ""} src="/images/icons/magnify.svg" title="Search"/>
        </header>
    );
}

export default MainHeader;
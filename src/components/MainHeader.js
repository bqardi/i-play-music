import IconLink from "./IconLink";
import "./MainHeader.scss";

function MainHeader({title, invert, transparent}){
    return (
        <header className={`MainHeader${transparent ? " MainHeader--transparent" : ""}`}>
            <IconLink to="/" modifier={invert ? "invert" : ""} src="/images/icons/chevron-left.svg" title="Back"/>
            <h1 className="MainHeader__title">{title}</h1>
            <IconLink modifier={invert ? "invert" : ""} src="/images/icons/magnify.svg" title="Search"/>
        </header>
    );
}

export default MainHeader;
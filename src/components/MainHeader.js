import IconLink from "./IconLink";
import "./MainHeader.scss";

function MainHeader({ title }){
    return (
        <header className="MainHeader">
            <IconLink to="/" src="./images/icons/chevron-left.svg" title="Back"/>
            <h1 className="MainHeader__title">{title}</h1>
            <IconLink src="./images/icons/magnify.svg" title="Search"/>
        </header>
    );
}

export default MainHeader;
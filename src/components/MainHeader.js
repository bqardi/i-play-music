import IconLink from "./IconLink";
import "./MainHeader.scss";

function MainHeader(){
    return (
        <header className="MainHeader">
            <IconLink to="/" src="./images/icons/chevron-left.svg" alt="Back"/>
            <h1 className="MainHeader__title">Categories</h1>
            <IconLink src="./images/icons/magnify.svg" alt="Search"/>
        </header>
    );
}

export default MainHeader;
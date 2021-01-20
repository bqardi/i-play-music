import IconLink from './IconLink';
import "./MainNav.scss";

function MainNav(){
    return (
        <section className="MainNav">
            <nav className="MainNav__container">
                <IconLink to="/albums" src="./images/icons/albums.svg" title="Albums"/>
                <IconLink to="/playlists" src="./images/icons/playlists.svg" title="Playlists"/>
                <IconLink to="/" modifier="large" src="./images/icons/featured.svg" title="Featured"/>
                <button className="IconLink">
                    <img className="IconLink__icon" src="./images/icons/theme.svg" alt="Theme"/>
                </button>
                <IconLink to="/categories" src="./images/icons/categories.svg" title="Categories"/>
            </nav>
        </section>
    );
}

export default MainNav;
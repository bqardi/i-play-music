import { useContext } from 'react';
import DarkmodeContext from '../DarkmodeContext';
import ImgLink from './ImgLink';
import "./MainNav.scss";

function MainNav(){
    var [darkmode, setDarkmode] = useContext(DarkmodeContext);

    function toggleDarkmode(){
        localStorage.setItem("darkmode", !darkmode);
        setDarkmode(!darkmode);
    }

    return (
        <section className="MainNav">
            <nav className="MainNav__container">
                <ImgLink to="/albums" src="/images/icons/albums.svg" title="Albums"/>
                <ImgLink to="/playlists" src="/images/icons/playlists.svg" title="Playlists"/>
                <ImgLink to="/featured" modifier="large" src="/images/icons/featured.svg" title="Featured"/>
                <button onClick={toggleDarkmode} className="IconLink">
                    <img className="IconLink__icon" src="/images/icons/theme.svg" alt="Theme"/>
                </button>
                <ImgLink to="/categories" src="/images/icons/categories.svg" title="Categories"/>
            </nav>
        </section>
    );
}

export default MainNav;
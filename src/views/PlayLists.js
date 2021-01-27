import { Link } from "@reach/router";
import CardImage from "../components/CardImage";
import CardMini from "../components/CardMini";
import MainHeader from "../components/MainHeader";
import MainTitle from "../components/MainTitle";
import Carousel from "../components/Carousel";
import fakeAPIContent from "../FakeAPIContent";
import "./PlayLists.scss";

function PlayLists(){
    var id = 113;
    var {albums} = fakeAPIContent;
    var album = albums.find((item) => item.id === id.toString());
    var pics = {
        previous: <CardImage to="/album/111" src="./images/butterfly.jpg" alt="Butterfly"/>,
        current: <CardImage to="/album/113" src="./images/scary-girl.jpg" alt="Scary Girl"/>,
        next: <CardImage to="/album/112" src="./images/the-greatest-showman.jpg" alt="The Greatest Showman"/>,
        title: album.title,
        type: album.type
    }
    return (
        <article className="PlayLists">
            <img className="PlayLists__image" src="/images/sound-wave.png" alt="Background waves"/>
            <MainHeader title="Playlists" invert transparent/>
            <MainTitle title="Playlists"/>
            <Carousel pics={pics}/>
            <div className="PlayLists__songs">
                {album.songs.map((song, index) => 
                    <div key={index} className="PlayLists__card">
                        <CardMini modifier="small" to={`/player/${album.id}/${index}`} src="/images/icons/play.svg" title={song.title} description={song.artist} additional={song.duration}/>
                    </div>
                )}
            </div>
            <div className="PlayLists__listen">
                <Link to={`/player/${album.id}/all`} className="PlayLists__button">Listen All</Link>
            </div>
        </article>
    );
}

export default PlayLists;
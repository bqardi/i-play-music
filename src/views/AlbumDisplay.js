import { Link } from "@reach/router";
import CardMini from "../components/CardMini";
import MainHeader from "../components/MainHeader";
import MainTitle from "../components/MainTitle";
import SampleView from "../components/SampleView";
import fakeAPIContent from "../FakeAPIContent";
import "./AlbumDisplay.scss";

function AlbumDisplay({id}){
    var {albums} = fakeAPIContent;
    var album = albums.find((item) => item.id === id.toString());
    if (!album) {
        return (
            <article className="AlbumDisplay AlbumDisplay--black">
                <MainHeader title="Album"/>
                <MainTitle title="Not Found" gradient/>
                <div>
                    Could not find any album with id {id}!
                </div>
            </article>
        );
    }
    return (
        <article className="AlbumDisplay">
            <MainHeader title="Album" invert transparent/>
            <img className="AlbumDisplay__image" src={album.images[0]} alt={album.title}/>
            <div className="AlbumDisplay__content">
                <div className="AlbumDisplay__heading">
                    <MainTitle title={album.title}/>
                    {album.songCount} Songs
                </div>
                <div className="AlbumDisplay__hashtags">
                    <p className="AlbumDisplay__description">Genres hashtags</p>
                    {album.genres.map((genre) => <Link key={genre} to="/categories" className="AlbumDisplay__genre">#{genre}</Link>)}
                </div>
            </div>
            <div className="AlbumDisplay__scroll">
                <SampleView title="All Songs">
                    {album.songs.map((song, index) =>
                        <div key={index} className="AlbumDisplay__card">
                            <CardMini modifier="small" to={`/player/${id}/${index}`} src="/images/icons/play.svg" title={song.title} description={song.artist} additional={song.duration}/>
                        </div>
                    )}
                </SampleView>
            </div>
        </article>
    );
}

export default AlbumDisplay;
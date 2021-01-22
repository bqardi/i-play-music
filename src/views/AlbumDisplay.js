import { Link } from "@reach/router";
import CardMini from "../components/CardMini";
import MainHeader from "../components/MainHeader";
import MainTitle from "../components/MainTitle";
import SampleView from "../components/SampleView";
import "./AlbumDisplay.scss";

function AlbumDisplay({id}){
    var fakeAPIContent = [
        {
            id: "111",
            title: "Old Town Road",
            songCount: 12,
            images: [
                "/images/old-town-road.jpg"
            ],
            genres: [
                "country",
                "country road"
            ],
            songs: [
                {
                    title: "Old Town Road",
                    artist: "Billy Ray Cyrus",
                    duration: "3:58"
                },
                {
                    title: "Don't Call Me Up",
                    artist: "Mabel",
                    duration: "2:46"
                },
                {
                    title: "Let me Down Slowly",
                    artist: "Alec Benjamin",
                    duration: "4:12"
                },
                {
                    title: "Paradise",
                    artist: "Bazzi",
                    duration: "3:12"
                },
                {
                    title: "Sucker",
                    artist: "Jonas Brothers",
                    duration: "3:56"
                },
                {
                    title: "Kill This Love",
                    artist: "BLACKPINK",
                    duration: "2:47"
                },
            ]
        },
        {
            id: "112",
            title: "The Greatest Showman",
            songCount: 8,
            images: [
                "/images/the-greatest-showman.jpg"
            ],
            genres: [
                "Blues",
                "Blues Rock"
            ],
            songs: [
                {
                    title: "Old Blue Town",
                    artist: "Him over there",
                    duration: "3:12"
                },
                {
                    title: "Two",
                    artist: "Bluetallica",
                    duration: "5:51"
                },
                {
                    title: "I Will Always Love You",
                    artist: "Whitney Houston",
                    duration: "3:38"
                },
                {
                    title: "Paradise City",
                    artist: "Guns'N'Roses",
                    duration: "4:03"
                },
                {
                    title: "Hotel California",
                    artist: "Eagles",
                    duration: "12:44"
                },
                {
                    title: "I",
                    artist: "BLACKPINK",
                    duration: "2:47"
                },
            ]
        },
    ]
    var album = fakeAPIContent.find((item) => item.id === id.toString());
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
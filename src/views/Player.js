import MainHeader from "../components/MainHeader";
import PlayerNav from "../components/PlayerNav";
import fakeAPIContent from "../FakeAPIContent";
import "./Player.scss";

function Player({album, song}){
    var songIndex = song === "all" ? 0 : parseInt(song);
    var {albums} = fakeAPIContent;
    var albumObj = albums.find((item) => item.id === album);
    var songObj = albumObj.songs[songIndex];
    var [min, sec] = songObj.duration.split(":");
    var ms = (min * 60 + parseInt(sec)) * 1000;
    console.log(ms)
    return (
        <article className="Player" style={{backgroundImage: `url(${albumObj.images[0]})`}}>
            <MainHeader title="Playing" invert transparent/>
            <div className="Player__image">
                <div className="Player__imageOuter">
                    <div className="Player__imageInner">
                        <img className="Player__imageImg" src={songObj.images[0]} alt={songObj.artist}/>
                    </div>
                </div>
            </div>
            <h1 className="Player__title">{songObj.title}</h1>
            <p className="Player__artist">{songObj.artist}</p>
            <PlayerNav url="/" m={min} s={sec}/>
        </article>
    );
}

export default Player;
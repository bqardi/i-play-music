import { useContext, useEffect, useState } from "react";
import MainHeader from "../components/MainHeader";
import PlayerNav from "../components/PlayerNav";
import helpers from "../helpers";
import {TokenContext} from "../TokenContext";
import "./Player.scss";

function Player({id}){
    var [token, setToken] = useContext(TokenContext);
    var [content, setContent] = useState({});
    
	useEffect(function() {
        helpers.spotify(`/tracks/${id}`, token, data =>
            data.token_expired ? setToken(data) : setContent(data));
    }, [token, setContent, id, setToken]);

    return (
        <article className="Player" style={{backgroundImage: `url(${content.album?.images && content.album?.images[0].url})`}}>
            <MainHeader title="Playing" invert transparent/>
            <div className="Player__image">
                <div className="Player__imageOuter">
                    <div className="Player__imageInner">
                        <img className="Player__imageImg" src={content.album?.images && content.album?.images[0].url} alt={content.artists && content.artists[0]}/>
                    </div>
                </div>
            </div>
            <h1 className="Player__title">{content.name}</h1>
            <p className="Player__artist">{content.artists && content.artists[0].name}</p>
            <PlayerNav ms={parseInt(content.duration_ms)}/>
        </article>
    )
}

export default Player;
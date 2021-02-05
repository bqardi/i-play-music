import { useContext, useEffect, useState } from "react";
import {TokenContext} from "../TokenContext";
import "./PlayListSongs.scss";
import CardMini from "../components/CardMini";
import helpers from "../helpers";

function PlayListSongs({id}){
    var [token, setToken] = useContext(TokenContext);
    var [content, setContent] = useState({});
    
	useEffect(function() {
        if (id) {
            helpers.spotify(`/playlists/${id}?country=DK&locale=en_GB`, token, data =>
                data.token_expired ? setToken(data) : setContent(data));
        }
    }, [token, setToken, setContent, id]);

    return (
        <article className="PlayListSongs">
            {content.tracks?.items.map((song, index) => 
                <div key={index} className="PlayLists__card">
                    <CardMini modifier="small" to={`/player/${song.track.id}`} src="/images/icons/play.svg" title={song.track.name} description={song.track.artists[0].name} additional={helpers.timeStr(song.track.duration_ms)}/>
                </div>
            )}
        </article>
    );
}

export default PlayListSongs;
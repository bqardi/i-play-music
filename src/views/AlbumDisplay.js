import { Link } from "@reach/router";
import { useContext, useEffect, useState } from "react";
import {TokenContext} from "../TokenContext";
import CardMini from "../components/CardMini";
import MainHeader from "../components/MainHeader";
import SampleView from "../components/SampleView";
import helpers from "../helpers";
import "./AlbumDisplay.scss";

function AlbumDisplay({type, id}){
    var [token, setToken] = useContext(TokenContext);
    var [content, setContent] = useState({});
    
	useEffect(function() {
        helpers.spotify(`/${type}/${id}?country=DK&locale=en_GB`, token, data =>
            data.token_expired ? setToken(data) : setContent(data));
    }, [token, setContent, type, id, setToken]);

    return (
        <article className="AlbumDisplay">
            <MainHeader title={content.name} transparent style={{color: content.primary_color}}/>
            <img className="AlbumDisplay__image" src={content.images && content.images[0].url} alt={content.name}/>
            <div className="AlbumDisplay__content" style={{color: content.primary_color}}>
                <div className="AlbumDisplay__heading">
                    {content.tracks?.total} Songs
                </div>
                <div className="AlbumDisplay__hashtags">
                    <p className="AlbumDisplay__description">Genres hashtags</p>
                    {content.genres?.map((genre) => <Link key={genre} to="/categories" className="AlbumDisplay__genre">#{genre}</Link>)}
                </div>
            </div>
            <div className="AlbumDisplay__scroll">
                <SampleView title="All Songs">
                    {content.tracks?.items.map((item, index) => {
                        var track = item.track || item;
                        if (item.track) {
                            var ms = parseInt(track.duration_ms);
                            var duration = helpers.timeStr(ms);
                        }
                        return (
                            <div key={index} className="AlbumDisplay__card">
                                <CardMini modifier="small" to={`/player/${track.id}`} src="/images/icons/play.svg" title={track.name} description={track.artists && track.artists[0].name} additional={duration}/>
                            </div>
                        )
                    })}
                </SampleView>
            </div>
        </article>
    );
}

export default AlbumDisplay;
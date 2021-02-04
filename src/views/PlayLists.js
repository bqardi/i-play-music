import { Link } from "@reach/router";
import CardImage from "../components/CardImage";
import MainHeader from "../components/MainHeader";
import MainTitle from "../components/MainTitle";
import Carousel from "../components/Carousel";
import { useContext, useEffect, useState } from "react";
import {TokenContext} from "../TokenContext";
import "./PlayLists.scss";
import PlayListSongs from "./PlayListSongs";
import helpers from "../helpers";

function PlayLists(){
    var [token, setToken] = useContext(TokenContext);
    var [content, setContent] = useState({});
    var [currIndex, setCurrIndex] = useState(0);
    
	useEffect(function() {
        helpers.spotify(`/me/playlists`, token, data =>
            data.token_expired ? setToken(data) : setContent(data));
    }, [token, setContent, setToken]);

    function setPics(index){
        var length = content.items?.length;
        if (!length) {
            return {}
        }
        var prevItem = content.items[prevIndex(index, length)];
        var currentItem = content.items[index];
        var nextItem = content.items[nextIndex(index, length)];
        return {
            previous: <CardImage onClick={() => setCurrIndex(prevIndex(index, length))} pointer src={prevItem.images[0].url} alt="Butterfly"/>,
            current: <CardImage src={currentItem.images[0].url} alt="Scary Girl"/>,
            next: <CardImage onClick={() => setCurrIndex(nextIndex(index, length))} pointer src={nextItem.images[0].url} alt="The Greatest Showman"/>,
            title: currentItem.name
        };
    }
    function prevIndex(index, length){
        var i = index - 1;
        if (i < 0) {
            i = length - 1;
        }
        return i;
    }
    function nextIndex(index, length){
        var i = index + 1;
        if (i >= length) {
            i = 0;
        }
        return i;
    }

    return (
        <article className="PlayLists">
            <img className="PlayLists__image" src="/images/sound-wave.png" alt="Background waves"/>
            <MainHeader title="Playlists" invert transparent/>
            <MainTitle title="Playlists"/>
            <Carousel pics={setPics(currIndex)}/>
            <div className="PlayLists__songs">
                <PlayListSongs id={content.items && content.items[currIndex].id}/>
            </div>
            <div className="PlayLists__listen">
                <Link to={`/player/${content.items && content.items[currIndex].id}/all`} className="PlayLists__button">Listen All</Link>
            </div>
        </article>
    );
}

export default PlayLists;
import MainTitle from "../components/MainTitle";
import MainHeader from '../components/MainHeader';
import SampleView from "../components/SampleView";
import CardImage from "../components/CardImage";
import Slider from "../components/Slider";
import CardMini from "../components/CardMini";
import { useContext, useEffect, useState } from "react";
import {TokenContext} from "../TokenContext";
import "./Albums.scss";
import helpers from "../helpers";

function Albums(){
    var [token, setToken] = useContext(TokenContext);
    var [featured, setFeatured] = useState({});
    var [content, setContent] = useState({});
    
	useEffect(function() {
        helpers.spotify(`/browse/new-releases`, token, data =>
            data.token_expired ? setToken(data) : setContent(data));
        
        helpers.spotify(`/browse/featured-playlists`, token, data =>
            data.token_expired ? setToken(data) : setFeatured(data));
    }, [token, setContent, setToken]);

    return (
        <section className="Albums">
            <MainHeader title="Music" invert/>
            <MainTitle title="All Albums" gradient/>
            <SampleView title="Featured Albums" viewAll>
                <Slider>
                    {featured.playlists?.items.map(item => {
                        return <CardImage key={item.id} to={`/playlists/${item.id}`} src={item.images[0].url} alt={item.name}/>
                    })}
                </Slider>
            </SampleView>
            <SampleView title="New Releases" viewAll>
                <div className="Albums__grid">
                    {content.albums?.items.map((item) => {
                        return <CardMini
                            key={item.id}
                            to={`/albums/${item.id}`}
                            src={item.images[2].url}
                            title={item.name}
                            description={item.artists[0].name}
                            additional={`${item.total_tracks} Songs`}
                        />
                    })}
                </div>
            </SampleView>
        </section>
    );
}

export default Albums;
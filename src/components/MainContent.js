import { Router } from "@reach/router";
import AlbumDisplay from "../views/AlbumDisplay";
import Albums from "../views/Albums";
import Categories from "../views/Categories";
import Featured from '../views/Featured';
import Player from "../views/Player";
import PlayLists from "../views/PlayLists";
import "./MainContent.scss";

function MainContent(){
    return (
        <main className="MainContent">
            <Router>
                <Albums path="/albums"/>
                <PlayLists path="/playlists"/>
                <Featured path="/"/>
                <Categories path="/categories"/>
                <AlbumDisplay path="/album/:id"/>
                <Player path="/player/:album/:song"/>
            </Router>
        </main>
    );
}

export default MainContent;
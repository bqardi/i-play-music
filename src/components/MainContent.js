import { Router } from "@reach/router";
import AlbumDisplay from "../views/AlbumDisplay";
import Albums from "../views/Albums";
import Categories from "../views/Categories";
import Featured from '../views/Featured';
import "./MainContent.scss";

function MainContent(){
    return (
        <main className="MainContent">
            <Router>
                <Featured path="/"/>
                <Albums path="/albums"/>
                <AlbumDisplay path="/album/:id"/>
                <Categories path="/categories"/>
            </Router>
        </main>
    );
}

export default MainContent;
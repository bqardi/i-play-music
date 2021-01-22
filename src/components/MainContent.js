import { Router } from "@reach/router";
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
                <Categories path="/categories"/>
            </Router>
        </main>
    );
}

export default MainContent;
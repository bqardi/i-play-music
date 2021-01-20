import { Router } from "@reach/router";
import Featured from '../views/Featured';
import "./MainContent.scss";

function MainContent(){
    return (
        <main className="MainContent">
            <Router>
                <Featured path="/" />
            </Router>
        </main>
    );
}

export default MainContent;
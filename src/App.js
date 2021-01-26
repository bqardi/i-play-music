import { useState } from "react";
import { Router } from '@reach/router';
import MainContent from './components/MainContent';
import MainNavBar from './components/MainNav';
import Login from './views/Login';
import Splash from "./views/Splash";

function App() {
    // var [isLoggedIn, setIsLoggedIn] = useState(false);
    
    // if (!isLoggedIn) {
    //     return (
    //         <>
    //             <Splash/>
    //             <Login validate={login}/>
    //         </>
    //     )
    // }

    // function login(obj){
    //     if (obj.ok) {
    //         setIsLoggedIn(true);
    //     } else {
    //         console.log("Final:", obj)
    //     }
    // }

    return (
        <>
            <MainContent/>
            <Router primary={false}>
                <MainNavBar path="/"/>
                <MainNavBar path="/albums"/>
                <MainNavBar path="/album/*"/>
                <MainNavBar path="/categories"/>
                <MainNavBar path="/playlists"/>
            </Router>
        </>
    );
}

export default App;

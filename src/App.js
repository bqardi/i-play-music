import { useState } from "react";
import { Router } from '@reach/router';
import MainContent from './components/MainContent';
import MainNavBar from './components/MainNav';
import Login from './views/Login';

function App() {
    var [isLoggedIn, setIsLoggedIn] = useState(false);
    
    if (!isLoggedIn) {
        return (
            <>
                <Login validate={login}/>
            </>
        )
    }

    function login(obj){
        if (obj.ok) {
            setIsLoggedIn(true);
        } else {
            console.log("Final:", obj)
        }
    }

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

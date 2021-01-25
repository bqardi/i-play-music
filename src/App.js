// import { Router } from '@reach/router';
// import MainContent from './components/MainContent';
// import MainNavBar from './components/MainNav';
import Login from './views/Login';

function App() {
    return (
        <>
            <Login/>
            {/* <MainContent/>
            <Router primary={false}>
                <MainNavBar path="/"/>
                <MainNavBar path="/albums"/>
                <MainNavBar path="/album/*"/>
                <MainNavBar path="/categories"/>
                <MainNavBar path="/playlists"/>
            </Router> */}
        </>
    );
}

export default App;

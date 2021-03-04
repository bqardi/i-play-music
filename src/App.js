import { useEffect, useState } from "react";
import { Router } from "@reach/router";
import MainContent from "./components/MainContent";
import MainNavBar from "./components/MainNav";
import { TokenContext } from "./TokenContext";
import DarkmodeContext from "./DarkmodeContext";
// import * as Sentry from "@sentry/react";

// Sentry.init({
// 	dsn: "https://examplePublicKey@o0.ingest.sentry.io/0"
// });

function App() {
	var tokenState = useState(null);
	var darkmodeState = useState(true);
	var [darkmode, setDarkmode] = darkmodeState;

	useEffect(() => {
		var isDarkmode = localStorage.getItem("darkmode") === "true";
		setDarkmode(isDarkmode);
	}, [setDarkmode]);

	return (
		<TokenContext.Provider value={tokenState}>
			<DarkmodeContext.Provider value={darkmodeState}>
				{(function () {
					if (darkmode) {
						return (
							<style>
								{`:root {
                                    --primary: #ff1168;
                                    --secondary: white;
                                    --additional: #111625;
                                    --light: #341931;
                                }`}
							</style>
						);
					}
				})()}
				<MainContent />
				<Router primary={false}>
					{(function () {
						if (tokenState[0]?.access_token) {
							return (
								<>
									<MainNavBar path="/featured" />
									<MainNavBar path="/albums/*" />
									<MainNavBar path="/album/*" />
									<MainNavBar path="/categories" />
									<MainNavBar path="/playlists/*" />
								</>
							);
						}
					})()}
				</Router>
			</DarkmodeContext.Provider>
		</TokenContext.Provider>
	);
}

export default App;

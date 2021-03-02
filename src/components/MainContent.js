import { Router } from "@reach/router";
import AlbumDisplay from "../views/AlbumDisplay";
import Albums from "../views/Albums";
import Categories from "../views/Categories";
import Featured from "../views/Featured";
import Player from "../views/Player";
import PlayLists from "../views/PlayLists";
import { useContext } from "react";
import { TokenContext } from "../TokenContext";
import Callback from "../views/Callback";
import "./MainContent.scss";
import Login from "../views/Login";
import Splash from "../views/Splash";

function MainContent() {
	var [token] = useContext(TokenContext);

	function login(validation) {
		if (!validation.errors) {
			window.location.href = validation.action;
		}
	}

	return (
		<main className="MainContent">
			<Splash />
			<Router>
				<Login default validate={login} />
				<Callback path="/callback" />
				{(function () {
					if (token?.access_token) {
						return (
							<>
								<Albums path="/albums" />
								<PlayLists path="/playlists" />
								<Featured path="/featured" />
								<Categories path="/categories" />
								<AlbumDisplay path="/:type/:id" />
								<Player path="/player/:id" />
							</>
						);
					}
				})()}
			</Router>
		</main>
	);
}

export default MainContent;

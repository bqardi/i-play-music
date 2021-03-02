import CardFadedBottom from "../components/CardFadedBottom";
import MainTitle from "../components/MainTitle";
import MainHeader from "../components/MainHeader";
import "./Featured.scss";
import { useContext, useEffect, useState } from "react";
import { TokenContext } from "../TokenContext";
import helpers from "../helpers";

function Featured() {
	var [token, setToken] = useContext(TokenContext);
	var [content, setContent] = useState({});

	useEffect(
		function () {
			helpers.spotify("/browse/featured-playlists?country=DK&locale=en_GB", token, data =>
				data.token_expired ? setToken(data) : setContent(data)
			);
		},
		[token, setContent, setToken]
	);

	return (
		<section className="Featured">
			<MainHeader title="Featured" />
			<MainTitle title="Featured" gradient />
			<div className="Featured__cards">
				{content.playlists?.items.map(item => (
					<CardFadedBottom key={item.id} to={`/playlists/${item.id}`} src={item.images[0].url}>
						{/* <h3 className="Featured__title">{item.name}</h3> */}
						<p className="Featured__text">{item.description}</p>
					</CardFadedBottom>
				))}
			</div>
		</section>
	);
}

export default Featured;

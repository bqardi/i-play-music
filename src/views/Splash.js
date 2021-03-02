import { useEffect, useState } from "react";
import "./Splash.scss";

function Splash() {
	var [hide, setHide] = useState(false);

	useEffect(() => {
		if (!sessionStorage.getItem("splash")) {
			setTimeout(() => {
				setHide(true);
			}, 4500);
			setTimeout(() => {
				sessionStorage.setItem("splash", "false");
			}, 6000);
		}
	}, []);

	if (sessionStorage.getItem("splash")) {
		return null;
	}

	return (
		<article className={`Splash${hide ? " js-hidden" : ""}`}>
			<div className="Splash__content">
				<img className="Splash__logo" src="/images/icons/iplaymusic-logo-solid.svg" alt="Logo" />
				<h1 className="Splash__title">iPlayMusic</h1>
			</div>
		</article>
	);
}

export default Splash;

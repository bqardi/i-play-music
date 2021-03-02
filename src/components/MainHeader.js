import { useEffect, useRef, useState } from "react";
import IconLink from "./IconLink";
import "./MainHeader.scss";

function MainHeader({ title, modifier, transparent, ...other }) {
	var textInput = useRef(null);
	var [displaySearch, setDisplaySearch] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			textInput.current.focus();
			textInput.current.select();
		}, 150);
	}, [displaySearch]);

	function showSearch(e) {
		e.preventDefault();
		setDisplaySearch(!displaySearch);
	}

	function search(e) {
		if (e.key === "Enter") {
			console.log(e.target.value);
			setDisplaySearch(false);
		}
	}

	return (
		<header className={`MainHeader${transparent ? " MainHeader--transparent" : ""}`} {...other}>
			<IconLink
				onClick={() => window.history.back()}
				modifier={modifier}
				path="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"
			/>
			<h1 className="MainHeader__title">{title}</h1>
			<div className="MainHeader__search">
				<div
					onClick={() => setDisplaySearch(false)}
					className={`MainHeader__clicker${displaySearch ? " js-display" : ""}`}
				>
					<input
						ref={textInput}
						tabIndex="-1"
						onKeyUp={search}
						onClick={e => e.stopPropagation()}
						type="search"
						className="MainHeader__input"
					/>
				</div>
				<IconLink
					onClick={showSearch}
					modifier={modifier}
					path="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
				/>
			</div>
		</header>
	);
}

export default MainHeader;

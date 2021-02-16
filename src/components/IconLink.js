import { Link } from "@reach/router";
import "./IconLink.scss";

function IconLink({ to, path, modifier, ...props }) {
	if (to) {
		return (
			<Link to={to} className={`IconLink${modifier ? " IconLink--" + modifier : ""}`} {...props}>
				<svg className="IconLink__icon" viewBox="0 0 24 24">
					<path d={path}></path>
				</svg>
			</Link>
		);
	}
	return (
		<button className={`IconLink${modifier ? " IconLink--" + modifier : ""}`} {...props}>
			<svg className="IconLink__icon" viewBox="0 0 24 24">
				<path d={path}></path>
			</svg>
		</button>
	);
}

export default IconLink;

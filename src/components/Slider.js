import "./Slider.scss";

function Slider({ children }) {
	return (
		<article className="Slider">
			<div className="Slider__scrollBarHide">
				<div className="Slider__container" style={{ "--slider-total": children?.length }}>
					{children}
				</div>
			</div>
		</article>
	);
}

export default Slider;

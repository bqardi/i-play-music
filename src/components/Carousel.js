import "./Carousel.scss";

function Carousel({ pics }) {
	return (
		<article className="Carousel">
			<div className="Carousel__absolute">
				<div className="Carousel__grid">
					<div className="Carousel__empty"></div>
					<div className="Carousel__image Carousel__image--side Carousel__image--left">{pics.previous}</div>
					<div className="Carousel__image Carousel__image--focus">{pics.current}</div>
					<div className="Carousel__image Carousel__image--side Carousel__image--right">{pics.next}</div>
					<div className="Carousel__empty"></div>
					<h3 className="Carousel__title">{pics.title}</h3>
				</div>
			</div>
		</article>
	);
}

export default Carousel;

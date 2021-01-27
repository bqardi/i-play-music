import "./Carousel.scss";

function Carousel({pics}){
    return (
        <article className="Carousel">
            <div className="Carousel__absolute">
                <div className="Carousel__grid">
                    <div className="Carousel__image Carousel__image--side">{pics.previous}</div>
                    <div className="Carousel__image Carousel__image--focus">{pics.current}</div>
                    <div className="Carousel__image Carousel__image--side">{pics.next}</div>
                    <h3 className="Carousel__title">{pics.title}<br/>{pics.type}</h3>
                </div>
            </div>
        </article>
    );
}

export default Carousel;
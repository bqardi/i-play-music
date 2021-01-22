import "./CardFadedBottom.scss";

function CardFadedBottom({src, children}){
    return (
        <article className="CardFadedBottom" style={{backgroundImage: `url(${src})`}}>
            {/* <img className="CardFadedBottom__image" src={src} alt="Something"/> */}
            <div className="CardFadedBottom__content">
                {children}
            </div>
        </article>
    );
}

export default CardFadedBottom;
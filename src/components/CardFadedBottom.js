import "./CardFadedBottom.scss";

function CardFadedBottom({src, children}){
    return (
        <article className="CardFadedBottom">
            <img className="CardFadedBottom__image" src={src} alt="Something"/>
            <div className="CardFadedBottom__content">
                {children}
            </div>
        </article>
    );
}

export default CardFadedBottom;
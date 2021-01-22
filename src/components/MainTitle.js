import "./MainTitle.scss";

function MainTitle({title, gradient}){
    if (!title) {
        return null;
    }
    return (
        <h2 className={`MainTitle${gradient ? " MainTitle--gradient" : ""}`}>
            {title}
        </h2>
    );
}

export default MainTitle;
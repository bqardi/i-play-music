import "./MainTitle.scss";

function MainTitle({title}){
    if (!title) {
        return null;
    }
    return (
        <h2 className="MainTitle">
            <span className="MainTitle__gradient">
                {title}
            </span>
        </h2>
    );
}

export default MainTitle;
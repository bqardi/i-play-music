import { Link } from "@reach/router";
import "./SampleView.scss";

function SampleView({title, viewAll, children}){
    var viewAllLink = viewAll ? <Link to="/" className="SampleView__link">View All</Link> : "";
    return (
        <article className="SampleView">
            <header className="SampleView__header">
                <h3 className="SampleView__title">{title}</h3>
                {viewAllLink}
            </header>
            <div className="SampleView__content">
                {children}
            </div>
        </article>
    );
}

export default SampleView;
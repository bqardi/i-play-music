import "./Accordion.scss";

function Accordion({title, color, children}){
    return (
        <details className="Accordion">
            <summary className="Accordion__summary" style={{backgroundColor: color}}>
                <h4 className="Accordion__title">
                    {title}
                    <svg className="Accordion__bullets" viewBox="0 0 24 24"><path d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z"></path></svg>
                </h4>
            </summary>
            <div className="Accordion__content">
                {children}
            </div>
        </details>
    );
}

export default Accordion;
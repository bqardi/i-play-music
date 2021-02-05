import { useContext, useEffect, useState } from "react";
import {TokenContext} from "../TokenContext";
import ChevronLink from "./ChevronLink";
import "./Accordion.scss";
import helpers from "../helpers";

function Accordion({title, color, id}){
    var [token, setToken] = useContext(TokenContext);
    var [content, setContent] = useState({});
    var [isOpen, setIsOpen] = useState({initial: true});
    
	useEffect(function() {
        if (isOpen.open) {
            helpers.spotify(`/browse/categories/${id}/playlists?country=DK&locale=en_GB`, token, data =>
                data.token_expired ? setToken(data) : setContent(data));
            return setIsOpen({open: false});
        }
    }, [token, setContent, id, isOpen, setToken]);

    function setOpen(){
        if (!isOpen.initial) return;
        setIsOpen({open: true});
    }

    return (
        <details className="Accordion" onClick={setOpen}>
            <summary className="Accordion__summary" style={{backgroundColor: color}}>
                <h4 className="Accordion__title">
                    {title}
                    <svg className="Accordion__bullets" viewBox="0 0 24 24"><path d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z"></path></svg>
                </h4>
            </summary>
            <div className="Accordion__content">
                {content.playlists?.items.map(item => <ChevronLink key={item.id} to={`/playlists/${item.id}`} title={item.name} count={item.tracks.total}/>)}
            </div>
        </details>
    );
}

export default Accordion;
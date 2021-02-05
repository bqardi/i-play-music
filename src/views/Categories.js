import Accordion from "../components/Accordion";
import MainHeader from "../components/MainHeader";
import MainTitle from "../components/MainTitle";
import { useContext, useEffect, useState } from "react";
import {TokenContext} from "../TokenContext";
import "./Categories.scss";
import helpers from "../helpers";

function Categories(){
    var [token, setToken] = useContext(TokenContext);
    var [content, setContent] = useState({});
    
	useEffect(function() {
        helpers.spotify(`/browse/categories?country=DK&locale=en_GB`, token, data =>
            data.token_expired ? setToken(data) : setContent(data));
    }, [token, setContent, setToken]);

    return (
        <section className="Categories">
            <MainHeader title="Categories"/>
            <MainTitle title="Categories" gradient/>
            {content.categories?.items.map((item, iIndex) =>
                <Accordion key={iIndex} title={item.name} id={item.id}/>
            )}
        </section>
    );
}

export default Categories;
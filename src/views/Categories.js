import Accordion from "../components/Accordion";
import ChevronLink from "../components/ChevronLink";
import MainHeader from "../components/MainHeader";
import MainTitle from "../components/MainTitle";
import fakeAPIContent from "../FakeAPIContent";
import "./Categories.scss";

function Categories(){
    var {categories} = fakeAPIContent;
    return (
        <section className="Categories">
            <MainHeader title="Categories"/>
            <MainTitle title="Categories" gradient/>
            {categories.map((item, iIndex) =>
                <Accordion key={iIndex} title={item.title}>
                    {item.content.map((content, cIndex) =>
                        <ChevronLink key={iIndex + "-" + cIndex} to={content.to} title={content.title}/>
                    )}
                </Accordion>
            )}
        </section>
    );
}

export default Categories;
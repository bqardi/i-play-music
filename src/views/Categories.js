import Accordion from "../components/Accordion";
import ChevronLink from "../components/ChevronLink";
import MainHeader from "../components/MainHeader";
import MainTitle from "../components/MainTitle";
import "./Categories.scss";

function Categories(){
    var fakeAPIContent = [
        {
            title: "Alternative",
            content: [
                {
                    title: "Something",
                    to: "/",
                },
            ]
        },
        {
            title: "Blues",
            content: [
                {
                    title: "Acoustic Blues",
                    to: "/",
                },
                {
                    title: "Blues Rock",
                    to: "/",
                },
                {
                    title: "Canadian Blues",
                    to: "/",
                },
            ]
        },
        {
            title: "Classical",
            content: [
                {
                    title: "Something else",
                    to: "/",
                },
            ]
        },
        {
            title: "Classical",
            content: [
                {
                    title: "Something else",
                    to: "/",
                },
            ]
        },
        {
            title: "Classical",
            content: [
                {
                    title: "Something else",
                    to: "/",
                },
            ]
        },
        {
            title: "Classical",
            content: [
                {
                    title: "Something else",
                    to: "/",
                },
            ]
        },
        {
            title: "Classical",
            content: [
                {
                    title: "Something else",
                    to: "/",
                },
            ]
        },
        {
            title: "Classical",
            content: [
                {
                    title: "Something else",
                    to: "/",
                },
            ]
        },
        {
            title: "Hello",
            content: [
                {
                    title: "Something else",
                    to: "/",
                },
            ]
        },
        {
            title: "Classical",
            content: [
                {
                    title: "Something else",
                    to: "/",
                },
            ]
        },
        {
            title: "Classical",
            content: [
                {
                    title: "Something else",
                    to: "/",
                },
            ]
        },
        {
            title: "Classical",
            content: [
                {
                    title: "Something else",
                    to: "/",
                },
            ]
        },
    ]
    return (
        <section className="Categories">
            <MainHeader title="Categories"/>
            <MainTitle title="Categories" gradient/>
            {fakeAPIContent.map((item, iIndex) =>
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
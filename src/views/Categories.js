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
                    to: "/album/123",
                },
            ]
        },
        {
            title: "Blues",
            content: [
                {
                    title: "Acoustic Blues",
                    to: "/album/124",
                },
                {
                    title: "Blues Rock",
                    to: "/album/125",
                },
                {
                    title: "Canadian Blues",
                    to: "/album/126",
                },
            ]
        },
        {
            title: "Classical",
            content: [
                {
                    title: "Something else",
                    to: "/album/127",
                },
            ]
        },
        {
            title: "Classical",
            content: [
                {
                    title: "Something else",
                    to: "/album/128",
                },
            ]
        },
        {
            title: "Classical",
            content: [
                {
                    title: "Something else",
                    to: "/album/129",
                },
            ]
        },
        {
            title: "Classical",
            content: [
                {
                    title: "Something else",
                    to: "/album/130",
                },
            ]
        },
        {
            title: "Classical",
            content: [
                {
                    title: "Something else",
                    to: "/album/131",
                },
            ]
        },
        {
            title: "Classical",
            content: [
                {
                    title: "Something else",
                    to: "/album/132",
                },
            ]
        },
        {
            title: "Hello",
            content: [
                {
                    title: "Something else",
                    to: "/album/133",
                },
            ]
        },
        {
            title: "Classical",
            content: [
                {
                    title: "Something else",
                    to: "/album/134",
                },
            ]
        },
        {
            title: "Classical",
            content: [
                {
                    title: "Something else",
                    to: "/album/135",
                },
            ]
        },
        {
            title: "Classical",
            content: [
                {
                    title: "Something else",
                    to: "/album/136",
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
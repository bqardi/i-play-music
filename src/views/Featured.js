import CardFadedBottom from "../components/CardFadedBottom";
import MainTitle from "../components/MainTitle";
import MainHeader from '../components/MainHeader';
import "./Featured.scss";

function Featured(){
    var fakeAPIContent = [
        {
            id: "111",
            title: "Old Town Road",
            text: "Soundtrack",
            images: [
                "/images/old-town-road.jpg"
            ]
        },
        {
            id: "112",
            title: "The Greatest Showman",
            text: "Soundtrack",
            images: [
                "/images/the-greatest-showman.jpg"
            ]
        },
        {
            id: "113",
            title: "Scary Girl",
            text: "Soundtrack",
            images: [
                "/images/scary-girl.jpg"
            ]
        },
    ]
    return (
        <section className="Featured">
            <MainHeader title="Featured"/>
            <MainTitle title="Featured" gradient/>
            <div className="Featured__cards">
                {fakeAPIContent.map((item) => 
                    <CardFadedBottom key={item.id} to={`/album/${item.id}`} src={item.images[0]}>
                        <h3 className="Featured__title">{item.title}</h3>
                        <p className="Featured__text">{item.text}</p>
                    </CardFadedBottom>
                )}
            </div>
        </section>
    );
}

export default Featured;
import CardFadedBottom from "../components/CardFadedBottom";
import MainTitle from "../components/MainTitle";
import MainHeader from '../components/MainHeader';
import fakeAPIContent from "../FakeAPIContent";
import "./Featured.scss";

function Featured(){
    var{albums} = fakeAPIContent;
    return (
        <section className="Featured">
            <MainHeader title="Featured"/>
            <MainTitle title="Featured" gradient/>
            <div className="Featured__cards">
                {albums.map((item) => 
                    <CardFadedBottom key={item.id} to={`/album/${item.id}`} src={item.images[0]}>
                        <h3 className="Featured__title">{item.title}</h3>
                        <p className="Featured__text">{item.type}</p>
                    </CardFadedBottom>
                )}
            </div>
        </section>
    );
}

export default Featured;
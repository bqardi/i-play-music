import CardFadedBottom from "../components/CardFadedBottom";
import MainTitle from "../components/MainTitle";
import MainHeader from '../components/MainHeader';
import "./Featured.scss";

function Featured(){
    return (
        <section className="Featured">
            <MainHeader title="Featured"/>
            <MainTitle title="Featured" gradient/>
            <div className="Featured__cards">
                <CardFadedBottom src="./images/the-greatest-showman.jpg">
                    <h3 className="Featured__title">The Greatest Showman</h3>
                    <p className="Featured__text">Soundtrack</p>
                </CardFadedBottom>
                <CardFadedBottom src="./images/scary-girl.jpg">
                    <h3 className="Featured__title">Scary Girl</h3>
                    <p className="Featured__text">Soundtrack</p>
                </CardFadedBottom>
            </div>
        </section>
    );
}

export default Featured;
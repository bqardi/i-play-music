import MainTitle from "../components/MainTitle";
import MainHeader from '../components/MainHeader';
import "./Albums.scss";
import SampleView from "../components/SampleView";
import CardImage from "../components/CardImage";
import Slider from "../components/Slider";
import CardMini from "../components/CardMini";

function Albums(){
    return (
        <section className="Albums">
            <MainHeader title="Music"/>
            <MainTitle title="All Albums" gradient/>
            <SampleView title="Featured Albums" viewAll>
                <Slider>
                    <CardImage src="./images/butterfly.jpg" alt="Butterfly"/>
                    <CardImage src="./images/scary-girl.jpg" alt="Scary Girl"/>
                    <CardImage src="./images/the-greatest-showman.jpg" alt="The Greatest Showman"/>
                </Slider>
            </SampleView>
            <SampleView title="New Releases" viewAll>
                <div className="Albums__grid">
                    <CardMini src="./images/butterfly.jpg" title="Old Town Road" description="Billy Ray Cyrus" additional="12 Songs"/>
                    <CardMini src="./images/scary-girl.jpg" title="Victory Lab" description="Nipsey Hussle" additional="8 Songs"/>
                    <CardMini src="./images/the-greatest-showman.jpg" title="Thank U, Next" description="Ariana Grande" additional="13 Songs"/>
                    <CardMini src="./images/butterfly.jpg" title="Death Race For Love" description="Juice WRLD" additional="11 Songs"/>
                </div>
            </SampleView>
        </section>
    );
}

export default Albums;
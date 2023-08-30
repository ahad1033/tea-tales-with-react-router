import Banner from "../../Component/Banner/Banner";
import FeaturedProducts from "../../Component/FeaturedProducts/FeaturedProducts";
import GreatTea from "../../Component/GreatTea/GreatTea";
import MeetClient from "../../Component/MeetClient/MeetClient";
import News from "../../Component/News/News";

const Home = () => {
    return (
        <div>
            <Banner />
            <FeaturedProducts />
            <GreatTea />
            <MeetClient />
            <News />
        </div>
    );
};

export default Home;
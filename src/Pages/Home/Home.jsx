import Banner from "../../Component/Banner/Banner";
import FeaturedProducts from "../../Component/FeaturedProducts/FeaturedProducts";
import GreatTea from "../../Component/GreatTea/GreatTea";
import MeetClient from "../../Component/MeetClient/MeetClient";

const Home = () => {
    return (
        <div>
            <Banner />
            <FeaturedProducts />
            <GreatTea />
            <MeetClient />
        </div>
    );
};

export default Home;
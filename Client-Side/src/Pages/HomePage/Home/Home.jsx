import Banner from "../Banner/Banner";
import BeautyCategory from "../BeautyCategory/BeautyCategory";
import BeautyProduct from "../BeautyProduct/BeautyProduct";
import Dazzle from "../Dazzle/Dazzle";
import Discover from "../Discover/Discover";

const Home = () => {
  return (
    <div>
      <Banner />
      <BeautyProduct />
      <BeautyCategory />
      <Dazzle />
      <Discover />
    </div>
  );
};

export default Home;

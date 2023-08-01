import Banner from "../../Components/Banner";
import fimage from "../../../src/assets/img/bghome.jpg";

const Home = () => {
  return (
    <div style={{'--image-url': `url(${fimage})`}} className="Home bg-dbg-100 min-h-screen bg-[image:var(--image-url)] bg-cover bg-center">
      
      <div>
        <div className="z-20 ">
          <Banner />
        </div>
      </div>
    </div>
  );
};

export default Home;

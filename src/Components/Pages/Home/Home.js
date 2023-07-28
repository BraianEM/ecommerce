import Navbar from "../../Navbar/Navbar";
import Titulo from "../../Titulo/Tittle";
import Banner from "../../Banner";
import fimage from "../../../assets/img/32d.jpg";

const Home = () => {
  return (
    <div style={{'--image-url': `url(${fimage})`}} className="Home bg-dbg-100 min-h-screen bg-[image:var(--image-url)] bg-cover bg-center">
      
      <div>
        <div className="z-20">
          <Banner />
        </div>
        <div>
          <Titulo message="Welcome" />
          <p>Bienvenido al sitio web de nuestra empresa</p>
        </div>
      </div>
    </div>
  );
};

export default Home;

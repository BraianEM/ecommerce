import Navbar from "../../Navbar/Navbar";
import Titulo from "../../Titulo/Tittle";

const Home = () => {
    return (
       <div className="Home bg-dbg-100 min-h-screen" >
        <Titulo message='Welcome' />
        <p>Bienvenido al sitio web de nuestra empresa</p>
       </div>
    )
};

export default Home;
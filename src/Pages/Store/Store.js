import React, { useEffect, useState } from "react";
import Titulo from "../../Components/Titulo/Tittle";
import Cards from "../../Components/Cards/Cards";
import productos from "../../Components/Cards/Productos";
import SearchBar from "../../Components/SearchBar/SearchBar";
import logo from '../../../src/assets/img/LOGO64.png'
import { Link } from "react-router-dom";
import bg3 from "../../../src/assets/img/bg3.jpg"

const Store = () => {
  const [products, setProducts] = useState(productos)
  useEffect(() => {
    console.log('products cambio');
  }, [products])
  return (
    <div style={{'--image-url': `url(${bg3})`}} className="Store bg-dbg-100 min-h-screen bg-[image:var(--image-url)] bg-cover bg-center pt-4">
      <Titulo titulo="Tienda" />
      <SearchBar products={products} setProducts={setProducts} />
      <div className="flex flex-wrap items-center justify-center gap-2 backdrop-blur-sm">
        {products.map(function (producto, index) {
          return (
            <Cards key={index}
              producto={producto}
            />
          );
        })}
        ;
      </div>
      <div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
        <div>
          <Link to="/" className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12">
            <img className="object-cover object-center w-full h-full rounded-full" src={logo} alt="logo" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Store;
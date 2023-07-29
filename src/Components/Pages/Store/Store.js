import React, { useEffect, useState } from "react";
import Titulo from "../../Titulo/Tittle";
import Cards from "../../Cards/Cards";
import productos from "../../Cards/Productos";
import "./Store.css";
import SearchBar from "../../SearchBar/SearchBar";

const Store = () => {
  const [products, setProducts] = useState(productos)
  useEffect(() => {
    console.log('products cambio');
  }, [products])
  return (
    <div className="Store min-h-screen">
      <Titulo titulo="Tienda" />
      <SearchBar products={products} setProducts={setProducts} />
      <div className="flex flex-wrap items-center justify-center gap-2">
        {products.map(function (producto, index) {
          return (
            <Cards key={index}
              producto={producto}
            />
          );
        })}
        ;
      </div>
    </div>
  );
};

export default Store;
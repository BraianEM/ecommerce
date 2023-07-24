import React from "react";
import Titulo from "../../Titulo/Tittle";
import Cards from "../../Cards/Cards";
import productos from "../../Cards/Productos";
import "./Store.css";

const Store = () => {
  return (
    <div>
      <Titulo titulo="Tienda" />
      <div className="galeria">
        {productos.map(function (element) {
          return (
            <Cards
              imagen={element.imagen}
              nombre={element.nombre}
              descripcion={element.descripcion}
              precio={element.precio}
            />
          );
        })}
        ;
      </div>
    </div>
  );
};

export default Store;

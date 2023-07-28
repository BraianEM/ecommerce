import React, { useState, useEffect } from "react";
import productos from "../Cards/Productos";

const Search = ({ products, setProducts }) => {

  const [produ, setProdu] = useState(products)

  const [search, setSearch] = useState("")

  const searcher = (e) => {
    if (!search) {
      setProducts(productos)
    }
    setSearch(e.target.value)
    const filteredProds = produ.filter((product) => product.nombre.toLowerCase().includes(search))
    setProducts(filteredProds)
  }

  return (
    <div>
      <input value={search} onChange={searcher} onKeyUp={searcher} type="text" placeholder='Search' />
    </div>
  );
};

export default Search;

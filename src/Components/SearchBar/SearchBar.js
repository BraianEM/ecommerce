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
    <div class='w-full flex items-center justify-center mt-5'>
      <div class="relative flex items-center w-2/4 h-12 rounded-lg focus-within:shadow-sm bg-dbg-200 overflow-hidden border-2 border-dbg-100">
        <div class="grid place-items-center w-12 text-dtext-200">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input
          class="peer h-full w-full outline-none text-sm bg-dbg-300 text-dtext-200 pr-2 "
          type="text"
          id="search"
          placeholder="Search something.."
          value={search}
          onChange={searcher}
          onKeyUp={searcher}
        />
      </div>
    </div>
  );
};

export default Search;
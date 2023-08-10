import React, { useState } from "react";
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
    <div className='w-full flex items-center justify-center mt-5'>
      <div className="relative flex items-center w-2/4 h-12 rounded-lg focus-within:shadow-sm bg-dbg-200 overflow-hidden border-2 border-dbg-100">
        <div className="grid place-items-center w-12 text-dtext-200">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input
          className="peer h-full w-full outline-none text-sm bg-dbg-300 text-dtext-200 pr-2 "
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
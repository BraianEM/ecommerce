

const Cards = ({producto}) => {
  return (
   <>
   
    <div className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-dPrimary-100 bg-gray-200 shadow-md hover:scale-105 transition-all">
      <a className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl items-center">
        <img className="object-cover hover:scale-110 transition-all h-full w-full aspect-auto" src={producto.imagen} />
        <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-dtext-100">{producto.descuento}% OFF</span>
      </a>
      <div className="mt-4 px-5 pb-5">
        <a>
          <h5 className="text-xl tracking-tight text-dPrimary-200">{producto.nombre}</h5>
          <p>{producto.descripcion}</p>
        </a>
        <div className="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span className="text-3xl font-bold text-slate-900">{producto.oferta}</span>
            <span className="text-sm text-slate-900 line-through">{producto.precio}</span>
          </p>
        </div>
        <a className="flex items-center justify-center rounded-md bg-dPrimary-100 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-dPrimary-200 transition-all focus:outline-none focus:ring-4 focus:ring-blue-300">
          <svg className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          Agregar al carrito</a>
      </div>
    </div>
   </>
  );
};

export default Cards;

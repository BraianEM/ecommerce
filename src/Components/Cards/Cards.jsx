import "./Cards.css"
const Cards = (props) => {
  return (
    <div class="product-card">
      <div class="product-tumb">
        <img src={props.imagen} alt={props.nombre} />
      </div>
      <div class="product-details">
        <h4>{props.nombre}</h4>
        <p>{props.descripcion}</p>
        <div class="product-bottom-details">
          <div class="product-price">
            <h3>{props.precio}</h3>
          </div>
          <div class="product-links"></div>
          <a href=""><i class="fa fa-shopping-cart"></i></a>
        </div>
      </div>
    </div>
  );
};

export default Cards;

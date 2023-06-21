import cart from "./cart.webp";
import CartCounter from "./CartCounter";
const CartWidget = () => {
  return (
    <div className="d-flex align-items-center">
      <img src={cart} alt="Icono del carrito"/>
      <CartCounter />
    </div>
  );
};

export default CartWidget;

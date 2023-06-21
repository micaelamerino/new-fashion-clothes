import { useContext } from "react";
import { Context } from "../../context/Context";
import { toast } from "react-toastify";

const CartQuantity = ({ product }) => {
  const { cart, setCart, addProduct } = useContext(Context);

  const removeProduct = () => {
    const searchProduct = cart.find((e) => e.id === product.id);
    searchProduct.quantity !== 1 &&
      setCart(
        cart.map((e) =>
          e.id === product.id
            ? { ...product, quantity: searchProduct.quantity - 1 }
            : e
        )
      );
  };

  const deleteProduct = (product) => {
    const searchProduct = cart.find((e) => e.id === product.id);
    const newCart = cart.filter((e) => e !== searchProduct);
    setCart(newCart);
    toast.error("Eliminado del carrito", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  return (
    <div className="d-flex justify-content-center gap-1">
      <button type="button" className="btn-style" onClick={removeProduct}>
        -
      </button>
      <span>{product.quantity}</span>
      <button type="button" className="btn-style" onClick={() => addProduct(product)}>
        +
      </button>
      <button type="button" className="btn-style" onClick={() => deleteProduct(product)}>
        Eliminar
      </button>
    </div>
  );
};

export default CartQuantity;

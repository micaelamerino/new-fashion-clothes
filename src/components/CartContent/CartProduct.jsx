import { useContext } from "react";
import { Context } from "../../context/Context";
import CartQuantity from "./CartQuantity";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Image from "../Image/Image";
const CartProduct = () => {
  const { cart, total } = useContext(Context);

  const minValue = 15000;

  const navigate = useNavigate();

  const handleClick = () => {
    total < minValue
      ? Swal.fire({
          html: "<div><h3>No puede continuar hasta alcanzar el monto mínimo</h3></div>",
          confirmButtonColor: "black",
        })
      : navigate("/finalizar");
  };

  return (
    <>
      <section className="row">
        {cart?.length > 0 &&
          cart.map((p) => (
            <article
              key={p.id}
              className="col-md-6 col-lg-4 col-xl-3 d-flex flex-column align-items-center mb-2"
            >
              <Image image={p.image} name={p.name} />
              <h3>{p.name}</h3>
              <p>
                <b className="fs-4">$ {p.price * p.quantity}</b>
              </p>
              <CartQuantity product={p} />
            </article>
          ))}
      </section>
      <div>
        {total < minValue && (
          <p className="text-danger mb-0">
            <b>*El monto mínimo de compra es de $15000</b>
          </p>
        )}
        <h3>
          El monto total es de: <b>$ {total}</b>
        </h3>
      </div>
      <div className="d-flex justify-content-center mb-3  gap-1">
        <button
          type="button"
          className="btn-style"
          onClick={() => navigate("/productos")}
        >
          Seguir comprando
        </button>
        <button type="button" className="btn-style" onClick={handleClick}>
          Finalizar
        </button>
      </div>
    </>
  );
};
export default CartProduct;

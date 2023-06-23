import { useNavigate } from "react-router-dom";
const CartEmpty = () => {
  const navigate = useNavigate();
  return (
      <div className="d-flex flex-column align-items-center mb-4">
        <h3>No hay productos</h3>
        <button
          type="button"
          className="btn-style"
          onClick={() => navigate("/productos")}
        >
          Ir a la tienda
        </button>
      </div>
  );
};
export default CartEmpty;

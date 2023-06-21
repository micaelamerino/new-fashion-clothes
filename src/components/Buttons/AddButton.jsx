import { useContext } from "react";
import { Context } from "../../context/Context";

const AddButton = ({ product }) => {
  const { addProduct } = useContext(Context);

  return (
    <button type="button" className="btn-style" onClick={()=>addProduct(product)}>
      Agregar al carrito
    </button>
  );
};
export default AddButton;

import { useNavigate } from "react-router-dom";

const DetailsButton = ({product}) => {
  const navigate = useNavigate();
  return (
    <button type="button" className="btn-style" onClick={() => navigate(`/detalles/${product.id}`)}>
      Ver más
    </button>
  );
};
export default DetailsButton;

import { useNavigate } from "react-router-dom";

const ReturnButton = () => {
  const navigate = useNavigate();
  return (
    <button type="button" className="btn-style" onClick={() => navigate(-1)}>
      Regresar
    </button>
  );
};

export default ReturnButton;

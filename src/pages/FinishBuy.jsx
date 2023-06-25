import BuyForm from "../components/Forms/BuyForm";

const FinishBuy = () => {
  return (
    <main className="navbar-separation d-flex flex-column align-items-center m-3">
      <h4>Complete el formulario</h4>
      <p>Todos los campos son requeridos</p>
      <BuyForm />
    </main>
  );
};

export default FinishBuy;

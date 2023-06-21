import "./Banner.css";
import send from "./send.webp";
import card from "./card.webp";
import shield from "./shield.webp";
const Banner = () => {
  return (
    <section className="banner-container p-2 m-1 rounded d-flex flex-wrap">
      <div className="d-flex align-items-center gap-3">
        <img src={send} alt="Icono de entrega a domicilio" />
        <p className="m-0">¡Hacemos envíos a todo el país!</p>
      </div>
      <div className="d-flex align-items-center gap-3">
        <img src={card} alt="Icono de tarjeta" />
        <p className="m-0">El monto mínimo es $15000</p>
      </div>
      <div className="d-flex align-items-center gap-3">
        <img src={shield} alt="Icono de escudo" />
        <p className="m-0">Tu compra está protegida</p>
      </div>
    </section>
  );
};

export default Banner;

import phone from "./phone.webp";
import email from "./email.webp";
import instagram from "./instagram.webp";
import map from "./map.webp";
const ContactMeans = () => {
  return (
    <>
      <h5>Contáctanos</h5>
      <div className="d-flex align-items-center gap-2 m-1">
        <img src={phone} alt="Icono de teléfono" />
        <p className="mb-0">(011)123-123</p>
      </div>
      <div className="d-flex align-items-center gap-2 m-1">
        <img src={map} alt="Icono de ubicación" />
        <p className="mb-0">Dirección del lugar</p>
      </div>
      <div className="d-flex align-items-center gap-2 m-1">
        <img src={email} alt="Icono de email" />
        <p className="mb-0">Correo@electrónico.com</p>
      </div>
      <div className="d-flex align-items-center gap-2 m-1">
        <img src={instagram} alt="Icono de instagram" />
        <p className="mb-0">Red social</p>
      </div>
    </>
  );
};
export default ContactMeans;
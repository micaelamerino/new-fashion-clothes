import banelco from "./banelco.webp";
import visa from "./visa.webp";
import amex from "./amex.webp";
import mastercard from "./mastercard.webp";
import oca from "./oca.webp";
const Information = () => {
  return (
    <>
      <div>
        <h5>Medios de pago</h5>
        <div className="d-flex gap-1">
          <div className="img-conteiner">
            <img
              src={banelco}
              alt="Imagen de la tarjeta 'Banelco'"
              loading="lazy"
            />
          </div>
          <div className="img-conteiner">
            <img
              src={amex}
              alt="Imagen de la tarjeta 'American Expres'"
              loading="lazy"
            />
          </div>
          <div className="img-conteiner">
            <img src={visa} alt="Imagen de la tarjeta 'VISA'" loading="lazy" />
          </div>
          <div className="img-conteiner">
            <img
              src={mastercard}
              alt="Imagen de la tarjeta 'Mastercard'"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <div>
        <h5>Formas de envío</h5>
        <div className="img-conteiner">
          <img
            src={oca}
            alt="Imagen del medio de pago por 'OCA'"
            loading="lazy"
          />
        </div>
      </div>
    </>
  );
};
export default Information;
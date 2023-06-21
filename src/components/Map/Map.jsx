import "./Map.css"
import Iframe from "react-iframe";

const Map = () => {
  return (
    <Iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.4749396827765!2d-64.18739522416168!3d-31.4285893968418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432a28ddf861391%3A0xc0fdcfc930551a76!2sPlaza%20Espa%C3%B1a!5e0!3m2!1ses!2sar!4v1685665273375!5m2!1ses!2sar"
      width="300"
      height="280"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
};

export default Map;

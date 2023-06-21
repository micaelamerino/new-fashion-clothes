import "./Footer.css";
import Navigation from "./Navigation";
import Information from "./Information";
import ContactMeans from "./ContactMeans";
const Footer = () => {
  return (
    <footer className="d-flex flex-column">
      <div className="footer-content d-flex flex-wrap">
        <section>
          <Navigation />
        </section>
        <section>
          <Information />
        </section>
        <section>
          <ContactMeans />
        </section>
      </div>
      <div className="text-center mt-3 pt-3 bg-dark text-light">
        <p>Todos los derechos reservados &copy; New Fashion Clothes </p>
      </div>
    </footer>
  );
};
export default Footer;

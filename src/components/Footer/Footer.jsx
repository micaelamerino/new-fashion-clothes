import "./Footer.css";
import Information from "./Information";
import ContactMeans from "./ContactMeans";
import NewSletter from "./NewSletter";
const Footer = () => {
  return (
    <footer className="d-flex flex-column mt-3">
      <div className="footer-content container d-flex flex-wrap gap-3 mt-3">
        <section>
          <ContactMeans />
        </section>
        <section>
          <Information />
        </section>
        <section>
          <NewSletter />
        </section>
      </div>
      <div className="copy-footer text-center mt-3 pt-3 px-2 text-light">
        <p>Todos los derechos reservados &copy; New Fashion Clothes </p>
      </div>
    </footer>
  );
};
export default Footer;

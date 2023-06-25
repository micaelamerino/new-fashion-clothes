import ContactForm from "../components/Forms/ContactForm";
import Map from "../components/Map/Map";

const Contact = () => {
  return (
    <main className="navbar-separation d-flex flex-wrap justify-content-evenly  align-items-center">
      <ContactForm />
      <Map/>
    </main>
  );
};

export default Contact;
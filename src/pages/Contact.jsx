import ContactForm from "../components/Forms/ContactForm";
import Map from "../components/Map/Map";

const Contact = () => {
  return (
    <main className="d-flex flex-wrap justify-content-evenly m-3 align-items-center">
      <ContactForm />
      <Map/>
    </main>
  );
};

export default Contact;
import Banner from "../components/Banner/Banner";
import Featured from "../components/Featured/Featured";
import Header from "./header.jpg";
const Home = () => {
  return (
    <div className="navbar-separation">
      <Banner />
      <header className="text-center mt-2">
        <img className="w-100" src={Header} alt="Imagen de encabezado" loading="lazy" />
      </header>
      <Featured />
    </div>
  );
};
export default Home;

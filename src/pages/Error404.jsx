import imagen from "../assets/error404.webp";
const Error404 = () => {
  return (
    <div className="navbar-separation text-center">
      <img src={imagen} alt="Imagen de 'error 404'"/>
      <h3>No se encontró la página</h3>
    </div>
  );
};

export default Error404;
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setFocus,
  } = useForm();

  const obtenerDatos = (data) => {
    Swal.fire({
      icon: "success",
      title: `<h3>Consulta recibida ${data.name}</h3>`,
      html: "<p>Pronto nos pondremos en contacto con Ud.</p>",
      confirmButtonColor: "black",
      confirmButtonText: "Entendido",
    });
    reset();
    setFocus("name");
  };

  return (
    <form
      className="d-flex flex-column mb-3"
      onSubmit={handleSubmit(obtenerDatos)}
    >
      <h2>Cómo podemos ayudarte?</h2>
      <div className="d-flex flex-column gap-1">
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          id="name"
          autoComplete="on"
          autoFocus
          {...register("name", { required: true, maxLength: 15 })}
        />
        {errors.name?.type === "required" && (
          <div className="alert alert-danger p-1 text-center">
            <p className="m-0">Campo requerido</p>
          </div>
        )}
        {errors.name?.type === "maxLength" && (
          <div className="alert alert-danger p-1 text-center">
            <p className="m-0">Hasta 15 carácteres permitidos</p>
          </div>
        )}
      </div>

      <div className="d-flex flex-column gap-1">
        <label htmlFor="email">Correo electrónico</label>
        <input
          type="email"
          id="email"
          placeholder="correo@example.com"
          autoComplete="on"
          {...register("email", {
            required: true,
            pattern:
              /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/,
          })}
        />
        {errors.email?.type === "required" && (
          <div className="alert alert-danger p-1 text-center">
            <p className="m-0">Por favor ingrese su correo</p>
          </div>
        )}
        {errors.email?.type === "pattern" && (
          <div className="alert alert-danger p-1 text-center">
            <p className="m-0">El correo no es válido, vuelva a intentar</p>
          </div>
        )}
      </div>

      <div className="d-flex flex-column gap-1">
        <label htmlFor="message">Consulta</label>
        <textarea
          typeof="text"
          id="message"
          rows="5"
          cols="30"
          autoComplete="off"
          {...register("message", { required: true, minLength: 20 })}
        />
        {errors.message?.type === "required" && (
          <div className="alert alert-danger p-1 text-center">
            <p className="m-0">Recuerde ingresar su consulta</p>
          </div>
        )}
        {errors.message?.type === "minLength" && (
          <div className="alert alert-danger p-1 text-center">
            <p className="m-0">Debe ingresar al menos 20 caracteres</p>
          </div>
        )}
      </div>
      <div>
        <button type="submit" className="btn-style mt-1">
          Enviar
        </button>
      </div>
    </form>
  );
};

export default ContactForm;

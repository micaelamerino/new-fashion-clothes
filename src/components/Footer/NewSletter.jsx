import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const NewSletter = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const registro = (data) => {
    Swal.fire({
      icon: "success",
      html: `<p>Gracias por sumarte ${data.name}!</p>`,
      confirmButtonColor: "black",
    });
    reset();
  };
  return (
    <>
      <h4>Nuestro newsletter</h4>
      <p>¡Suscribite para recibir todas las novedades!</p>
      <form
        className="d-flex flex-column align-items-start gap-2"
        onClick={handleSubmit(registro)}
      >
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          autoComplete="on"
          {...register("name", { required: true, maxLength: 15 })}
        />
        {errors.name?.type === "required" && (
          <div className="alert alert-danger p-1 text-center">
            <p className="m-0">Complete el campo</p>
          </div>
        )}
        {errors.name?.type === "maxLength" && (
          <div className="alert alert-danger p-1 text-center">
            <p className="m-0">Hasta 15 carácteres permitidos</p>
          </div>
        )}
        <input
          type="email"
          name="email"
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
            <p className="m-0">Complete el campo</p>
          </div>
        )}
        {errors.email?.type === "pattern" && (
          <div className="alert alert-danger p-1 text-center">
            <p className="m-0">Formato no válido, vuelva a intentar</p>
          </div>
        )}
        <button type="submit" className="btn-style">
          Registrarme
        </button>
      </form>
    </>
  );
};

export default NewSletter;

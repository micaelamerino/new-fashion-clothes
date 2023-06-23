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
      html: `<h4>Gracias por sumarte ${data.name}!</h4>`,
      confirmButtonColor: "black",
    });
    reset();
  };
  return (
    <>
      <h5>Nuestro newsletter</h5>
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
          {...register("name", { required: true })}
        />
        {errors.name?.type === "required" && (
          <p className="mb-0 text-warning">*Complete el campo</p>
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
          <p className="mb-0 text-warning">*Complete el campo</p>
        )}
        {errors.email?.type === "pattern" && (
          <p className="mb-0 text-warning">
            *Formato no válido, vuelva a intentar
          </p>
        )}
        <button type="submit" className="btn-style">
          Registrarme
        </button>
      </form>
    </>
  );
};

export default NewSletter;

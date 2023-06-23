import {useForm} from "react-hook-form";
import Swal from 'sweetalert2';

const ContactForm = () => {

    const {register, handleSubmit, formState:{errors}, reset, setFocus} = useForm();

    const obtenerDatos = (data) => {
        Swal.fire({
          icon: "success",
          title: `<h3>Consulta recibida ${data.name}</h3>`,
          html: "<p>Pronto nos pondremos en contacto con Ud.</p>",
          confirmButtonColor: "black",
          confirmButtonText: "Entendido"
        })
        reset();
        setFocus("name");
    }

  return (
    <form className="d-flex flex-column gap-1 mb-3" onSubmit={handleSubmit(obtenerDatos)}>
      <h2>Cómo podemos ayudarte?</h2>
      <div className="d-flex flex-column">
        <label htmlFor="name">Nombre</label>
        <input type="text" id="name" autoComplete="on" autoFocus
        {...register("name",
        {required:true})} />
        {
            errors.name?.type === "required" && (
                <p className="mt-1 mb-0 text-danger">*Este campo es requerido</p>
            )
        }
      </div>
      
      <div className="d-flex flex-column">
        <label htmlFor="email">Correo electrónico</label>
        <input type="email" id="email" placeholder="correo@example.com" autoComplete="on"
        {...register("email",
        {required:true, pattern:/^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/})}  />
        {
            errors.email?.type === "required" && (
                <p className="mt-1 mb-0 text-danger">*Por favor ingrese su correo</p>
            )
        }
        {
            errors.email?.type === "pattern" && (
                <p className="mt-1 mb-0 text-danger">*El correo no es válido, vuelva a intentar</p>
            )
        }
      </div>
      
      <div className="d-flex flex-column">
        <label htmlFor="message">Consulta</label>
        <textarea typeof="text" id="message" rows="5" cols="30" autoComplete="off"
        {...register("message",
        {required:true, minLength:20})}  />
        {
            errors.message?.type === "required" && (
                <p className="mt-1 mb-0 text-danger">*Recuerde ingresar su consulta</p>
            )
        }
        {
            errors.message?.type === "minLength" && (
                <p className="mt-1 mb-0 text-danger">*Debe ingresar al menos 20 caracteres</p>
            )
        }
      </div>
      <div>
        <button type="submit" className="btn-style">Enviar</button>
      </div>
    </form>
  );
};

export default ContactForm;
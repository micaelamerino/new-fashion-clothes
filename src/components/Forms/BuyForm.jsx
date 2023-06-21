import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import { useNavigate } from "react-router-dom";
import { db } from "../../../firebase.config";
import { addDoc, collection } from "firebase/firestore";
import Swal from "sweetalert2";
import "./BuyForm.css";
import ReturnButton from "../Buttons/ReturnButton";

const BuyForm = () => {
  const { total, setCart, cart } = useContext(Context);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    buyer: {
      name: "",
      lastname: "",
      dni: "",
      email: "",
      phone: "",
    },
    total: total,
    items: cart,
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      buyer: {
        ...form.buyer,
        [name]: value,
      },
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const err = onValidate(form);
    if (err === null) {
      const col = collection(db, "orders");
      const order = await addDoc(col, form);
      Swal.fire({
        title: `Gracias ${form.buyer.name.toUpperCase()}`,
        text: `Su orden de compra es: ${order.id}`,
        confirmButtonColor: "black",
      });
      setCart([]);
      navigate("/");
    } else {
      setErrors(err);
    }
  };

  const onValidate = (form) => {
    let isError = false;
    let errors = {};
    let validateName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let validateEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let validateDni = /^\d{8}(?:[-\s]\d{4})?$/;
    let validatePhone =
      /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/;

    if (!form.buyer.name.trim()) {
      errors.name = "El campo 'nombre' es requerido.";
      isError = true;
    } else if (!validateName.test(form.buyer.name)) {
      errors.name = "Este campo solo acepta letras y espacios.";
      isError = true;
    }

    if (!form.buyer.lastname.trim()) {
      errors.lastname = "El campo 'apellido' es requerido.";
      isError = true;
    } else if (!validateName.test(form.buyer.lastname)) {
      errors.lastname = "Este campo solo acepta letras y espacios.";
      isError = true;
    }

    if (!form.buyer.dni.trim()) {
      errors.dni = "El campo 'DNI' es requerido.";
      isError = true;
    } else if (!validateDni.test(form.buyer.dni)) {
      errors.dni =
        "Máximo de 8 carácteres, si posee menos agregue '0' por delante hasta completar.";
    }

    if (!form.buyer.email.trim()) {
      errors.email = "El campo 'email' es requerido";
      isError = true;
    } else if (!validateEmail.test(form.buyer.email)) {
      errors.email = "El formato de email no es válido";
      isError = true;
    }

    if (!form.buyer.phone.trim()) {
      errors.phone = "El campo 'Celular' es requerido";
      isError = true;
    } else if (!validatePhone.test(form.buyer.phone)) {
      errors.phone =
        "Formato no válido, máximo de 10 carácteres, sin paréntesis, símbolos o signos especiales.";
      isError = true;
    }

    return isError ? errors : null;
  };

  return (
    <form
      className="form-buy d-flex flex-column gap-2"
      onSubmit={handleSubmit}
    >
      <div className="d-flex flex-column gap-2">
        <label htmlFor="name">Nombre</label>
        <input
          onChange={handleChange}
          type="text"
          name="name"
          autoComplete="on"
          autoFocus
        />
        {errors.name && (
          <div className="alert alert-danger p-1 text-center">
            <p className="m-0">{errors.name}</p>
          </div>
        )}
      </div>
      <div className="d-flex flex-column gap-2">
        <label htmlFor="lastname">Apellido</label>
        <input
          onChange={handleChange}
          type="text"
          name="lastname"
          autoComplete="on"
        />
        {errors.lastname && (
          <div className="alert alert-danger p-1 text-center">
            <p className="m-0">{errors.lastname}</p>
          </div>
        )}
      </div>
      <div className="d-flex flex-column gap-2">
        <label htmlFor="dni">Número de DNI (Sin puntos ni espacios)</label>
        <input
          onChange={handleChange}
          type="number"
          name="dni"
          autoComplete="off"
        />
        {errors.dni && (
          <div className="alert alert-danger p-1 text-center">
            <p className="m-0">{errors.dni}</p>
          </div>
        )}
      </div>
      <div className="d-flex flex-column gap-2">
        <label htmlFor="email">Correo electrónico</label>
        <input
          onChange={handleChange}
          type="email"
          name="email"
          placeholder="correo@example.com"
          autoComplete="on"
        />
        {errors.email && (
          <div className="alert alert-danger p-1 text-center">
            <p className="m-0">{errors.email}</p>
          </div>
        )}
      </div>
      <div className="d-flex flex-column gap-2">
        <label htmlFor="phone">Celular</label>
        <input
          onChange={handleChange}
          type="phone"
          name="phone"
          autoComplete="off"
        />
        {errors.phone && (
          <div className="alert alert-danger p-1 text-center">
            <p className="m-0">{errors.phone}</p>
          </div>
        )}
      </div>
      <div className="text-center">
        <p>
          Total a abonar: <b>${total}</b>
        </p>
      </div>
      <div className="d-flex justify-content-center gap-1">
        <ReturnButton/>
        <button type="submit" className="btn-style">Comprar</button>
      </div>
    </form>
  );
};

export default BuyForm;

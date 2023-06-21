import { createContext, useState, useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage.jsx";
import { db } from "../../firebase.config.js";
import { collection, getDocs } from "firebase/firestore";
import { toast } from "react-toastify";

export const Context = createContext();

const Datos = ({ children }) => {
  const [data, setData] = useState([]);

  const [error, setError] = useState("");

  useEffect(() => {
    const getProducts = async () => {
      try {
        const col = collection(db, "productos");
        const data = await getDocs(col);
        const result = data.docs.map(
          (doc) => (doc = { id: doc.id, ...doc.data() })
        );
        setData(result);
        if (result.length === 0)
          throw new Error("Sin información, vuelva a intentar!");
      } catch (error) {
        setError(error.message);
      }
    };
    getProducts();
  }, []);

  const [cart, setCart] = useLocalStorage("cart", []);

  const addProduct = (product) => {
    const productRepeat = cart.find((e) => e.id === product.id);
    if (productRepeat) {
      setCart(
        cart.map((i) =>
          i.id === product.id
            ? { ...product, quantity: productRepeat.quantity + 1 }
            : i
        )
      );
    } else {
      setCart([...cart, product]);
    }
    toast.success("Producto agregado!", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  //Total a pagar
  const total = cart.reduce((acc, e) => acc + e.price * e.quantity, 0);

  return (
    <Context.Provider value={{ data, error, cart, setCart, addProduct, total }}>
      {children}
    </Context.Provider>
  );
};

export default Datos;

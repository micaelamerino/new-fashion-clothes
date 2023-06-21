import { useContext, lazy, Suspense } from "react";
import CartEmpty from "./CartEmpty";
const CartProduct = lazy(()=>import("./CartProduct"))
import { Context } from "../../context/Context";

const CartContent = () => {
  const { cart } = useContext(Context);

  return (
    <main className="d-flex flex-column flex-wrap text-center">
      <div className="m-3">
        <h1>Carrito de compras</h1>
      </div>
      {cart?.length > 0 ? <Suspense fallback={<h3>Cargando...</h3>}><CartProduct /></Suspense> : <CartEmpty />}
    </main>
  );
};

export default CartContent;
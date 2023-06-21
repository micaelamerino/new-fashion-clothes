import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
const Products = lazy(() => import("../pages/Products"));
const Contact = lazy(() => import("../pages/Contact"));
const Details = lazy(() => import("../pages/Details"));
const Cart = lazy(() => import("../pages/Cart"));
const Error404 = lazy(() => import("../pages/Error404"));
const FinishBuy = lazy(() => import("../pages/FinishBuy"));

const Routing = () => {
  return (
    <Suspense fallback={<h3>Cargando...</h3>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="/productos" np element={<Products />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/detalles/:id" element={<Details />} />
        <Route path="/carrito" element={<Cart />} />
        <Route path="/finalizar" element={<FinishBuy />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Suspense>
  );
};

export default Routing;

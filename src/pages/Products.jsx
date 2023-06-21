import { useContext, useEffect, useState } from "react";
import { Context } from "../context/Context";
import DetailsButton from "../components/Buttons/DetailsButton";
import AddButton from "../components/Buttons/AddButton";
import Image from "../components/Image/Image";

const Products = () => {
  const { data, error } = useContext(Context);

  const categories = [
    "Camisas",
    "Remeras",
    "Camperas",
    "Pantalones",
    "Shorts",
    "Jeans",
    "Polleras",
  ];

  const [product, setProduct] = useState([]);

  useEffect(() => {
    setProduct(data);
  }, [data]);

  const allProducts = () => {
    setProduct(data);
  };

  const filterProduct = (e) => {
    const searchFilter = data.filter((f) => f.category === e.target.innerHTML);
    setProduct(searchFilter);
  };

  return (
    <main className="container d-flex flex-column flex-wrap mt-3">
      <div>
        <h1>Autumn-winter collection </h1>
        <section className="d-flex flex-wrap gap-1 mb-3">
          <h4>Aplicar filtro</h4>
          <div className="d-flex flex-wrap gap-1 justify-content-start">
            <button type="button" className="btn-style" onClick={allProducts}>
              Ver todo
            </button>
            {categories.map((e) => (
              <button
                key={e}
                type="button"
                className="btn-style"
                onClick={filterProduct}
              >
                {e}
              </button>
            ))}
          </div>
        </section>
      </div>
      <section className="d-flex flex-wrap gap-3 justify-content-evenly mb-3">
        {product.length > 0 ?
          product.map((p) => (
            <article key={p.id}>
              <Image image={p.image} name={p.name} />
              <h3>{p.name}</h3>
              <p>
                <b>$ {p.price}</b>
              </p>
              <div className="d-flex justify-content-center gap-1">
                <AddButton product={p} />
                <DetailsButton product={p} />
              </div>
            </article>
          )):<h3>{error}</h3>}
      </section>
    </main>
  );
};

export default Products;
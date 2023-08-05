import { Context } from "../../context/Context";
import { useContext, useEffect, useState } from "react";
import DetailsButton from "../Buttons/DetailsButton";
import Image from "../Image/Image";

const Featured = () => {
  const { data, error } = useContext(Context);
  const [newProducts, setNewProducts] = useState([]);

  useEffect(() => {
    const featured = data.filter((p) => p.income === "nuevo");
    setNewProducts(featured);
  }, [data]);

  return (
    <main className="container text-center mt-4">
      <h1>Productos Destacados</h1>
      <h2>¡Últimos ingresos!</h2>
      <section className="row mt-4">
        {newProducts.length > 0 ? (
          newProducts.map((p) => (
            <article
              key={p.id}
              className="col-md-6 col-lg-4 col-xl-3 d-flex flex-column gap-2  align-items-center mb-2"
            >
              <h3>{p.name}</h3>
              <div className="position-relative">
                <Image image={p.image} name={p.name} />
                <div className="position-absolute top-0 start-100">
                  <p className="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-2">NEW</p>
                </div>
              </div>
              <DetailsButton product={p} />
            </article>
          ))
        ) : (
          <h3>{error}</h3>
        )}
      </section>
    </main>
  );
};

export default Featured;

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
    <main className="container d-flex flex-column flex-wrap gap-3 align-items-center text-center">
      <div>
        <h1>Productos Destacados</h1>
        <p>¡Los últimos ingresos están aquí!</p>
      </div>
      <section className="d-flex flex-wrap gap-3">
        {newProducts.length>0 ?
          newProducts.map((p) => (
            <article key={p.id}>
              <h3>{p.name}</h3>
              <Image image={p.image} name={p.name}/>
              <p>
                <b>$ {p.price}</b>
              </p>
              <DetailsButton product={p} />
            </article>
          )):<h3>{error}</h3>}
      </section>
    </main>
  );
};

export default Featured;

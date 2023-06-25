import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../context/Context";
import "./Details.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import AddButton from "../components/Buttons/AddButton";
import ReturnButton from "../components/Buttons/ReturnButton";

const Details = () => {
  const { data } = useContext(Context);
  const { id } = useParams();
  const [detalles, setDetalles] = useState({});

  useEffect(() => {
    const searchId = data.find((p) => p.id === id);
    setDetalles(searchId);
  }, [data, id]);

  return (
    <section className="navbar-separation">
      {detalles && (
        <article className="details-content d-flex flex-wrap gap-5 justify-content-center align-items-center text-center m-2">
          <div>
            <LazyLoadImage
              className="object-fit-cover"
              src={detalles.image}
              alt={`Imágen del producto "${detalles.name}"`}
              height="490px"
              width="310px"
              effect="blur"
            />
          </div>
          <div>
            <h3>{detalles.name}</h3>
            <p>Color: {detalles.color}</p>
            <p>Marca: {detalles.brand}</p>
            <p>
              <b>$ {detalles.price}</b>
            </p>
            <div className="d-flex gap-1">
              <AddButton product={detalles} />
              <ReturnButton />
            </div>
          </div>
        </article>
      )}
    </section>
  );
};

export default Details;
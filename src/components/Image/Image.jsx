import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Image = ({ image, name }) => {
  return (
    <div>
      <LazyLoadImage
        className="object-fit-cover"
        src={image}
        alt={`Imágen del producto "${name}"`}
        height="350px"
        width="300px"
        effect="blur"
      />
    </div>
  );
};

export default Image;

import { useContext, useEffect, useState } from "react";
import { Context } from "../../context/Context";
const CartCounter = () => {
  const { cart } = useContext(Context);
  const [counter, setCounter] = useState();

  useEffect(() => {
    cart.length > 0 ? setCounter(cart.length) : setCounter("");
  }, [cart]);

  return (
    <div>
      <span>{counter}</span>
    </div>
  );
};

export default CartCounter;

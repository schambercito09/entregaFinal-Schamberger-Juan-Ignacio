import { useContext } from "react";
import styles from "./CartWidget.module.css"

import cart from "./assets/cart.png";
import { CartContext } from "../../context/CartContext";

export const CartWidget = () => {

  const {totalItems} = useContext(CartContext);

  return (
    <div>
        <img className={styles.cart}  src={cart} alt="Cart-Widget" />
        <strong>{totalItems}</strong>
    </div>
  )
}

export default CartWidget
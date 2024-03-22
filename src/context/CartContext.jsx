import { createContext, useEffect, useState } from "react";

export const CartContext = createContext(null);

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [totalCompra, setTotalCompra] = useState(0)

  const addItem = (item, quantity) => {
    const cartCopy = [...cart];

    const index = cartCopy.findIndex((product) => product.id === item.id);

    if (index != -1) {
      cartCopy[index].quantity = cartCopy[index].quantity + quantity;
      cartCopy[index].subTotal =
        cartCopy[index].price * cartCopy[index].quantity;
      setCart(cartCopy);
    } else {
      const newItem = {
        ...item,
        quantity,
        subTotal: item.price * quantity,
      };
      setCart([...cart, newItem]);
    }

    console.log(item);
    console.log(quantity);
  };

  const removeItem = (id) => {
    const cartFilter = cart.filter((item) => item.id !== id);
    setCart(cartFilter);
  };

  const clearCart = () => {
    setCart([]);
  };

  const handleTotalItems = () =>{
    const newTotalItems = cart.reduce( (acumulador, item) => acumulador + item.quantity, 0);
    setTotalItems(newTotalItems);
}

const handleTotaCompra = () =>{
    const newTotalCompra = cart.reduce( (acumulador, item) => acumulador + item.price * item.quantity, 0);
    setTotalCompra(newTotalCompra);
}


  useEffect(() => {
    handleTotalItems();
    handleTotaCompra();
  }, [cart]);

  const objectValues = {
    cart,
    totalItems,
    totalCompra,
    addItem,
    removeItem,
    clearCart,
  };

  return (
    <CartContext.Provider value={objectValues}>
      {" "}
      {children}{" "}
    </CartContext.Provider>
  );
};

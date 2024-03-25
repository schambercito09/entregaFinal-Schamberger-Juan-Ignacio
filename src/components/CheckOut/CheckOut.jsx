import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";

export const CheckOut = () => {
  const { cart, totalCompra, clearCart } = useContext(CartContext);
  const [formCheckout, setFormCheckout] = useState({
    name: "",
    phone: 0,
    email: "",
  });

  const [orderId, setOrderId] = useState(null);

  const hundleName = (e) => {
    setFormCheckout({
      ...formCheckout,
      name: e.target.value,
    });
  };
  const hundlePhone = (e) => {
    setFormCheckout({
      ...formCheckout,
      phone: e.target.value,
    });
  };
  const hundleEmail = (e) => {
    setFormCheckout({
      ...formCheckout,
      email: e.target.value,
    });
  };

  const hundleSubmit = async (e) => {
    e.preventDefault();
    const newOrder = {
      buyer: formCheckout,
      items: cart,
      totalCompra,
      date: serverTimestamp(),
    };
    //agregamos orden de compra a la base de datos

    const order = await addDoc(collection(db, "orders"), newOrder);

    //vaciar formulario
    setFormCheckout({
      name: "",
      phone: 0,
      email: "",
    });

    //vaciamos carrito
    clearCart();

    //setear orderId
    setOrderId(order.id);
  };

    if(orderId){
        return <h3>Su ID de compra es {orderId}</h3>
    }

  return (
    <div className="container d-flex justify-content-center m-5">
      <form onSubmit={hundleSubmit}>
        <label htmlFor="">Nombre</label>
        <input
          type="text"
          className="form-control"
          value={formCheckout.name}
          onChange={hundleName}
        />
        <label htmlFor="">Telefono</label>
        <input
          type="number"
          className="form-control"
          value={formCheckout.phone}
          onChange={hundlePhone}
        />
        <label htmlFor="">Email</label>
        <input
          type="email"
          className=" form-control"
          value={formCheckout.email}
          onChange={hundleEmail}
        />
        <input
          type="submit"
          className="mt-3 btn btn-success"
          value="Terminar la Compra"
        />
      </form>
    </div>
  );
};

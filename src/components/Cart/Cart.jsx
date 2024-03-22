import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const Cart = () => {
  const { cart, clearCart, removeItem, totalCompra } = useContext(CartContext);
  console.log(cart);

  return (
    <>
      <div className="border m-2">
        {cart.map((item) => (
          <div key={item.id} className="card">
            <div className="card-body">
              <div key={item.id} className="card-title">Nombre: {item.name}</div>
              <img src={item.url} alt="" />
              <p>Cantidad: {item.quantity}</p>
              <p>Precio Unitario:{item.price}</p>
              <p>SubTotal: {item.subTotal}</p>
              <div>
                <button
                  className="btn btn-danger"
                  onClick={() => removeItem(item.id)}
                >
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="container">
        <h4>Total Compra: {totalCompra}</h4>
        <button className="btn btn-outline-success" onClick={clearCart}>
          Vaciar Carrito
        </button>
      </div>
    </>
  );
};

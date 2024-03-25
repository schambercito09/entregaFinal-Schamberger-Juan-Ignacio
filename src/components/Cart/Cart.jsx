import React, { useContext } from "react";
import { Link } from 'react-router-dom'
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";

export const Cart = () => {
  const { cart, clearCart, removeItem, totalCompra } = useContext(CartContext);
  console.log(cart);
  const hundleDeleteItem = (item) => { 
    removeItem(item.id)

    Swal.fire({
      icon: "question",
      title: `Estas Seguro que quieren eliminar ${item.name} del carrito?`,
      showCancelButton:true,
      showConfirmButton:true,

    }).then(resp =>{
      if(resp.isConfirmed){
        removeItem(item.id);
        Swal.fire({
          icon:"success",
          title:"Producto Eliminado"
        })
      }
    })

   }

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
                  onClick={() => hundleDeleteItem(item)}
                >
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="container">
        {totalCompra > 0 ? 
        <>
        <h4>Total Compra: {totalCompra}</h4>
        <button className="btn btn-outline-success" onClick={clearCart}>
          Vaciar Carrito
        </button>
        <Link to="/checkout">
        <button className="ms-2 btn btn-success" onClick={clearCart}>
          Comprar
        </button>
        </Link>
        
        </> : <h4>Carrito vacio</h4> }
        
      </div>
    </>
  );
};

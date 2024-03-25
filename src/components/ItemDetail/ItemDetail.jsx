import { useContext } from "react"
import { ItemCount } from "../ItemCount/ItemCount"
import { CartContext } from "../../context/CartContext"
import Swal from "sweetalert2"


export const ItemDetail = ({id, url, price, stock, name}) => {

    const {addItem} = useContext(CartContext);

    const item = {
      id,
      price,
      name,
      url
    }

    const onAdd = (quantity) => { 

      addItem(item,quantity)
      Swal.fire({
        icon: "success",
        title: "Se agrego el producto al carrito "
      })

     }


  return (
    <div className="border m-2">
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <img src={url} alt="" />
                <p>Precio:{price}</p>
                <ItemCount stock={stock} onAdd={onAdd} />
            </div>
        </div>
    </div>
  )
}

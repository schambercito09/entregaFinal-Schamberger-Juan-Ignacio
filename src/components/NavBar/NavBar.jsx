import { Link } from "react-router-dom"
import {CartWidget} from "../CartWidget/CartWidget"


export const NavBar = () => {
  return (
    <nav className="d-flex justify-content-around mt-2">
        <h4>Tienda</h4>
        <div>
            <Link to="/" >
                <button className="btn btn-dark mx-2">Home</button>
            </Link>
            
            <Link to="category/REMERA" >
                <button className="btn btn-dark mx-2">Remeras</button>
            </Link>

            <Link to="category/MUSCULOSA" >
                <button className="btn btn-dark mx-2">Musculosas</button>
            </Link>
        </div>
        <Link to="cart" >
            <CartWidget/>
        </Link>

    </nav>
  )
}

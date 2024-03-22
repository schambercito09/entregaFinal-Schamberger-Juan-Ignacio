import { useState } from "react";

export const ItemCount = ({stock, initial = 1, onAdd}) => {

    const [count, setCount] = useState(initial);


    const increment = () => {
        if(count < stock){
            return (
                setCount(count + 1)
            );
        }
        setCount(count);
    }

    const decrement = () => {
        if(count == 1 ){
            return setCount(1);
        }
        setCount(count - 1);
    }



  return (
    <div className="d-flex flex-column col-2 justify-content-center align-content-center p-4">
        <div>
            
           
            <button className="btn btn-dark mx-3" onClick={decrement}>
                -
            </button>
             <strong>{count}</strong>
            <button className="btn btn-dark mx-3" onClick={increment}>
                +
            </button>
            <div>
                <button className="btn btn-dark mt-2 " onClick={()=>onAdd(count)}>Añadir al Carrito</button>
            </div>
        </div>
    </div>
  );
};
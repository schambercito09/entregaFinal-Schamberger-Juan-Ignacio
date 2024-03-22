import {useEffect, useState} from "react"
import { getProducts } from "../../asyncMock";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {

  const {category} = useParams();
    
  const [products, setProducts] = useState([]);
  const [isLoading , setIsLoading] = useState(true)

  useEffect(() => { 
    getProducts()
    .then(resp=>{
      //verificamos si existe una category en el parametro
      if(category){
        const productsFilter = resp.filter(product => product.category === category);
        setProducts(productsFilter)
      }else{
        //si no existe category en el parametro seteamos todos los productos en el state products  
        setProducts(resp);
      }
      
      setIsLoading(false);

    })
   },[category])

  return (
  <>
    {isLoading ? <h2>Cargando...</h2> :  <ItemList products={products}/> }
  </>
  )
}

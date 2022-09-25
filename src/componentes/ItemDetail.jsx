import Button from 'react-bootstrap/Button';
import Contador from '../contenedores/itemCount';
import { useState }  from "react";
import { Link }  from 'react-router-dom';
import Cart from "../componentes/Cart";


const ItemDetail= ({item}) => {
    const [itemCount, setItemCount] = useState(0);

    const OnAdd=(cantidad)=>
    {
        alert("agregaste " + cantidad + " productos al carrito");
        setItemCount(cantidad);
        
    }

    return(
    
    <div className='detail-container'>
        <img src={item.img} alt="perfume" className='img-detail'/>
        <h1>{item.title}</h1>
        <h4>{item.description}</h4>
        <h5>${item.price}</h5>
        {
            itemCount==0 ? 
            <Contador id = "elContador" count = {OnAdd}/> :
            <Link to="/cart"><Button> <p>CheckOut</p> </Button></Link>
        }
        
    
    </div>
    );
}
export default ItemDetail;
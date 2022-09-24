import Button from 'react-bootstrap/Button';
import Contador from '../contenedores/itemCount';
import { useState } from "react";

const ItemDetail= ({item}) => {
    const [itemCount, setItemCount] = useState(0);

    const OnAdd=(cantidad)=>
    {
        alert("agregaste " + cantidad + " productos al carrito");
        setItemCount(cantidad);

    }

    return(
    <>
    {
    <div className='detail-container'>
    <img src={item.img} alt="perfume" className='img-detail'/>
<h1>{item.title}</h1>
<h4>{item.description}</h4>
<h5>${item.price}</h5>
<Contador count = {OnAdd}/>
</div>
    }
    </>
    );
}
export default ItemDetail;
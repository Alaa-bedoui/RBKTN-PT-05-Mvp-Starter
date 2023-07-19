import axios from 'axios';
import React,{useState} from 'react';

const ListItem = ({ item,reload,setReload }) => {
  const [show, setshow] = useState(false)
  const [name, setname] = useState("")
  const [price, setprice] = useState(0)
  const [quantity, setquantity] = useState(0)
  const [image, setimage] = useState("")
const remove=(id)=>{
  axios.delete("/api/items/"+id)
  .then((res)=>{
 setReload(!reload)
  })
  .catch((err)=>console.error(err))
}

const modify=(id)=>{
  axios.put("/api/items/"+id,{name,price,quantity,image})
  .then((res)=>setReload(!reload))
  .catch((err)=>console.error(err))
}
  return (
    <div>
      {item.name} <img src={item.image} style={{ height: "100px" }} />
      <p>  Price : {item.price} DT </p>
      Quantity :  {item.quantity}
      <br />
      <button onClick={()=>{remove(item.iditem)}}>DELETE</button>
      <br />
      <button onClick={()=>setshow(!show)}>Modify</button>
     {show && <div>
        <input placeholder='New name' onChange={(e)=>setname(e.target.value)}/>
        <input placeholder='New price' onChange={(e)=>setprice(e.target.value)} />
        <input placeholder='New quantity' onChange={(e)=>setquantity(e.target.value)} />
        <input placeholder='New image' onChange={(e)=>setimage(e.target.value)} />
        <button onClick={()=>{setshow(!show),modify(item.iditem)}}>DONE</button>
      </div>
      }
      <br />
      
    </div>
    )
}


export default ListItem;
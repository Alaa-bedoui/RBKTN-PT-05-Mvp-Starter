import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ReactDOM from 'react-dom'
import List from './components/List.jsx'

const App = () => {
  const [items, setItems] = useState([])
  const [name, setName] = useState("")
  const [category, setcategory] = useState("")
  const [price, setprice] = useState(0)
  const [quantity, setquantity] = useState(0)
  const [image, setimage] = useState("")
  const [reload, setreload] = useState(false)
  useEffect(() => {
    //get all data 
   axios.get("/api/items/getAll")
    .then((res)=>{
      console.log("response.data ",res.data)
      setItems(res.data)
    })
    .catch((err)=>console.error(err))
  },[reload])

  const add=()=>{
    axios.post("/api/items/",{name,quantity,category,price,image})
    .then((res)=>setreload(!reload))
    .catch((err)=>console.error(err))
  } 

  return (
    <div>
      <h1>Item List</h1>
      <List items={items} setReload={setreload} reload={reload} />
      <input placeholder='Name' onChange={(e)=>setName(e.target.value)} />
      <button onClick={()=>add()} >Add</button>
      <br/>
      <input placeholder='Price' onChange={(e)=>setprice(e.target.value)}/>
      <input placeholder='Category'onChange={(e)=>setcategory(e.target.value)}/>
      <input placeholder='Quantity' onChange={(e)=>setquantity(e.target.value)}/>
      <input placeholder='Image' onChange={(e)=>setimage(e.target.value)} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))

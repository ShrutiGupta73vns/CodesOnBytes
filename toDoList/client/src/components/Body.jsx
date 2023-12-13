import { useEffect, useState } from "react";
import Item from "./Item";

export default function Body() {
  const [formData, setFormData]=useState({
    title:"",
    description:""

  })
  const handleChange=(event)=>{
    setFormData(prevstate=>{
      return{
        ...prevstate,
        [event.target.name]: event.target.value
      }
    })
  }
  

const [todoList, setTodoList]=useState([])
const [changed,setChanged]=useState(true)

useEffect(()=>{
fetch("/api/v1/todo/").then(res=>res.json())
.then(data=>setTodoList(data))
},[changed])


const elements= todoList.map(item=>{
  return <Item title={item.title} description={item.description} isChecked={item.checked} key={item._id} id={item._id} setChanged={setChanged}/>
})



const handleSubmit=async(event)=>{
  try {
    event.preventDefault()
    const res= await fetch('/api/v1/todo/',{
      method:'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(formData)
    })
    const data=  await res.json()
    if(data.success===false){
      console.log(data.message)
      return 
    }
    setChanged(prevState=>!prevState)

  
  } catch (error) {
    console.log(error)
  }
}
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="p-2 m-4"
          placeholder="Enter a title"
          name="title"
          onChange={handleChange}
        />
        <input
          type="text"
          className="p-2 m-4 "
          placeholder="description"
          name="description"
          onChange={handleChange}
        />
        <button
          className="bg-slate-700 p-2 border rounded-lg 
 font-serif text-white text"
        >
          Submit
        </button>
      </form>
      {elements}
    </div>
  );
}

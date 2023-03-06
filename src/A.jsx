import React from 'react'
import { useState } from 'react'

const A = () => {
const[count,setCount] = useState(0)


const [text,setText] = useState('')
const [todo,setTodo] = useState('')

const handletodo = () => {

    alert(`${text}`)
}

  return (
    <>
    <div className='container' style={{textAlign:"center",alignItems:"center"}}>
 <h1 >{count}</h1>
 <button className='btn btn-warning m-2' onClick={()=>setCount(count+1)}>Increment</button>
{count>=0 ?<button  className='btn btn-warning m-2' onClick={()=>setCount(count-1)}>Decrement</button>: setCount(0)}    
 </div>
<br/>

      <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
      <div>
        <h1>{text}</h1>
      </div>
      <button onClick={handletodo}>Add</button>
    </>
  )
}

export default A;

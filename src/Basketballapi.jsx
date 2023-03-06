import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
// import Loading from './Loading'

const Basketballapi = () => {
const[data,setData] = useState([])

useEffect(() => {
 
setTimeout(()=>{
  axios.get('https://gorest.co.in/public/v2/users')
  .then((response)=>{
      console.log(response.data)
      setData(response.data)
  }).catch((error)=>{
      console.log(error)
  })
},2000)
   

}, [])


  return (
    <>
 {/* <Loading/> */}
   <tabel>
    {data.map(item => (
    <tr key={item.id}>
    
    <h6>{item.name}</h6>
    <h6>{item.gender}</h6>
   <h6>{item.email}</h6>
    <h6>{item.status}</h6>
</tr>
 
))}

</tabel>

    </>
  )
}

export default Basketballapi

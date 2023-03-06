import React from 'react'
import axios from 'axios'

import { useState,useEffect } from 'react'

const Api = () => {

const[data,setData] = useState([])

useEffect(() => {

    axios.get('https://pixabay.com/api/?key=14869727-b2425c5245ad6799fcf65fa07&q=yellow+flowers&image_type=photo&pretty=true')
    .then((response)=>{
        setData(response.data.hits)
        console.log(response.data.hits)
       
    })
    .catch((error)=>{
        console.log(error)
    })
    
}, [])


  return (
    <>
      
<div>
    {data.map(item => (
    <div key={item.id}>
    <h1>{item.comments}</h1>
    <h6>{item.downloads}</h6>
    </div>
))}

</div>

    </>
  )
}

export default Api

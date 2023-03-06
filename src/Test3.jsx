import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react'

const Test3 = () => {

    const[data,setData] = useState([])


useEffect(() => {
  
    axios.get('https://api.thenewsapi.com/v1/news/all?api_token=yJAA8xa98zTvKFGathwj4BLfdcxBnRjmYIauCHsd&search=usd​')
    .then((response)=>{
        console.log(response.data)
        setData(response.data)
    }).catch((error)=>{
        console.log(error)
    })

}, [])

  return (
    <>
      {/* <div>{data.map(item=>(
        <div key={item.id}>
<h1>{item.Type}</h1>
            </div>
      ))}</div> */}


    </>
  )
}

export default Test3

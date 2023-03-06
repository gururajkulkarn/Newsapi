import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'

const ImagesApi = () => {

    const [data,setData] = useState([]);
const [text,setText] = useState('')


// useEffect(() => {

//     axios.get('https://pixabay.com/api/?key=14869727-b2425c5245ad6799fcf65fa07&q=yellow+flowers&image_type=photo&pretty=true')
// .then((response)=>{
//     setData(response.data.hits);
//     console.log(response.data)
// }).catch((error)=>{
//     console.log(error)
// })

// }, [])


const handlesubmit = () => {
  
  axios.get(`https://pixabay.com/api/?key=14869727-b2425c5245ad6799fcf65fa07&q=${text}&image_type=photo&pretty=true`)
  .then((response)=>{
      setData(response.data.hits);
      console.log(response.data)
  }).catch((error)=>{
      console.log(error)
  })
}

  return (
    <div>
      <h1 style={{color:"red"}}>Images Data Fetching From Apis</h1>
 <input className='form-control container m-3' type="text" value={text} onChange={(e)=>setText(e.target.value)} />
 <button className='btn btn-warning container w-25' onClick={handlesubmit}>SEARCH</button>

        {data.map((item)=>(
            <div className='container' key={item.id}>            
                    <div className="card"  style={{width: "18rem"}}>
  <img src={item.previewURL} className="card-img-top" alt="..."/>
  <div className="card-body col-lg-6">
    <h5 className="card-title">{item.type}</h5>
    <p className="card-text">{item.downloads}</p>
    <p className="card-text">{item.likes}</p>
    <a href="#" className="btn btn-primary">{item.comments}</a>
  </div>
</div>

<img src={item.largeImageURL} className="card-img-top" alt="..."/>

            </div>
        ))}
   
</div>

  )
}

export default ImagesApi

import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react'
import { Player } from 'video-react';

// const Baseurl = "https://pixabay.com/api/videos/?key=14869727-b2425c5245ad6799fcf65fa07&q=yellow+flowers&pretty=true"

const Video = () => {
const [data,setData] = useState([])
const [text,setText] = useState('');

// useEffect(() => {
 
// axios.get(`${Baseurl}/q=${text}`)
// .then((response) => {
//     console.log(response.data.hits)
//     setData(response.data.hits)
// })
// .catch((error)=>{
//     console.log(error)
// })
// }, [])



const handlesubmit = () => {
  axios.get(`https://pixabay.com/api/videos/?key=14869727-b2425c5245ad6799fcf65fa07&q=${text}&pretty=true`)
.then((response) => {
    console.log(response.data.hits)
    setData(response.data.hits)
})
.catch((error)=>{
    console.log(error)
})
}


  return (

    <>
   <h1 style={{color:"red"}}>Videos Fetching From Apis</h1>
   <input className='form-control container m-3' type="text" value={text} onChange={(e)=>setText(e.target.value)} />
 <button className='btn btn-warning container w-25' onClick={handlesubmit}>SEARCH</button>

      <div className='container md-2 '>
        {data.map(item => (
        <div key={item.id}>
       <h1>{item.width}</h1>
       <Player 
      playsInline
      src={item.videos.tiny.url} 
   />

<h6>{item.views}</h6>
        </div>
      ))}
      </div>

    </>
  )
}

export default Video

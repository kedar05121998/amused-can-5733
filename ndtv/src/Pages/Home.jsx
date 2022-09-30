import React, { useEffect, useState } from 'react'
import "./Home.css"
import axios from "axios"
import { useNavigate } from 'react-router-dom'



const getTopNews=()=>{
 return axios.get("https://newsapi.org/v2/everything?q=india&from=2022-09-29&sortBy=popularity&apiKey=27532f5e99e948da97e7b6d6f30a4302&pageSize=20")
}

function Home() {
  const [news,setNews]=useState([])

  const navigate=useNavigate()

  useEffect(() => {
   getTopNews().then((res) => {
      setNews(res.data.articles);
      console.log(res.data.articles)
    });
  }, []);

  

  return (
    <div style={{backgroundColor:"#eaeaea"}}>
    {/* axios.get(`https://newsapi.org/v2/everything?q=india&from=2022-09-29&sortBy=popularity&apiKey=27532f5e99e948da97e7b6d6f30a4302&pageSize=20`) */}
   <div > <h2 style={{marginLeft:"-850px",marginTop:"50px"}} >TOP STORIES</h2> </div>
     <div className="sideMenu" >
     {/* <div style={{marginTop:"-150px"}} ><h4>TOP STORIES</h4></div> */}
       {news.map((item)=>{
         return <>
         
         <div  onClick={()=>navigate("/detailNews/q")} className="img_thumbnail" ><img style={{height:"100px",width:"100px",paddingTop:"10px"}} src={item.urlToImage} alt="kp" /></div>
<div onClick={()=>navigate("/detailNews/q")} className="tittle" style={{marginLeft:"-60px"}} > <h5>{item.title}</h5> </div>
</>
       })


       }

    


     </div>
      </div>
  )
}
// api_key=27532f5e99e948da97e7b6d6f30a4302
// url="https://newsapi.org/v2/everything?q=Apple&from=2022-09-29&sortBy=popularity&apiKey=27532f5e99e948da97e7b6d6f30a4302"
//url="https://newsapi.org/v2/everything?q=india&from=2022-09-29&sortBy=popularity&apiKey=27532f5e99e948da97e7b6d6f30a4302&pageSize=20"
export default Home
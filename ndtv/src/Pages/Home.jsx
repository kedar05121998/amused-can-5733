import React, { useContext, useEffect, useState } from 'react'
import "./Home.css"
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import { SearchContext } from '../Context/SearchContext'
import styles from "../PagesStyle/Home.module.css"
import FooterPage from '../Components/Footer/Footer'



const getTopNews=()=>{
 return axios.get("https://newsapi.org/v2/everything?q=tesla&from=2023-02-11&sortBy=publishedAt&apiKey=27532f5e99e948da97e7b6d6f30a4302&pageSize=30")
}

function Home() {
  const [news,setNews]=useState([])
  const [data,setData] = useState();
  const navigate=useNavigate()



  const {handleChange}=useContext(SearchContext)

  useEffect(() => {
   getTopNews().then((res) => {
      setNews(res.data.articles);
      console.log(res.data.articles)
    });
  }, []);

  const handlClick=(value)=>{
    navigate("/detailNews/q")
    handleChange(value)
  }

  useEffect(()=>{
   
    axios.get(`https://newsapi.org/v2/everything?q=tesla&from=2023-02-11&sortBy=publishedAt&apiKey=27532f5e99e948da97e7b6d6f30a4302`)
    .then((res)=>{
        // console.log(res.data.articles)
        setData(res.data.articles)
      
    })
    .catch((err)=>{
        console.log(err)
      

    })
},[])

  

  return (
    <div style={{display:"flex",gap:"100px",marginTop:"100px" }}>
    {/* axios.get(`https://newsapi.org/v2/everything?q=india&from=2022-09-29&sortBy=popularity&apiKey=27532f5e99e948da97e7b6d6f30a4302&pageSize=20`) */}
   {/* <div> <h2 style={{marginLeft:"-850px",marginTop:"50px"}} >TOP STORIES</h2> </div> */}
     <div className="sideMenu" >
      
     {/* <div style={{marginTop:"-150px"}} ><h4>TOP STORIES</h4></div> */}
       {news.map((item)=>{
         return <>
         
         <div   className="img_thumbnail" ><img style={{height:"100px",width:"100px",paddingTop:"10px"}} src={item.urlToImage} alt="kp" /></div>
<div onClick={()=>handlClick(item.title)} className="tittle" style={{marginLeft:"-40px",cursor:"pointer"}} > <p>{item.title}</p> </div>
</>
       })


       }

    


     </div>
     <div className={styles.container} >
                <span><h1 className={styles.heading} >TRENDING</h1></span>
                {
                    data?.map((ele)=>(
                        <div >
                            <img src={ele.urlToImage} className={styles.img} alt="" />
                            <p><span className={styles.span}>TITLE: </span>{ele.title}</p>
                         
                        </div>
                    ))
                }
            </div>
         
         <div>
           <FooterPage/>
         </div>


      </div>

  )
}
// api_key=27532f5e99e948da97e7b6d6f30a4302
// url="https://newsapi.org/v2/everything?q=Apple&from=2022-09-29&sortBy=popularity&apiKey=27532f5e99e948da97e7b6d6f30a4302"
//url="https://newsapi.org/v2/everything?q=india&from=2022-09-29&sortBy=popularity&apiKey=27532f5e99e948da97e7b6d6f30a4302&pageSize=20"
export default Home
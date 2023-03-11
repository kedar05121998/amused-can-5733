import { useState } from "react";
import { useEffect } from "react";

import styles from "../PagesStyle/Politics.module.css"
import FooterPage from "../Components/Footer/Footer"


import axios from "axios";


function LatestNews(){
    const [data,setData] = useState();
 

    useEffect(()=>{
     
        axios.get(`https://newsapi.org/v2/everything?q=latest&from=2023-02-10&sortBy=publishedAt&apiKey=27532f5e99e948da97e7b6d6f30a4302&pageSize=30`)
        .then((res)=>{
            // console.log(res.data.news[0].articles)
            setData(res.data.articles)
        
        })
        .catch((err)=>{
            console.log(err)
         
        })
    },[])

    return (
        <div style={{backgroundColor:"#eaeaea"}}>
            <div>
             
            </div>
           {   ( <div className={styles.container} >
                {
                    data?.map((ele)=>(
                        <div key={ele.headline} >
                            <img style={{height:"200px",width:"200px"}} src={ele.urlToImage} className={styles.img} alt="" />
                            <h2><span className={styles.span}>TITLE: </span>{ele.title}</h2>
                            <p><span className={styles.span} >DESCRIPTION: </span>{ele.description}</p>
                         
                        </div>
                    ))
                }
            </div>)}
            <div>
                <FooterPage/>
            </div>
          
        </div>
    )
}



export default LatestNews
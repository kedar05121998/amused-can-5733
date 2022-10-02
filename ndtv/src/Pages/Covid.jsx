import { useState } from "react";
import { useEffect } from "react";

import styles from "../PagesStyle/City.module.css"
import FooterPage from "../Components/Footer/Footer"


import axios from "axios";


function Covid(){
    const [data,setData] = useState();
 

    useEffect(()=>{
     
        axios.get(`https://newsapi.org/v2/everything?q=covid&from=2022-09-29&sortBy=popularity&apiKey=3fe9213425f944a998419878ca24780b&pageSize=30`)
        .then((res)=>{
          
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


export default Covid
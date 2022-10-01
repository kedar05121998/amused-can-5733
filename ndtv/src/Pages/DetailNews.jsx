import React, { useContext, useEffect, useState } from 'react'

import axios from "axios"
import { SearchContext } from '../Context/SearchContext';



function DetailNews() {
    const [data, setData] = useState({});
    // const params = useParams();
    // const { q } = params;
    // console.log(q)

    const {state}=useContext(SearchContext)
    console.log(state)

    useEffect(()=>{
      axios.get(`https://newsapi.org/v2/everything?q=${state}&apiKey=3fe9213425f944a998419878ca24780b`)
      .then((res)=>{setData(res.data.articles[0])})
        
    },[state])

    console.log(data);

  


   
  
  return (
    <div>
     <h1>{data.title}</h1>
     <img src={data.urlToImage} alt={data.title} />
     <h4>{data.description}</h4>
     <p>{data.content}</p>
    </div>
  )
}

export default DetailNews
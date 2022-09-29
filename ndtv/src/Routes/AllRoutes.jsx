import React from 'react'
import Navbar from '../Components/Navbar'
import {Routes,Route} from "react-router-dom"
import Home from '../Pages/Home'
import LatestNews from '../Pages/LatestNews'
import Polictics from '../Pages/Polictics'
import Sports from '../Pages/Sports'
import Trending from '../Pages/Trending'
import Photos from '../Pages/Photos'
function AllRoutes() {
  return (
    <div>
        <Navbar/>
        <Routes>
         
          <Route path="/" element={<Home/>} />
          <Route path="/latestNews" element={<LatestNews/>}/>
          <Route  path="/Politics" element={<Polictics/>} />
          <Route path="/Sports" element={<Sports/>}  />
          <Route path="/Trending" element={<Trending/>} />
          <Route path="/photos" element={<Photos/>} />


        </Routes>
    </div>
  )
}

export default AllRoutes
import React from 'react'
import Navbar from '../Components/Navbar'
import {Routes,Route} from "react-router-dom"
import Home from '../Pages/Home'
import LatestNews from '../Pages/LatestNews'
import Polictics from '../Pages/Polictics'
import Sports from '../Pages/Sports'
import Photos from '../Pages/Photos'
import DetailNews from '../Pages/DetailNews'
import CityPage from '../Pages/CityPage'
import WorldNews from '../Pages/WorldNews'
import Covid from '../Pages/Covid'




function AllRoutes() {
  return (
    <div>
        <Navbar/>
        <Routes>
         
          <Route path="/" element={<Home/>} />
          <Route path="/latestNews" element={<LatestNews/>}/>
          <Route  path="/Politics" element={<Polictics/>} />
          <Route path="/Sports" element={<Sports/>}  />
          <Route path="/cityPage" element={<CityPage/>}/>
          <Route path="/world" element={<WorldNews/>} />
          <Route path="/photos" element={<Photos/>} />
          <Route path="/covid" element={<Covid/>}/>
          <Route path="/detailNews/:q" element={<DetailNews/>}/>



        </Routes>
    </div>
  )
}

export default AllRoutes
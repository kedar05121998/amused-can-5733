import React from 'react'

import {  Link} from 'react-router-dom'
import "./Navbar.css"
function Navbar() {
    
  return (
      <div className='navbar_main' >
    <div className='navbar_upper' >
      {/* UPPER STATIC PART */}
      <div href="https://www.ndtv.com/#pfrom=home-ndtv_header-globalnav" ><button style={{backgroundColor:" #000000",color:" #eaeaea",border:"0px"}} >NDTV</button></div>
      <p  href="https://ndtv.in/#pfrom=home-ndtv_header-globalnav" >हिंदी न्यूज़</p>
      <p  href="https://www.ndtv.com/business#pfrom=home-ndtv_header-globalnav" >BUSINESS</p>
      <p  href="https://www.ndtv.com/entertainment#pfrom=home-ndtv_header-globalnav">MOVIES</p>
      <p  href="https://sports.ndtv.com/cricket#pfrom=home-ndtv_header-globalnav" >CRICKET</p>
      <p  href="https://gadgets360.com/#pfrom=home-ndtv_header-globalnav" >TECH</p>
      <p  href="https://food.ndtv.com/#pfrom=home-ndtv_header-globalnav" >FOOD</p>
      <p  href="https://www.ndtv.com/webstories#pfrom=home-ndtv_header-globalnav" >WEB STORIES</p>
      <p  href="https://www.ndtv.com/education#pfrom=home-ndtv_header-globalnav" >EDUCATION</p>
      <p  href="https://www.carandbike.com/#pfrom=home-ndtv_header-globalnav" >AUTO</p>
      <p  href="https://swachhindia.ndtv.com/#pfrom=home-ndtv_header-globalnav" >SWASTH</p>
      <p  href="https://swirlster.ndtv.com/#pfrom=home-ndtv_header-globalnav" >LIFESTYLE</p>
      <p  href="https://doctor.ndtv.com/#pfrom=home-ndtv_header-globalnav" >HEALTH</p>
      <p  href="https://www.ndtv.com/shopping#pfrom=home-ndtv_header-globalnav" >SHOPPING</p>
      <p href="https://www.mojarto.com/#pfrom=home-ndtv_header-globalnav" >ART</p>
     </div>
<div className='navbar_lower' >
    <div style={{width:"15%"}} >
<Link to="/" > <img src='https://drop.ndtv.com/homepage/images/ndtvlogo22.svg' alt="logo" /></Link>
    </div> 
  
 <Link to="/" >HOME</Link>
<Link to="/latestNews" >LATEST NEWS</Link>
<Link to="/politics" >POLITICS</Link>
<Link to="/sports" >SPORTS</Link>
<Link to="/trending" >TRENDING</Link>




</div>

    </div>
  )
}

export default Navbar
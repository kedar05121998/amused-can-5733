import React from 'react'

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faFacebook } from "@fortawesome/free-brands-svg-icons"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaFacebookSquare,FaEllipsisH, FaTwitterSquare, FaBell, FaSearch } from "react-icons/fa";



import {  Link, useNavigate} from 'react-router-dom'
import "./Navbar.css"
function Navbar() {
    const navigate=useNavigate()
    
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
<div  className="navbar_lower">
    <div className='navbar_lower_img' style={{width:"10%"}} >
<Link to="/" > <img src='https://drop.ndtv.com/homepage/images/ndtvlogo22.svg' alt="logo" /></Link>
    </div> 
  <div className="navbar_lower_tab" >
<p onClick={()=>navigate("/")} > HOME </p> 
<p onClick={()=>navigate("/latestNews")} >LATEST NEWS</p>
<p onClick={()=>navigate("/politics")} >POLITICS</p>
<p onClick={()=>navigate("/cityPage")} >CITIES</p>
<p onClick={()=>navigate("/sports")} >SPORTS</p>
<p onClick={()=>navigate("/covid")} >COVID</p>
<p onClick={()=>navigate("/world")} >WORLD NEWS</p>
<p onClick={()=>navigate("/photos")} >PHOTOS</p>


{/*-------some Code---------*/}

{/* <FontAwesomeIcon icon={['fab', 'twitter']} /> */}
<div className="navbar_icons" >
  <div  >
  <FaEllipsisH style={{height:"20px",width:"20px"}} />
  </div>

  <div>
  <FaFacebookSquare style={{height:"20px",width:"20px"}} />
  </div>

  <div>
  <FaTwitterSquare style={{height:"20px",width:"20px"}} />
  </div>

  <div>
  <FaBell style={{height:"20px",width:"20px"}} />
  </div>

<div>
<FaSearch style={{height:"20px",width:"20px"}} />
</div>



</div>

</div>


</div>

    </div>
  
  )
}

export default Navbar
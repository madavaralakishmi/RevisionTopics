import { useState } from "react"
import { Link } from "react-router-dom"


const NavBar =()=>{
  const [btnStatus , setbtnStatus] = useState("Login")

    return(
      <div>
       <div className="nav-section">
        <div>
          <img src="https://png.pngtree.com/png-clipart/20230111/original/pngtree-pizza-logo-design-png-image_8902729.png" alt="LogoImage" height="90" width="90" style={{padding:"10px"}} />
        </div>
        <div className="nav-side-section">
          <ul>
            <li><Link to="/Home">Home</Link></li>
            <li><Link to="/About">About Us</Link></li>
            <li>Cart</li>
            <button className="login_btn" onClick={()=>{
              btnStatus === "Login"?setbtnStatus("LogOut"):setbtnStatus("Login")
            }}>{btnStatus}</button>
          </ul>
        </div>
      </div>
      
      </div>
      
      
    )
  }
export default NavBar
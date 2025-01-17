import React from "react";
import "./header.css";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'; 
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react"; 


const Header = () => {

  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
   const { user, isAuthenticated, isLoading } = useAuth0();

    return (


      
      
        <div className="  bg-yellow-400 fixed flex w-100 h-[100px] justify-center items-center top-0">
            <Link to={"/"}>
            <img  style={{width:'180px',height:'60px'}} src="data:image/png;base64,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" alt="blinkit_logo" className="header-logo"/>
            </Link>
        <div className="header-mid">
        <div className="header-search-container">
            <div className="location-wrapper"> 
                        <div className="location_text"  >
                            <h5>delivery in 25 minutes</h5>
                       
                </div>
            </div>
          <div className="header-searchBar">
            <i className="fi fi-rr-search absolute-center search-icon"></i>
            <input
              className="search-input"
              placeholder="Search for products"
            />
          </div>
        </div>

        <div className="header-right   " >
         
          <div className="header-login bg-gray-200 rounded-lg p-2" >
          {isAuthenticated?
           
          <button  onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button>: <button onClick={() => loginWithRedirect()}>Log In</button>}
         
         
          </div>

           <div className="header-cart">
                            <span className="header-cart-icon"><ShoppingCartOutlinedIcon /></span>
                            <span className="header-cart-text"><Link to="/cart">my cart</Link></span> 
                    </div>
                    
                        
        </div>
      </div>
    </div>
    
  );
};

export default Header;

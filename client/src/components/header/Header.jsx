import styled from "@emotion/styled";
import { AppBar,Toolbar } from "@mui/material";
import {Link} from "react-router-dom";

const Component=styled(AppBar)`
background-color: #fff;
`

const Container=styled(Toolbar)`
justify-content:space-around;
> a{
    color:black;
    text-decoration:none;
    font-family: 'Noto Sans JP', sans-serif;
 
    
   
}
`
const Header=()=>{
    const handleLogout=()=>{
        
        // clear the session  storage access token
        sessionStorage.removeItem("accesstoken");
      }
    
    return (
        <Component>
            <Container>
                <Link to="/">HOME</Link>
                <Link to="/about">ABOUT</Link>
                <Link to="/contact">CONTACT</Link>
                <Link to="/login" onClick={()=>handleLogout()}>LOGOUT</Link>
            </Container>
        </Component>
    )
}

export default Header;
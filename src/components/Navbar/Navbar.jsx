import React from "react";
import { Container, Header,Menu, Map, Logo,Shop, Lupa, Email} from "./Navbar.js";
import { Link } from "react-router-dom";
import Button from "../Generic/Button/button.jsx";



const Navbar = () =>{
    return(
        <>
            <Header>
                <Container>
                   <div className="left">
                      <Link to='/'><Menu/></Link>
                      <Link to='/'><Map/></Link>
                      <p className="Montserrat">8 981 120-11-17</p>
                   </div>
                   <div className="mid">
                     <Link to="/"><Logo/></Link>
                   </div>
                   <div className="right"> 
                     <Link  to='/'><Shop/></Link>
                     <Link  to='/'><Email/></Link>
                     <Link  to='/'><Lupa/></Link>
                     <Button>Button</Button>
                   </div>
                </Container>
            </Header>
        </>
    )
}

export default Navbar
import React from "react";
import { Container, Header,Menu, Map, Logo,Shop, Lupa, Email} from "./Navbar.js";
import { Link } from "react-router-dom";
import Slider from "../Home/Slider/slider.jsx"


const Navbar = () =>{
    return(
        <div>
            <Header>
                <Container>
                   <div className="left">
                      <Link to='/'><Menu/></Link>
                      <Link to='/'><Map/></Link>
                      <span className="Montserrat">8 981 120-11-17</span>
                   </div>
                   <div className="mid">
                     <Link to="/"><Logo/></Link>
                   </div>
                   <div className="right"> 
                     <Link  to='/'><Shop/></Link>
                     <Link  to='/'><Email/></Link>
                     <Link  to='/'><Lupa/></Link>
                   </div>
                </Container>
            </Header>
            <Slider/>
        </div>
    )
}

export default Navbar
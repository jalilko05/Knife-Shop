import React from "react";
import Catalog from "./Catalog/Catalog.jsx";
import Categories from "./Categories/categories.jsx";
import Description from "./Description/description.jsx";
import Footer from "./Footer/footer.jsx";
import Slider from "./Slider/slider.jsx";


const Home = () =>{
    return(
        <div style={{background:'#373737'}}>
          <Slider/>
          <Categories/>
          <Catalog/>
          <Description/>
          <Footer/>
        </div>
    )
}

export default Home
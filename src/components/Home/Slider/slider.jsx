import React from "react";
import { Container, Wrapper, Card,Box, Icon} from "./slider";
import Slide1 from '../../../assets/images/slide1.png'
import Slide2 from '../../../assets/images/slide2.png'
import Content from "./Content/Content.jsx";
import { useRef } from "react";

const Slider = () =>{
  const slide = useRef('click')
    return(
        <Wrapper>
          <Icon.Left onClick={() => slide.current.prev()}/>
          <Container autoplay ref={slide}>
           <Box>
           <Content/>
           <Card src={Slide1} alt="slide1"/>
           </Box>
            <Box>
            <Content/>
            <Card src={Slide2} alt="slide2"/>
            </Box>
            <Box>
           <Content/>
           <Card src={Slide1} alt="slide1"/>
           </Box>
           <Box>
            <Content/>
            <Card src={Slide2} alt="slide2"/>
            </Box>
          </Container>
         <Icon.Right onClick={() => slide.current.next()}/>
        </Wrapper>
    )
}

export default Slider
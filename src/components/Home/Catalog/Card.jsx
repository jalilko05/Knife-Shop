import React from "react";
import { CardBottom, CardTop, Container, Card } from "./style";

const Box = ({info}) =>{
   return(
    <>
       <Container>
            <Card>
                <CardTop>
                  <img src={info.attachments[0].imgPath} alt='knife' />
                </CardTop>
                <CardBottom>
                <h3>{info.name}</h3>
                <h4>{info.price} p.</h4>
                </CardBottom>
            </Card>
       </Container>
    </>
   )
}

export default Box
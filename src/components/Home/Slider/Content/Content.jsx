import React from "react";
import { Container, H1, Wrapper, H3, WrapCont} from "./Content";
import Button from "../../../Generic/Button/button.jsx";


const Content = () =>{
    return(
        <>
            <Container>
                <WrapCont>
                <Wrapper>
                    <H1><h1>Исключительное качество без компромиссов</h1></H1>
                    <H3><h3>Ножи «Tuotown» – это главный инструмент поваров и секрет кулинарного мастерства</h3></H3>
                    <Button type={'white'}>
                      ПОДРОБНЕЕ  
                    </Button>
                </Wrapper>
                </WrapCont>
            </Container>
        </>
    )
}

export default Content
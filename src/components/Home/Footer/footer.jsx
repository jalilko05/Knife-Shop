import { Descriptions } from "antd";
import React from "react";
import { Wrapper,Container, Logo, Legend, LeftSection, Info} from "./style";


const Footer = () =>{
    return(
        <>
          <Wrapper>
            <Container>
                <LeftSection>
                    <Legend>
                        <Logo/>
                        <p>легендарные ножи, создающие шедевры</p>
                    </Legend>
                    
                    <Info>
                        <h4>
                             Компания «Tuotown» – эксклюзивный представитель профессиональных
                             кухонных ножей, изготовленных лучшими мастерами Восточной Азии 
                             с применением передового европейского 
                             оборудования и современных материалов. 
                        </h4>
                        <h4>
                            Они отличаются идеальным балансом и фантастической остротой.
                            Сочетают в себе вековые традиции и новейшие разработки. 
                            Также предлагаем широкий ассортимент сопутствующих товаров.
                        </h4>
                    </Info>
                </LeftSection>

                
            </Container>
          </Wrapper>
        </>
    )
}

export default Footer
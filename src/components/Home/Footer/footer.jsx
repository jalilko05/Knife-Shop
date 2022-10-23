import React from "react";
import Meat1 from '../../../assets/images/meat1.svg'
import Meat2 from '../../../assets/images/meat2.svg'
import { Wrapper,Container, Logo} from "./style";


const Footer = () =>{
    return(
        <>
          <Wrapper>
            <Container>
                <div>
                    <div>
                        <Logo/>
                        <span>легендарные ножи, создающие шедевры</span>
                    </div>
                    
                    <div>
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
                    </div>
                </div>

                <div>
                    <div>
                        
                    </div>
                </div>
            </Container>
          </Wrapper>
        </>
    )
}

export default Footer
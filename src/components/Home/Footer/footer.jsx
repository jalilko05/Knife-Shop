import React from "react";
import { Wrapper,Container, Logo, Legend, LeftSection, Info, MidSection, Mid2, Mid1,Mid3, IntoMid, RightSection, Facebook, Vk, Insta, Youtube, Matrix} from "./style";


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

                 <MidSection>
                    <Mid1>
                        <h3>Информация</h3>
                        <IntoMid>
                            <span>Главная</span>
                            <span>Новости</span>
                            <span>О компании</span>
                            <span>Контакты</span>
                        </IntoMid>
                    </Mid1>
                    <Mid2>
                        <h3>Каталог</h3>
                        <IntoMid>
                            <span>Кухонные ножи</span>
                            <span>Складные ножи</span>
                            <span>Точилки для ножей</span>
                            <span>Аксессуары</span>
                        </IntoMid>
                    </Mid2>
                    <Mid3>
                        <h3>Мы в соцсетях</h3>
                        <Facebook/>
                        <Vk/>
                        <Insta/>
                        <Youtube/>
                    </Mid3>
                 </MidSection>

                 <RightSection>
                    <h3>Контактная информация</h3>
                    <h2>+7 (981) 120-11-17</h2>
                    <h4>tuotown@mail.ru</h4>
                    <h4>08:00 — 18:00, ежедневно</h4>
                    <h4>Россия, Москва, МКАД, 19-й километр, вл20с1, вход Ф, 22-68-70</h4>
                    <Matrix/>
                 </RightSection>
            </Container>
          </Wrapper>
        </>
    )
}

export default Footer
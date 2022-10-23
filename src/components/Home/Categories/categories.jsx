import React from "react";
import { Categ, Container, Hat, Knife, Knife3, Sknife, Wrapper } from "./categories";

const Categories = () =>{
    return(
        <>
            <Container>
                <Wrapper>
                    <Categ>
                        <Knife/>
                        <h3>Кухонные ножи</h3>
                    </Categ>
                    <Categ>
                        <Sknife/>
                        <h3>Складные ножи</h3>
                    </Categ>
                    <Categ>
                        <Knife3/>
                        <h3>Точилки для ножей</h3>
                    </Categ>
                    <Categ>
                        <Hat/>
                        <h3>Аксессуары для кухни</h3>
                    </Categ>
                </Wrapper>
            </Container>
        </>
    )
}

export default Categories
import React from 'react'
import { Container } from './button'

const Button = ({type,onClick,br,children}) =>{
    return(
       <Container  br={br} type={type} onClick={onClick}>
           {children}
       </Container>
    )
}
export default Button
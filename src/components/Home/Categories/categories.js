import styled from "styled-components";
import { ReactComponent as knife } from '../../../assets/icons/knife.svg'
import { ReactComponent as sknife } from '../../../assets/icons/sknife.svg'
import { ReactComponent as knife3 } from '../../../assets/icons/knife3.svg'
import { ReactComponent as hat } from '../../../assets/icons/hat.svg'


export const Knife = styled(knife)``
export const Sknife = styled(sknife)``
export const Knife3 = styled(knife3)``
export const Hat = styled(hat)``

export const Container = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #373737;
`
export const Wrapper = styled.div`
 display: flex;
 justify-content: space-between;
 max-width: 1240px;
 width: 100%;
`
export const Categ = styled.div`
  height: 100px;
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
 
  h3{
    color: #878787;
    margin-top: 20px;
    transition: 0.1s;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
  }
  :hover h3{
    color: #FF0000;
  }
`
import {Carousel} from 'antd'
import styled from 'styled-components'
import { ReactComponent as arrow } from '../../../assets/icons/arrow.svg' 

export const Container = styled(Carousel)``
export const Wrapper = styled.div`
  position:relative;
  height: fit-content;
`
export const Card = styled.img`
  height: 700px;
  width: 100%;
`
export const Box = styled.div`
  position: relative;
`

export const Icon = styled.div``

Icon.Left = styled(arrow)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(500%, 500%) ;
  width: 48px;
  height: 48px;
  padding: 12px;
  background: none;
  border: 1px solid #FFFFFF;
  border-radius:50%;;
  z-index: 999;
  cursor: pointer;
  :hover{
    opacity: 0.5;
  }
`
Icon.Right = styled(arrow)`
display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(-500%, 500%) rotate(180deg);
  width: 45px;
  height: 45px;
  padding: 12px;
  background: none;
  border: 1px solid #FFFFFF;
  border-radius:50%;;
  z-index: 999;
  cursor: pointer;
  :hover{
    opacity: 0.5;
  }
`



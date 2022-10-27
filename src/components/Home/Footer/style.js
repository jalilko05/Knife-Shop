import styled from "styled-components";
import { ReactComponent as logo } from '../../../assets/icons/logo.svg'


export const Logo = styled(logo)``


export const Wrapper = styled.div`
 width: 100%;
 display: flex;
 justify-content: center;
 background: #272727;

`


export const Container = styled.div`
 max-width: 1440px;
 width: 100%;
 background: #272727;
 padding: 50px;
`

export const LeftSection = styled.div`
width: 360px;

`
export const Legend = styled.div`
 display: flex;
 justify-content: space-between;

p{
font-family: 'Montserrat';
font-style: normal;
font-size: 13px;
line-height: 17px;
color: white;
width:200px;
 }
`
export const Info = styled.div`
h4{
font-family: 'Montserrat';
font-weight: 400;
font-size: 13px;
color: white;
margin: 20px 0;
}
`
export const MidSection = styled.div`

`


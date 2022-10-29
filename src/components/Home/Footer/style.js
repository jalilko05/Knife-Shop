import styled from "styled-components";
import { ReactComponent as logo } from '../../../assets/icons/logo.svg'
import { ReactComponent as facebook } from '../../../assets/icons/facebook.svg'
import { ReactComponent as vk } from '../../../assets/icons/vk.svg'
import { ReactComponent as insta } from '../../../assets/icons/instagramm.svg'
import { ReactComponent as youtube } from '../../../assets/icons/youtube.svg'



export const Logo = styled(logo)``
export const Facebook =  styled(facebook)``
export const Vk =  styled(vk)``
export const Insta =  styled(insta)``
export const Youtube =  styled(youtube)``




export const Wrapper = styled.div`
 width: 100%;
 display: flex;
 justify-content: center;
 background: #272727;
 height: 380px;
 margin-top: 40px

`
export const Wrapper2 = styled.div`
 width: 100%;
 height: 90px;
 display: flex;
 justify-content: center;
`
export const Container2 = styled.div`
 max-width: 1440px;
 width: 100%;
 padding: 0px 50px;
 display: flex;
 justify-content: space-between;
 align-items: center;
`


export const Container = styled.div`
 max-width: 1440px;
 width: 100%;
 background: #272727;
 padding: 40px 50px;
 display: flex;
 justify-content: space-between;
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
 width: 420px;

`
export const Mid1 = styled.div`
 h3{
    color: white;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 17px;
    line-height: 28px;
 }
`
export const IntoMid = styled.div`
 width: 420px;
span{
  color: white;
  opacity: 0.5;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  margin: 0 30px 0 0 ;
}
`

export const Mid2 = styled.div`
margin: 50px 0;
h3{
    color: white;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 17px;
    line-height: 28px;
 }
`
export const Mid3 = styled.div`
  display: flex;
  justify-content: space-between;
  width: 300px;
 h3{
  font-family: 'Montserrat';
  font-style: normal;
  font-size: 17px;
  line-height: 28px;
  color: #FFFFFF;
 }
`

export const RightSection = styled.div`
width: 300px;

 h3{
   font-family: 'Montserrat';
   font-style: normal;
   font-size: 17px;
   line-height: 28px;
   color: #FFFFFF;
 }
 h2{
   font-family: 'Montserrat';
   font-style: normal;
   font-size: 20px;
   line-height: 28px;
   color: #FFFFFF;

 }
 h4{
   font-family: 'Montserrat';
   font-style: normal;
   font-size: 14px;
   line-height: 19px;
   color: #FFFFFF;
   margin: 25px 0;
 }
`


export const Law = styled.div`
display: flex;
align-items: center;
height: 50px;
  h3{
   font-family: 'Montserrat';
   font-style: normal;
   font-weight: 400;
   font-size: 13px;
   line-height: 21px;
   color: white;
   opacity: 0.5;
  }
`


export const Tekama = styled.div`
width: 297px;
display: flex;
align-items: center;
height: 55px;
h3{
   color: white;
   font-size: 20px;
}
`
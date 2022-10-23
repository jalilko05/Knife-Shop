import styled from 'styled-components'

export const Wrapper = styled.div`
 width: 100%;
 display: flex;
 justify-content: center;
 border-bottom: 1px solid rgba(255,255,255, 0.1);
 margin-top: 60px;
`
export const Wrapper2 = styled.div`
 width: 100%;
 display: flex;
 justify-content: center;
 margin-top: 60px;
`
export const Container = styled.div`
 max-width: 1440px;
 width: 100%;
 display: flex;
 justify-content: center;
 padding: 0 50px 0 50px;
 flex-direction: column;
 .NewsH2 h2{
   font-family: 'Jura';
   font-style: normal;
   font-weight: 500;
   font-size: 30px;
   line-height: 41px;
   color: white;
 }
 .new{
   display: flex;
   justify-content: space-around;
   align-items: center;
   width: 100%;
 }
 .new-page{
   position: relative;
 }
 .image{
   position: absolute;
 }
 .subtitle{
   position: absolute;
 }
`

export const Tuo = styled.div`
width: 800px;
 h1{
    font-family: 'Jura';
    font-style: normal;
    font-weight: 500;
    font-size: 35px; 
    line-height: 42px;
    color: white;
    margin-bottom: 50px;
    margin-left: 80px;
    
 }
 h3{
    font-family: 'Montserrat';
    font-style: normal;
    font-size: 17px;
    line-height: 22px;
    color: white;
    margin-bottom: 20px;
    margin-left: 80px;
    
 }
 h4{
    font-family: 'Montserrat';
    font-style: normal;
    font-size: 17px;
    line-height: 22px;
    color: white;
    margin-bottom: 20px;
    width: 900px;
 }
 h5{
    font-family: 'Jura';
    font-style: normal;
    font-weight: 500;
    font-size: 35px; 
    line-height: 42px;
    color: white;
    margin-top: 40px;
 }

`
export const Top = styled.div`
width: 100%;
display: flex;
justify-content: flex-start;
margin-bottom: 50px;
`

export const Bot = styled.div`
 width: 100%;
 display: flex;
 justify-content: space-between;
`

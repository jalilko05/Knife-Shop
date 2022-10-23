import styled from 'styled-components'

export const Container = styled.div`
   width: 300px;
   height: 400px;
   height: fit-content;
   display: flex;
   justify-content: center;
   align-items: center;
   margin-bottom: 10px;
`
export const Wrapper = styled.div`
   width: 100%;
   display: flex;
   justify-content: center;
   margin-bottom: 40px;
 `
 export const WrapCont = styled.div`
   width: 1440px;
   display: flex;
   flex-wrap: wrap;
   justify-content: space-evenly;
 `
 export const MidText = styled.div`
    text-align: center;
    margin-bottom: 80px;
  
    .category{
       display: flex;
       justify-content: center;
       margin: 50px 10px 0px 10px;
       height: 30px;
       h3{
        font-family: 'Montserrat';
        font-style: normal;
        font-size: 17px;
        line-height: 42px;
        margin: 0 30px;
        color: rgba(255,255,255, 0.5);
        cursor: pointer;
        :hover{
          color: white;
          border-bottom: 2px solid #C80000
        }
       }
       
    }
    h3{
      font-family: 'Jura';
      font-style: normal;
      font-weight: 500;
      font-size: 27px;
      line-height: 42px;
      color: #FFFFFF;
    }
    input{
      width: 280px;
      height: 50px;
      border: none;
      background: #272727;
      border-radius: 6px;
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 400;
      font-size: 15px;
      line-height: 18px;
      color: #FFFFFF;
      padding: 0 20px;
    }
   
 `

export const Card = styled.div`
  width: 286px;
`

export const CardTop = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 position: relative;
 height: 412px;
 background: #272727;
 border-radius: 14px;
 margin-bottom: 10px;
 img{
   width: 200px;
   height: 300px;
 }
`

export const CardBottom = styled.div`
h3{
    color: white;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;   
}
 h4{
    font-family: 'Montserrat';
    font-style: normal;
    font-size: 14px;
    color: white;
    opacity: 0.5;
 }
 
`

export const Popular = styled.div`
 border-top: 1px solid rgba(255,255,255, 0.1);
 border-bottom: 1px solid rgba(255,255,255, 0.1);
 
 
`

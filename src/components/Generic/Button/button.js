import styled from "styled-components";
const getType = (type) =>{
  switch(type){
    case 'white' : return {
        border: "none",
        border: "2px solid #C80000",
        background: "none",
        color: "black",
    }
    case 'red' : return{
        border: "none",
        background: "#C80000",
        color: "white",
    }
    default: return{
        background: "#E0E0E0",
        color: "#828282",
        border: "none",
        border: "2px solid #828282",
    }
  }
}
export const Container = styled.button`
 display: flex;
 align-items: center;
 justify-content: center;
 font-style: normal;
 font-weight: 600;
 font-size: 14px;
 line-height: 17px;
 width: 165px;
 height: 49px;
 border-radius: ${({borderRadius})=> borderRadius || "27px"};
 ${({type})=> getType(type)}
 cursor: pointer;
 :active{
    transform: scale(0.98);
    opacity: 0.7;
 }
`


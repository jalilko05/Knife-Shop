import React, {useState} from "react";
import {useQuery} from "react-query"
import Box from './Card'
import { MidText, Popular, WrapCont, Wrapper} from "./style";

const { REACT_APP_BASE_URL : url} = process.env

const Catalog = () =>{

   const [data,setData] = useState([])

   useQuery(
   ["getting started"],
   () => {
      return fetch(`${url}`).then((res)=> res.json())
   },
   {
      onSuccess:(res)=>   setData(res.data)
   }
   )

  

   return(
    <>
         <Wrapper>
           <WrapCont>
         {
          data.slice(0, 8).map((value, id)=>{
              return <Box key={id} info={value}/>
          })
         }
           </WrapCont>         
         </Wrapper>

         <MidText>
                  <h3>Узнавайте первым о новинках и новостях</h3>
                  <input type="email" placeholder="Ваш e-mail" />
          </MidText>

          <Wrapper>
            <WrapCont>
              {
               data.slice(0, 4).map((value, id)=>{
                   return <Box key={id} info={value}/>
               })
              }
            </WrapCont>
          </Wrapper>



          <Popular>
           <MidText>
              <div className="category">
                 <h3>НОВИНКИ</h3>
                 <h3>ПОПУЛЯРНОЕ</h3>
              </div>
           </MidText>
            <Wrapper>
             <WrapCont>
                {
                 data.slice(0, 4).map((value, id)=>{
                     return <Box key={id} info={value}/>
                 })
                }
              
             </WrapCont>
            </Wrapper>
          </Popular>
    </>
   )
}

export default Catalog
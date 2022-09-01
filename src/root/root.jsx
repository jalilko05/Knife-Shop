import {Routes, Route}  from 'react-router-dom' 
import Layout from '../components/Layout/layout.jsx'




const Root = () =>{
  return(
    
      <Routes>
        <Route path='/' element={<Layout/>}>

        </Route>
      </Routes>
    
  )
}

export default Root

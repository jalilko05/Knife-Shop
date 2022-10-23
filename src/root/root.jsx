import {Routes, Route}  from 'react-router-dom' 
import Layout from '../components/Layout/layout.jsx'
import HomePage from '../pages/Home/homepage.jsx'




const Root = () =>{
  return(
    
      <Routes>
        <Route path='/' element={<Layout/>}>
           <Route path='/' element={<HomePage/>}/>
        </Route>
      </Routes>
    
  )
}

export default Root

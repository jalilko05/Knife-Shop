import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import  {BrowserRouter as Route} from 'react-router-dom'
import Root from './root/root';
import 'antd/dist/antd.css';
import {QueryClient, QueryClientProvider} from "react-query"


const query = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Route>
     <QueryClientProvider client={query}>
       <Root/>
     </QueryClientProvider>
  </Route>

);

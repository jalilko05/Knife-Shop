import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import  {BrowserRouter as Route} from 'react-router-dom'
import Root from './root/root';
import 'antd/dist/antd.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Route>
     <Root/>
  </Route>

);

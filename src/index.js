import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./bootstrap.min.css"
import { BrowserRouter } from 'react-router-dom';
import "./bootstrap.min.css"
import ContextShare from "./contexts/contextShare"
import TokenAuth from './contexts/tokenAuth';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextShare>
<TokenAuth>
  
         <BrowserRouter>
            <App />
          </BrowserRouter>
          
</TokenAuth>
    </ContextShare>
  </React.StrictMode>
);



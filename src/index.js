import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'antd/dist/antd.css'; 
import App from './App';
import Store from "./component/Store";
import 'react-toastify/dist/ReactToastify.min.css'
ReactDOM.render(
<Store>
    <App />
</Store>

,
  document.getElementById('root')
);


import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from '../src/Routes/route';
import { ToastContainer } from 'react-toastify';
import LoginForm from '../src/login';
 
const App = () => {
 

  return (
    <>
     
      <AppRoutes />
    </>
  );
};
 
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
 
export default App;
 //App.js

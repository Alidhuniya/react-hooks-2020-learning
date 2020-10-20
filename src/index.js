import React from 'react';
import ReactDom from 'react-dom';
import App from "./App";



import {
  HashRouter as Router
} from "react-router-dom";
 
ReactDom.render(<Router><App /></Router>, document.getElementById("root"));


if ('serviceWorker' in navigator) {
       window.addEventListener('load', () => {
         navigator.serviceWorker.register('/service-worker.js')
        .then(registration => {
           console.log('SW registered: ', registration);
         }).catch(registrationError => {
           console.log('SW registration failed: ', registrationError);
         });
       });
     }
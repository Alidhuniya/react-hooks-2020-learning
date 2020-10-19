import React from 'react';
import ReactDom from 'react-dom';
import App from "./App";



import {
  HashRouter as Router
} from "react-router-dom";
 
ReactDom.render(<Router><App text={`Focused, hard work is the real key
to success. Keep your eyes on the goal, 
and just keep taking the next step 
towards completing it. Focused, hard work is the real key
to success. Keep your eyes on the goal, 
and just keep taking the next step 
towards completing it.`}
maxLength={35} /></Router>, document.getElementById("root"));


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
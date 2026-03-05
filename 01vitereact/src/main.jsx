import React from 'react'

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";


// function MyApp(){
//   return(
//     <div>
//       <h1>Custom App!!!</h1>
//     </div>
//   )
// }


// const reactElement = {
//     type: 'a',
//     props: {
//         href: "https://google.com",
//         target: "_blank"
//     },
//     children: 'Click me to visit google'
// }


const anotherElement = (
  <a href="https://google.com" target= "_blank">Visit Google</a>
)

const anotherUser = "Chai aur react"



// Down we have an evaluated expression in which we cant directly write if-else ,
//  there final outcome is required coz it is an evaluated expression









const reactElement = React.createElement(
  'a', // babel injects these automatically
  {href: 'https://google.com', target: '_blank'},
  'click me to visit google',
  anotherUser     // jab sara tree bnn jata h uske baad humare aate h variable which we inject in the element
)


createRoot(document.getElementById("root")).render(
  
  reactElement

);

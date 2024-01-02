import React, { createElement } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

function MyApp() {
  return (
    <div>
      <h1>Custom App | Nabeel Niaz</h1>
    </div>
  );
}

// const reactElement = {
//     type: 'a',
//     props:{
//       href: 'https://www.google.com',
//       target: '_blank'
//     },
//     children: 'Click me to Visit Google'
//   }

const anotherElement = (
  <a href="https://google.com" target="_blank">
    Visit Google
  </a>
);

const anotherUser = "Another User";

const reactElement = React.createElement(
  "a",
  {
    href: " https://google.com",
    target: "_blank",
  },
  "Click me to visit google",
  anotherUser
);

ReactDOM.createRoot(document.getElementById("root")).render(reactElement);

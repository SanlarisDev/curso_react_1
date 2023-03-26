import React from "react";
import ReactDom from "react-dom/client";

function App(){
    return (<h1>Hola Mundo!!</h1>);
}

ReactDom.createRoot(document.getElementById('root'))
    .render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    )
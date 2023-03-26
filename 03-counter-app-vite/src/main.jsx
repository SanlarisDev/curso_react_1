import React from "react";
import ReactDom from "react-dom/client";
import { FirstApp } from "./FirstApp";
// import { HelloWorldApp } from "./HelloWorldApp";
import './style.css';


ReactDom.createRoot(document.getElementById('root'))
    .render(
        <React.StrictMode>
            <FirstApp title="Hola Mundo Tech" subtitle={123} />
        </React.StrictMode>
    )
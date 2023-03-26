import React from "react";
import ReactDom from "react-dom/client";
import { FirstApp } from "./FirstApp";
import { HelloWorldApp } from "./HelloWorldApp";


ReactDom.createRoot(document.getElementById('root'))
    .render(
        <React.StrictMode>
            <FirstApp />
        </React.StrictMode>
    )
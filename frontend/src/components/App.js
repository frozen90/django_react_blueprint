import React, { Component } from "react";
import { render } from "react-dom";

const App = (props) => {


    return (
        <h1>Test</h1>
    );
}

const appDiv = document.getElementById("app")
render(<App/>, appDiv)
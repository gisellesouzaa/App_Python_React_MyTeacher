import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "./Home";
import Aulas from "./Aulas";

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Home} path="/" exact />
            <Route component={Aulas} path="/aulas" />
        </BrowserRouter>
    )
}

export default Routes;
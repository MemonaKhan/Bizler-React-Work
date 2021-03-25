import React from 'react'
import {Route, Switch} from "react-router-dom"
import Home from "./pages/Home";
import About from "./pages/About"
import Services from "./pages/Services"
import ServiceDetail from "./pages/ServiceDetail"
import PortfolioDetail from "./pages/PortfolioDetail"

function Routes() {
    return (
        <Switch>
            <Route exact path="/" render={(props) => <Home {...props} /> } />
            <Route exact path="/about" render={(props) => <About {...props} /> } />
            <Route exact path="/services" render={(props) => <Services {...props} /> } />
            <Route exact path="/detailedService" render={(props) => <ServiceDetail {...props} /> } />
            <Route exact path="/portfolio" render={(props) => <Services {...props} /> } />
            <Route exact path="/detailedPortfolio" render={(props) => <PortfolioDetail {...props} /> } />
            <Route path="/*" render={(props) => <Home {...props} /> } />

        </Switch>
    )
}

export default Routes

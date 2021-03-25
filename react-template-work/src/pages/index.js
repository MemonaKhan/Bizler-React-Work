import React from 'react'
import Routes from "../Routes"
import Navbar from "../components/Navbar";
import Topbar from "../components/Topbar";
import HomeFooter from "../sections/HomeFooter"
import FooterBar from "../components/FooterBar"
import ServicesFooter from "../sections/ServicesFooter"

import {useHistory} from "react-router-dom"

function Pages({aboutUs}) {
    const history  = useHistory();
    console.log(history.location.pathname)
    const path = history.location.pathname;
    let footer;
    if(path=="/") footer = <HomeFooter />
    else if((path=="/about") || (path=="/services")) footer = <FooterBar />
    else footer = <ServicesFooter />
    return (
        <>
        <div className={`${path=="/services"|| path== "/about"?'wraper-v2-inner':'wraper'}`}>
        <Topbar />
        <Navbar />
        <Routes />
        </div>
        {footer}
        </>
    )
}

export default Pages

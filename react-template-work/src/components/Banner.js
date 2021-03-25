import React from 'react'

function Banner(props){
    return(
        <>
        <section id="inner-banner">
        <div className="container">
            <div className="row">
            <div className="inner-heading">
                <h2>{props.heading}</h2>
                <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="index-2.html" title="Home">Home</a></li>
                    <li className="breadcrumb-item"><a href="services.html" title="Services">{props.l1}</a></li>
                    <li className="breadcrumb-item active" aria-current="page">{props.heading}</li>
                </ol>
                </nav>
            </div>
            </div>
        </div>
        </section>
        </>
    )
}

export default Banner;
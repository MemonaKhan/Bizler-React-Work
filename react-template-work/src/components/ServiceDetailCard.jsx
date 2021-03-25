import React from "react";
import img1 from "../img/inner-banner.jpg";

const ServiceDetail = (props) => {
  return (
    <section id="inner-banner" style={{ backgroundImage: `url(${img1})` }}>
      <div className="container">
        <div className="row">
          <div className="inner-heading">
            <h2>{props.heading} Detail</h2>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="index-2.html" title="Home">
                    Home
                  </a>
                </li>
                <li className="breadcrumb-item">
                  <a href="services.html" title="Services">
                    {props.heading}
                  </a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  {props.heading} Detail
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetail;

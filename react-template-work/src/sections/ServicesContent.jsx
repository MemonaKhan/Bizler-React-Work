import React from "react";
import img1 from "../img/service_detail.jpg";
const ServiesContent = () => {
  return (
    <section id="services-top">
      <div className="container">
        <h3 className="d-none">heading</h3>
        <div className="col-lg-12 col-md-12 col-sm-12">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 img-area">
              {" "}
              <img src={img1} alt="About" />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 content-area">
              <h5>
                Providing best business solution for growing your business
              </h5>
              <p>
                Lorem Ipsum has been the {`industry's`} standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. More recently
                with desktop publishing software like Aldus PageMaker including
                versions of Lorem Ipsum.
              </p>
              <p>
                Lorem Ipsum has been the {`industry's`} standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </p>
              <p>
                When an unknown printer took a galley of type and scrambled it
                to make a type specimen book. More recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiesContent;

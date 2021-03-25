import React from "react";

const PortfolioCard = ({ content, img_thumbnail,cls, img_large }) => {
  return (
    <div className={`col-lg-4 col-md-6 col-sm-6 col-xs-12 port-item ${cls}`}>
      <div className="project portfolio-inner">
        <img src={img_thumbnail} alt="project" />
        <div className="label">
          <div className="label-text">
            {" "}
            <a href="portfolio-detail.html" className="text-title">
              {content}
            </a>{" "}
          </div>
          <div className="label-bg"></div>
        </div>
        <div className="zoom">
          {" "}
          <a
            href={img_large}
            className="popup-box"
            data-lightbox="image"
            data-title="Project"
          >
            {" "}
            <i className="flat flaticon-magnifying-glass"></i>{" "}
          </a>{" "}
        </div>
      </div>
    </div>
  );
};
export default PortfolioCard;

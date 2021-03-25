import React from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
import img from '../img/project_ss.jpg'


export default function PortfolioCard(props) {
    return (
        <>
            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 port-item design development">
                <div className="project portfolio-inner">
                    <img src={props.img} alt="project" />
                    <div className="label">
                        <div className="label-text"> <a href="portfolio-detail.html" className="text-title">{props.title}</a> </div>
                        <div className="label-bg"></div>
                    </div>
                    <div className="zoom"> <a href={props.img} className="popup-box" data-lightbox="image" data-title="Project"> <i className="flat flaticon-magnifying-glass"></i> </a> </div>
                </div>
            </div>
        </>
    );
}

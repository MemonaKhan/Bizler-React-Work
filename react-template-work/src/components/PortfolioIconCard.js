import React from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
import img from '../img/project_ss.jpg'


export default function PortfolioCard(props) {
    return (
        <>
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                <div className="icon">
                    <i className={`flat flaticon-${props.icon}`}></i>
                </div>
                <div className="content">
                    <h6>{props.heading}</h6> 
                    <div className="value">{props.text}</div>
                </div>
            </div>
        </>
    );
}

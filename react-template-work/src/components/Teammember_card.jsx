import React from "react";
import logoA from "../img/team-member-pic.jpg";

const Teammember_card = ({ pic, name, position, content }) => {
  return (
    <div className="item col-lg-6 col-md-6 col-sm-12 col-xs-12">
      <div className="client_dp">
        <img src={pic} alt="Team" />
      </div>
      <div className="team-card">
        <div className="name_designation">
          <h5>
            <a href="#">{name}</a>
          </h5>
          <span>{position}</span>
        </div>
        <div className="description">
          <p>{content}</p>
        </div>
        <div className="social_links">
          <ul>
            <li>
              <a href="javascript:void(0)" title="Facebook">
                <i className="flat flaticon-facebook-logo"></i>
              </a>
            </li>
            <li>
              <a href="javascript:void(0)" title="Twitter">
                <i className="flat flaticon-twitter"></i>
              </a>
            </li>
            <li>
              <a href="javascript:void(0)" title="Google">
                <i className="flat flaticon-google-plus-logo"></i>
              </a>
            </li>
            <li>
              <a href="javascript:void(0)" title="Linkedin">
                <i className="flat flaticon-linkedin-logo"></i>
              </a>
            </li>
            <li>
              <a href="javascript:void(0)" title="Instagram">
                <i className="flat flaticon-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Teammember_card;

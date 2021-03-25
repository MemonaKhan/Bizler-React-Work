import React from "react";
import { Link } from "react-router-dom";

function Post({ date, month, img, detail, designation, comments }) {
  return (
    <div className="item blog_card">
      <div className="post-img">
        {" "}
        <img src={img} alt="Post" />
        <div className="posted_on">
          {" "}
          <span className="date">{date}</span>{" "}
          <span className="month">{month}.</span>{" "}
        </div>
      </div>
      <div className="post-detail">
        <h5>
          <Link to="/detailedBlog">{detail}</Link>
        </h5>
        <div className="post-status">
          <ul>
            <li>
              <i className="flat flaticon-folder"></i>{" "}
              <span>
                <a href="javascript:void(0)">{designation}</a>
              </span>
            </li>
            <li>
              <i className="flat flaticon-chat"></i> <span>{comments}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="clearfix"></div>
    </div>
  );
}

export default Post;

import React from "react";
import { Card } from "react-bootstrap";

function BlogCardComponent(props) {
  return (
    <>
      <div class="item blog_card">
        <div class="post-img"> <img src={props.item.image} alt="Post" />
          <div class="posted_on"> <span class="date">{props.item.date}</span> <span class="month">{props.item.month}</span> </div>
        </div>
        <div class="post-detail">
          <h5><a href="blog-detail.html">{props.item.title}</a></h5>
          <div class="post-status">
            <ul>
              <li><i class="flat flaticon-folder"></i> <span><a href="javascript:void(0)">{props.item.position}</a></span></li>
              <li><i class="flat flaticon-chat"></i> <span>{props.item.comments}</span></li>
            </ul>
          </div>
        </div>
        <div class="clearfix"></div>
      </div>

      {/* <div style={({ width: "541px" }, { marginRight: "28px" })}>
        <div className="item blog_card">
          <div className="post-img">
            <img src={props.item.image} alt="Post" />
            <div className="posted_on">
              <span className="date">{props.item.date}</span>
              <span className="month">{props.item.month}</span>
            </div>
          </div>

          <div className="post-detail">
            <div className="post-title">
              <h5>
                <a href="blog-detail.html" style={{ color: "black" }}>
                  {props.item.title}
                </a>
              </h5>
            </div>
            <div className="posted_by">
              <i className="flat flaticon-avatar"></i> Posted By -{" "}
              <a href="/">Admin</a>
            </div>
            <div className="about_post">
              <p>
                {" "}
                Lorem Ipsum has been the industry 's standard dummy text ever
                since the 1500s
              </p>
            </div>
            <div class="post-status">
              <ul>
                <li><i class="flat flaticon-folder"></i> <span><a href="javascript:void(0)">{props.item.position}</a></span></li>
                <li><i class="flat flaticon-chat"></i> <span>{props.item.comments}</span></li>
              </ul>
            </div>
          </div>
          <div className="clearfix"></div>
        </div>
      </div> */}
    </>
  );
}
export default BlogCardComponent;

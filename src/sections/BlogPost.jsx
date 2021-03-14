import React, { useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import BlogCardComponent from "../components/BlogPostCardComponent";
import { Container, Row } from "react-bootstrap";


import Sectionheader from "../components/Sectionheader";
import { Sdata, Heading_data } from "../Data/Home_Data";

import img1 from "../img/home-blog-post-1.jpg";
import img2 from "../img/home-blog-post-2.jpg";

function BlogPost() {
  const [CardItems, SetCardElement] = useState([
    {
      image: img1,
      title: "Standard has been the industry",
      date: "04",
      month: "Sept.",
      position : "UI Developer",
      comments : "20"
    },
    {
      image: img2,
      title: "It has survived not only five centuries",
      date: "05",
      month: "Sept.",
      position : "UI Developer",
      comments : "20"
    },
    {
      image: img1,
      title: "It has survived not only five centuries",
      date: "06",
      month: "Sept.",
      position : "UI Developer",
      comments : "20"
    },
    {
      image: img2,
      title: "It has survived not only five centuries",
      date: "07",
      month: "Sept.",
      position : "UI Developer",
      comments : "20"
    },
    {
      image: img1,
      title: "Lorem Ipsum has been the industry's",
      date: "08",
      month: "Sept.",
      position : "UI Developer",
      comments : "20"
    },
    {
      image: img2,
      title: "It has survived not only five centuries",
      date: "09",
      month: "Sept.",
      position : "UI Developer",
      comments : "20"
    }
  ]);
  const content1 = "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."

  return (
    <>
      <section id="blog_post" class="index-3">
        <div className="container">
          <Sectionheader
            title1={Heading_data[2].title1}
            title2={Heading_data[2].title2}
            headingcontent={Heading_data[1].headingcontent}
          />
          <div className="col-lg-12 col-md-12 col-xs-12 content_sec">
            <Row>
              <OwlCarousel
                className="owl-theme"
                margin={15}
                nav
                items={3}
                dots={true}
              >
                {CardItems.map((item, id) => {
                  return <BlogCardComponent key={id} item={item} />;
                })}
              </OwlCarousel>
            </Row>
          </div>
        </div>
        <div class="clearfix"></div>
      </section>

    </>
  );
}

export default BlogPost;

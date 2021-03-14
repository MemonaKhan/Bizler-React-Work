import React, { useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import BlogCardComponent from "../components/BlogPostCardComponent";
import { Container, Row } from "react-bootstrap";

import img1 from "../img/home-blog-post-1.jpg";
import img2 from "../img/home-blog-post-2.jpg";

function BlogPost() {
  const [CardItems, SetCardElement] = useState([
    {
      image: img1,
      title: "Standard has been the industry",
      date: "04",
      month: "Sept."
    },
    {
      image: img2,
      title: "It has survived not only five centuries",
      date: "05",
      month: "Sept."
    },
    {
      image: img1,
      title: "It has survived not only five centuries",
      date: "06",
      month: "Sept."
    },
    {
      image: img2,
      title: "It has survived not only five centuries",
      date: "07",
      month: "Sept."
    },
    {
      image: img1,
      title: "Lorem Ipsum has been the industry's",
      date: "08",
      month: "Sept."
    },
    {
      image: img2,
      title: "It has survived not only five centuries",
      date: "09",
      month: "Sept."
    }
  ]);

  return (
    <>
      <Container>
        <Row>
          <OwlCarousel
            className="owl-theme"
            margin={10}
            nav
            items={2}
            dots={true}
          >
            {CardItems.map((item, id) => {
              return <BlogCardComponent key={id} item={item} />;
            })}
          </OwlCarousel>
        </Row>
      </Container>
    </>
  );
}

export default BlogPost;

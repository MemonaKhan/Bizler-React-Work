import React from 'react'
import Post from "../components/Post"
import blog1 from "../img/blog-post-1.jpg";
import blog2 from "../img/blog-post-2.jpg";
import blog3 from "../img/blog-post-3.jpg";
import OwlCarousel from "react-owl-carousel"
import Sectionheader from "../components/Sectionheader"
function BlogPost() {
    const data = [
        {
            date: 4,
            month:"sept",
            img:blog1,
            detail:"Standard is simply dummy text of the printing and typesetting.",
            designation:"UI Developer",
            comments:20
        },
        {
            date: 5,
            month:"sept",
            img:blog2,
            detail:"Standard is simply dummy text of the printing and typesetting.",
            designation:"UI Developer",
            comments:20
        },
        {
            date: 6,
            month:"sept",
            img:blog3,
            detail:"Standard is simply dummy text of the printing and typesetting.",
            designation:"UI Developer",
            comments:15
        },
        {
            date: 7,
            month:"sept",
            img:blog1,
            detail:"Standard is simply dummy text of the printing and typesetting.",
            designation:"UI Developer",
            comments:9
        },
        {
          date: 8,
          month:"sept",
          img:blog2,
          detail:"Standard is simply dummy text of the printing and typesetting.",
          designation:"UI Developer",
          comments:10
      },
    ]
    return (
        <section id="blog_post" className="index-3">
    <div className="container">
      <Sectionheader title1="Blog" title2="Posts" headingcontent="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."/>
      <div className="col-lg-12 col-md-12 col-xs-12 content_sec">
        <div className="blog-slider owl-five owl-carousel owl-theme">
          {data.map((data)=>{
            const {date,month,img,detail,designation,comments} = data
            return(
              <Post key={date} date={date} month={month} img={img} detail={detail} designation={designation} comments={comments}/>
            )
          })}
          
        </div>
      </div>
    </div>
    <div className="clearfix"></div>
  </section>
    )
}

export default BlogPost

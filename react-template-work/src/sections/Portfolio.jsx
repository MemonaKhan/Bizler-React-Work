import React from "react";
import $ from "jquery";
import Isotope from "isotope-layout"
import Sectionheader from "../components/Sectionheader";
import { Heading_data, Portfolio_data } from "../Data/Home_Data";
import PortfolioCard from "../components/PortfolioCard";

const Portfolio = () => {
  const handleClick= (newFilter) => {
    $('.portfolio-sort ul li').on("Click", function () {
      console.log("I am filter 2")

$('.portfolio-sort ul li ').removeClass('active');
$(this).addClass('active');
if (this.iso === undefined) {
this.iso = new Isotope('.portfolio-gallary', {
itemSelector: '.port-item',
percentPosition: true,
masonry: {
columnWidth: '.port-item'
}
});
}
if(newFilter === '*') {
this.iso.arrange({ filter: `*` });
} else {
this.iso.arrange({ filter: `.${newFilter}` });
}

return false;
});
  }
  return (
    <section id="portfolio" className="index-3">
      <div className="container">
        <Sectionheader
          title1="Portfolio"
          headingcontent={Heading_data[0].headingcontent}
        />

        <div className="col-lg-12 col-md-12 col-xs-12 content_sec ">
          <div className="portfolio-sort">
            <ul className="sorting clearfix center-grid">
              <li className="sort-btn active" data-filter="*" onClick={()=>handleClick("*")}>
                All
              </li>
              <li className="sort-btn" data-filter=".design" onClick={handleClick("design")}>
                Web Design
              </li>
              <li className="sort-btn" data-filter=".development" onClick={()=>handleClick("development")}>
                Web Development
              </li>
              <li className="sort-btn" data-filter=".logo" onClick={()=>handleClick("logo")}>
                Logo Design
              </li>
              <li className="sort-btn" data-filter=".app" onClick={()=>handleClick("app")}>
                App Design
              </li>
            </ul>
          </div>
          <div className="row portfolio-gallary">
          {Portfolio_data.map((data)=>{
                         const {content, img_thumbnail,cls ,img_large} = data
                         return(
                             <PortfolioCard key={content} content={content} img_thumbnail={img_thumbnail} cls={cls} img_large={img_large}/>
                         )
                     })}
          </div>
        </div>
      </div>
      <div className="overlay"> </div>
    </section>
  );
};

export default Portfolio;

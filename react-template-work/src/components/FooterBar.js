import React from 'react'

function FooterBar() {
    return (
        <footer className="inner index-3">
  <div className="bottom">
    <div className="container">
      <div className="navigation">
        <ul>
          <li><a href="index.html" title="Homepage">Home</a></li>
          <li className="separator-pipesign white"></li>
          <li><a href="about-us-3.html" title="About Us">About Us</a></li>
          <li className="separator-pipesign white"></li>
          <li><a href="services-3.html" title="Services">Services</a></li>
          <li className="separator-pipesign white"></li>
          <li><a href="blog-3-column-3.html" title="Blog">Blog</a></li>
          <li className="separator-pipesign white"></li>
          <li><a href="portfolio-2-column.html" title="Pages">Portfolio</a></li>
          <li className="separator-pipesign white"></li>
          <li><a href="contact-us-1.html" title="Contact Us">Contact Us</a></li>
        </ul>
      </div>
    </div>
    <hr />
    <div className="container">
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 copyright">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12"> Copyright &copy; 2018
            <span className="separator-pipesign white"></span>
            All Rights Reserved
            <span className="separator-pipesign white"></span>
            <a href="https://www.templateshub.net">Templates Hub</a></div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 text-right"> <a href="javascript:void(0)">Privacy Policy</a>
            <span className="separator-pipesign white"></span>
            <a href="javascript:void(0)">Terms &amp; Conditions</a>
            <span className="separator-pipesign white"></span>
            <a href="faq.html">{`FAQ's`}</a> </div>
        </div>
      </div>
    </div>
  </div>
</footer>
    )
}

export default FooterBar

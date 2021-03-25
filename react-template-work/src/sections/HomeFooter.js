import React from 'react'
import logo from "../img/logo-3-footer.png"
import blogThumb from "../img/recent-post-thumb-1.jpg"
function HomeFooter() {
    return (
        <footer className="home index-3">
  <div className="container">
    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
      <div className="row row-safari">
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 about">
          <div className="logo"><img src={logo} alt="Bizler" /></div>
          <div className="detail">
            <p>Lorem Ipsum has been the {`industry's`} standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.</p>
          </div>
          <a href="about-us-2.html" className="view_more" title="View More">View More</a> </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 latest-news">
          <div className="section_heading">Latest <span>News</span></div>
          <div className="post-item">
            <div className="post-img"> <img src={blogThumb} alt="post" /> </div>
            <div className="post-content">
              <p><a href="blog-detail.html">Lorem Ipsum has been the {`industry's`} standard  dummy text ever since the 1500s.</a></p>
              <div className="post-status"> 05/10/2018 </div>
            </div>
          </div>
          <div className="post-item">
            <div className="post-img"> <img src={blogThumb} alt="post" /> </div>
            <div className="post-content">
              <p><a href="blog-detail.html">when an unknown printer took a galley of type and scrambled it to make a type.</a></p>
              <div className="post-status"> 06/10/2018 </div>
            </div>
          </div>
        </div>
      </div>
    </div>
     <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
     <div className="contact_info">
          <div className="row row-safari">
		
          <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 column">
            <div className="icon"> <i className="flat flaticon-facebook-placeholder-for-locate-places-on-maps"></i> </div>
            <div className="detail">
              <h5>Address</h5>
              <div className="content"> Head Office :<span className="value"> 123, Street Name, City Name, State Name, Country Name, Pin Code : 123456 </span> </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 column">
            <div className="icon"> <i className="flat flaticon-phone-receiver"></i> </div>
            <div className="detail">
              <h5>Call Us On</h5>
              <div className="content"> Main Office :<span className="value"><a href="javascript:void(0)" title="0123-456-789"> 0123-456-789 </a></span> <br />
                Customer Support :<span className="value"> <a href="javascript:void(0)" title="0123-456-789"> 0123-456-789 </a> </span> </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 column">
            <div className="icon"> <i className="flat flaticon-mail-black-envelope-symbol"></i> </div>
            <div className="detail">
              <h5>Mail Us On</h5>
              <div className="content">Customer Support : support@bizler.com<br />Technical Support : support@bizler.com</div>
            </div>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-6 col-xs-12 column social">
            <div className="icon"> <i className="flat flaticon-share"></i> </div>
            <div className="detail">
              <h5>Follow Us On</h5>
              <div className="content"> <a href="javascript:void(0)" title="Facebook" ><i className="flat flaticon-facebook-logo"></i></a> <a href="javascript:void(0)" title="Twitter" ><i className="flat flaticon-twitter"></i></a> <a href="javascript:void(0)" title="Google" ><i className="flat flaticon-google-plus-logo"></i></a> <a href="javascript:void(0)" title="Linkedin" ><i className="flat flaticon-linkedin-logo"></i></a> <a href="javascript:void(0)" title="Instagram" ><i className="flat flaticon-instagram"></i></a> </div>
            </div>
          </div>
        </div>          
          </div>
     </div>
  </div>
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

export default HomeFooter

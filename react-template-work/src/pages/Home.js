import React,{useEffect} from 'react';

import Slider from "../sections/Slider"
import Ourteam from "../sections/Ourteam";
import AboutUs from "../sections/AboutUs";
import Qualities from "../sections/Qualities"
import BlogPost from "../sections/BlogPost"
import Portfolio from "../sections/Portfolio"
import Services from "../sections/Services"
import Counter from "../sections/Counter"
import OurClient from '../sections/OurClients';
import Testimonial from "../sections/Testimonial"

const Home = () => {
  // useEffect($('.js-preloader').preloadinator({
  //   minTime: 1000,
  //   animationDuration: 400
  // }),[])
  return (
<>
          {/* <div className="preloader js-preloader flex-center">
			<div className="dots">
				<div className="dot"></div>
				<div className="dot"></div>
				<div className="dot"></div>
			</div>
		</div> */}
    
        
        <Slider />
        <Qualities />
        <AboutUs />
        <Services />
        <Ourteam />
        <Portfolio />
        <Counter />
        <BlogPost />
        <OurClient/>
        <Testimonial />

</>
        );
}

export default Home;

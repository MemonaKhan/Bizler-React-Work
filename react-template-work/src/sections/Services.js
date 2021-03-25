import React from "react"
import ServiceCard from "../components/ServiceCard"
import Sectionheader from "../components/Sectionheader"
const Services  = () => {
const data = [
    {
        icon:"web-design",
        title:"Web Development",
        content:"All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet."
    },
    {
        icon:"computer-graphic",
        title:"Web Design",
        content:"All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet."
    },
    {
        icon:"servers",
        title:"Web Hosting",
        content:"All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet."
    },
    {
        icon:"digital-marketing",
        title:"Digital Marketing",
        content:"All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet."
    },
    {
        icon:"web-design",
        title:"Web Development",
        content:"All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet."
    },
    {
        icon:"web-design",
        title:"Web Development",
        content:"All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet."
    },
    {
        icon:"computer-graphic",
        title:"Web Design",
        content:"All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet."
    },
    {
        icon:"servers",
        title:"Web Hosting",
        content:"All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet."
    },
    {
        icon:"digital-marketing",
        title:"Digital Marketing",
        content:"All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet."
    },
]
    return(
       <section id="services" className="gray-bg index-3">
    <div className="container">
    <Sectionheader title1="Services" title2="" headingcontent="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."/>
      <div className="col-lg-12 col-md-12 col-xs-12 content_sec">
         <div className="service-slider owl-one owl-carousel owl-theme">
             {data.map((data)=>{
                 const {icon, title, content} = data
                 return(
                     
                     <ServiceCard key={icon} icon={icon} title={title} content={content}/>
                 )
             })}
          
        </div>
        <div className="h-border"><span></span></div>
      </div>
    </div>
    <div className="overlay"></div>
  </section>
    )
}
export default Services
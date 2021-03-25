import React from "react";
import ServiceCard from "../components/ServiceCard";
import ServiceSectionCard from "../components/ServiceSectionCard";
import {Services_Data} from"../Data/Home_Data";

const ServicesSection = () => {
    return (

        <section id="services" className="index-3 inner pdb-70">
            <div className="container">
                <div className="col-lg-12 col-md-12 col-xs-12">
                    <div className="row blog-isotope">
                        {Services_Data.map((data)=>{
                            const {title,icon,content} = data
                            return(
                                <ServiceSectionCard key={icon} title={title} icon={icon} content={content}/>
                            )
                        })}
                        {Services_Data.map((data)=>{
                            const {title,icon,content} = data
                            return(
                                <ServiceSectionCard key={icon} title={title} icon={icon} content={content}/>
                            )
                        })}
                        {/* <ServiceCard
                            icon = "flat flaticon-web-design"
                            title = "Web Development"
                            heading={Services_Data[0].heading}
                            content={Services_Data[0].content}
                        />
                        <ServiceCard
                            icon = "flat flaticon-computer-graphic"
                            title = "Web Design"
                            heading={Services_Data[1].heading}
                            content={Services_Data[1].content}
                        />
                        <ServiceCard
                            icon = "flat flaticon-servers"
                            title = "Web Hosting"
                            heading={Services_Data[2].heading}
                            content={Services_Data[2].content}
                        />
                        <ServiceCard
                            icon = "flat flaticon-digital-marketing"
                            title = "Digital Marketing"
                            heading={Services_Data[3].heading}
                            content={Services_Data[3].content}
                        />
                        <ServiceCard
                            icon = "flat flaticon-digital-marketing"
                            title = "Digital Marketing"
                            heading={Services_Data[3].heading}
                            content={Services_Data[3].content}
                        />
                        <ServiceCard
                            icon = "flat flaticon-servers"
                            title = "Web Hosting"
                            heading={Services_Data[2].heading}
                            content={Services_Data[2].content}
                        />
                        <ServiceCard
                            icon = "flat flaticon-computer-graphic"
                            title = "Web Design"
                            heading={Services_Data[1].heading}
                            content={Services_Data[1].content}
                        />
                        <ServiceCard
                            icon = "flat flaticon-web-design"
                            title = "Web Development"
                            heading={Services_Data[0].heading}
                            content={Services_Data[0].content}
                        /> */}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ServicesSection

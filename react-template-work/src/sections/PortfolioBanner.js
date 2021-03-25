import React from 'react';
import img from '../img/project_ss.jpg'

import PortfolioCard from "../components/PortfolioIconCard"

const data = [
    {
        icon: "avatar",
        title: "Client",
        text: "Phil Dives"
    },
    {
        icon: "facebook-placeholder-for-locate-places-on-maps",
        title: "Location",
        text: "Tanta, Algharbia"
    },
    {
        icon: "calendar",
        title: "Date",
        text: "Sept 4, 2018"
    },
    {
        icon: "folder",
        title: "Category",
        text: "Design, Illustration" 
    },

]
export default function RecentProjects() {
    return (
        <>
            <section id="portfolio_detail">
                <div className="container">
                    <h3 className="d-none">heading</h3>

                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                        <div className="project_screen">
                            <img src={img} alt="Project" />
                        </div>
                        
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 about_project">
                            <div className="row">
                            {data.map((data,key) => {
                            const { icon, title, text } = data
                            return (
                                <PortfolioCard key={key} icon={icon} heading={title} text={text} />
                            )
                        })}
                            </div>
                        </div>
                        
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 project_description">
                            <h4>There are many variations of passages of Lorem Ipsum available</h4>
                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classNameical literature, discovered the undoubtable source.</p>
                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classNameical literature, discovered the undoubtable source.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

import React from 'react'
const Slide = (props) => {
    const {img, title, content} = props
    return (
        <div className="item"> 
        <img className="d-block w-100" src={img} alt="First slide"/>

            <div className="caption d-md-block">
                <div className="display">{title} </div>
                <div className="content">{content}</div>
                <a href="about-us-3.html" className="view_more" title="View More">View More</a>
                <a href="contact-us-1.html" className="view_more contact_us" title="Contact Us">Contact Us</a>
            </div>

        </div>

    )
}

export default Slide

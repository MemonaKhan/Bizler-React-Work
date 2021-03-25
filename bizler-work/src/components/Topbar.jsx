import React from "react";

const Topbar = () => {
    return(
        <div className="header-top contact_info">
            <div className="container">
                <div className="col-lg-12 col-md-12">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <div className="follow_us_on">
                                <ul>
                                    <li>
                                        <a title="Facebook" >
                                            <i className="flat flaticon-facebook-logo"> </i>
                                        </a>
                                    </li>

                                    <li className="separator-pipesign white"> </li>

                                    <li>
                                        <a href="javascript:void(0)" title="Twitter" >
                                            <i className="flat flaticon-twitter"> </i>
                                        </a>
                                    </li>

                                    <li className="separator-pipesign white"> </li>

                                    <li>
                                        <a href="javascript:void(0)" title="Google" >
                                            <i className="flat flaticon-google-plus-logo"> </i>
                                        </a>
                                    </li>

                                    <li className="separator-pipesign white"> </li>

                                    <li>
                                        <a href="javascript:void(0)" title="Linkedin" >
                                            <i className="flat flaticon-linkedin-logo"> </i>
                                        </a>
                                    </li>

                                    <li className="separator-pipesign white"> </li>

                                    <li>
                                        <a href="javascript:void(0)" title="Instagram" >
                                            <i className="flat flaticon-instagram"> </i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mail-call">
                            <div className="mail-to">
                                <i className="flat flaticon-mail-black-envelope-symbol"> </i>info@bizler.com
                            </div>
                            <span className="separator-pipesign white"> </span>
                            <div className="call-on">
                                <i className="flat flaticon-phone-receiver"> </i>0123-456-789
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Topbar




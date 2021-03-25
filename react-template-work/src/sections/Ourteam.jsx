import React from "react";
import Teammember_card from "../components/Teammember_card";
import Sectionheader from "../components/Sectionheader";
import Buttonteam from "../components/Buttonteam";
import { Sdata, Heading_data } from "../Data/Home_Data";

const Ourteam = () => {
  return (
    <>
      <section id="our_team" className="index-3">
        <div className="container">
          <Sectionheader
            title1={Heading_data[0].title1}
            title2={Heading_data[0].title2}
            headingcontent={Heading_data[0].headingcontent}
          />
          <div className="col-lg-12 col-md-12 col-xs-12 content_sec">
            <div className="row">
            {Sdata.map((data)=>{
                const {pic,name,position,content} = data
                return(
                    <Teammember_card
                    key={pic}
                        pic={pic}
                        name={name}
                        position={position}
                        content={content}
                    />
                )
            })}

              <Buttonteam cname="view_more" link="javascript:void(0)" />
            </div>
          </div>
        </div>
        <div className="clearfix"></div>
      </section>
    </>
  );
};
export default Ourteam;

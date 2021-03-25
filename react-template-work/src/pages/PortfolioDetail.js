import React from 'react'
import ServiceDetail from "../components/ServiceDetailCard";
import ServicesContent from "../sections/ServicesContent";
import Counter from "../sections/Counter";
import OtherServices from "../sections/OtherServices";
import Banner from "../components/Banner"
import RecentProjects from "../sections/RecentProjects";
import PortfolioBanner from "../sections/PortfolioBanner";

export default function DetailedServices() {
  return (
    <>
      <div className="wraper">
         {/* <Banner /> */}
        <ServiceDetail heading="Portfolio"/>
        {/* <ServicesContent /> */}
        {/* <OtherServices />  */}
        <PortfolioBanner />
        <RecentProjects />
        <Counter />
      </div>
    </>
  );
}

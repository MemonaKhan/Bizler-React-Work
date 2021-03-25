import React from 'react'
import ServiceDetail from "../components/ServiceDetailCard";
import ServicesContent from "../sections/ServicesContent";
import Counter from "../sections/Counter";
import OtherServices from "../sections/OtherServices";
import Banner from "../components/Banner"

export default function DetailedServices() {
  return (
    <>
      <div className="wraper">
        <Banner />
        <ServiceDetail heading="Service" />
        <ServicesContent />
        <Counter />
        <OtherServices />
        
      </div>
    </>
  );
}

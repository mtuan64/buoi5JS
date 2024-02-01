import React from "react";
import Serviceitmes from "./serviceitmes";

const Services = () => {
  return (
    <section className="pt-4">
      <div className="container px-lg-5">
        <div className="row gx-lg-5">
        <Serviceitmes title="title1" description="des1"/>
        <Serviceitmes/>
        <Serviceitmes/>
        <Serviceitmes/>
        <Serviceitmes/>
        <Serviceitmes/>
        </div>
      </div>
    </section>
  );
};

export default Services;

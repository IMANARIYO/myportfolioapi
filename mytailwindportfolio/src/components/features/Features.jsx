import React from "react";
import Title from "../layouts/Title";
import Card from "./Card";
import { featuresData } from "../../data/data";
const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black  "
    >
      <div className="flex justify-center items-center text-center">
      <Title title="Features" des="What I Do" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20 p-8">
       
        {featuresData.map((item) => (
          <Card item={item} key={item.id} icon={item.icon} />
        ))}
      </div>
    </section>
  );
};

export default Features;

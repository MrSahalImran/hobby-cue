import React from "react";
import { CARDS_DETAILS as Info } from "@/constants";
import Card from "./components/Card";
import { ADD_OWN as add } from "@/constants";

const Features = () => {
  return (
    <section className="h-full">
      <div className="grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:px-20 md:grid-rows-2">
        {Info.map((card) => (
          <Card
            borderColor={card.borderColor}
            key={card.title}
            title={card.title}
            img={card.icon}
            content={card.content}
            btnTitle={card.button}
          />
        ))}
      </div>
      <div className=" md:px-20 my-28">
        <Card
          hoverAllowed={false}
          title={add.title}
          content={add.content}
          img={add.icon}
          btnTitle={add.button}
        />
      </div>
    </section>
  );
};

export default Features;

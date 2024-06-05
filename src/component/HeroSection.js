import React from "react";
import Header from "./Header";

const HeroSection = () => {
  return (
    <section className="bg-black text-pink-200 text-center pb-24">
      <Header />
      <div className="md:flex md:justify-between">
        <div className="md:w-[50%]">
        <h1 className="text-gradient text-2xl md:text-6xl py-12 font-bold">
          Every order fulfilled, on time.
        </h1>
        <p className="py-12 ml-2 md:text-xl">
          Eliminate overstocking and under-stocking with Crest. Built by
          supply-chain experts, it brings the same technology used by large
          global brands to power fast-growing startups. In short, we make supply
          meet demand, and then help you grow both.
        </p>
        </div>
      
        <div className="w-[50%] md:w-[30%] mb-8">
          <img src="./growth-image3.png" alt="" className="w-[100%] "></img>
        </div>
      </div>
      <div className="rounded-lg text-gradient border-gradient  border-4 w-[50%] md:w-[30%] ml-4 ">
        <button className="rounded-lg font-bold py-[5px] md:text-lg">
            Get Started with Crest
        </button>
      </div>
    </section>
  );
};

export default HeroSection;

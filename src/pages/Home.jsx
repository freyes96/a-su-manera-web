import React from "react";
import Hero from "../components/Hero";
import Carousel from "../components/Carousel";
import HeroButtons from "../components/HeroButtons";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="w-screen overflow-x-auto">
        <Carousel />
      </div>
      <HeroButtons />
    </div>
  );
}
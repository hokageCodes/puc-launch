"use client";
import React from "react";
import HeroSection from "./components/hero/HeroSection";
import SharedValues from "./components/shared-values/SharedValues";
import AboutSection from "./components/who-we-are/AboutSection";
import OurPracticeAreas from "./components/practice-areas/OurPracticeAreas";
import OurTeam from "./components/our-team/OurTeam";
import ParallaxSection from "./components/parallax-section/ParallaxSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
        <SharedValues />
        <OurPracticeAreas />
        <OurTeam/>
        <ParallaxSection />
    </div>
  );
}

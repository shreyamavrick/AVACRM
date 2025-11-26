// src/pages/home.jsx
import React from "react";
import Hero from "../components/home/herosection";
import LogoSection from "../components/home/logoSection";
import ComparisonSection from "../components/home/ComparisonSection";
import VerticalSlider from "../components/home/VerticalSlider";
import TestimonialSlider from "../components/home/TestimonialSlider";
import Features from "../components/home/Features";

export default function Home() {
  return (
    <main>
      <Hero />
      <LogoSection />
      <ComparisonSection />
      <VerticalSlider />
      <TestimonialSlider />
      <Features />
    </main>
  );
}

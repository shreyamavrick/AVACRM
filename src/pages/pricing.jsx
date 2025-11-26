// src/pages/home.jsx
import React from "react";
import Hero from "../components/pricing/herosection";
import PricingSection from "../components/pricing/PricingSection";
import ExpertHelpSection from "../components/pricing/expertHelp";

export default function Home() {
  return (
    <main>
      <Hero />
      <PricingSection />
      <ExpertHelpSection />
    </main>
  );
}

import React from "react";
import bannerImg from "../../assets/a.webp";

export default function HeroSection({ title = "How to Videos" }) {
  return (
    <section
      className="w-full h-[420px] md:h-[480px] bg-center bg-cover flex items-center justify-center"
      style={{  background:
          "linear-gradient(90deg, rgba(249,186,28,0.12) 25%, rgba(28,142,206,0.12) 100%)", }}
    >
     
      <div className="bg-black/60 px-10 py-6 rounded-md backdrop-blur-sm">
        <h1
          className="text-white text-center font-medium leading-tight"
          style={{ fontSize: "clamp(26px, 5vw, 60px)" }}
        >
          {title}
        </h1>
      </div>
    </section>
  );
}

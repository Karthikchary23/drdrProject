"use client";
import React, { useEffect } from "react";
import SplitText from "./Text";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1600, once: true });
  }, []);

  return (
    <section id="home" className="scroll-mt-28 pt-16">
      <div
        className="relative h-[92vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/Image1.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 flex flex-col justify-center items-start h-full px-10 text-white gap-6">
          <SplitText
            text="Welcome to Rovera"
            className="text-4xl md:text-5xl font-extrabold  drop-shadow-lg"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />

          <p
            className=" font-serif text-md md:text-xl max-w-3xl text-white/90 leading-relaxed "
            data-aos="fade-up"
          >
            Rovera is a pioneering company from India, focused on developing cutting-edge autonomous rovers for exploration, defense, and industrial automation.
          </p>

          <button
            className="px-6 py-3 border border-white text-white hover:bg-white hover:text-black transition duration-300 rounded-md font-semibold"
            onClick={() => {
              const el = document.getElementById("about");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          >
            GET STARTED
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;

"use client";
import React from "react";
import SplitText from "./Text";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1600, once: true });
  }, []);
  return (
    <section id="home" className="scroll-mt-28 pt-16">
      <div
        className="relative h-[92vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/home.png')" }}
      >
        <div className="absolute inset-0 bg-black opacity-10" />

        <div className="relative z-10 flex flex-col justify-center items-start h-full px-10 text-white gap-4">
          <SplitText
            text="Hello, GSAP!"
            className=" text-3xl md:text-5xl font-semibold text-center "
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            // onLetterAnimationComplete={handleAnimationComplete}
          />

          <p className="text-xl max-w-3xl" data-aos="fade-up">
            Revon Unmanned Systems is a company from India that specializes in
            drone technology...
          </p>
          <button className=" px-6 py-3 border-3 border-white opacity-70 hover:bg-white
           hover:text-black transition cursor-pointer rounded-md text-black font-bold ">
            GET STARTED
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;

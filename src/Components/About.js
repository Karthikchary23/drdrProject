import React from "react";
import Image from "next/image";
import SplitText from "./Text";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-[65vh] text-black scroll-mt-16 mt-5 mb-5"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 bg-white shadow-lg rounded-2xl overflow-hidden">
        <div className="pt-10 px-6 sm:px-10 md:px-16 lg:pt-20 lg:pl-20">
          <SplitText
            text="About Us!"
            className="text-3xl md:text-4xl font-semibold text-center text-black drop-shadow-2xl mb-6"
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
          <p className="text-sm sm:text-base leading-relaxed text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            cumque ad sequi saepe vero omnis esse similique asperiores labore
            ratione aut fugit harum placeat a, magni beatae id nihil explicabo!
            {/* You can shorten or split this into multiple paragraphs for better UX */}
          </p>
        </div>

       
        <div className="flex justify-center items-center p-6 lg:p-10">
          <Image
            src="/home.png"
            alt="about"
            width={800}
            height={500}
            className="w-full max-w-md sm:max-w-lg h-auto object-contain rounded-2xl"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default About;

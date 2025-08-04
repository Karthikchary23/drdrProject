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
        {/* Left Text Content */}
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

          <p className="text-sm sm:text-base leading-relaxed text-justify mb-4">
            <strong>DRDR Technologies Pvt. Ltd.</strong>, operating under the brand <strong>ROVERA</strong>, is a forward-thinking robotics company committed to developing intelligent, electric-powered, and autonomous ground mobility solutions. Our core mission is to empower small and marginal farmers, agri-entrepreneurs, and last-mile delivery operators through affordable and accessible robotic technology.
          </p>

          <p className="text-sm sm:text-base leading-relaxed text-justify mb-4">
            At ROVERA, we’re revolutionizing agriculture and logistics by engineering compact, AI-enabled rovers that tackle real-world challenges with precision and efficiency. From field automation to autonomous delivery, our solutions are crafted for impact across rural and urban India.
          </p>

          <ul className="list-disc ml-5 text-sm sm:text-base leading-relaxed mb-4">
            <li>
              <strong>Lightweight Multi-Purpose Agri Rover:</strong> Covers 30 acres/day, ideal for spraying, fertilizing, and laser-based weeding in large-scale farms or rental setups.
            </li>
            <li>
              <strong>Compact Autonomous Agri Rover:</strong> Optimized for small farms (up to 15 acres /day), supporting post-sowing tasks with AI-based automation.
            </li>
            <li>
              <strong>Delivery Rover:</strong> Built for last-mile logistics, equipped with 5G, obstacle detection, and traffic-aware navigation for rural and urban settings.
            </li>
          </ul>

          <p className="text-sm sm:text-base leading-relaxed text-justify">
            <strong>Our Vision:</strong> To democratize advanced robotics for rural India and beyond—boosting productivity, reducing manual labor, and creating data-driven agricultural and delivery ecosystems.
          </p>
        </div>

        
        <div className="flex justify-center items-center p-6 lg:p-10">
          <Image
            src="/Image2.jpg"
            alt="About ROVERA"
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

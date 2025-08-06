"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Slider from "react-slick";
import SplitText from "./Text";

const About = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };

  const carouselImages = [
    "/Image1.jpg",
    "/Image2.jpg",
    "/Image4.png",
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section id="about" className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Text Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={textVariants}
          className="space-y-8"
        >
          <SplitText
            text="About Rovera"
            className="text-3xl md:text-4xl font-semibold text-black"
            delay={100}
            duration={0.2}
            ease="power4.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
          />

          <div className="space-y-6">
            <p className="text-base md:text-lg text-gray-800 leading-relaxed">
              <span className="font-semibold text-blue-600">DRDR Technologies Pvt. Ltd.</span>, branded as <span className="font-bold">ROVERA</span>, pioneers AI-powered autonomous ground rovers. Our electric rovers revolutionize labor-intensive tasks in agriculture and delivery, delivering cost-effective, sustainable robotics solutions. We empower industries with intelligent automation that drives efficiency and innovation.
            </p>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Our Mission</h3>
              <p className="text-gray-700">
                To craft smart, affordable autonomous machines that simplify hazardous and tedious agricultural tasks, enabling practical, real-world impact.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Our Vision</h3>
              <p className="text-gray-700">
                To lead the future of autonomous ground robotics, transforming agriculture and logistics with sustainable, intelligent technologies that redefine efficiency.
              </p>
            </div>
          </div>
        </motion.div>

        
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full rounded-2xl overflow-hidden"
        >
          <Slider {...sliderSettings}>
            {carouselImages.map((src, index) => (
              <div key={index} className="relative aspect-[4/3] w-full">
                <Image
                  src={src}
                  alt={`Rovera Carousel ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-2xl"
                  priority={index === 0}
                />
                <div className="absolute bottom-4 left-4 text-white bg-black/40 px-3 py-1 rounded-md">
                  <p className="text-sm font-semibold">Rovera Autonomous Rover</p>
                  <p className="text-xs">Innovating Agriculture & Logistics</p>
                </div>
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

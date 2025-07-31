"use client"
import React from "react";
import { FaCogs, FaPaintBrush, FaMobileAlt } from "react-icons/fa";
import SplitText from "./Text";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const services = [
  {
    icon: <FaCogs className="text-4xl text-blue-600" />,
    title: "Custom Development",
    desc: "We provide scalable and reliable software solutions tailored to your business needs.",
  },
  {
    icon: <FaPaintBrush className="text-4xl text-green-600" />,
    title: "UI/UX Design",
    desc: "Our creative team designs intuitive and engaging user interfaces for all devices.",
  },
  {
    icon: <FaMobileAlt className="text-4xl text-purple-600" />,
    title: "Mobile Apps",
    desc: "Build modern, performant mobile applications for iOS and Android platforms.",
  },
];

const Services = () => {
  useEffect(() => {
      AOS.init({ duration: 1300, once: false });
    }, []);
  return (
    <section id="services" className="py-20 px-4 bg-gray-50 scroll-mt-20">
      <div className="text-center mb-16 relative">
        {/* <h2 className="text-[80px] font-extrabold text-black/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none whitespace-nowrap">
          Services
        </h2> */}
        <SplitText
          text="Our Services"
          className="relative text-5xl font-semibold text-black drop-shadow-2xl"
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
      </div>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;

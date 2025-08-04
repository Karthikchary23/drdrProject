"use client";
import React, { useEffect } from "react";
import { FaTruck, FaRobot, FaShoppingCart } from "react-icons/fa";
import SplitText from "./Text";
import AOS from "aos";
import "aos/dist/aos.css";

const services = [
  {
    icon: <FaRobot className="text-4xl text-blue-600" />,
    title: "Rental Services",
    desc: "Rent cutting-edge drones and automation robots for agriculture, surveillance, and industrial tasks.",
  },
  {
    icon: <FaShoppingCart className="text-4xl text-green-600" />,
    title: "Sales & Custom Solutions",
    desc: "Buy advanced drones, custom-built automation systems, and robotics tailored to your business.",
  },
  {
    icon: <FaTruck className="text-4xl text-purple-600" />,
    title: "Fast & Secure Delivery",
    desc: "We ensure prompt, safe, and reliable delivery of all rented or purchased tech to your doorstep.",
  },
];

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1300, once: false });
  }, []);

  return (
    <section id="services" className="py-20 px-4 bg-gray-50 scroll-mt-20">
      <div className="text-center mb-16 relative">
        <SplitText
          text="Our Services"
          className="relative text-3xl md:text-5xl font-semibold text-black drop-shadow-2xl"
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

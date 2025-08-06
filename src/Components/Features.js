"use client";
import React from "react";
import { FaRobot, FaSprayCan, FaLeaf, FaTruck } from "react-icons/fa"; // Updated icons
import SplitText from "./Text";

const features = [
  {
    title: "AI-Powered Navigation",
    icon: <FaRobot className="text-blue-600 text-4xl" />,
    description: "Smart pathfinding and obstacle avoidance for autonomous missions.",
  },
  {
    title: "Spraying",
    icon: <FaSprayCan className="text-blue-600 text-4xl" />,
    description: "Advanced spraying mechanism for agriculture and sanitation.",
  },
  {
    title: "Weeding",
    icon: <FaLeaf className="text-blue-600 text-4xl" />,
    description: "Eco-friendly automated weed control systems.",
  },
  {
    title: "Delivery Robot",
    icon: <FaTruck className="text-blue-600 text-4xl" />,
    description: "Autonomous delivery of food, medicine, and supplies using drones or robots.",
  },
];

const Features = () => {
  return (
    <section id="features" className="bg-white text-gray-900 px-6 py-20">
      <div className="max-w-7xl mx-auto text-center">
        <SplitText
          text="Features"
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
        <p className="text-gray-600 mb-12 text-sm md:text-lg">
          Experience cutting-edge technology designed for performance, precision, and reliability.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="hover:shadow-2xl transition-shadow duration-300 rounded-2xl p-6 shadow-md text-left bg-white"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-700 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

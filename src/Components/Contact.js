"use client";

import React, { useState } from "react";
import styled from "styled-components";
import SplitText from "./Text";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);
    formData.append("access_key", "d039f4de-d0ce-45dd-b388-253da397d7e1");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      setResult("✅ Message sent successfully ");
      event.target.reset();
    } else {
      setResult(`❌ ${data.message}`);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen px-4 py-16 bg-white text-black scroll-mt-20"
    >
      
      <div className="text-center mb-12">
        <SplitText
          text="Contact Us"
          className="text-4xl sm:text-5xl font-extrabold text-black"
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
        <div className="bg-white rounded-xl p-6 shadow-md text-center hover:shadow-xl transition-all">
          <div className="text-blue-600 text-3xl mb-4 flex justify-center">
            <FaMapMarkerAlt />
          </div>
          <h4 className="text-xl font-semibold mb-1">Our Address</h4>
          <p className="text-sm">Plot No 36, Pragati Colony, Meerpet, Hyderabad, 500097.</p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-md text-center hover:shadow-xl transition-all">
          <div className="text-blue-600 text-3xl mb-4 flex justify-center">
            <FaEnvelope />
          </div>
          <h4 className="text-xl font-semibold mb-1">Email Us</h4>
          <p className="text-sm text-blue-600">revonunmanned@gmail.com</p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-md text-center hover:shadow-xl transition-all">
          <div className="text-blue-600 text-3xl mb-4 flex justify-center">
            <FaPhoneAlt />
          </div>
          <h4 className="text-xl font-semibold mb-1">Call Us</h4>
          <p className="text-sm text-blue-600">+91 7780-661247</p>
          <p className="text-sm text-blue-600">+91 73969-44415</p>
        </div>
      </div>

      <StyledFormWrapper>
        <form className="form" onSubmit={onSubmit}>
          <input className="input" type="text" name="name" placeholder="Your Name" required />
          <input className="input" type="email" name="email" placeholder="Your Email" required />
          <input className="input" type="text" name="subject" placeholder="Subject" required />
          <textarea className="textarea" name="message" placeholder="Enter message" rows="5" required />
          <button type="submit" className="button">Send Message</button>
          <p className="status">{result}</p>
        </form>
      </StyledFormWrapper>
    </section>
  );
};

export default Contact;

const StyledFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;

  .form {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background: #ffffff;
    border: 1px solid #d1d5db;
    border-radius: 1.25rem;
    padding: 2rem;
    max-width: 600px;
    width: 100%;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
    z-index: 1;
  }

  .input,
  .textarea {
    width: 100%;
    padding: 12px 16px;
    border: 1px solid #cbd5e1;
    font-size: 1rem;
    border-radius: 8px;
    background-color: #f9fafb;
    color: #111827;
    transition: 0.3s ease;
  }

  .input::placeholder,
  .textarea::placeholder {
    color: #9ca3af;
  }

  .input:focus,
  .textarea:focus {
    border-color: #3b82f6;
    background-color: #ffffff;
    outline: none;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
  }

  .textarea {
    resize: vertical;
    min-height: 120px;
  }

  .button {
    align-self: center;
    font-size: 1rem;
    background: #3b82f6;
    color: white;
    padding: 0.75em 2em;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: 0.3s ease;
    box-shadow: 0 4px 10px rgba(59, 130, 246, 0.3);
  }

  .button:hover {
    background: white;
    color: #3b82f6;
    border: 2px solid #3b82f6;
  }

  .status {
    text-align: center;
    font-size: 0.9rem;
    color: #1f2937;
    margin-top: 0.5rem;
  }

  @media (max-width: 600px) {
    .form {
      padding: 1.5rem;
      width: 100%;
    }

    .button {
      width: 100%;
    }
  }
`;


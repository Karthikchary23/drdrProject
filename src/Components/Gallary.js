"use client";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import Image from "next/image";
import SplitText from "./Text";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";



const images = [
  "/home.png",
  "/home.png",
  "/home.png",
  "/home.png",
  "/home.png",
];

const Gallery = () => {
  
  useEffect(() => {
    AOS.init({ duration: 1300, once: false });
  }, []);
  return (
    <section id="gallery" className="min-h-screen bg-white py-10  scroll-mt-20">
      <div className="max-w-7xl mx-auto  rounded-2xl ">
       <div className="relative text-center">
  

  <SplitText
    text="Gallery"
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

        <PhotoProvider>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 md:px-10 py-10"data-aos="fade-up">
            {images.map((src, index) => (
              <PhotoView key={index} src={src}>
                <div className="relative w-full h-64 sm:h-72 md:h-80 cursor-pointer">
                  <Image
                    src={src}
                    alt={`Gallery Image ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-xl shadow-md hover:scale-105 transition-transform duration-300 ease-in-out"
                  />
                </div>
              </PhotoView>
            ))}
          </div>
        </PhotoProvider>
      </div>
    </section>
  );
};

export default Gallery;

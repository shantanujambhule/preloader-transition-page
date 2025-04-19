import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const Loading = ({ onComplete }) => {
  const images = ["grid-2.png", "grid-3.png", "grid-4.png", "grid-7.png", "grid-8.png"];
  const imagesRef = useRef([]);
  const [isVisible, setIsVisible] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    // Preload all images
    let loadedCount = 0;
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === images.length) {
          setImagesLoaded(true); // Start animation only after all images load
        }
      };
    });
  }, []);

  useEffect(() => {
    if (!imagesLoaded) return;

    let currentIndex = 0;
    let cycleCount = 0;
    const totalCycles = images.length; // Ensure every image appears once

    const showNextImage = () => {
      gsap.to(imagesRef.current[currentIndex], {
        opacity: 0,
        duration: 0.05, // Faster transition
        onComplete: () => {
          currentIndex = (currentIndex + 1) % images.length;
          if (currentIndex === 0) cycleCount++;

          gsap.to(imagesRef.current[currentIndex], {
            opacity: 1,
            duration: 0.05,
          });

          // Hide loading screen after one full cycle
          if (cycleCount >= totalCycles) {
            setTimeout(() => {
              setIsVisible(false);
              if (onComplete) onComplete();
            }, 30);
          }
        },
      });
    };

    const interval = setInterval(showNextImage, 100); // Reduce interval for faster cycling

    return () => clearInterval(interval);
  }, [imagesLoaded]);

  if (!isVisible) return null; // Hide component after loading

  return (
    <div className="w-screen h-screen bg-black flex justify-center items-center overflow-hidden">
      <div className="relative w-32 h-32 flex justify-center items-center">
        {images.map((src, index) => (
          <img
            key={index}
            ref={(el) => (imagesRef.current[index] = el)}
            src={src}
            alt=""
            className={`w-12 h-12 absolute object-cover ${index === 0 ? "opacity-1" : "opacity-0"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Loading;

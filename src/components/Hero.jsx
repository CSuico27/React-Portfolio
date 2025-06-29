import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Fire from "../assets/fire.png";

const Hero = () => {
  const heroRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, y: 0 },
      { opacity: 1, y: 0, duration: 2, delay: 0.1 }
    );
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center text-[#1a1a1a] text-5xl font-geist bg-[linear-gradient(to_bottom,rgba(239,208,206,1)_0%,rgba(255,255,255,1)_40%)] opacity-0"
    >
    {/* {children} */}
      <div className="font-bold flex flex-col justify-center items-center">
        <h1 className="text-2xl md:text-4xl lg:text-5xl flex flex-row">
            Explore my work 
            <img
                src={Fire}
                alt="Fire"
                className="w-10 h-10 md:w-20 md:h-20 "
            />
            <div>and</div>
        </h1>
        <h1 className="text-2xl md:text-4xl lg:text-5xl">
            learn about my journey into
        </h1>
        <h1 className="bg-[#ec6069] p-4 rounded-2xl transition duration-150 -rotate-y-20 hover:rotate-x-10 mt-3 text-2xl md:text-4xl lg:text-5xl">
            web development
        </h1>
      </div>
    </section>
  );
};

export default Hero;

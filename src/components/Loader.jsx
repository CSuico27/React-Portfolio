import React, { useEffect, useState } from "react";
import { gsap } from "gsap";

const loadingTexts = ["Hello", "Hola", "Kamusta", "Ciao", "Bonjour", "Olá", "Guten tag!"];

const Loader = ({ onComplete }) => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index++;
      setStep(index);

      if (index === loadingTexts.length - 1) {
        clearInterval(interval);
        gsap.to(".loader", {
          opacity: 0,
          duration: 1,
          onComplete: onComplete,
        });
      }
    }, 300); 
  }, []);

  return (
    <div className=" font-geist loader fixed inset-0 bg-[#0d0d0d] text-white flex items-center justify-center text-4xl font-bold z-50">
      {loadingTexts[step]}
    </div>
  );
};

export default Loader;

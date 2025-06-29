import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { tech } from './styles';

gsap.registerPlugin(ScrollTrigger);


const About = () => {
  const aboutRef = useRef(null);
  const leftLinesRef = useRef([]);
  const rightLinesRef = useRef([]);
  const containerRef = useRef(null);
  const imageRefs = useRef([]);
  imageRefs.current = [];
  
  //images scroll loop
  useEffect(() => {
  const ctx = gsap.context(() => {
  const gallery = document.querySelector(".tech-gallery");
  const totalWidth = gallery.scrollWidth / 3 ; 

  gsap.set(gallery, { x: 0 });

  gsap.to(gallery, {
    x: `-=${totalWidth}`,
    duration: 30,
    ease: "linear",
    repeat: -1,
    modifiers: {
      x: gsap.utils.unitize(x => parseFloat(x) % totalWidth, 'px'),
    },
  });
  }, containerRef);

  return () => ctx.revert();
  }, []);

  //columns
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(leftLinesRef.current, {
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top top 80%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        x: -58,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
      });

      gsap.from(rightLinesRef.current, {
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "center 80%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        x: 50,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        delay: 0.2,
      });
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  //images scroll
//   useEffect(() => {
//   const ctx = gsap.context(() => {
//     gsap.to(".tech-gallery", {
//       xPercent: -30, 
//       ease: "none",
//       scrollTrigger: {
//         trigger: ".tech-gallery",
//         start: "top bottom",     
//         end: "bottom top",   
//         scrub: true,  
//         repeat: -1       
//       },
//     });
//   });

//   return () => ctx.revert();
// }, []);

  return (
    <section
    id="about"
      ref={aboutRef}
      className="h-[200vh] bg-[#0d0d0d] w-full flex justify-center items-center"
    >
      <div className="bg-[#eee9e5] rounded-3xl w-[95%] h-[80%] grid grid-cols-1 md:grid-cols-2 ">
        {/* Left Column */}
        <div className="flex flex-col justify-center items-center gap-4 ">
          <div className="font-apple text-6xl md:text-[115px] flex flex-col items-start">
            <div ref={(el) => (leftLinesRef.current[0] = el)}>Web Dev</div>
            <div ref={(el) => (leftLinesRef.current[1] = el)}>& Design</div>
          </div>
          <div className="text-[22px] md:text-[24px] font-geist font-light ml-34 flex flex-col items-start">
            <div ref={(el) => (leftLinesRef.current[2] = el)}>Hello! My Name is Cielo Mae Suico</div>
            <div ref={(el) => (leftLinesRef.current[3] = el)}>A Web Developer based from Philippines.</div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex justify-center items-center">
          <div className="text-[22px] md:text-2xl max-w-[80%] font-geist font-light flex flex-col gap-4 text-justify mt-32">
            <p ref={(el) => (rightLinesRef.current[0] = el)}>
              I am a passionate web developer with a strong foundation in
              HTML, CSS, JavaScript, and modern libraries and frameworks like Laravel, React.js, and Tailwind CSS.
            </p>
            <p ref={(el) => (rightLinesRef.current[1] = el)}>
              I am eager to learn, improve my skills, and take on new tasks that will make me a more versatile and effective developer,
              capable of building meaningful and user-centered web solutions.
            </p>
          </div>
        </div>
         {/* Bottom Centered Div */}
        <div ref={containerRef} className="col-span-1 md:col-span-2 grid grid-cols-2 justify-center items-end rounded-b-3xl w-full overflow-hidden">
            <div className="tech-gallery text-center font-geist text-sm md:text-lg text-[#0d0d0d] w-full flex flex-row gap-4">
              {[...tech, ...tech, ...tech].map((img, index) => (
                <img
                  key={index}
                  ref={(el) => (imageRefs.current[index] = el)}
                  src={img.src}
                  alt={img.alt}
                  className="rounded-lg shadow-xl "
                />
              ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;

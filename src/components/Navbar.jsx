import React, { useEffect, useRef, useState } from 'react';
import { navLinks } from './styles' 
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin"; 
import { SplitText } from 'gsap/SplitText';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

gsap.registerPlugin(SplitText, ScrollToPlugin); 

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false); 
  const [scrolled, setScrolled] = useState(false); 

  const itemRef = useRef(null);
  const activeItemRef = useRef(null);
  const navRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []); 

  // cielo hover animation
  useEffect(() => {
    if (!itemRef.current || !activeItemRef.current) return;

    gsap.set(itemRef.current, { yPercent: 0 });
    gsap.set(activeItemRef.current, { yPercent: 100 });

    const handleMouseEnter = () => {
      gsap.to(itemRef.current, {
        yPercent: -100,
        duration: 0.3,
        ease: 'sine.inOut',
      });
      gsap.to(activeItemRef.current, {
        yPercent: -100,
        duration: 0.3,
        ease: 'sine.inOut',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(itemRef.current, {
        yPercent: 0,
        duration: 0.3,
        ease: 'sine.inOut',
      });
      gsap.to(activeItemRef.current, {
        yPercent: 100,
        duration: 0.3,
        ease: 'sine.inOut',
      });
    };

    const logoArea = itemRef.current.parentElement;
    if (logoArea) { 
      logoArea.addEventListener('mouseenter', handleMouseEnter);
      logoArea.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (logoArea) {
        logoArea.removeEventListener('mouseenter', handleMouseEnter);
        logoArea.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []); 

  useEffect(() => {
    if (navRef.current) { 
      gsap.fromTo(
        navRef.current,
        { opacity: 0, y: 0 },
        { opacity: 1, y: 0, duration: 1, delay: 0.1 }
      );
    }
  }, []); 

  const handleSmoothScroll = (event, id) => {
    event.preventDefault(); 
    setActive(id); 

    const fixedNavbarHeight = 70; 

    gsap.to(window, {
      duration: 0.8,
      scrollTo: {
        y: `#${id}`,
        offset: fixedNavbarHeight 
      },
      ease: 'power2.out'
    });

    setToggle(false);
  };

  return (
    <section className="flex justify-center items-center">
      <nav
        ref={navRef}
        className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[90%] h-18 text-white flex justify-between items-center px-4 mix-blend-difference
          ${scrolled ? "bg-primary-dark" : "bg-transparent"}
        `}
      >
        <Link
          to="/" 
          className="text-2xl flex flex-col items-center justify-center h-[20px] overflow-hidden p-4 cursor-pointer"
          onClick={() => {
            setActive("");
           
            gsap.to(window, {
                duration: 0.8, 
                scrollTo: 0, 
                ease: 'power2.out'
            });
          }}
        >
          <span ref={itemRef} className="menu-item mt-8">CIELO.</span>
          <span ref={activeItemRef} aria-hidden="true">CIELO.</span>
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex md:flex-row">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${active === nav.title ? "text-white" : "text-secondary"} rounded-xl m-3 text-[18px] font-medium cursor-pointer`}
              onClick={(e) => handleSmoothScroll(e, nav.id)}
            >
              <a>{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* Toggle Button (Mobile only) */}
        <div className="sm:hidden px-4">
          {toggle ? (
            <XMarkIcon
              className="w-7 h-7 cursor-pointer text-white"
              onClick={() => setToggle(false)}
            />
          ) : (
            <Bars3Icon
              className="w-7 h-7 cursor-pointer text-white"
              onClick={() => setToggle(true)}
            />
          )}
        </div>

        {/* Mobile Menu */}
        {toggle && (
          <div className="absolute top-20 left-0 w-full sm:hidden p-6 z-40">
            <ul className="flex flex-col items-center gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] pl-4 ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={(e) => handleSmoothScroll(e, nav.id)}
                >
                  <a>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </section>
  );
};

export default Navbar;
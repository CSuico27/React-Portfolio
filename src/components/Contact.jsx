import React from 'react';
import { ArrowDownRightIcon } from '@heroicons/react/16/solid';

const Contact = () => {
  return (
    <section id="contact" className="bg-[#eee9e5] min-h-screen flex items-center justify-center py-10">
      <div className="bg-[#0d0d0d] w-[95%] max-w-7xl h-auto min-h-[70vh] rounded-3xl p-8 md:p-12 flex flex-col items-start"> 
        <h1 className="font-apple text-4xl md:text-5xl lg:text-6xl text-white mb-8 w-full">
          Get in touch.
        </h1>
        {/* 3 column content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 w-full max-w-5xl text-geist text-lg md:text-xl lg:text-2xl text-[#595959] text-left">
            <div className="flex flex-col items-start text-left">
                <h3 className="font-semibold text-[#595959] mb-2">Let's start a conversation</h3>
                <a
                href="mailto:cm.suico15@gmail.com"
                className="text-[#c3bcb4] underline"
                >
                cm.suico15@gmail.com
                </a>
            </div>
            <div className="flex flex-col items-start text-left">
                <h3 className="font-semibold text-[#595959] mb-2">Based in</h3>
                <span className="text-[#f5f5f5]">
                Atimonan, Quezon, Philippines
                </span>
            </div>
            <div className="flex flex-col items-start text-left">
                <h3 className="font-semibold text-[#595959] mb-2">Socials</h3>
                <div className="flex flex-col space-y-2">
                <a
                    href="https://www.linkedin.com/in/cielo-mae-suico-4829a6291/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline-animation"
                >
                    LinkedIn
                    <ArrowDownRightIcon className="size-5 arrow-animate" />
                </a>
                <a
                    href="https://github.com/CSuico27"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline-animation"
                >
                    GitHub
                    <ArrowDownRightIcon className="size-5 arrow-animate" /> 
                </a>
                {/* <a
                    href="mailto:cm.suico15@gmail.com"
                    className="underline-animation"
                >
                    Email
                    <ArrowDownRightIcon className="size-5 arrow-animate" /> 
                </a> */}
                </div>
            </div>
        </div>

        {/* Horizontal Line */}
        <div className="border-b border-[#595959] w-full mt-12 mb-6"></div>

        <div className="text-[#595959] text-sm md:text-base w-full">
          All rights reserved &copy; {new Date().getFullYear()}
        </div>
      </div>
    </section>
  );
};

export default Contact;
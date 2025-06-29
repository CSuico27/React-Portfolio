import React from 'react';
import { ArrowUpRightIcon } from '@heroicons/react/16/solid';
import { projects } from "./styles"

const Experience = () => {
  return (
    <section id="experience" className="min-h-screen bg-[#0d0d0d] flex justify-center items-center p-8 font-geist">
      <div className="w-full max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-items-center">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group relative w-full max-w-md rounded-3xl overflow-hidden shadow-lg"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto rounded-3xl transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-between items-end p-4 rounded-3xl">
                <span className=" text-white text-sm font-medium flex flex-col items-start">
                  {project.title} <span className="text-[10px]">{project.date}</span>
                </span>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <ArrowUpRightIcon className="size-5 text-white" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

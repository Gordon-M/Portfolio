"use client";

import React, { useState } from "react";


export default function ProjectCard({imgsrc, altText, title, description}) {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div>
          <div className="cursor-default hover:cursor-pointer group">
            <div className="font-normal group-hover:font-bold">
            <div className="relative">
              <div className="z-10 h-72 w-96 "
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <img 
                  className="relative group-hover:scale-105  w-64 h-64 object-fit" 
                  src={imgsrc} 
                  alt={altText}
                />
              </div>
            </div>
              <h1 className="text-white pt-2 text-xl">{title}</h1>
            </div>
            <p className="max-w-md text-base text-white">{description}</p>
          </div>
        </div>
    );
}
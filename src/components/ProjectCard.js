"use client";

import React, { useState } from "react";

function ShowHead({hovering}) {
    if(hovering) {
        return <img className="h-16 w-18 -rotate-45 absolute transform translate-x-1 translate-y-60"
        /* hover: translate-y-64 transition-transform duration-500 ease-in-out" */
        src="turtle_head.png" alt="turtle_head.png"/>
  ;
    }
    return <img className="h-16 w-18 -rotate-45 absolute transform translate-x-1 translate-y-48" 
    src="turtle_head.png" alt="turtle_head.png"/>;
;
}


export default function ProjectCard({imgsrc, altText, title, description}) {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div>
          <div className="cursor-default hover:cursor-pointer">
            <div className="font-normal hover:font-bold">
            <div className="relative">
              <ShowHead hovering={isHovered}/>
              <div className="z-10 h-72 w-96 rounded-tl-full rounded-tr-full overflow-hidden  hover:rotate-12"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <img className="relative hover: scale-80 w-full h-full object-fit" src={imgsrc} alt={altText}/>
              </div>
            </div>
              <h1 className="text-white pt-2 text-xl">{title}</h1>
            </div>
            <p className="max-w-md text-base text-slate-700">{description}</p>
          </div>
        </div>
    );
}
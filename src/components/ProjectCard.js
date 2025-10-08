"use client";

import React from "react";


export default function ProjectCard({imgsrc, altText, title, description}) {
    return (
        <div>
          <div className="flex flex-col max-w-xs w-full cursor-default hover:cursor-pointer group">
            <div className="font-normal group-hover:font-bold">
            <div className="flex justify-center">
                <img 
                  className="h-64 group-hover:scale-105" 
                  src={imgsrc} 
                  alt={altText}
                />
            </div>
              <h1 className="text-gray-200 pt-2 text-xl">{title}</h1>
            </div>
            <p className="max-w-md text-base text-white text-wrap">{description}</p>
          </div>
        </div>
    );
}
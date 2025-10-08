import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  return (
    <main className="p-10 pl-16 bg-gray-900"> 
      <Header/>
      <div className="flex flex-wrap justify-center gap-20 pb-20">
        <a target="_blank" href="https://www.daplab.education.uci.edu/">
          <ProjectCard 
            imgsrc="daplab_logo.png" 
            altText="graph" 
            title="Design and Partnership Lab" 
            description = "Worked in cross-team collaboration"/>
        </a>

        <a target="_blank" href="https://github.com/LexTruong/ZotterMeals">
          <ProjectCard 
            imgsrc="phone.png" 
            altText="phone" 
            title="ZotterMeals" 
            description = "Mobile calorie tracking app integrated with UCI dining information with ReactNative, JS, and, Expo"/>
        </a>

        <a target="_blank" href="https://devpost.com/software/quick-release-pit-stop">
          <ProjectCard 
            imgsrc="graph.png" 
            altText="graph" 
            title="Quick Release Pit Stop" 
            description = "Organized and visualized data through pandas, plot.ly, and seaborn to identify points of interest."/>
        </a>
      </div>      
      <Footer/>
    </main>
  );
}

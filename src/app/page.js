import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  return (
    <main className="p-10 pl-16 bg-gradient-to-b from-teal-400 via-cyan-500 to-blue-600"> 
      <Header/>
      <div className="flex flex-row place-content-center gap-20 pb-20 flex-wrap">
        <a href="https://github.com/LexTruong/ZotterMeals">
          <ProjectCard 
            imgsrc="phone.png" 
            altText="phone" 
            title="ZotterMeals" 
            description = "Mobile calorie tracking app integrated with UCI dining information with ReactNative, JS, and, Expo"/>
        </a>

        <a href="https://devpost.com/software/quick-release-pit-stop">
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

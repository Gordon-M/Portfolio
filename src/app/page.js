import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  return (
    <main className="p-12 min-h-screen bg-gray-900"> 
      <Header/>
      <div className="flex flex-wrap justify-center gap-28 pb-10">
        <a target="_blank" href="https://www.daplab.education.uci.edu/">
          <ProjectCard 
            imgsrc="daplab_logo.png" 
            altText="daplab" 
            title="Design and Partnership Lab" 
            description = "Creating educational tools that support student learning"/>
        </a>

        <a target="_blank" href="https://github.com/LexTruong/ZotterMeals">
          <ProjectCard 
            imgsrc="phone.png" 
            altText="phone" 
            title="ZotterMeals" 
            description = "Mobile calorie tracking app displaying real-time UCI dining information"/>
        </a>

        <a target="_blank" href="https://devpost.com/software/quick-release-pit-stop">
          <ProjectCard 
            imgsrc="graph.png" 
            altText="graph" 
            title="Quick Release Pit Stop" 
            description = "Data visualization project analyzing automotive performance"/>
        </a>

        <a target="_blank" href="https://github.com/LexTruong/ucforum">
          <ProjectCard 
            imgsrc="forum_website.png" 
            altText="forum" 
            title="UC Forum" 
            description = "Collaborative news website for posting and commenting"/>
        </a>
      </div>      
      <Footer/>
    </main>
  );
}

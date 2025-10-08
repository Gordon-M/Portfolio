export default function Header() {
    return (
        <header>
          <h1 className="text-teal-400 text-left p-6 pt-8 font-bold font-serif text-6xl">Gordon Ma</h1>
          <div className="pl-6 pb-8">
            <p className="text-lg text-white">
              Hi! I'm a computer science student at UC Irvine who loves turning ideas into interactive applications.
              I'm passionate about collaboration and am always looking for new opportunities to learn from real-world challenges.     
            </p>
          </div>
                <div className="flex flex-row space-x-8 pl-6">
          <a target="_blank" href="https://www.linkedin.com/in/gordon-ma8/">
            <img 
              className="hover:scale-105 h-12 w-12 cursor-default hover:cursor-pointer" 
              src="linkedin.png" 
              alt="linkedin"/>
          </a> 
          <a target="_blank" href="https://github.com/Gordon-M">
            <img 
              className="hover:scale-105 h-12 w-12 cursor-default hover:cursor-pointer" 
              src="github.png" 
              alt="github"/>
          </a>
        </div>
        <h1 className="pb-6 text-white font-sans text-center italic font-semi-bold text-3xl">
          Projects
        </h1>
      </header>
    )
}
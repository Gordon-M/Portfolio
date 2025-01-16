export default function Footer() {
    return (
        <footer>
        <div className="flex flex-row space-x-8 pl-6">
        <a href="https://www.linkedin.com/in/gordon-ma8/">
          <img className="hover:scale-105 h-12 w-12 cursor-default hover:cursor-pointer" src="linkedin.png" alt="linkedin"/>
        </a> 
        <a href="https://github.com/Gordon-M">
          <img className="hover:scale-105 h-12 w-12 cursor-default hover:cursor-pointer" src="github.png" alt="github"/>
        </a>
      </div>
        </footer>
    )
}
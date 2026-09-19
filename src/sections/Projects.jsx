import { ArrowUpRight } from "lucide-react"
import {FaGithub} from "react-icons/fa"
import {AnimatedBorderButton} from "../components/AnimatedBorderButton"

const projects =[
  {
    title:"Airbnb Clone",
    description:`A full-stack Airbnb clone built with Node.js, Express, MongoDB, and EJS — featuring user authentication, 
    host/guest roles, property listings, favourites, and a responsive UI inspired by Airbnb's real design`,
    image:"/images/airbnb.png",
    tags:['HTML',"Tailwind CSS","Javascript","React","NodeJS","ExpressJS","MongoDB"],
    link:"https://airbnb-clone-b0yt.onrender.com",
    github:"https://github.com/Harsh16-byte/Airbnb-Clone",
  },
  {
    title:"Currency converter",
    description:`A real-time currency converter built with HTML, Tailwind CSS, and JavaScript. It fetches live exchange rates using the Currency API 
    and displays country flags for a clean, intuitive user experience`,
    image:"/images/currencyConverter.png",
    tags:['HTML',"Tailwind CSS","Javascript"],
    link:"https://storied-basbousa-08a338.netlify.app",
    github:"https://github.com/Harsh16-byte/Currency-converter",
  },
  {
    title:"Weather App",
    description:`A responsive weather app built with React that fetches real-time weather data using the OpenWeatherMap API, letting users search any city and instantly view current conditions`,
    image:"/images/weather.png",
    tags:['HTML',"Tailwind CSS","Javascript","React"],
    link:"https://weather-application-harsh.netlify.app",
    github:"https://github.com/Harsh16-byte/Weather-App",
  },
]

export const Projects =()=>{   
  return( 
  <section id="projects"className="py-15 relative overflow-hidden">    
    {/* bg glow */}
    <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
    <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
    <div className="container mx-auto px-6 relative z-10"> 
      {/* secttion header*/}
      <div className="text-center mx-auto max-w-3xl mb-16">
        <span className="text-teal-400 tracking-wider uppercase animate-fade-in">Featured Work</span>
        <h1 className="text-3xl md:text-4xl font-bold mt-6 mb-6 animate-fade-in text-teal-500">Projects that<span className="font-serif italic font-normal text-white"> make an impact</span></h1>
        <p className="text-gray-300 animate-fade-in">A selection of my recent works, from complex web applications to innovative tools that solve real world problems</p>          
      </div>
      {/* projects grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project,idx)=>(
          <div key={idx} className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1">
            {/* image  */}
            <div className="relative overflow-hidden aspect-video">  
              <img src={project.image} alt={project.title} className="w-full h-full object-fill transition-transform duration-700 cursor-pointer  group-hover:scale-110"/>
              {/* overlay links */}
              <div className="absolute inset-0 flex items-center justify-center gap-8 opacity-0 group-hover:opacity-100">
                <a href={project.link} className="p-3 rounded-full glass hover:bg-primary " target="_blank" rel="noopener noreferrer"><ArrowUpRight className="w-5 h-5"/> </a>
                <a href={project.link} className="p-3 rounded-full glass hover:bg-primary " target="_blank" rel="noopener noreferrer"><FaGithub className="w-5 h-5"/></a>
              </div>
            </div>
            {/* content */}
            <div className="p-6 space-y-4">
              <div className="flex items-start justify-between">
                <h2 className="font-semibold group-hover:text-primary transition-colors">{project.title}</h2>
              </div>
              <p className="text-sm text-gray-300">{project.description}</p>
              <div className="text-sm text-gray-400 gap-2 flex flex-wrap">{project.tags.map((tag,idx)=>(
                <span>{tag}</span>
              ))} </div>
            </div>
          </div>    
        ))}  
      </div>
      {/* all projects button*/}
      <div className="mt-12 justify-center flex items-center">
        <a href="https://github.com/Harsh16-byte?tab=repositories" rel="noopener noreferrer">
        <AnimatedBorderButton >View All Projects</AnimatedBorderButton>
        </a>        
      </div>
    </div>
  </section>
  )
}
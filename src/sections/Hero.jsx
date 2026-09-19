import { ArrowRight, Download} from "lucide-react"
import {FaGithub} from "react-icons/fa"
import { Button } from "../components/Button"
import { AnimatedBorderButton} from "../components/AnimatedBorderButton"
import { DiNodejs,DiHtml5,DiReact,DiPython,} from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandJavascript } from "react-icons/tb";
import { SiMongodb,SiExpress,SiC,SiCplusplus} from "react-icons/si";

const skills =[
  {icon:DiHtml5, link:"https://developer.mozilla.org/en-US/docs/Web/HTML"},
  {icon:RiTailwindCssFill, link:"https://tailwindcss.com"},{icon:TbBrandJavascript, link:"https://developer.mozilla.org/en-US/docs/Web/JavaScript"},
  {icon:DiReact,link:"https://react.dev"},{icon:DiNodejs,link:"https://nodejs.org"},
  {icon:SiExpress, link:"https://expressjs.com"},
  {icon:SiMongodb, link:"https://www.mongodb.com"},{icon:DiPython, link:"https://www.python.org"},
  {icon:SiC, link:"https://en.wikipedia.org/wiki/C_(programming_language)"},{icon:SiCplusplus, link:"https://isocpp.org"}
]

export const Hero =()=>{
  return (
  <section className="relative min-h-screen flex-col justify-center overflow-hidden">
    {/*bg */}
    <div className="absolute inset-0">
      <img src="/images/hero-bg.jpg" alt="Hero image"className="w-full h-full object-cover opacity-40"/>
    <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background"/>
    </div>

    {/* jugnu animation below*/}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(30)].map((_,i)=>(
        <div className="absolute w-1.5 h-1.5 rounded-full opacity-60"
        style={{
          backgroundColor: "#ffffff",
          left: `${Math.random()*100}%`,
          top:`${Math.random()*100}%`,
          animation:`slow-drift ${15+Math.random()*20}s ease-in-out infinite`,
          animationDelay:`${Math.random()*5}s`,
        }}
        />
      ))}
    </div>
    
    {/*Content*/}
    <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left column text content*/}
        <div className="space-y-8">
          <div className="animate-fade-in">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"/>Full Stack Developer
          </span>
          </div>
          {/*headline below */}
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight animate-fade-in">
            Crafting <span className="text-primary glow-text">Websites</span><br/>People Love to<br/>
            <span className="font-serif italic font-normal text-white">Use</span>
          </h1>
          <p className="text-lg max-w-lg text-gray-300"> Full Stack Developer passionate about building simple, functional, and user-friendly web 
          experiences</p>
        

          {/*CTAs*/}
          <div className="flex flex-wrap gap-4 animate-fade-in">
            <Button size="lg">Contact Me <ArrowRight className="w-5 h-5"/></Button>
            <AnimatedBorderButton><Download className="w-5 h-5"/>Download CV</AnimatedBorderButton>
          </div>
          {/*social links */}
          <div className="flex items-center animate-fade-in gap-3">
            <span className="text-gray-300 mb-4 ">Connect with me:</span>
            {[{icon:FaGithub,href:"https://github.com/Harsh16-byte"}].map((social,idx)=>(
              <a className="p-2 rounded-full glass hover:bg-primary/10 mb-4 hover:text-primary transition-all duration-300" href="https://github.com/Harsh16-byte">
                {<social.icon className="w-5 h-5"/>}</a>
            ))}
          </div>
        </div>          
      
        {/* right column-pfp*/}
        <div className="relative animate-fade-in">
          {/* pfp*/}
          <div className="relative max-w-md mx-auto">
            <div className="relative glass rounded-3xl p-2 glow-border">
              <img src="/images/pfp2.png"alt="Harshwardhan" className="w-full aspect-[4/5] object-cover rounded-2xl"/>
              {/* flating badge*/}
              <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-300 rounded-full animate-pulse"/>
                  <span className="text-sm font-medium">Available for work</span>
                </div>
              </div>
              {/* stats badge*/}
              <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float">
                <div className="text-2xl font-bold text-primary">5+</div>
                <div className="text-sm">Projects</div>
                </div>            
            </div>
          </div>        
        </div>
        </div>
      </div>
    {/*skills section*/}
    <div className="mt-20 animate-fade-in">
      <p className="text-xl text-pretty text-center mb-6">Technologies I work with</p>
      <div className="relative overflow-hidden">
        <div className="flex animate-marquee">{[...skills,...skills].map((skills,idx)=>(
          <a key={idx} href={skills.link} target="_blank" rel="noopener noreferrer" className="flex-shrink-0 px-6 py-4 ">
            {/* <span className="font-semibold text-gray-300 hover:text-white">{skills}</span> */}
            <skills.icon className="w-8 h-8 text-gray-300 hover:text-white"/>
          </a>
        ))}
        </div>
      </div>

    </div>
  </section>
  )
}
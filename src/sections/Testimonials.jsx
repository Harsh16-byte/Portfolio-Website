import { GoPin } from "react-icons/go";
import {ChevronLeft,ChevronRight} from "lucide-react"
import { useState } from "react";

const testimonials = [
  {
    name: "Uma North",
    occupation: "Frontend Developer",
    avatar: "/images/commatoz.jpg",
    quote: "Harshwardhan is incredibly dedicated and writes clean, efficient code. A pleasure to work with!"
  },
  {
    name: "Mia Khalifa",
    occupation: "Project Mentor",
    avatar: "/images/mia.jpg",
    quote: "His attention to detail and problem-solving skills stand out. Always delivers beyond expectations."
  },
  {
    name: "Sunny leone",
    occupation: "UI/UX Designer",
    avatar: "/images/sunny.jpg",
    quote: "Great collaborator — turns designs into pixel-perfect, functional websites effortlessly."
  },
  {
    name: "Johnny Sins",
    occupation: "Full Stack Developer",
    avatar: "/images/johnny.webp",
    quote: "Harshwardhan's passion for learning and building shows in every project he takes on."
  },
]

export const Testimonials =()=>{
  const [activeIdx,setActiveIndex] = useState(0);
  const next =()=>{
    setActiveIndex((prev)=>(prev+1) % testimonials.length)
  }
  const previous = ()=>{
    setActiveIndex((prev)=>(prev-1 + testimonials.length) % testimonials.length)
  }
  return (
    <section id="testimonials"className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"/>
        <div className="container mx-auto px-6 relative z-10 text-center">
        <span className="text-teal-400 tracking-wider uppercase animate-fade-in text-center">What People Say</span>
        <h1 className="text-3xl md:text-4xl font-bold mt-6 mb-6 animate-fade-in text-teal-500">Kinds words from<span className="font-serif italic font-normal text-white"> amazing people</span></h1>
        </div>
        {/* testimonials */}
        <div className=" max-w-4xl mx-auto">
          <div className="relative">
            {/* main testimonials */}
            <div className="glass p-5 rounded-2xl md:p-8 glow-border animate-fade-in ">
              <div className="absolute -top-4 left-1 animate-fade-in">
                <GoPin className="h-6 w-6" />
              </div>
              <blockquote className="md:text-xl leading-relaxed mb-4 pt-2">"{testimonials[activeIdx].quote}"</blockquote>
              <div className=" flex items-center gap-4"> <img className="h-14 w-14 rounded-full object-cover ring-2 ring-pink-400/20"  src={testimonials[activeIdx].avatar}/>
                <div>
                  <div className="font-semibold">{testimonials[activeIdx].name}</div>
                  <div className="text-sm text-gray-300">{testimonials[activeIdx].occupation}</div>
                </div>
              </div>
            </div>
          </div>
          {/* testimonial navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all" onClick={previous}><ChevronLeft/></button>
            <div className="flex gap-2">
            {testimonials.map((_,idx)=>(
              <button className={`w-2 h-2 transition-all rounded-full cursor-pointer ${idx===activeIdx ? "w-8 bg-primary":"bg-gray-300/80 hover:bg-gray-300"} `}/>
            ))}
            </div>
            <button className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all" onClick={next}><ChevronRight/></button>
          </div>
        </div>
      
    </section>
  )
}
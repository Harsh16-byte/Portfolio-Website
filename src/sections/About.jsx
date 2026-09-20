import { BroomSparkles,RocketIcon,Lightbulb,UserGroup, Rocket} from "lucide-react"

const highlights= [
  {icon:BroomSparkles,title:"Clean Code",description:`I write clean, readable code that is easy to maintain and scale.`},
  {icon:RocketIcon,title:"Performance",description:`Optimizing for speed and delivering lightning fast user experiences.`},
  {icon:UserGroup,title:"Collaboration",description:`Working closely with teams to bring ideas to life.`},
  {icon:Lightbulb,title:"Innovation",description:`Staying ahead with latest technologies and best practices.`}
]

export const About =()=>{
  return(
    <section id="about"className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* left column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
            <span className="text-secondary-foreground text-sm font-medium tracking-wide uppercase">About Me</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight animate-fade-in ">Where logic meets 
          <span className="text-primary animation-glow-text"> imagination</span> <span className="font-serif italic font-normal">— that's where I build
          </span></h2>
          <div className="animate-fade-in text-gray-300">
            <p>Hi, I'm Harshwardhan 👋 a curious mind who fell in love with turning blank screens into living, breathing experiences 💻✨.
               What started as simple curiosity about how websites work turned into late nights debugging code 🐛, chasing that one missing semicolon 😅,
              and celebrating small wins like a finally-working button 🎉. I'm not here to just write code — I'm here to build things that make 
              people's lives a little easier, one project at a time 🚀. Still learning, still growing 🌱, but always excited for what's next!</p>
          </div>
          <div className="glass rounded-2xl p-4 glow-border animate-fade-in">
            <p className="font-medium text-pretty">My mission is to build web experiences that are simple, functional, and genuinely useful 🌐 — not just 
            for the sake of code, 
              but for the people who use it💡.I want to keep learning, keep improving 📈, and
              turn every project into something I'm proud to show 🚀."</p>
          </div>
        </div>
        {/* right column highlights */}
        <div className="grid sm:grid-cols-2 gap-6">
          {highlights.map((item,idx)=>(          
            <div className="glass p-4 rounded-2xl animate-fade-in" key={idx}>
              <div className="w-10 h-10 rounded-xl bg-teal-950 hover:bg-teal-900 flex items-center justify-center mb-4"><item.icon/></div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-300 text-sm">{item.description}</p>
            </div>
          ))}

        </div>
        </div>
      </div>
    </section>
  )
}
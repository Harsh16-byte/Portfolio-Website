import { Navbar } from "./layout/Navbar";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Contact } from "./sections/Contact";
import { Testimonials } from "./sections/Testimonials";
import { Projects } from "./sections/Projects";

function App() {
  
  return ( 
    <div className="min-h-screen overflow-x-hidden"><Navbar/>
    <main>
      <Hero/>
      <About/>      
      <Projects/>      
      <Testimonials/>  
      <Contact/>    
    </main>
  </div>
  )  
}
export default App

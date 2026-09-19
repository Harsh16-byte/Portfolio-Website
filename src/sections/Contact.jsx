import { Mail } from "lucide-react"

const contactInfo = [{icon:Mail, label:"Email", value:"aquaprince2021@gmail.com", href:"mailto:aquaprince2021@gmail.com"}]

export const Contact = () => {
  return (
    <section id="contact" className="py-11 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-teal-400 tracking-wider uppercase animate-fade-in">Get In Touch</span>
          <h1 className="text-3xl md:text-4xl font-bold mt-6 mb-6 text-teal-500">Let's build something<span className="font-serif italic font-normal text-white"> great together</span></h1>
          <p className="text-gray-300">Have a project in mind or just want to say hi? Drop a message below.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto items-start">
          {/* Contact info */}
          <div className="space-y-6">
            {contactInfo.map((item, idx) => (
              <a key={idx} href={item.href} className="flex items-center gap-4 glass p-4 rounded-2xl hover:bg-primary/10 transition-all">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <item.icon className="text-primary"/>
                </div>
                <div>
                  <div className="text-sm text-gray-300">{item.label}</div>
                  <div className="font-medium">{item.value}</div>
                </div>
              </a>
            ))}
          </div>

          {/* Contact form (Netlify) */}
          <form name="contact" method="POST" data-netlify="true" className="space-y-4 glass p-6 rounded-2xl">
            <input type="hidden" name="form-name" value="contact"/>
            <input type="text" name="name" placeholder="Your Name" required className="w-full p-3 rounded-xl bg-transparent border border-gray-600 focus:border-primary outline-none"/>
            <input type="email" name="email" placeholder="Your Email" required className="w-full p-3 rounded-xl bg-transparent border border-gray-600 focus:border-primary outline-none"/>
            <textarea name="message" placeholder="Your Message" rows="4" required className="w-full p-3 rounded-xl bg-transparent border border-gray-600 focus:border-primary outline-none"/>
            <button type="submit" className="w-full bg-primary text-primary-foreground py-3 rounded-xl font-medium hover:bg-primary/80 transition-all">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  )
}
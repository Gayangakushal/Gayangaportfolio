import { Mail, Phone, MapPin, Send, MessageSquare, Download, Linkedin, ExternalLink } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/gayanga-kaushal",
      icon: <Linkedin className="w-5 h-5" />,
      color: "bg-blue-600"
    },
    {
      name: "Behance", 
      url: "https://behance.net/gayangakaushal",
      icon: <ExternalLink className="w-5 h-5" />,
      color: "bg-blue-500"
    },
    {
      name: "Dribbble",
      url: "https://dribbble.com/gayangakaushal", 
      icon: <ExternalLink className="w-5 h-5" />,
      color: "bg-pink-500"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to bring your ideas to life? I'd love to hear about your project 
            and discuss how we can work together to create something amazing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="glass-card p-8 hover:shadow-glow transition-all duration-300">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <MessageSquare className="w-6 h-6 text-accent" />
              Send Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-glass backdrop-blur-sm border border-accent/30 rounded-lg focus:outline-none focus:border-accent focus:shadow-glow transition-all duration-300 text-foreground placeholder-muted-foreground"
                  placeholder="Your full name"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-glass backdrop-blur-sm border border-accent/30 rounded-lg focus:outline-none focus:border-accent focus:shadow-glow transition-all duration-300 text-foreground placeholder-muted-foreground"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-glass backdrop-blur-sm border border-accent/30 rounded-lg focus:outline-none focus:border-accent focus:shadow-glow transition-all duration-300 resize-none text-foreground placeholder-muted-foreground"
                  placeholder="Tell me about your project or just say hello..."
                  required
                />
              </div>
              
              <button type="submit" className="w-full btn-primary hover:shadow-glow transition-all duration-300">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info & Social Links */}
          <div className="space-y-8">
            <div className="glass-card p-8 hover:shadow-glow transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-muted-foreground">kowshallagayanga@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Phone</p>
                    <p className="text-muted-foreground">+94-770691283</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Location</p>
                    <p className="text-muted-foreground">Galle, Sri Lanka</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Resume Download */}
            <div className="glass-card p-8 hover:shadow-glow transition-all duration-300">
              <h3 className="text-xl font-bold mb-4">Download Resume</h3>
              <p className="text-muted-foreground mb-6">Get a detailed overview of my experience, skills, and accomplishments.</p>
              <a 
                href="/resume.pdf" 
                download="Gayanga_Kaushal_CV.pdf"
                className="w-full btn-secondary flex items-center justify-center gap-2 hover:shadow-glow transition-all duration-300"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>
            </div>

            {/* Social Links */}
            <div className="glass-card p-8 hover:shadow-glow transition-all duration-300">
              <h3 className="text-xl font-bold mb-6">Connect With Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center w-12 h-12 ${link.color} rounded-xl hover:scale-110 hover:shadow-glow transition-all duration-300`}
                    title={link.name}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="glass-card p-8 hover:shadow-glow transition-all duration-300">
              <h3 className="text-xl font-bold mb-4">Availability</h3>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-300 font-medium">Available for new projects</span>
              </div>
              <p className="text-sm text-muted-foreground">
                I'm currently accepting new freelance projects and collaborations. 
                Response time is typically within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
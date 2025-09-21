import profilePhoto from "@/assets/profile-photo.png";
import { Download, Mail, Phone, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center animated-bg">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto">
          {/* Profile Photo */}
          <div className="relative mb-8">
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden glass-card animate-pulse-glow">
              <img 
                src={profilePhoto} 
                alt="Gayanga Kaushal" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating decorative elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-primary rounded-full animate-pulse opacity-70"></div>
            <div className="absolute -bottom-2 -right-6 w-6 h-6 bg-gradient-primary rounded-full animate-pulse opacity-50" style={{animationDelay: '1s'}}></div>
          </div>

          {/* Name & Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-slide-up">
            <span className="gradient-text glow-text">U.L. Gayanga</span>
          </h1>
          
          <div className="flex flex-wrap justify-center gap-4 mb-6 animate-slide-up" style={{animationDelay: '0.2s'}}>
            <span className="px-4 py-2 bg-gradient-primary rounded-full text-sm font-medium shadow-glow">
              Creative Designer
            </span>
            <span className="px-4 py-2 bg-gradient-secondary rounded-full text-sm font-medium shadow-glow">
              Web Developer
            </span>
            <span className="px-4 py-2 bg-gradient-primary rounded-full text-sm font-medium shadow-glow">
              Social Media Coordinator
            </span>
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-slide-up" style={{animationDelay: '0.4s'}}>
            Passionate about blending technical skills with visual storytelling to create engaging digital experiences that bring ideas to life.
          </p>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 mb-10 animate-slide-up" style={{animationDelay: '0.6s'}}>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Phone className="w-4 h-4 text-accent" />
              <span className="text-sm">+94-770691283</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail className="w-4 h-4 text-accent" />
              <span className="text-sm">kowshallagayanga@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4 text-accent" />
              <span className="text-sm">Galle, Sri Lanka</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{animationDelay: '0.8s'}}>
            <button className="btn-primary">
              <span className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Get In Touch
              </span>
            </button>
            <a 
              href="/resume.pdf" 
              download="Gayanga_Kaushal_CV.pdf"
              className="btn-secondary"
            >
              <span className="flex items-center gap-2">
                <Download className="w-4 h-4" />
                Download Resume
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-accent-secondary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gradient-primary rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}
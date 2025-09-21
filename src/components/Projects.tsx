import { ExternalLink, Github, Monitor, Code2, Database, Globe } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "YouTube Thumbnail Downloader V1",
      description: "A simple Chrome extension to download YouTube video thumbnails in various qualities with just one click.",
      technologies: ["JavaScript", "Chrome APIs", "HTML5", "CSS3"],
      githubUrl: "https://github.com/Gayangakushal/Youtube-Thumbnail-Downloader-V1.git",
      category: "Frontend",
      icon: <Database className="w-5 h-5" />
    },
    {
      title: "Greenwave-payments",
      description: "A modern e-commerce platform with user authentication, product catalog, shopping cart, and secure payment integration built using React, TypeScript, and Bootstrap.",
      technologies: ["TypeScript", "Css", "React", "Bootstrap"],
      githubUrl: "https://github.com/Gayangakushal/greenwave-payments.git",
      category: "Frontend",
      icon: <Globe className="w-5 h-5" />
    },
    {
      title: "Sirlanka-Explorers-Hub",
      description: "A travel website showcasing Sri Lanka’s top destinations with an interactive UI, responsive design, and smooth navigation built using React, TypeScript, and Bootstrap.",
      technologies: ["TypeScript", "Css", "React", "Bootstrap","Tailwind CSS"],
      githubUrl: "https://github.com/Gayangakushal/sirlanka-explorers-hub.git",
      category: "Frontend",
      icon: <Code2 className="w-5 h-5" />
    },
    {
      title: "Glassbot-Nova",
      description: "An AI-powered chatbot built with modern web technologies, enabling real-time conversations, smart responses, and a user-friendly interface for seamless interactions.",
      technologies: ["TypeScript", "Css", "React", "Bootstrap", "Tailwind CSS"],
      githubUrl: "https://github.com/Gayangakushal/glassbot-nova.git",
      category: "Frontend",
      icon: <Monitor className="w-5 h-5" />
    },
    {
      title: "Tube-Scribe-Blog",
      description: "A simple blogging website for sharing articles and posts with a clean, responsive design built using React, TypeScript, and Tailwind CSS.",
      technologies: ["TypeScript", "Css", "React", "Bootstrap", "Tailwind CSS"],
      githubUrl: "https://github.com/Gayangakushal/tube-scribe-blog.git",
      category: "Frontend",
      icon: <Monitor className="w-5 h-5" />
    },

    {
      title: "Youth-Club",
      description: "A community-focused website designed for youth clubs to share events, activities, and updates with an engaging, responsive interface built using React, TypeScript, and Tailwind CSS.",
      technologies: ["TypeScript", "Css", "React", "Bootstrap", "Tailwind CSS"],
      githubUrl: "https://github.com/Gayangakushal/bopepod-youthhub.git",
      category: "Frontend",
      icon: <Monitor className="w-5 h-5" />
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Development Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of programming and web development projects that demonstrate my 
            technical skills and problem-solving capabilities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="glass-card group overflow-hidden hover:scale-105 transition-all duration-500 hover:shadow-glow">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-gradient-primary rounded-xl shadow-glow">
                      {project.icon}
                    </div>
                    <div>
                      <span className="px-3 py-1 bg-accent/20 text-accent text-xs font-medium rounded-full">
                        {project.category}
                      </span>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">{project.title}</h3>
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-background-secondary/30 text-foreground text-xs rounded-full border border-accent/20 hover:border-accent/40 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-center">
                  <a 
                    href={project.githubUrl}
                    className="btn-primary flex items-center gap-2 hover:shadow-glow transition-all duration-300"
                  >
                    <Github className="w-4 h-4" />
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

       
      </div>
    </section>
  );
}
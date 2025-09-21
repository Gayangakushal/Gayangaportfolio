import { GraduationCap, Briefcase, Award, Code } from "lucide-react";

export default function About() {
  const experiences = [
    {
      title: "Web Developer",
      company: "NovoNex Software Solutions",
      year: "2024",
      description: "Built responsive, user-friendly websites and developed scalable ad-serving platform logic.",
      icon: <Code className="w-5 h-5" />
    },
    {
      title: "Video Editor & Graphic Designer",
      company: "Freelancer",
      year: "2023",
      description: "Created engaging visuals and cinematic edits for brands and content creators.",
      icon: <Briefcase className="w-5 h-5" />
    }
  ];

  const education = [
    {
      title: "Front-end Website Developer",
      institution: "University of Moratuwa - CODL",
      year: "2024",
      icon: <Award className="w-5 h-5" />
    },
    {
      title: "Python Programming",
      institution: "University of Moratuwa - CODL", 
      year: "2025",
      icon: <Award className="w-5 h-5" />
    },
    {
      title: "Undergraduate",
      institution: "Java Institute for Advanced Technology",
      year: "2023",
      icon: <GraduationCap className="w-5 h-5" />
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm an undergraduate passionate about blending creativity with technology. 
            My journey spans video editing, graphic design, and web development, always 
            focused on creating impactful digital experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience */}
          <div className="glass-card p-8">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Briefcase className="w-6 h-6 text-accent" />
              Experience
            </h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-accent/30">
                  <div className="absolute -left-3 top-0 w-6 h-6 bg-gradient-primary rounded-full flex items-center justify-center">
                    {exp.icon}
                  </div>
                  <div className="pb-4">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                      <h4 className="font-semibold text-lg text-foreground">{exp.title}</h4>
                      <span className="text-accent text-sm font-medium">{exp.year}</span>
                    </div>
                    <p className="text-accent-secondary font-medium mb-2">{exp.company}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="glass-card p-8">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <GraduationCap className="w-6 h-6 text-accent" />
              Education & Certifications
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-accent/30">
                  <div className="absolute -left-3 top-0 w-6 h-6 bg-gradient-primary rounded-full flex items-center justify-center">
                    {edu.icon}
                  </div>
                  <div className="pb-4">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                      <h4 className="font-semibold text-lg text-foreground">{edu.title}</h4>
                      <span className="text-accent text-sm font-medium">{edu.year}</span>
                    </div>
                    <p className="text-accent-secondary font-medium">{edu.institution}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Certifications */}
        <div className="mt-12 glass-card p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Recent Certifications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Microsoft Azure AI Fundamentals (KodeKloud)",
              "Ethical Hacking (Udemy)",
              "PHP with MySQL - Complete Website (Udemy)",
              "Web Design for Beginners (Moratuwa)",
              "Python for Beginners (Moratuwa)"
            ].map((cert, index) => (
              <div key={index} className="p-4 rounded-lg bg-background-secondary/50 border border-accent/20">
                <p className="text-sm text-foreground font-medium">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
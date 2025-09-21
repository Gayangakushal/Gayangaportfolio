import { Code, Palette, Video, Database, Monitor, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";

interface SkillItem {
  name: string;
  percentage: number;
  icon: React.ReactNode;
  category: string;
}

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);

  const skills: SkillItem[] = [
    { name: "Development", percentage: 95, icon: <Code className="w-5 h-5" />, category: "Technical" },
    { name: "Project Management", percentage: 81, icon: <TrendingUp className="w-5 h-5" />, category: "Management" },
    { name: "Design Process", percentage: 78, icon: <Palette className="w-5 h-5" />, category: "Creative" },
    { name: "Web Design", percentage: 90, icon: <Monitor className="w-5 h-5" />, category: "Technical" },
    { name: "Video Editing", percentage: 85, icon: <Video className="w-5 h-5" />, category: "Creative" },
    { name: "Database Management", percentage: 75, icon: <Database className="w-5 h-5" />, category: "Technical" },
  ];

  const skillCategories = [
    {
      title: "Technical Skills",
      items: ["Front End Coding", "Web Design", "Database Management", "Computer Literacy"],
      color: "accent"
    },
    {
      title: "Creative Skills", 
      items: ["Video Editing", "Graphic Design", "Creativity", "Digital Marketing"],
      color: "accent-secondary"
    },
    {
      title: "Soft Skills",
      items: ["Problem-Solving", "Management Skills", "Project Management"],
      color: "primary"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('skills-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills-section" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive blend of technical proficiency, creative vision, and 
            project management capabilities.
          </p>
        </div>

        {/* Progress Bars */}
        <div className="glass-card p-8 mb-12">
          <h3 className="text-2xl font-bold mb-8 text-center">Proficiency Levels</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-gradient-primary">
                      {skill.icon}
                    </div>
                    <span className="font-medium text-foreground">{skill.name}</span>
                  </div>
                  <span className="text-accent font-semibold">{skill.percentage}%</span>
                </div>
                <div className="progress-bar">
                  <div 
                    className="progress-fill"
                    style={{
                      width: isVisible ? `${skill.percentage}%` : '0%',
                      transitionDelay: `${index * 0.1}s`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skill Categories */}
        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="glass-card p-6 hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-bold mb-4 text-center">{category.title}</h3>
              <div className="space-y-3">
                {category.items.map((item, itemIndex) => (
                  <div 
                    key={itemIndex}
                    className="flex items-center gap-3 p-3 rounded-lg bg-background-secondary/30 hover:bg-background-secondary/50 transition-colors"
                  >
                    <div className={`w-2 h-2 rounded-full bg-${category.color}`}></div>
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Languages */}
        <div className="mt-12 glass-card p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Languages</h3>
          <div className="flex justify-center gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-3 mx-auto">
                <span className="text-2xl font-bold">සි</span>
              </div>
              <p className="font-medium">Sinhala</p>
              <p className="text-sm text-muted-foreground">Native</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mb-3 mx-auto">
                <span className="text-2xl font-bold">EN</span>
              </div>
              <p className="font-medium">English</p>
              <p className="text-sm text-muted-foreground">Fluent</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
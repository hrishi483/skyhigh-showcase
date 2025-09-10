import { Card, CardContent } from "@/components/ui/card";
import { Brain, Code, Users, Zap, Database, Network } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "AI & ML Frameworks",
      icon: Brain,
      skills: ["LangGraph", "LangChain", "Transformers", "OpenAI API", "Anthropic", "Local LLMs"],
      color: "text-sky"
    },
    {
      title: "Agent Systems",
      icon: Network,
      skills: ["Multi-Agent Orchestration", "Task Planning", "Human-in-the-Loop", "State Management", "Agent Communication"],
      color: "text-sky-light"
    },
    {
      title: "Backend & APIs",
      icon: Code,
      skills: ["FastAPI", "Python", "REST APIs", "WebSockets", "Async Programming", "Microservices"],
      color: "text-primary"
    },
    {
      title: "Data & Memory",
      icon: Database,
      skills: ["MongoDB", "FAISS", "Vector Databases", "Semantic Search", "Data Pipelines", "ETL"],
      color: "text-sky-dark"
    },
    {
      title: "Collaboration",
      icon: Users,
      skills: ["Human-AI Interaction", "Product Design", "Team Leadership", "Technical Writing", "Agile Development"],
      color: "text-muted-foreground"
    },
    {
      title: "Production",
      icon: Zap,
      skills: ["Docker", "CI/CD", "Monitoring", "Scalability", "Performance Optimization", "DevOps"],
      color: "text-accent-foreground"
    }
  ];

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto" id="skills">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 text-foreground">Skills & Technologies</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Full-stack expertise in building and deploying intelligent agent systems
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => {
          const IconComponent = category.icon;
          return (
            <Card 
              key={category.title}
              className="group hover:shadow-sky transition-all duration-300 hover:-translate-y-1 bg-card border-border"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <IconComponent className={`w-6 h-6 mr-3 ${category.color} group-hover:scale-110 transition-transform`} />
                  <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs font-medium hover:bg-accent hover:text-accent-foreground transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
      
      <div className="mt-16 text-center">
        <Card className="p-8 bg-gradient-sky border-border shadow-glow inline-block">
          <h3 className="text-2xl font-semibold mb-4 text-white">
            🚀 Shipping Agent-as-a-Service
          </h3>
          <p className="text-white/90 max-w-2xl mx-auto">
            Composable • On-Demand • Production-Ready • Human-in-the-Loop
          </p>
        </Card>
      </div>
    </section>
  );
};

export default Skills;
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Play } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Analyst Agent",
      description: "Multi-agent system using LangGraph that thinks and acts like a data science team. Features human-in-the-loop validation at critical checkpoints.",
      features: [
        "Task queue planning with Brain Agent",
        "Code generation and execution",
        "Human validation checkpoints",
        "Metric evaluation and iteration",
        "2-3x faster analysis completion"
      ],
      demoLink: "https://drive.google.com/file/d/1qZLT7ZeMgrqLtiNM1Xe00zBO77dYHaPb/view?usp=sharing",
      category: "AI Systems"
    },
    {
      title: "SUITS Character Simulation",
      description: "Web-based simulation where TV show characters are autonomous AI agents with long-term and short-term memory systems.",
      features: [
        "Individual character agents with unique personalities",
        "MongoDB for long-term memory persistence",
        "FAISS for fast semantic search",
        "Real-time character interactions",
        "Web-based simulation interface"
      ],
      demoLink: "https://drive.google.com/file/d/1c0ndCB1odtt3mfpZECx5zRjJ6T1YMvA-/view?usp=sharing",
      category: "Multi-Agent"
    }
  ];

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto bg-gradient-hero" id="projects">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 text-foreground">Featured Projects</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Real-world applications of Agent-as-a-Service systems and multi-agent architectures
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Card 
            key={project.title}
            className="group hover:shadow-sky transition-all duration-300 hover:-translate-y-2 bg-card border-border"
          >
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <span className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm font-medium">
                  {project.category}
                </span>
                <Button 
                  size="sm" 
                  variant="ghost"
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() => window.open(project.demoLink, '_blank')}
                >
                  <Play className="w-4 h-4 mr-2" />
                  Demo
                </Button>
              </div>
              <CardTitle className="text-2xl text-foreground group-hover:text-primary transition-colors">
                {project.title}
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                {project.description}
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <ul className="space-y-2 mb-6">
                {project.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                variant="outline" 
                className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                onClick={() => window.open(project.demoLink, '_blank')}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                View Demo
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <Card className="p-8 bg-accent border-border inline-block">
          <h3 className="text-2xl font-semibold mb-4 text-accent-foreground">My Edge: Shipping Agent-as-a-Service</h3>
          <p className="text-muted-foreground max-w-2xl">
            I don't just build AI models — I ship <strong className="text-primary">thinking, reasoning, and execution as a service</strong> 
            that teams can use to deliver faster, safer, and smarter outcomes.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default Projects;
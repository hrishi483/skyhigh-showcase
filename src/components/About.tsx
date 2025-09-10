import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section className="py-20 px-4 max-w-6xl mx-auto" id="about">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 text-foreground">About Me</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Building the future of AI through intelligent agent systems and human-centered design
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p className="text-lg text-muted-foreground leading-relaxed">
            I specialize in designing and shipping <strong className="text-primary">Agent-as-a-Service systems</strong> – 
            modular, scalable AI agents that can plan, reason, generate code, and collaborate with humans in real time.
          </p>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            My approach combines <strong className="text-primary">open-source reasoning models</strong> for explainability 
            with <strong className="text-primary">code generator models</strong> for precise execution, ensuring both 
            transparency and reliability in production environments.
          </p>
          
          <div className="flex flex-wrap gap-3">
            {[
              "Multi-Agent Systems",
              "Human-in-the-Loop AI",
              "LangGraph",
              "Production AI",
              "Code Generation",
              "Agent Orchestration"
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        
        <Card className="p-8 bg-gradient-hero border-border shadow-sky">
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-4 text-primary">My Approach</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-sky rounded-full mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Composable & On-Demand</h4>
                  <p className="text-sm text-muted-foreground">Agents spun up dynamically for specific tasks</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-sky-light rounded-full mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Human-in-the-Loop</h4>
                  <p className="text-sm text-muted-foreground">Critical checkpoints for validation and trust</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Production-Ready</h4>
                  <p className="text-sm text-muted-foreground">API-consumable intelligence for real workflows</p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default About;
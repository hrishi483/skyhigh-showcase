import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, MessageSquare } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      description: "Get in touch directly",
      action: "Send Email",
      link: "mailto:your.email@example.com",
      primary: true
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      description: "Professional network",
      action: "Connect",
      link: "https://linkedin.com/in/your-profile"
    },
    {
      icon: Github,
      title: "GitHub",
      description: "View my code",
      action: "Follow",
      link: "https://github.com/your-username"
    },
    {
      icon: MessageSquare,
      title: "Schedule Call",
      description: "Let's discuss your project",
      action: "Book Meeting",
      link: "https://calendly.com/your-calendar"
    }
  ];

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto bg-gradient-hero" id="contact">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 text-foreground">Let's Build Together</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Ready to transform your ideas into intelligent agent systems? Let's discuss how we can work together.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {contactMethods.map((method) => {
          const IconComponent = method.icon;
          return (
            <Card 
              key={method.title}
              className={`group hover:shadow-sky transition-all duration-300 hover:-translate-y-2 cursor-pointer ${
                method.primary ? 'ring-2 ring-primary/20 bg-gradient-sky border-primary' : 'bg-card border-border'
              }`}
              onClick={() => window.open(method.link, '_blank')}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-center mb-3">
                  <div className={`p-3 rounded-full ${
                    method.primary ? 'bg-white/20' : 'bg-accent'
                  } group-hover:scale-110 transition-transform`}>
                    <IconComponent className={`w-6 h-6 ${
                      method.primary ? 'text-white' : 'text-primary'
                    }`} />
                  </div>
                </div>
                <CardTitle className={`text-center ${
                  method.primary ? 'text-white' : 'text-foreground'
                }`}>
                  {method.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center pt-0">
                <p className={`text-sm mb-4 ${
                  method.primary ? 'text-white/80' : 'text-muted-foreground'
                }`}>
                  {method.description}
                </p>
                <Button 
                  variant={method.primary ? "secondary" : "outline"}
                  size="sm"
                  className={`w-full ${
                    method.primary 
                      ? 'bg-white/20 text-white border-white/30 hover:bg-white/30' 
                      : 'border-primary text-primary hover:bg-primary hover:text-primary-foreground'
                  } transition-all duration-300`}
                >
                  {method.action}
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
      
      <div className="text-center">
        <Card className="p-8 bg-accent border-border inline-block max-w-2xl">
          <h3 className="text-2xl font-semibold mb-4 text-accent-foreground">
            Interested in Agent-as-a-Service?
          </h3>
          <p className="text-muted-foreground mb-6">
            I help teams build production-ready AI agents that can plan, reason, and execute tasks 
            while maintaining human oversight and trust. Let's explore how this can transform your workflow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={() => window.open("mailto:your.email@example.com?subject=Agent-as-a-Service Inquiry", '_blank')}
              className="px-8 py-4 shadow-sky hover:shadow-glow transition-all duration-300"
            >
              <Mail className="w-5 h-5 mr-2" />
              Start Conversation
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => window.open("https://calendly.com/your-calendar", '_blank')}
              className="px-8 py-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Schedule Call
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
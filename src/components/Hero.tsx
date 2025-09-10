import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";
import profileImage from "@/assets/profile.jpg"; // <-- add your photo here

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80 scale-105 animate-slow-zoom"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />

      {/* 🔹 Animated SVG Wave Background */}
      <svg
        className="absolute inset-0 w-full h-full opacity-30"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#38bdf8">
              <animate
                attributeName="stop-color"
                values="#38bdf8;#818cf8;#38bdf8"
                dur="10s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%" stopColor="#818cf8">
              <animate
                attributeName="stop-color"
                values="#818cf8;#38bdf8;#818cf8"
                dur="10s"
                repeatCount="indefinite"
              />
            </stop>
          </linearGradient>
        </defs>
        <path
          d="M0 200 Q250 100 500 200 T1000 200"
          stroke="url(#grad)"
          strokeWidth="2"
          fill="none"
        >
          <animate
            attributeName="d"
            dur="8s"
            repeatCount="indefinite"
            values="M0 200 Q250 100 500 200 T1000 200;
                    M0 220 Q250 150 500 220 T1000 220;
                    M0 200 Q250 100 500 200 T1000 200"
          />
        </path>
      </svg>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Profile Image */}
        <div className="flex justify-center mb-8">
          <div className="relative w-40 h-40 rounded-full overflow-hidden ring-4 ring-primary shadow-lg animate-float">
            <img
              src={profileImage}
              alt="Hrishikesh Karande"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Text */}
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-sky bg-clip-text text-transparent animate-slide-up">
            AI Engineer & Agent Architect
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in-delay">
            Specializing in Agent-as-a-Service systems, multi-agent architectures, 
            and human-in-the-loop AI solutions
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="text-lg px-8 py-4 shadow-sky hover:shadow-glow transition-all duration-300 animate-bounce-slow"
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 animate-bounce-slow delay-200"
            >
              Contact Me
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-sky rounded-full animate-float opacity-60" />
      <div
        className="absolute top-40 right-20 w-6 h-6 bg-sky-light rounded-full animate-float opacity-40"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute bottom-40 left-20 w-3 h-3 bg-primary rounded-full animate-float opacity-70"
        style={{ animationDelay: "2s" }}
      />
    </section>
  );
};

export default Hero;

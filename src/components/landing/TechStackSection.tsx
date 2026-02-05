import { Atom, Wifi, Database, Cloud } from "lucide-react";

const TechStackSection = () => {
  const technologies = [
    {
      icon: Atom,
      name: "React",
      description: "A fast and responsive component-based user interface that delivers a seamless app-like experience across all devices.",
      color: "from-cyan-400 to-cyan-600",
      bgColor: "bg-cyan-50",
      watermark: "UI",
    },
    {
      icon: Wifi,
      name: "WebRTC",
      description: "Enables ultra-low latency live video streaming and real-time communication directly in the browser without plugins.",
      color: "from-purple-400 to-purple-600",
      bgColor: "bg-purple-50",
      watermark: "RTC",
    },
    {
      icon: Database,
      name: "MongoDB",
      description: "A flexible, high-performance NoSQL database designed to handle complex data hierarchies and massive scale.",
      color: "from-green-400 to-green-600",
      bgColor: "bg-green-50",
      watermark: "DB",
    },
    {
      icon: Cloud,
      name: "AWS S3",
      description: "Industry-leading object storage providing 99.99% durability and secure delivery for all course videos and documents.",
      color: "from-orange-400 to-orange-600",
      bgColor: "bg-orange-50",
      watermark: "AWS",
    },
  ];

  return (
    <section className="py-24 bg-secondary relative overflow-hidden">
      {/* Grid background pattern */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px),
                          linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }} />

      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-0.5 bg-primary" />
            <span className="text-primary font-semibold uppercase tracking-wider">
              TECHNOLOGY FOUNDATION
            </span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-black text-foreground mb-6">
            Modern & Scalable Architecture
          </h2>

          <p className="text-xl text-muted-foreground">
            Built on a cutting-edge technology stack to ensure performance, security, 
            and limitless scalability for growing educational needs.
          </p>
        </div>

        {/* Tech Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm border border-border hover:shadow-xl transition-all duration-300 text-center relative overflow-hidden group"
            >
              {/* Watermark */}
              <div className="absolute bottom-0 right-0 text-secondary/80 text-8xl font-black leading-none translate-x-4 translate-y-4 group-hover:text-primary/10 transition-colors">
                {tech.watermark}
              </div>

              {/* Icon */}
              <div className={`w-20 h-20 ${tech.bgColor} rounded-full mx-auto mb-6 flex items-center justify-center relative`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-100 rounded-full transition-opacity duration-300`} />
                <tech.icon className="w-10 h-10 text-foreground group-hover:text-white relative z-10 transition-colors" />
              </div>

              <h3 className="text-xl font-bold text-foreground mb-2">{tech.name}</h3>
              
              <div className={`w-12 h-1 bg-gradient-to-r ${tech.color} rounded-full mx-auto mb-4`} />

              <p className="text-sm text-muted-foreground leading-relaxed relative z-10">
                {tech.description}
              </p>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            POWERED BY OPEN SOURCE & CLOUD INNOVATION
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;

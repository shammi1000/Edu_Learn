import { Landmark, MonitorPlay, LayoutGrid, CheckCircle } from "lucide-react";

const PlatformOverview = () => {
  const features = [
    {
      icon: Landmark,
      title: "Built for Education",
      description: "Scalable architecture tailored specifically for the diverse needs of modern educational ecosystems.",
      items: ["Educational Institutions", "Training Centers", "Online Academies"],
      accentColor: "from-primary to-blue-400",
    },
    {
      icon: MonitorPlay,
      title: "Hybrid Learning",
      description: "Support for diverse pedagogical approaches with flexible content delivery models.",
      items: ["Self-Paced Modules", "Live Instructor Classes", "Interactive Assessments"],
      accentColor: "from-feature-purple to-purple-400",
    },
    {
      icon: LayoutGrid,
      title: "Unified System",
      description: "A single integrated dashboard to manage all operational and academic aspects efficiently.",
      items: ["Course Management", "Instructor Portals", "Student Analytics"],
      accentColor: "from-primary to-blue-400",
    },
  ];

  return (
    <section className="py-24 bg-secondary relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="px-4 py-2 bg-navy text-white text-sm font-semibold rounded-lg">
              PLATFORM OVERVIEW
            </span>
            <div className="w-8 h-0.5 bg-primary" />
          </div>

          <h2 className="text-4xl lg:text-5xl font-black text-foreground mb-6">
            EduLearn LMS Platform
          </h2>

          <p className="text-xl text-muted-foreground">
            A comprehensive learning management system designed to empower educational 
            institutions, training centers, and online academies.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm border border-border hover:shadow-xl transition-all duration-300 group"
            >
              {/* Accent top border */}
              <div className={`h-1 bg-gradient-to-r ${feature.accentColor} rounded-full mb-6 w-12 group-hover:w-24 transition-all duration-300`} />

              <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-foreground" />
              </div>

              <h3 className="text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {feature.description}
              </p>

              <div className="border-t border-border pt-6 space-y-3">
                {feature.items.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="text-sm text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center mt-16 pt-8 border-t border-border">
          <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            TECHZIUM SOLUTIONS
          </p>
          <p className="text-sm text-muted-foreground">
            EduLearn Platform Overview
          </p>
        </div>
      </div>
    </section>
  );
};

export default PlatformOverview;

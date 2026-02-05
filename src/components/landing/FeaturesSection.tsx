import { Play, Video, ClipboardCheck, TrendingUp } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Play,
      title: "Video-Based Courses",
      description: "Deliver high-quality on-demand learning with structured modules, lessons, and rich media content that learners can access anytime.",
      tags: ["HD Streaming", "Modular"],
      accentColor: "bg-primary",
      iconBg: "bg-primary/10",
      iconColor: "text-primary",
    },
    {
      icon: Video,
      title: "Live Classes",
      description: "Conduct interactive real-time sessions with integrated video conferencing, chat, screen sharing, and whiteboard tools.",
      tags: ["WebRTC", "Interactive"],
      accentColor: "bg-feature-purple",
      iconBg: "bg-feature-purple/10",
      iconColor: "text-feature-purple",
    },
    {
      icon: ClipboardCheck,
      title: "Assignments & Assessments",
      description: "Create diverse evaluation methods with automated grading workflows, plagiarism checks, and detailed feedback mechanisms.",
      tags: ["Quizzes", "Projects"],
      accentColor: "bg-feature-green",
      iconBg: "bg-feature-green/10",
      iconColor: "text-feature-green",
    },
    {
      icon: TrendingUp,
      title: "Progress Tracking",
      description: "Monitor learner journey with automated completion tracking, skill gap analysis, and comprehensive performance insights.",
      tags: ["Analytics", "Reports"],
      accentColor: "bg-feature-orange",
      iconBg: "bg-feature-orange/10",
      iconColor: "text-feature-orange",
    },
  ];

  return (
    <section className="py-24 bg-secondary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/50 to-transparent" />

      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-0.5 bg-primary" />
            <span className="text-primary font-semibold uppercase tracking-wider">
              CORE LEARNING FEATURES
            </span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-black text-foreground mb-6">
            Powerful Learning Capabilities
          </h2>

          <p className="text-xl text-muted-foreground">
            A robust suite of tools designed to facilitate every aspect of the modern 
            digital learning journey.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm border border-border hover:shadow-lg transition-all duration-300 relative overflow-hidden group"
            >
              {/* Left accent border */}
              <div className={`absolute left-0 top-0 bottom-0 w-1 ${feature.accentColor}`} />

              <div className="flex gap-6">
                {/* Icon */}
                <div className={`w-16 h-16 ${feature.iconBg} rounded-2xl flex items-center justify-center shrink-0`}>
                  <feature.icon className={`w-8 h-8 ${feature.iconColor}`} />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="flex gap-3">
                    {feature.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-secondary text-sm font-medium text-foreground rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

import { ThumbsUp, Users, Briefcase, TrendingUp, Lightbulb, Shield, Check } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Users,
      title: "Improves Learner Engagement",
      description: "Interactive tools and gamification boost course completion rates.",
      color: "border-l-primary bg-primary/5",
      iconBg: "bg-primary/10 text-primary",
    },
    {
      icon: Briefcase,
      title: "Reduces Administrative Workload",
      description: "Automate enrollment, grading, and reporting to save valuable time.",
      color: "border-l-feature-purple bg-feature-purple/5",
      iconBg: "bg-feature-purple/10 text-feature-purple",
    },
    {
      icon: TrendingUp,
      title: "Supports Scalable Learning",
      description: "Cloud infrastructure that grows effortlessly with your user base.",
      color: "border-l-feature-green bg-feature-green/5",
      iconBg: "bg-feature-green/10 text-feature-green",
    },
    {
      icon: Lightbulb,
      title: "Provides Actionable Insights",
      description: "Data-driven dashboards help optimize content and teaching strategies.",
      color: "border-l-feature-orange bg-feature-orange/5",
      iconBg: "bg-feature-orange/10 text-feature-orange",
    },
    {
      icon: Shield,
      title: "Delivers Secure Environment",
      description: "Enterprise-grade security ensuring data privacy and compliance.",
      color: "border-l-feature-pink bg-feature-pink/5",
      iconBg: "bg-feature-pink/10 text-feature-pink",
    },
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Dark Panel */}
          <div className="bg-navy rounded-3xl p-10 text-white relative overflow-hidden sticky top-8">
            {/* Icon badge */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                <ThumbsUp className="w-6 h-6 text-white" />
              </div>
              <span className="text-primary font-semibold uppercase tracking-wider">
                BUSINESS VALUE
              </span>
            </div>

            <h2 className="text-5xl font-black mb-2 leading-tight">
              <span className="italic">Why</span><br />
              <span className="text-primary">Choose</span><br />
              EduLearn
            </h2>

            <p className="text-lg text-gray-300 my-8">
              We don't just deliver software; we deliver measurable results that drive 
              your organization forward.
            </p>

            {/* Checklist */}
            <div className="space-y-4">
              {["Enterprise Ready", "24/7 Premium Support", "99.9% Uptime SLA"].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary" />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>

            {/* Background decoration */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          </div>

          {/* Right - Benefits List */}
          <div className="space-y-6">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-3xl font-black text-foreground">Key Benefits</h3>
                <p className="text-muted-foreground">Transforming how you deliver education</p>
              </div>
              <span className="px-4 py-2 bg-secondary rounded-full text-sm font-medium flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full" />
                ROI Focused
              </span>
            </div>

            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`${benefit.color} border-l-4 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 ${benefit.iconBg} rounded-xl flex items-center justify-center shrink-0`}>
                    <benefit.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="text-lg font-bold text-foreground">
                        {benefit.title}
                      </h4>
                      <Check className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <p className="text-muted-foreground mt-1">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;

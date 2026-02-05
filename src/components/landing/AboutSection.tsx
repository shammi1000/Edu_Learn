import { GraduationCap, Heart, Building2 } from "lucide-react";

const AboutSection = () => {
  const expertise = [
    {
      icon: GraduationCap,
      title: "Education",
      subtitle: "LMS Platforms",
      bgColor: "bg-primary/10",
      iconColor: "text-primary",
    },
    {
      icon: Heart,
      title: "Healthcare",
      subtitle: "Secure Systems",
      bgColor: "bg-primary/10",
      iconColor: "text-primary",
    },
    {
      icon: Building2,
      title: "Enterprise",
      subtitle: "Scalable Apps",
      bgColor: "bg-primary/10",
      iconColor: "text-primary",
    },
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Dark Panel */}
          <div className="bg-navy rounded-3xl p-10 text-white relative overflow-hidden">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold">T</span>
              </div>
              <span className="text-xl font-bold">TechZium</span>
            </div>

            <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-4">
              ABOUT THE COMPANY
            </p>

            <h2 className="text-5xl font-black mb-6 leading-tight">
              Who<br />
              We Are
            </h2>

            <div className="w-12 h-1 bg-primary rounded-full mb-6" />

            <p className="text-lg text-gray-300 mb-12">
              Innovating education and enterprise with secure, scalable digital solutions.
            </p>

            {/* Stats */}
            <div className="flex gap-12">
              <div>
                <p className="text-4xl font-black">10+</p>
                <p className="text-sm text-gray-400 uppercase tracking-wide">Years Exp.</p>
              </div>
              <div>
                <p className="text-4xl font-black">3</p>
                <p className="text-sm text-gray-400 uppercase tracking-wide">Global Hubs</p>
              </div>
            </div>

            {/* Background decoration */}
            <div className="absolute bottom-0 right-0 text-navy-light/30 text-[200px] font-black leading-none translate-x-8 translate-y-16">
              T
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            <div>
              <div className="w-12 h-1 bg-primary rounded-full mb-6" />
              <h3 className="text-4xl font-black text-foreground mb-2">TechZium Solutions</h3>
              <p className="text-lg text-muted-foreground">
                Empowering Organizations Through Technology
              </p>
            </div>

            <div className="border-l-4 border-primary pl-6 py-2">
              <p className="text-lg text-foreground leading-relaxed">
                TechZium Solutions is a technology-focused software company specializing in 
                building scalable and secure digital platforms for education, healthcare, 
                and enterprise organizations.
              </p>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              We combine deep domain expertise with modern technologies to deliver reliable, 
              high-quality solutions that improve operational efficiency, learner engagement, 
              and long-term business growth.
            </p>

            {/* Core Expertise Cards */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                CORE EXPERTISE
              </p>
              <div className="grid grid-cols-3 gap-4">
                {expertise.map((item, index) => (
                  <div
                    key={index}
                    className="bg-secondary/50 rounded-xl p-5 border border-border hover:border-primary/30 transition-colors"
                  >
                    <div className={`w-12 h-12 ${item.bgColor} rounded-xl flex items-center justify-center mb-4`}>
                      <item.icon className={`w-6 h-6 ${item.iconColor}`} />
                    </div>
                    <p className="font-semibold text-foreground mb-1">{item.title}</p>
                    <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

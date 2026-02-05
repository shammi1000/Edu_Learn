import { GraduationCap, TrendingUp, Users, ArrowUp } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-background relative overflow-hidden">
      {/* Decorative blue diagonal */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-br from-primary/10 via-primary/5 to-transparent -skew-x-12 translate-x-32" />
      
      <div className="container mx-auto px-6 pt-8">
        {/* Logo */}
        <div className="flex items-center gap-3 mb-12">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <GraduationCap className="w-6 h-6 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground">EduLearn</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-200px)]">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-block">
              <span className="px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full border border-primary/20">
                LMS PLATFORM V3.0
              </span>
            </div>

            <div className="space-y-2">
              <h1 className="text-5xl lg:text-6xl font-black text-foreground leading-tight">
                EduLearn
              </h1>
              <h2 className="text-5xl lg:text-6xl font-black text-primary leading-tight">
                LMS Platform
              </h2>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-2">
                Complete Learning Management System
              </h3>
              <div className="w-16 h-1 bg-primary rounded-full mb-4" />
              <p className="text-lg text-muted-foreground max-w-xl">
                A modern digital learning platform designed to deliver engaging, scalable, 
                and results-driven education experiences for institutions and enterprises.
              </p>
            </div>

            <div className="pt-4">
              <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">DEVELOPED BY</p>
              <p className="text-lg font-bold text-foreground">TechZium Solutions</p>
              <p className="text-sm text-muted-foreground">Excellence in EdTech</p>
            </div>
          </div>

          {/* Right - Dashboard Preview */}
          <div className="relative animate-slide-in-right" style={{ animationDelay: "0.2s" }}>
            <div className="bg-dashboard-bg rounded-2xl shadow-2xl overflow-hidden border border-dashboard-border">
              {/* Browser dots */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-dashboard-border">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="text-xs text-muted-foreground font-mono">admin.edulearn.io</span>
              </div>

              {/* Dashboard Content */}
              <div className="p-6 space-y-4">
                {/* Stats Cards */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-dashboard-card rounded-xl p-4 border border-dashboard-border">
                    <p className="text-xs text-muted-foreground mb-1">Active Students</p>
                    <p className="text-2xl font-bold text-white">12,450</p>
                    <div className="flex items-center gap-1 mt-1">
                      <ArrowUp className="w-3 h-3 text-green-500" />
                      <span className="text-xs text-green-500">12% vs last month</span>
                    </div>
                  </div>
                  <div className="bg-dashboard-card rounded-xl p-4 border border-dashboard-border">
                    <p className="text-xs text-muted-foreground mb-1">Course Completion</p>
                    <p className="text-2xl font-bold text-white">87%</p>
                    <div className="flex items-center gap-1 mt-1">
                      <ArrowUp className="w-3 h-3 text-green-500" />
                      <span className="text-xs text-green-500">5% vs last month</span>
                    </div>
                  </div>
                </div>

                {/* Chart Area */}
                <div className="bg-dashboard-card rounded-xl p-4 border border-dashboard-border h-32">
                  <p className="text-xs text-muted-foreground text-center mb-4">Platform Engagement (Last 6 Months)</p>
                  {/* Simple chart bars */}
                  <div className="flex items-end justify-center gap-3 h-16">
                    {[40, 55, 45, 70, 60, 85].map((height, i) => (
                      <div
                        key={i}
                        className="w-6 bg-gradient-to-t from-primary to-primary/60 rounded-t"
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-2">
                  <div className="flex -space-x-2">
                    {["A", "B", "C"].map((letter, i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full bg-primary/80 border-2 border-dashboard-bg flex items-center justify-center text-xs font-medium text-white"
                      >
                        {letter}
                      </div>
                    ))}
                    <div className="w-8 h-8 rounded-full bg-primary border-2 border-dashboard-bg flex items-center justify-center text-xs font-medium text-white">
                      +2k
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">System Online</span>
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating decoration */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>

      {/* Bottom tagline */}
      <div className="absolute bottom-8 left-0 right-0 text-center">
        <p className="text-sm text-muted-foreground tracking-[0.2em] uppercase">
          Transforming Education Through Technology
        </p>
      </div>
    </section>
  );
};

export default HeroSection;

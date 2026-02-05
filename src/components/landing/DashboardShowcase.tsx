import { TrendingUp, FolderKanban, Video, ClipboardList, Users, BarChart3 } from "lucide-react";

import dashboardInstructor from "@/assets/dashboard-instructor.png";
import dashboardCourses from "@/assets/dashboard-courses.png";
import dashboardLiveClasses from "@/assets/dashboard-live-classes.png";
import dashboardAssignments from "@/assets/dashboard-assignments.png";
import dashboardStudents from "@/assets/dashboard-students.png";
import dashboardAnalytics from "@/assets/dashboard-analytics.png";

const DashboardShowcase = () => {
  const dashboards = [
    {
      icon: TrendingUp,
      title: "Instructor Dashboard",
      color: "bg-primary/10 text-primary",
      image: dashboardInstructor,
    },
    {
      icon: FolderKanban,
      title: "Course Management",
      color: "bg-blue-100 text-blue-600",
      image: dashboardCourses,
    },
    {
      icon: Video,
      title: "Live Class Scheduler",
      color: "bg-red-100 text-red-500",
      image: dashboardLiveClasses,
    },
    {
      icon: ClipboardList,
      title: "Assignment Tracking",
      color: "bg-green-100 text-green-600",
      image: dashboardAssignments,
    },
    {
      icon: Users,
      title: "Student Roster",
      color: "bg-yellow-100 text-yellow-600",
      image: dashboardStudents,
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      color: "bg-cyan-100 text-cyan-600",
      image: dashboardAnalytics,
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-semibold uppercase tracking-wider mb-4">
            PLATFORM VISUALS
          </p>
          <h2 className="text-4xl lg:text-5xl font-black text-foreground mb-6">
            Intelligent Learning Dashboards
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience role-based interfaces designed for administrators, instructors, and students, 
            providing real-time visibility into course progress, performance metrics, and engagement.
          </p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dashboards.map((dashboard, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-sm border border-border overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Preview Image */}
              <div className="h-52 overflow-hidden relative">
                <img 
                  src={dashboard.image} 
                  alt={dashboard.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Label */}
              <div className="p-4 flex items-center gap-3 bg-white">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${dashboard.color}`}>
                  <dashboard.icon className="w-5 h-5" />
                </div>
                <span className="font-semibold text-foreground">{dashboard.title}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex justify-end items-center mt-12">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm text-muted-foreground">EduLearn LMS</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardShowcase;

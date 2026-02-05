import { GraduationCap, Globe, MapPin, Mail } from "lucide-react";

const ContactSection = () => {
  const locations = [
    { city: "Doha", country: "Qatar" },
    { city: "Riyadh", country: "Kingdom of Saudi Arabia" },
    { city: "Manama", country: "Bahrain" },
    { city: "Muscat", country: "Oman" },
  ];

  return (
    <section className="py-24 bg-navy text-white relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />

      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-2 bg-primary text-white text-sm font-semibold rounded-lg mb-8">
              GET IN TOUCH
            </span>

            <h2 className="text-5xl font-black mb-2 leading-tight">
              Ready to<br />
              <span className="text-primary">Transform</span><br />
              Learning?
            </h2>

            <p className="text-xl text-gray-300 mt-8 mb-12 max-w-md">
              Connect with our team to schedule a demo or discuss how EduLearn can 
              scale your educational programs.
            </p>

            {/* Email Card */}
            <div className="bg-navy-light rounded-2xl p-6 border border-dashboard-border inline-flex items-center gap-4">
              <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center">
                <Mail className="w-7 h-7 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Email Support</p>
                <p className="text-lg font-semibold text-white">support@techziumsolutions.com</p>
              </div>
            </div>
          </div>

          {/* Right - Locations */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-0.5 bg-gray-600" />
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-primary" />
                <h3 className="text-2xl font-bold">Our Locations</h3>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {locations.map((location, index) => (
                <div
                  key={index}
                  className="bg-dashboard-card rounded-xl p-6 border border-dashboard-border hover:border-primary/50 transition-colors group"
                >
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="text-lg font-bold text-white">{location.city}</p>
                      <p className="text-sm text-gray-400">{location.country}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between mt-20 pt-8 border-t border-dashboard-border">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-white">EduLearn</span>
          </div>
          <p className="text-sm text-gray-400">
            © 2026 TechZium Solutions. All Rights Reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

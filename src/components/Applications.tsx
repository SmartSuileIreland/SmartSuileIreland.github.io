
import { Home, Hospital, Building, Users } from "lucide-react";

export const Applications = () => {
  const applications = [
    {
      icon: Home,
      title: "Home Care",
      description: "Monitor elderly family members living independently with 24/7 fall detection and activity tracking.",
      features: ["Fall Detection", "Daily Activity Monitoring", "Emergency Alerts", "Family Notifications"]
    },
    {
      icon: Hospital,
      title: "Healthcare Facilities",
      description: "Enhance patient safety in hospitals and care facilities with continuous, non-intrusive monitoring.",
      features: ["Patient Safety", "Staff Efficiency", "Risk Assessment", "Real-time Alerts"]
    },
    {
      icon: Building,
      title: "Assisted Living",
      description: "Provide comprehensive monitoring for assisted living facilities while maintaining resident dignity.",
      features: ["Privacy Protection", "Scalable Monitoring", "Staff Dashboard", "Health Analytics"]
    },
    {
      icon: Users,
      title: "Research & Development",
      description: "Enable researchers to study human behavior patterns without invasive monitoring methods.",
      features: ["Behavioral Analytics", "Long-term Studies", "Privacy Compliance", "Data Insights"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Real-World Applications
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Smart Suile technology is designed to enhance safety and care across various environments 
            while maintaining the highest standards of privacy and dignity.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {applications.map((app, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg group"
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <app.icon className="w-8 h-8 text-blue-600" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    {app.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {app.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {app.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-gray-700">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

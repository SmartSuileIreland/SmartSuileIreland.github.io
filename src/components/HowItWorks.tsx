
import { Wifi, Brain, AlertTriangle, Shield } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      icon: Wifi,
      title: "WiFi Signal Capture",
      description: "Ambient WiFi signals are continuously monitored and analyzed using advanced signal processing techniques.",
      step: "01"
    },
    {
      icon: Brain,
      title: "AI Pattern Recognition",
      description: "Machine learning algorithms detect and interpret human motion patterns from WiFi signal variations.",
      step: "02"
    },
    {
      icon: AlertTriangle,
      title: "Activity Classification",
      description: "Real-time classification of activities including normal movement, falls, and emergency situations.",
      step: "03"
    },
    {
      icon: Shield,
      title: "Privacy-Safe Output",
      description: "Only essential activity data is processed, with no personal information or visual data collected.",
      step: "04"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How Smart Suile Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our innovative approach transforms everyday WiFi signals into powerful health monitoring data 
            through advanced AI and signal processing technology.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-blue-300 to-purple-300 z-0"></div>
                )}
                
                <div className="relative z-10 bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                  {/* Step Number */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {step.step}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


import { Shield, Wifi, Zap, Users, Eye, Heart } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Privacy-First Design",
      description: "No cameras, no wearables, no personal data collection. Our technology respects your privacy while delivering accurate monitoring.",
      color: "text-green-600"
    },
    {
      icon: Wifi,
      title: "WiFi Signal Processing",
      description: "Leverages existing WiFi infrastructure to detect subtle motion patterns through advanced signal analysis algorithms.",
      color: "text-blue-600"
    },
    {
      icon: Zap,
      title: "Real-Time Detection",
      description: "Instant activity recognition and fall detection with millisecond response times for immediate emergency response.",
      color: "text-yellow-600"
    },
    {
      icon: Users,
      title: "Elderly Care Focus",
      description: "Specifically designed for elderly care applications, providing peace of mind for families and caregivers.",
      color: "text-purple-600"
    },
    {
      icon: Eye,
      title: "Non-Intrusive Monitoring",
      description: "Completely passive sensing that doesn't interfere with daily activities or require behavior changes.",
      color: "text-indigo-600"
    },
    {
      icon: Heart,
      title: "Health & Safety",
      description: "Critical health monitoring capabilities including fall detection, mobility patterns, and emergency alerts.",
      color: "text-red-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Revolutionizing Human Activity Sensing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our cutting-edge technology combines AI, signal processing, and privacy protection 
            to deliver unprecedented monitoring capabilities without compromising personal space.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
            >
              <div className={`w-14 h-14 ${feature.color} bg-opacity-10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`w-7 h-7 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

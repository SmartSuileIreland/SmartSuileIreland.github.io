
import { Linkedin, Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Team = () => {
  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      role: "Lead AI Researcher",
      education: "PhD in Computer Science, MIT",
      expertise: "Machine Learning, Signal Processing",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      email: "sarah.chen@smartsuile.com"
    },
    {
      name: "Dr. Michael Rodriguez",
      role: "Technical Director",
      education: "PhD in Electrical Engineering, Stanford",
      expertise: "WiFi Technology, Hardware Integration",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      email: "michael.rodriguez@smartsuile.com"
    },
    {
      name: "Dr. Emily Johnson",
      role: "Privacy & Ethics Lead",
      education: "PhD in Cybersecurity, Carnegie Mellon",
      expertise: "Privacy Engineering, Data Protection",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      email: "emily.johnson@smartsuile.com"
    },
    {
      name: "Dr. James Park",
      role: "Healthcare Integration",
      education: "MD, PhD in Biomedical Engineering, Johns Hopkins",
      expertise: "Healthcare Systems, Clinical Applications",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      email: "james.park@smartsuile.com"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Expert Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            World-class researchers and engineers dedicated to advancing privacy-preserving 
            technology for human activity sensing and healthcare applications.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-6 overflow-hidden rounded-full ring-4 ring-blue-100 group-hover:ring-blue-300 transition-all duration-300">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-2">
                  {member.role}
                </p>
                <p className="text-sm text-gray-600 mb-3">
                  {member.education}
                </p>
                <p className="text-sm text-gray-700 mb-6">
                  {member.expertise}
                </p>
                
                <div className="flex justify-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-10 h-10 p-0 hover:bg-blue-50"
                  >
                    <Linkedin className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-10 h-10 p-0 hover:bg-blue-50"
                  >
                    <Mail className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


import { Linkedin, Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import zheImg from "../assets/zhe.jpg"
import svetoslavImg from "../assets/svetoslav.jpg"

export const Team = () => {
  const teamMembers = [
    {
      name: "Svetoslav Nizhnichenkov",
      role: "CEO",
      education: "MSc Research, UCD",
      expertise: "Software Development, AI",
      image: svetoslavImg,
      linkedin: "https://ie.linkedin.com/in/nizhnichenkov",
      email: "svetoslav.nizhnichenkov@gmail.com",
    },
    {
      name: "Zhe Cui",
      role: "CTO",
      education: "PhD in Electrical & Electronic Engineering, UCD",
      expertise: "IoT, Signal Processing, AI",
      image: zheImg,
      linkedin: "https://ie.linkedin.com/in/zhe-cui-8638171ba",
      email: "Zhe.Amy.cui@gmail.com",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Researchers and engineers dedicated to advancing privacy-preserving
            technology for human activity sensing and healthcare applications.
          </p>
        </div>

        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"> */}
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto justify-center"> */}
        <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              // className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full"
              className="w-72 flex flex-col justify-between bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="flex flex-col justify-between h-full text-center">
                {/* Image */}
                <div>
                  <div className="w-32 h-32 mx-auto mb-6 overflow-hidden rounded-full ring-4 ring-blue-100 group-hover:ring-blue-300 transition-all duration-300">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  {/* Name & Info */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-gray-600 mb-3">{member.education}</p>
                  <p className="text-sm text-gray-700 mb-6">{member.expertise}</p>
                </div>

                {/* Buttons at bottom */}
                <div className="flex justify-center gap-2 mt-auto">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`LinkedIn profile of ${member.name}`}
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-10 h-10 p-0 hover:bg-blue-50"
                    >
                      <Linkedin className="w-4 h-4" />
                    </Button>
                  </a>

                  <a
                    href={`mailto:${member.email}`}
                    aria-label={`Email to ${member.name}`}
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-10 h-10 p-0 hover:bg-blue-50"
                    >
                      <Mail className="w-4 h-4" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>


  );
};

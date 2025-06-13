
import { ExternalLink, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Research = () => {
  const publications = [
    {
      title: "Privacy-Preserving Human Activity Recognition Using WiFi Channel State Information",
      authors: "S. Chen, M. Rodriguez, E. Johnson",
      journal: "IEEE Transactions on Mobile Computing",
      year: "2024",
      abstract: "This paper presents a novel approach to human activity recognition using WiFi CSI data while maintaining strict privacy guarantees...",
      doi: "10.1109/TMC.2024.1234567",
      citations: 47
    },
    {
      title: "Real-Time Fall Detection Through Ambient WiFi Signal Analysis",
      authors: "M. Rodriguez, S. Chen, J. Park",
      journal: "Nature Digital Medicine",
      year: "2023",
      abstract: "We demonstrate a real-time fall detection system that achieves 98.5% accuracy using only ambient WiFi signals...",
      doi: "10.1038/s41746-023-0987-1",
      citations: 89
    },
    {
      title: "Elderly Care Monitoring: A WiFi-Based Approach for Independent Living",
      authors: "J. Park, E. Johnson, S. Chen, M. Rodriguez",
      journal: "Journal of Medical Internet Research",
      year: "2023",
      abstract: "A comprehensive study on WiFi-based monitoring systems for elderly care, focusing on privacy, accuracy, and user acceptance...",
      doi: "10.2196/45678",
      citations: 34
    },
    {
      title: "Ethical Frameworks for Passive Human Sensing Technologies",
      authors: "E. Johnson, S. Chen, J. Park",
      journal: "ACM Transactions on Computer-Human Interaction",
      year: "2024",
      abstract: "This work establishes ethical guidelines and privacy frameworks for passive sensing technologies in healthcare applications...",
      doi: "10.1145/3631234",
      citations: 23
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Published Research
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our team's research contributions to the field of privacy-preserving human activity sensing 
            and healthcare technology have been published in top-tier journals and conferences.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto space-y-8">
          {publications.map((paper, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg group"
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
                    {paper.title}
                  </h3>
                  
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {paper.authors}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {paper.year}
                    </div>
                    <div className="text-blue-600 font-medium">
                      {paper.citations} citations
                    </div>
                  </div>
                  
                  <p className="text-blue-600 font-medium mb-3">
                    {paper.journal}
                  </p>
                  
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {paper.abstract}
                  </p>
                  
                  <div className="flex flex-wrap gap-3">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="hover:bg-blue-50"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Paper
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="text-gray-600 hover:text-blue-600"
                    >
                      DOI: {paper.doi}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
          >
            View All Publications
          </Button>
        </div>
      </div>
    </section>
  );
};

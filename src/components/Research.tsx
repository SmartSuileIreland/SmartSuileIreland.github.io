
import { ExternalLink, Calendar, Users, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Research = () => {
  const publications = [
    {
      title: "A Transformer-based Multimodal Fusion Model for Efficient Crowd Counting Using Visual and Wireless Signals",
      authors: "Z. Cui, Y. Li and Le-Nam Tran",
      journal: "2025 IEEE Wireless Communications and Networking Conference (WCNC), Milan, Italy",
      year: "2025",
      doi: "10.1109/WCNC61545.2025.10978208",
      url: "https://ieeexplore.ieee.org/document/10978208"
    },
    {
      title: "ProFi-Net: Prototype-based Feature Attention with Curriculum Augmentation for WiFi-based Gesture Recognition",
      authors: "Zhe Cui, Shuxian Zhang, Kangzhi Lou, Le-Nam Tran",
      journal: "The 9th APWeb-WAIM joint International Conference on Web and Big Data",
      year: "2025",
      doi: "10.48550/arXiv.2504.20193",
      url: "https://arxiv.org/abs/2504.20193"
    },
    {
      title: "Wiviformer: Crowd Counting Based on Multimodal Fusion of Visual Image and Wireless Signal",
      authors: "Cui, Zhe and Li, Yuli and Tran, Le-Nam",
      journal: "SSRN",
      year: "2024",
      doi: "10.2139/ssrn.4963757",
      url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4963757"
    },
    {
      title: "An Novel Indoor Crowd Counting Approach Based on WiFi Signals",
      authors: "Y. Lil, X. Lu, Z. Cui, H. Wang and C. Sheng",
      journal: "2022 41st Chinese Control Conference (CCC), Hefei, China",
      year: "2022",
      doi: "10.23919/CCC55666.2022.9901666",
      url: "https://ieeexplore.ieee.org/document/9901666"
    },
    {
      title: "Human Behavior Recognition Method Based on WiFi Channel Status Information",
      authors: "Y. Zhou, Z. Cui, X. Lu, H. Wang, C. Sheng and Z. Zhang",
      journal: "2021 40th Chinese Control Conference (CCC), Shanghai, China",
      year: "2021",
      doi: "10.23919/CCC52363.2021.9550510",
      url: "https://ieeexplore.ieee.org/document/9550510"
    },
    {
      title: "A passive Indoor Localization with Convolutional Neural Network Approach",
      authors: "Y. Xiao, Z. Cui, X. Lu and H. Wang",
      journal: "2020 Chinese Automation Congress (CAC), Shanghai, China",
      year: "2020",
      doi: "10.1109/CAC51589.2020.9327135",
      url: "https://ieeexplore.ieee.org/abstract/document/9327135"
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
                      <Users className="w-4 h-4 flex-none" />
                      <span className="flex-1 break-words">{paper.authors}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4 flex-none" />
                      <span className="flex-1 break-words">{paper.year}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-sm text-gray-600 mb-4 flex-wrap">
                    <MapPin className="w-4 h-4 flex-none" />
                    <span className="flex-1 break-words">{paper.journal}</span>
                  </div>

                  {/* <a
                    href={paper.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full"
                  >
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-gray-600 hover:text-blue-600 p-0 h-auto w-full justify-start whitespace-normal"
                    >
                      <ExternalLink className="w-4 h-4 mr-1 flex-none" />
                      <span className="flex-1 break-words">
                        DOI: {paper.doi}
                      </span>
                    </Button>
                  </a> */}

                  <a href={paper.url} target="_blank" rel="noopener noreferrer" className="inline-block w-full">
                    <Button variant="ghost" size="sm" className="text-gray-600 hover:text-blue-600 p-0 h-auto">
                      <ExternalLink className="w-4 h-4 mr-1 flex-none" />
                      View Paper
                    </Button>
                  </a>




                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
          >
            View All Publications
          </Button>
        </div> */}
      </div>
    </section>
  );
};

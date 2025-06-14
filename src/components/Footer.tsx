
import { Mail, Linkedin, Twitter, Github } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="/lovable-uploads/b7b9bb93-2746-4a3b-94f7-710bbc545a35.png" 
                alt="Smart Suile Logo" 
                className="w-10 h-10"
              />
              <span className="text-2xl font-bold">Smart Suile</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Revolutionizing human activity sensing through AI-powered WiFi technology. 
              Privacy-first solutions for healthcare, elderly care, and research applications.
            </p>
            {/* <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div> */}
          </div>
          
          {/* Quick Links */}
          {/* <div>
            <h3 className="text-lg font-semibold mb-6">Technology</h3>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-blue-400 transition-colors">How It Works</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Applications</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy & Security</a></li>
            </ul>
          </div> */}
          
          {/* Research */}
          {/* <div>
            <h3 className="text-lg font-semibold mb-6">Research</h3>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Publications</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Team</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Collaborations</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Open Source</a></li>
            </ul>
          </div> */}

        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 Smart Suile. All rights reserved.
            </p>
            {/* <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Cookie Policy</a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};



import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Wifi, Activity } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          {/* <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-8 animate-fade-in">
            <Shield className="w-4 h-4" />
            Privacy-First Technology
          </div> */}

          {/* Logo and Main Headline */}
          {/* <div className="mb-6 animate-fade-in delay-200">
            <div className="relative inline-block mb-6">
              <img
                src="/lovable-uploads/b7b9bb93-2746-4a3b-94f7-710bbc545a35.png"
                alt="Smart Suile Logo"
                className="w-64 h-64 md:w-72 md:h-72 mx-auto drop-shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-xl scale-110"></div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Smart Suile
              </span>
            </h1>
          </div> */}

          <div className="mb-6 animate-fade-in delay-200">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-xl scale-110"></div>
              <img
                src="/lovable-uploads/b7b9bb93-2746-4a3b-94f7-710bbc545a35.png"
                alt="Smart Suile Logo"
                // className="w-72 h-72 md:w-96 md:h-96 mx-auto drop-shadow-lg relative z-10"
                className="w-80 h-80 md:w-[28rem] md:h-[28rem] mx-auto drop-shadow-lg relative z-10"
              />
            </div>
          </div>


          <h2 className="text-2xl md:text-3xl text-gray-700 mb-8 animate-fade-in delay-300">
            AI-Powered Human Activity Sensing Through WiFi
          </h2>

          {/* Description */}
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-400">
            Revolutionary technology that detects and interprets real-time motion patterns using ambient WiFi signals.
            No cameras. No wearables. Complete privacy protection.
          </p>

          {/* Key Features Icons */}
          <div className="flex justify-center gap-8 mb-12 animate-fade-in delay-500">
            <div className="flex items-center gap-2 text-gray-600">
              <Wifi className="w-6 h-6 text-blue-600" />
              <span className="font-medium">WiFi-Based</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Activity className="w-6 h-6 text-purple-600" />
              <span className="font-medium">Real-Time Detection</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Shield className="w-6 h-6 text-green-600" />
              <span className="font-medium">Privacy Protected</span>
            </div>
          </div>

          {/* CTA Buttons */}
          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-600">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Learn More
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-gray-300 hover:border-blue-600 px-8 py-4 text-lg font-semibold transition-all duration-300"
            >
              View Research
            </Button>
          </div> */}

        </div>
      </div>
    </section>
  );
};


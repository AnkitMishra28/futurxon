import React from "react";
import Swift from "../../../images/swift.svg";
import Kotlin from "../../../images/kotlin.svg";
import ReactNative from '../../../images/react-native.svg';
import Flutter from "../../../images/flutter.svg";
import Firebase from "../../../images/firebase.svg";
import AndroidStudio from "../../../images/android-studio.svg";

const MobileTechStackUI = () => {
  const technologies = [
    { img: Swift },
    { img: Kotlin },
    { img: ReactNative },
    { img: Flutter },
    { img: Firebase },
    { img: AndroidStudio },
  ];

  return (
    <div className="w-full py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
        {/* Left Section - Text Content */}
        <div className="lg:w-1/2 space-y-8 pr-0 lg:pr-12">
          <div className="space-y-6 border-b border-white/10 pb-8">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-blue-300 to-pink-400 bg-clip-text text-transparent leading-tight">
              Mobile-First Technology Ecosystem
            </h1>
            <p className="text-xl text-gray-300/90 md:text-2xl max-w-2xl leading-relaxed">
              Leveraging modern mobile development frameworks and cloud services to create 
              high-performance native and cross-platform applications with seamless user experiences.
            </p>
          </div>
        </div>

        {/* Right Section - Tech Grid */}
        <div className="lg:w-1/2 w-full">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="group relative p-1 backdrop-blur-xl bg-gradient-to-br from-white/5 to-white/3 border border-white/10 rounded-2xl transition-all duration-500 hover:scale-[1.05] hover:border-purple-400/30 hover:shadow-2xl hover:shadow-purple-500/20"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                <div className="relative z-10 aspect-square flex items-center justify-center p-4">
                  <img
                    src={tech.img}
                    alt="Mobile Technology"
                    className="w-full h-auto max-h-32 object-contain grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:drop-shadow-[0_0_25px_rgba(168,85,247,0.3)]"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileTechStackUI;
import React from 'react';

const Mapping = () => {
    return (
        <div className="w-screen h-screen bg-gray-900 overflow-hidden flex flex-col items-center justify-center relative px-4 md:px-8">
            {/* Background Tech SVG Pattern */}
            <div className="absolute inset-0 z-0 opacity-20">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path
                        d="M0 50 Q25 30 50 50 T100 50"
                        stroke="currentColor"
                        strokeWidth="0.5"
                        fill="none"
                        className="text-gray-800"
                    />
                    <path
                        d="M0 30 Q40 50 80 30 T160 30"
                        stroke="currentColor"
                        strokeWidth="0.5"
                        fill="none"
                        className="text-gray-800"
                        transform="translate(-20 20)"
                    />
                </svg>
            </div>

            {/* Content Container */}
            <div className="relative z-10 w-full text-center">
                {/* Title Section */}
                <div className="flex flex-col items-center">
                    <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold text-gray-100 mb-4 leading-tight">
                        Next-Gen Network
                        <span className="text-purple-400"> Mapping Solutions</span>
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 leading-relaxed max-w-xl">
                        Real-time topology visualization and intelligent path optimization for distributed systems
                    </p>
                </div>

                {/* Motion Elements */}
                <div className="mb-8 group">
                    <div className="overflow-hidden relative h-16 sm:h-20">
                        {/* Left to Right Scroll */}
                        <div className="absolute top-0 left-0 w-[200%] flex items-center space-x-6 sm:space-x-8 animate-scroll-left hover:animation-paused">
                            {[...Array(4)].map((_, i) => (
                                <span
                                    key={i}
                                    className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-400 hover:text-purple-400 transition-colors"
                                >
                                    DynamicNodeRouting
                                    <span className="mx-4 sm:mx-6 text-purple-500">◆</span>
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Right to Left Scroll */}
                    <div className="overflow-hidden relative h-16 sm:h-20 mt-4">
                        <div className="absolute top-0 right-0 w-[200%] flex items-center space-x-6 sm:space-x-8 animate-scroll-right hover:animation-paused">
                            {[...Array(4)].map((_, i) => (
                                <span
                                    key={i}
                                    className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-400 hover:text-purple-400 transition-colors"
                                >
                                    NeuralPathOptimization
                                    <span className="mx-4 sm:mx-6 text-purple-500">◆</span>
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* CTA Button */}
                <div className="flex justify-center">
                    <button className="w-3/4 sm:w-2/3 md:w-1/3 px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-gray-800 to-purple-900 rounded-lg text-gray-300 font-semibold hover:from-blue-900 hover:to-gray-800 transition-all hover:scale-105 hover:shadow-xl border border-gray-700/50">
                        Initialize Network Scan
                    </button>
                </div>
            </div>

            {/* Custom Animations */}
            <style jsx>{`
                @keyframes scroll-left {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                @keyframes scroll-right {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(50%); }
                }
                .animate-scroll-left {
                    animation: scroll-left 20s linear infinite;
                }
                .animate-scroll-right {
                    animation: scroll-right 20s linear infinite;
                }
                .hover\:animation-paused:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </div>
    );
};

export default Mapping;

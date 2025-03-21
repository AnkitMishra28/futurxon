import React from 'react';
import Bgvideo from '../../../src/video/bgvideo.mp4';

const How = () => {
  return (
    <div className='h-full w-full flex flex-col lg:flex-row items-center justify-center perspective-[600px] px-6 md:px-12 lg:px-20 relative'>
      {/* Media SVG Background */}
      <div className='absolute inset-0 overflow-hidden -z-10'>
        <svg className='absolute right-0 top-0 h-full w-1/2 opacity-5' viewBox='0 0 100 100'>
          <g className='animate-float'>
            <path d='M50,10 L90,50 L50,90 L10,50 Z' fill='none' stroke='currentColor' strokeWidth='0.5' className='text-purple-400' />
            <circle cx='80' cy='20' r='8' className='text-blue-400 animate-pulse' fill='none' stroke='currentColor' strokeWidth='0.5' />
            <circle cx='20' cy='70' r='12' className='text-purple-400 animate-pulse delay-700' fill='none' stroke='currentColor' strokeWidth='0.5' />
            <path d='M20,20 Q50,50 80,80' stroke='currentColor' strokeWidth='0.2' className='text-blue-400/50' strokeDasharray='4 2' />
          </g>
        </svg>
      </div>

      {/* Background SVG patterns */}
      <svg className='absolute inset-0 -z-10 opacity-10' width='100%' height='100%'>
        <pattern id='grid' width='40' height='40' patternUnits='userSpaceOnUse'>
          <path d='M 40 0 L 0 0 0 40' fill='none' stroke='white' strokeWidth='0.5'/>
        </pattern>
        <rect width='100%' height='100%' fill='url(#grid)' />
        <circle cx='50%' cy='50%' r='200' fill='url(#grid)' className='animate-pulse opacity-20'/>
      </svg>

      {/* Decorative circles */}
      <div className='absolute top-10 md:top-20 right-10 md:right-20 w-32 md:w-64 h-32 md:h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse'></div>
      <div className='absolute bottom-10 md:bottom-20 left-10 md:left-20 w-24 md:w-48 h-24 md:h-48 bg-blue-500/10 rounded-full blur-2xl animate-pulse delay-1000'></div>

      <div className='relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-64 md:h-80 lg:h-96 transform-gpu translate-z-3 rotate-y-10 lg:rotate-y-20 hover:translate-z-10 transition-all duration-500 rounded-4xl shadow-lg shadow-gray-800/50'>
        <video autoPlay loop muted playsInline className='w-full h-full object-cover rounded-4xl contrast-120'>
          <source src={Bgvideo} type='video/mp4' />
        </video>
      </div>

      <div className='w-full max-w-lg space-y-6 animate-fade-in-right mt-8 lg:mt-0 lg:pl-10 xl:pl-20 text-center lg:text-left'>
        <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent drop-shadow-lg leading-tight'>
          Bacancy AI Agent: Smarter Coding, Faster Innovation
        </h2>
        <p className='text-white/80 text-sm sm:text-base md:text-lg leading-relaxed'>
          Try our AI Agent to complete your project or start from scratch! Get automation, development, and everything in one place.
        </p>
        <div className='flex justify-center lg:justify-start gap-4 mt-6'>
          <div className='h-1 w-10 sm:w-12 md:w-20 bg-purple-400 rounded-full animate-pulse'></div>
          <div className='h-1 w-6 sm:w-8 md:w-10 bg-blue-400 rounded-full animate-pulse delay-100'></div>
          <div className='h-1 w-3 sm:w-4 md:w-5 bg-purple-400 rounded-full animate-pulse delay-200'></div>
        </div>
        
        <button className='mt-6 md:mt-8 px-4 sm:px-6 md:px-8 py-2 sm:py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg text-white font-semibold tracking-wide transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 active:scale-95 animate-fade-in flex items-center gap-2 group'>
          START CODING SMARTER
          <svg className='w-4 sm:w-5 h-4 sm:h-5 transform transition-transform group-hover:translate-x-1' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 7l5 5m0 0l-5 5m5-5H6' />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default How;
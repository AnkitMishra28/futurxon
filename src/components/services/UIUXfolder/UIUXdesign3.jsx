import React from "react";
import Trackpng from "../../../images/screen.png"

const devopsProcess = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center px-4 py-20">
      {/* Header Section */}
      <div className="relative z-10 text-center mb-16 max-w-4xl px-4">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-red-400 bg-clip-text text-transparent">
          Building Custom UI-UX Design
          <br />
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            The Agile Way
          </span>
        </h1>
        <p className="text-xl text-gray-300/90">
          We harness the power of{' '}
          <span className="bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent font-medium">
            agile application development
          </span>{' '}
          for all our UI-UX projects.
        </p>
      </div>

      {/* Process Steps - Simplified */}
      <div className="relative z-10 w-full px-4 flex justify-center items-center border-0 border-amber-50">
        <img src={Trackpng} alt="image" className="rounded-4xl"/>
      </div>
    </div>
  );
};

export default devopsProcess;
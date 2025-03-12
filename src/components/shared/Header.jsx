import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 flex items-center justify-between px-6 py-4 bg-black/80 backdrop-blur-sm z-50">
      <div className="flex items-center gap-4">
        <div className="relative group">
          {/* Outer glow layer */}
          <div className="absolute -inset-2 bg-purple-500/30 rounded-xl blur-xl
                         group-hover:bg-purple-500/40 
                         opacity-75 group-hover:opacity-100 
                         transition-all duration-500
                         animate-pulse-slow"></div>
          {/* Inner glow layer */}
          <div className="absolute -inset-1 bg-purple-400/20 rounded-lg blur-md
                         group-hover:bg-purple-400/30
                         opacity-75 group-hover:opacity-100
                         transition-all duration-500"></div>
          <div className="relative">
            <img 
              src="/src/UMass-Lowell_logo.svg.png" 
              alt="UMass Lowell Logo" 
              className="h-14 w-auto rounded-lg -mt-1
                       shadow-[0_0_15px_rgba(168,85,247,0.4)]
                       group-hover:shadow-[0_0_25px_rgba(168,85,247,0.5)]
                       transition-all duration-500
                       relative z-10"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-purple-400 transition-colors
                         [text-shadow:_0_0_10px_rgb(168_85_247_/_60%),_0_0_20px_rgb(168_85_247_/_40%)]
                         hover:text-purple-300 hover:[text-shadow:_0_0_15px_rgb(168_85_247_/_70%),_0_0_30px_rgb(168_85_247_/_50%)]">
              UTeach
            </span>
            <span className="text-sm text-gray-400">
              University of Massachusetts Lowell
            </span>
          </div>
        </div>
      </div>
      <nav>
        <ul className="flex gap-4">
          <li>
            <Link 
              to="/" 
              className="text-gray-200 hover:text-purple-300 transition-colors
                       px-4 py-2 rounded-full border border-purple-500/20
                       hover:border-purple-500/40 hover:bg-purple-500/10"
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/project-overview" 
              className="text-gray-200 hover:text-purple-300 transition-colors
                       px-4 py-2 rounded-full border border-purple-500/20
                       hover:border-purple-500/40 hover:bg-purple-500/10"
            >
              Project Overview
            </Link>
          </li>
          <li>
            <Link 
              to="/stem-minor" 
              className="text-gray-200 hover:text-purple-300 transition-colors
                       px-4 py-2 rounded-full border border-purple-500/20
                       hover:border-purple-500/40 hover:bg-purple-500/10"
            >
              STEM Minor
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header; 
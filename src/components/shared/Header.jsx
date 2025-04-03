import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 flex items-center justify-between px-6 py-4 bg-black/80 backdrop-blur-sm z-50">
      <div className="flex items-center gap-4">
        <div className="relative group">
          {/* Outer glow layer */}
          <div className="absolute -inset-2 bg-cyan-500/30 rounded-xl blur-xl
                         group-hover:bg-cyan-500/40 
                         opacity-75 group-hover:opacity-100 
                         transition-all duration-500
                         animate-pulse-slow"></div>
          {/* Inner glow layer */}
          <div className="absolute -inset-1 bg-cyan-400/20 rounded-lg blur-md
                         group-hover:bg-cyan-400/30
                         opacity-75 group-hover:opacity-100
                         transition-all duration-500"></div>
          <div className="relative">
            <img 
              src="/UTeach/images/UMass-Lowell_logo.svg.png" 
              alt="UMass Lowell Logo" 
              className="h-14 w-auto rounded-lg -mt-1
                       shadow-[0_0_15px_rgba(6,182,212,0.4)]
                       group-hover:shadow-[0_0_25px_rgba(6,182,212,0.5)]
                       transition-all duration-500
                       relative z-10"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-cyan-400 transition-all duration-300
                         [text-shadow:_0_0_10px_rgb(6_182_212_/_60%),_0_0_20px_rgb(6_182_212_/_40%),_0_0_30px_rgb(168_85_247_/_50%),_0_0_40px_rgb(168_85_247_/_30%)]
                         hover:text-cyan-300 
                         hover:[text-shadow:_0_0_15px_rgb(6_182_212_/_70%),_0_0_25px_rgb(6_182_212_/_50%),_0_0_35px_rgb(168_85_247_/_60%),_0_0_50px_rgb(168_85_247_/_40%)]
                         relative 
                         after:absolute after:inset-0 after:bg-gradient-to-r after:from-cyan-400/10 after:to-purple-400/10 after:blur-lg after:opacity-0 
                         hover:after:opacity-100 after:transition-opacity after:duration-300
                         before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-500/0 before:via-cyan-500/10 before:to-purple-500/0 
                         before:animate-shimmer before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300">
              UTeach
            </span>
            <span className="text-sm text-gray-400 transition-colors hover:text-cyan-300/80">
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
              className="text-cyan-300 transition-all duration-300
                       px-4 py-2 rounded-full border border-cyan-500/20
                       hover:border-cyan-400/50 hover:bg-cyan-500/10
                       [text-shadow:_0_0_10px_rgb(6_182_212_/_40%)]
                       hover:[text-shadow:_0_0_15px_rgb(6_182_212_/_60%),_0_0_30px_rgb(6_182_212_/_30%)]
                       relative after:absolute after:inset-0 after:bg-cyan-400/5 after:blur-sm after:opacity-0 
                       hover:after:opacity-100 after:transition-opacity after:duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/project-overview" 
              className="text-cyan-300 transition-all duration-300
                       px-4 py-2 rounded-full border border-cyan-500/20
                       hover:border-cyan-400/50 hover:bg-cyan-500/10
                       [text-shadow:_0_0_10px_rgb(6_182_212_/_40%)]
                       hover:[text-shadow:_0_0_15px_rgb(6_182_212_/_60%),_0_0_30px_rgb(6_182_212_/_30%)]
                       relative after:absolute after:inset-0 after:bg-cyan-400/5 after:blur-sm after:opacity-0 
                       hover:after:opacity-100 after:transition-opacity after:duration-300"
            >
              Project Overview
            </Link>
          </li>
          <li>
            <Link 
              to="/stem-minor" 
              className="text-cyan-300 transition-all duration-300
                       px-4 py-2 rounded-full border border-cyan-500/20
                       hover:border-cyan-400/50 hover:bg-cyan-500/10
                       [text-shadow:_0_0_10px_rgb(6_182_212_/_40%)]
                       hover:[text-shadow:_0_0_15px_rgb(6_182_212_/_60%),_0_0_30px_rgb(6_182_212_/_30%)]
                       relative after:absolute after:inset-0 after:bg-cyan-400/5 after:blur-sm after:opacity-0 
                       hover:after:opacity-100 after:transition-opacity after:duration-300"
            >
              STEM Minor
            </Link>
          </li>
          <li>
            <Link 
              to="/presentation" 
              className="text-cyan-300 transition-all duration-300
                       px-4 py-2 rounded-full border border-cyan-500/20
                       hover:border-cyan-400/50 hover:bg-cyan-500/10
                       [text-shadow:_0_0_10px_rgb(6_182_212_/_40%)]
                       hover:[text-shadow:_0_0_15px_rgb(6_182_212_/_60%),_0_0_30px_rgb(6_182_212_/_30%)]
                       relative after:absolute after:inset-0 after:bg-cyan-400/5 after:blur-sm after:opacity-0 
                       hover:after:opacity-100 after:transition-opacity after:duration-300"
            >
              Presentation
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header; 
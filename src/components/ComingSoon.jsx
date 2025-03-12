import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BackgroundCircles from './ui/background-circles';

const ComingSoon = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Add animation classes after component mounts
    const elements = document.querySelectorAll('.animate-on-mount');
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('animate-fade-in');
      }, index * 200);
    });
  }, []);

  const handleGoBack = () => {
    navigate('/', { 
      state: { fromComingSoon: true },
      replace: true 
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-black">
      {/* Background */}
      <BackgroundCircles />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Video Icon */}
        <div className="animate-on-mount opacity-0 mb-8 text-purple-500">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="mx-auto h-20 w-20 animate-[pulse_2s_ease-in-out_infinite]"
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={1.5} 
              d="M7 4v16m0-16l11 8-11 8m0-16v16" 
              className="[filter:drop-shadow(0_0_10px_rgb(168_85_247_/_60%))]"
            />
          </svg>
        </div>

        {/* Video Label */}
        <div className="animate-on-mount opacity-0 mb-6 text-purple-300 text-xl font-medium tracking-wide
                      [text-shadow:_0_0_10px_rgb(124_58_237_/_60%)]">
          Video Storytelling
        </div>

        {/* Main Title */}
        <h1 className="animate-on-mount opacity-0 text-5xl md:text-7xl font-black mb-8 text-white
                     [text-shadow:_0_0_20px_rgb(124_58_237_/_80%),_0_0_40px_rgb(124_58_237_/_60%),_0_0_80px_rgb(124_58_237_/_40%)]
                     animate-[textGlow_2s_ease-in-out_infinite]">
          Coming Soon...
        </h1>
        
        {/* Description paragraphs with staggered animation */}
        <p className="animate-on-mount opacity-0 text-xl md:text-2xl text-white mb-6 leading-relaxed
                    [text-shadow:_0_0_15px_rgb(124_58_237_/_70%),_0_0_30px_rgb(124_58_237_/_50%),_0_0_60px_rgb(124_58_237_/_30%)]">
          We're crafting an inspiring video journey about a future shaped by human connection and creativity.
        </p>
        
        <p className="animate-on-mount opacity-0 text-xl md:text-2xl text-white mb-6 leading-relaxed
                    [text-shadow:_0_0_15px_rgb(124_58_237_/_70%),_0_0_30px_rgb(124_58_237_/_50%),_0_0_60px_rgb(124_58_237_/_30%)]">
          Our story explores how technology and teaching come together to create something extraordinary.
        </p>
        
        <p className="animate-on-mount opacity-0 text-xl md:text-2xl text-white mb-12 leading-relaxed
                    [text-shadow:_0_0_15px_rgb(124_58_237_/_70%),_0_0_30px_rgb(124_58_237_/_50%),_0_0_60px_rgb(124_58_237_/_30%)]">
          Stay tuned for a visual journey that showcases why teaching is more important than ever.
        </p>

        {/* Duration Indicator */}
        <div className="animate-on-mount opacity-0 mb-8 text-purple-300/80 text-lg
                      [text-shadow:_0_0_10px_rgb(124_58_237_/_40%)]">
          Expected Duration: 3-5 minutes
        </div>
        
        {/* Button with hover effects */}
        <button 
          className="animate-on-mount opacity-0 btn-primary text-xl px-12 py-4 neon-button"
          onClick={handleGoBack}
        >
          <span className="relative z-10">Go Back</span>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-purple-800/5
                        transform scale-x-0 group-hover:scale-x-100
                        transition-transform duration-500 origin-left"></div>
        </button>
      </div>

      {/* Animated background elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-radial from-purple-500/20 via-transparent to-transparent"></div>
      </div>
    </div>
  );
};

export default ComingSoon; 
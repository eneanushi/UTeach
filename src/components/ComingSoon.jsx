import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BackgroundBoxes from './ui/background-boxes';

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
      <BackgroundBoxes />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Main Title */}
        <h1 className="animate-on-mount opacity-0 text-5xl md:text-7xl font-black mb-8 text-white
                     [text-shadow:_0_0_30px_rgb(168_85_247_/_40%),_0_0_60px_rgb(168_85_247_/_20%)]">
          Coming Soon...
        </h1>
        
        {/* Description paragraphs with staggered animation */}
        <p className="animate-on-mount opacity-0 text-xl md:text-2xl text-gray-200 mb-6 leading-relaxed
                    [text-shadow:_0_0_15px_rgb(168_85_247_/_30%)]">
          We're crafting a special message about a future shaped by human connection and creativity.
        </p>
        
        <p className="animate-on-mount opacity-0 text-xl md:text-2xl text-gray-200 mb-6 leading-relaxed
                    [text-shadow:_0_0_15px_rgb(168_85_247_/_30%)]">
          Because the future isn't just about technology—it's about inspiring the minds behind it.
        </p>
        
        <p className="animate-on-mount opacity-0 text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed
                    [text-shadow:_0_0_15px_rgb(168_85_247_/_30%)]">
          Stay tuned to see why teaching is more important than ever.
        </p>
        
        {/* Button with hover effects */}
        <button 
          className="animate-on-mount opacity-0 btn-primary text-xl px-12 py-4
                     relative overflow-hidden group
                     transition-all duration-500 ease-out
                     hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.5)]"
          onClick={handleGoBack}
        >
          <span className="relative z-10">Go Back</span>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-800
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
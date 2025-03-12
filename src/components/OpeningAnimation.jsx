import React, { useState, useEffect } from 'react';
import BackgroundCircles from './ui/background-circles';

const OpeningAnimation = ({ onComplete }) => {
  const [showAnimation, setShowAnimation] = useState(true);
  const [textPhase, setTextPhase] = useState(0);
  const [showFinalQuote, setShowFinalQuote] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Sequence the animations
    const sequence = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000)); // Initial delay
      setTextPhase(1); // Show "UTeach Program"
      await new Promise(resolve => setTimeout(resolve, 2500));
      setTextPhase(2); // Show "Supported by University..."
      await new Promise(resolve => setTimeout(resolve, 2500));
      setTextPhase(3); // Show "by Enea Nushi"
      await new Promise(resolve => setTimeout(resolve, 2000));
      setTextPhase(0); // Fade out all initial text
      await new Promise(resolve => setTimeout(resolve, 1000)); // Wait for fade out
      setShowFinalQuote(true); // Show final quote
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // Start exit animation
      setIsExiting(true);
      // Wait for exit animation to complete before hiding
      await new Promise(resolve => setTimeout(resolve, 1200));
      setShowAnimation(false);
      onComplete();
    };

    sequence();
  }, [onComplete]);

  if (!showAnimation) return null;

  return (
    <div className={`fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden
                    transition-all duration-[1200ms] ease-in-out transform
                    ${isExiting ? 'opacity-0 scale-105 blur-md' : 'opacity-100 scale-100 blur-0'}`}>
      <BackgroundCircles />
      <div className={`relative z-10 flex flex-col items-center justify-center gap-8 px-4 text-center
                      transition-all duration-[1200ms] transform
                      ${isExiting ? 'scale-95' : 'scale-100'}`}>
        {/* Initial text group - only show if not showing final quote */}
        <div className={`transition-all duration-1000 transform
                        ${!showFinalQuote ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          {/* UTeach Program */}
          <h1 
            className={`text-7xl font-black transition-all duration-1000 mb-8 transform
                       ${textPhase >= 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}
                       text-white
                       [text-shadow:_0_0_20px_rgb(124_58_237_/_80%),_0_0_40px_rgb(124_58_237_/_60%),_0_0_80px_rgb(124_58_237_/_40%)]`}
          >
            UTeach Program
          </h1>
          
          {/* Supported by University */}
          <h2 
            className={`text-4xl font-bold text-center transition-all duration-1000 max-w-3xl mb-8 transform
                       ${textPhase >= 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}
                       text-white
                       [text-shadow:_0_0_15px_rgb(124_58_237_/_70%),_0_0_30px_rgb(124_58_237_/_50%),_0_0_60px_rgb(124_58_237_/_30%)]`}
          >
            Supported by University of Massachusetts Lowell
          </h2>

          {/* By Enea Nushi */}
          <p 
            className={`text-2xl transition-all duration-1000 transform
                       ${textPhase >= 3 ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}
                       text-white
                       [text-shadow:_0_0_10px_rgb(124_58_237_/_60%),_0_0_20px_rgb(124_58_237_/_40%),_0_0_40px_rgb(124_58_237_/_20%)]`}
          >
            by Enea Nushi
          </p>
        </div>

        {/* Final quote */}
        <div className={`transition-all duration-1000 absolute transform
                        ${showFinalQuote ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
          <h2 
            className={`text-6xl font-bold text-center max-w-4xl
                       text-white
                       [text-shadow:_0_0_20px_rgb(124_58_237_/_80%),_0_0_40px_rgb(124_58_237_/_60%),_0_0_80px_rgb(124_58_237_/_40%)]
                       animate-[textGlow_2s_ease-in-out_infinite]
                       ${isExiting ? 'scale-95 blur-[2px]' : 'scale-100 blur-0'}`}
          >
            AI is shaping industries, but teachers shape humanity
          </h2>
        </div>
      </div>

      <style jsx>{`
        @keyframes textGlow {
          0%, 100% {
            text-shadow: 0 0 20px rgba(124, 58, 237, 0.8),
                        0 0 40px rgba(124, 58, 237, 0.6),
                        0 0 80px rgba(124, 58, 237, 0.4);
          }
          50% {
            text-shadow: 0 0 25px rgba(124, 58, 237, 0.9),
                        0 0 50px rgba(124, 58, 237, 0.7),
                        0 0 100px rgba(124, 58, 237, 0.5);
          }
        }
      `}</style>
    </div>
  );
};

export default OpeningAnimation; 
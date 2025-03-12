import React, { useEffect } from 'react';
import BackgroundBoxes from './ui/background-boxes';
import Header from './shared/Header';
import { initScrollAnimation } from '../utils/scrollAnimation';

// Import images
import uteach1 from '../UTeach images/uteach1.webp';
import uteach2 from '../UTeach images/uteach2.webp';
import uteach3 from '../UTeach images/3.webp';
import uteach4 from '../UTeach images/4.webp';
import uteach5 from '../UTeach images/5.webp';
import uteachMain from '../UTeach images/uteach.webp';

const ProjectOverview = () => {
  useEffect(() => {
    initScrollAnimation();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-12 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <BackgroundBoxes />
      </div>
      
      {/* Additional ambient light */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-radial from-purple-500/5 via-transparent to-transparent"></div>
      </div>

      {/* Header */}
      <Header />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 max-w-6xl">
        <div className="bg-black/40 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-purple-500/20
                      shadow-[0_0_30px_rgba(168,85,247,0.1)] hover:shadow-[0_0_40px_rgba(168,85,247,0.15)]
                      transition-all duration-500">
          <div className="relative mb-16 scroll-animate">
            <h1 className="text-5xl md:text-6xl font-black mb-6 text-center text-white
                         [text-shadow:_0_0_30px_rgb(168_85_247_/_40%),_0_0_60px_rgb(168_85_247_/_20%)]">
              Project Overview
            </h1>
            <h2 className="text-2xl md:text-3xl text-center text-white font-medium">
              Lead the Way to Discovery – Explore STEM Teaching with UTeach
            </h2>
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-32 h-1 
                          bg-gradient-to-r from-transparent via-white to-transparent"></div>
          </div>

          <div className="space-y-8 text-white">
            <div className="bg-purple-500/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/10
                          transform hover:scale-[1.02] transition-all duration-300
                          hover:shadow-[0_0_25px_rgba(168,85,247,0.1)] scroll-animate">
              <p className="text-lg leading-relaxed">
                Welcome to our project overview! This initiative is an honors fellowship supported by the 
                University of Massachusetts Lowell (UML), guided by Dr. Sumudu Lewis. The project's central 
                purpose is to creatively inspire individuals to consider careers in STEM education through 
                impactful storytelling and informative content.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white mb-6
                           [text-shadow:_0_0_15px_rgb(168_85_247_/_40%)]
                           border-l-4 border-white/50 pl-4 scroll-animate">
                Project Objectives
              </h2>
              
              <div className="space-y-8 pl-4">
                <div className="bg-purple-500/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/10
                             transform hover:scale-[1.02] transition-all duration-300
                             hover:shadow-[0_0_25px_rgba(168,85,247,0.1)] scroll-animate">
                  <h3 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20 text-lg">1</span>
                    In-depth Research
                  </h3>
                  <ul className="list-none space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-white">•</span>
                      <span>Conduct comprehensive research into STEM education and the UTeach program.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-white">•</span>
                      <span>Understand challenges, motivations, and the societal importance of STEM educators.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-white">•</span>
                      <span>Explore the relationship between technology (AI) and human-led teaching.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-purple-500/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/10
                             transform hover:scale-[1.02] transition-all duration-300
                             hover:shadow-[0_0_25px_rgba(168,85,247,0.1)] scroll-animate">
                  <h3 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20 text-lg">2</span>
                    Webpage Creation
                  </h3>
                  <ul className="list-none space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-white">•</span>
                      <span>Develop an informative webpage featuring:</span>
                    </li>
                    <ul className="list-none space-y-2 ml-8">
                      <li className="flex items-start gap-2">
                        <span className="text-white/70">○</span>
                        <span>Detailed research findings</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-white/70">○</span>
                        <span>General information about the UTeach program and its mission</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-white/70">○</span>
                        <span>Relevant contact information for interested participants or stakeholders</span>
                      </li>
                    </ul>
                  </ul>
                </div>

                <div className="bg-purple-500/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/10
                             transform hover:scale-[1.02] transition-all duration-300
                             hover:shadow-[0_0_25px_rgba(168,85,247,0.1)] scroll-animate">
                  <h3 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20 text-lg">3</span>
                    Video Storytelling
                  </h3>
                  <ul className="list-none space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-white">•</span>
                      <span>Create a compelling, emotionally resonant advertisement designed to inspire viewers.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-white">•</span>
                      <span>Highlight the unique human qualities and emotional connections teachers bring to STEM fields.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-white">•</span>
                      <span>Portray AI as a supportive educational tool, not as a replacement for human educators.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-white">•</span>
                      <span>The final deliverable will be a visually engaging, 1-2 minute video suitable for presentations at orientations, schools, and promotional events.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white mb-6
                           [text-shadow:_0_0_15px_rgb(168_85_247_/_40%)]
                           border-l-4 border-white/50 pl-4 scroll-animate">
                Why this Project?
              </h2>
              <div className="bg-purple-500/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/10
                           transform hover:scale-[1.02] transition-all duration-300
                           hover:shadow-[0_0_25px_rgba(168,85,247,0.1)] scroll-animate">
                <ul className="list-none space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-white">•</span>
                    <span>STEM educators profoundly impact society by shaping future innovators, critical thinkers, and problem solvers.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white">•</span>
                    <span>Emphasizing the essential role of human teachers is crucial in our increasingly technology-driven world.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white">•</span>
                    <span>This project aims to inspire, inform, and encourage passion for careers in STEM teaching through meaningful storytelling and targeted communication.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 text-center scroll-animate">
              <p className="text-2xl font-semibold text-white mb-4
                         [text-shadow:_0_0_10px_rgb(168_85_247_/_40%)]">
                Thank you for exploring our project.
              </p>
              <p className="text-3xl font-bold text-white">
                Together, we are paving the way for future STEM educators!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectOverview;

<style jsx>{`
  .scroll-animate {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  }
  
  .animate-on-scroll {
    opacity: 1;
    transform: translateY(0);
  }
  
  /* Add different animation delays for consecutive elements */
  .scroll-animate:nth-child(2) { transition-delay: 0.2s; }
  .scroll-animate:nth-child(3) { transition-delay: 0.4s; }
  .scroll-animate:nth-child(4) { transition-delay: 0.6s; }
`}</style> 
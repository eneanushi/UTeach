import React from 'react';
import { Link } from 'react-router-dom';
import BackgroundBoxes from './ui/background-boxes';



// Header Component
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
        <ul className="flex gap-6">
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
        </ul>
      </nav>
    </header>
  );
};

const ProjectOverview = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-12 relative overflow-hidden">
      {/* Background Elements */}
      <BackgroundBoxes />
      
      {/* Header */}
      <Header />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 max-w-4xl">
        <div className="bg-black/40 backdrop-blur-md rounded-2xl p-8 border border-purple-500/20
                      shadow-[0_0_30px_rgba(168,85,247,0.1)]">
          <h1 className="text-4xl font-bold mb-8 text-center
                       [text-shadow:_0_0_20px_rgb(168_85_247_/_60%),_0_0_40px_rgb(168_85_247_/_40%)]">
            Project Overview: Lead the Way to Discovery – Explore STEM Teaching with UTeach
          </h1>

          <div className="space-y-6 text-gray-200">
            <p className="text-lg leading-relaxed">
              Welcome to our project overview! This initiative is an honors fellowship supported by the 
              University of Massachusetts Lowell (UML), guided by Dr. Sumudu Lewis. The project's central 
              purpose is to creatively inspire individuals to consider careers in STEM education through 
              impactful storytelling and informative content.
            </p>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-purple-300
                           [text-shadow:_0_0_10px_rgb(168_85_247_/_40%)]">
                Project Objectives:
              </h2>
              
              <div className="space-y-6 pl-4">
                <div>
                  <h3 className="text-xl font-semibold text-purple-200 mb-2">1. In-depth Research</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Conduct comprehensive research into STEM education and the UTeach program.</li>
                    <li>Understand challenges, motivations, and the societal importance of STEM educators.</li>
                    <li>Explore the relationship between technology (AI) and human-led teaching.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-purple-200 mb-2">2. Webpage Creation</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Develop an informative webpage featuring:</li>
                    <ul className="list-circle pl-6 space-y-1">
                      <li>Detailed research findings.</li>
                      <li>General information about the UTeach program and its mission.</li>
                      <li>Relevant contact information for interested participants or stakeholders.</li>
                    </ul>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-purple-200 mb-2">3. Video Storytelling (Advertisement)</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Create a compelling, emotionally resonant advertisement designed to inspire viewers.</li>
                    <li>Highlight the unique human qualities and emotional connections teachers bring to STEM fields.</li>
                    <li>Portray AI as a supportive educational tool, not as a replacement for human educators.</li>
                    <li>The final deliverable will be a visually engaging, 1-2 minute video suitable for presentations at orientations, schools, and promotional events.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-purple-300
                           [text-shadow:_0_0_10px_rgb(168_85_247_/_40%)]">
                Why this Project?
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>STEM educators profoundly impact society by shaping future innovators, critical thinkers, and problem solvers.</li>
                <li>Emphasizing the essential role of human teachers is crucial in our increasingly technology-driven world.</li>
                <li>This project aims to inspire, inform, and encourage passion for careers in STEM teaching through meaningful storytelling and targeted communication.</li>
              </ul>
            </div>

            <p className="text-lg font-semibold text-center mt-8 text-purple-200
                         [text-shadow:_0_0_10px_rgb(168_85_247_/_40%)]">
              Thank you for exploring our project. Together, we are paving the way for future STEM educators!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectOverview; 
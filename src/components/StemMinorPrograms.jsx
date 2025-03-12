import React from 'react';
import { Link } from 'react-router-dom';
import BackgroundBoxes from './ui/background-boxes';
import Header from './shared/Header';

const StemMinorPrograms = () => {
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
          
          {/* Title Section */}
          <div className="relative mb-16">
            <h1 className="text-5xl md:text-6xl font-black mb-6 text-center text-white
                         [text-shadow:_0_0_30px_rgb(168_85_247_/_40%),_0_0_60px_rgb(168_85_247_/_20%)]">
              UTeach STEM Minor Programs
            </h1>
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-32 h-1 
                          bg-gradient-to-r from-transparent via-white to-transparent"></div>
          </div>

          {/* Overview Section */}
          <div className="space-y-8">
            <div className="bg-purple-500/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/10
                          transform hover:scale-[1.02] transition-all duration-300
                          hover:shadow-[0_0_25px_rgba(168,85,247,0.1)]">
              <p className="text-lg leading-relaxed">
                The UTeach STEM Teaching minor at UMass Lowell is an innovative undergraduate teacher preparation program 
                recognized by the national UTeach initiative. It offers STEM majors the opportunity to explore and prepare 
                for careers in teaching mathematics, science, or engineering at the high school level.
              </p>
            </div>

            {/* Official Website Button */}
            <div className="flex justify-center">
              <a 
                href="https://www.uml.edu/education/become-teacher/undergraduate/stem-minor-uteach.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold
                         bg-cyan-500/10 hover:bg-cyan-500/20
                         text-white hover:text-cyan-200
                         rounded-full border border-cyan-400/30 hover:border-cyan-400/50
                         transition-all duration-300 transform hover:scale-105
                         shadow-[0_0_20px_rgba(6,182,212,0.3),inset_0_0_20px_rgba(6,182,212,0.2)]
                         hover:shadow-[0_0_30px_rgba(6,182,212,0.5),inset_0_0_30px_rgba(6,182,212,0.3)]
                         relative overflow-hidden
                         [text-shadow:_0_0_10px_rgb(6_182_212_/_60%)]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-cyan-500/10
                              animate-shimmer opacity-0 group-hover:opacity-100
                              transition-opacity duration-500"></div>
                <span className="relative z-10">Visit Official UMass Lowell Page</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="relative z-10 transition-transform group-hover:translate-x-1"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </div>

            {/* Add animation keyframes */}
            <style jsx>{`
              @keyframes shimmer {
                0% {
                  transform: translateX(-100%);
                }
                100% {
                  transform: translateX(100%);
                }
              }
              .animate-shimmer {
                animation: shimmer 2s infinite;
              }
            `}</style>

            {/* Eligibility Section */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white mb-6
                           [text-shadow:_0_0_15px_rgb(168_85_247_/_40%)]
                           border-l-4 border-white/50 pl-4">
                Eligibility
              </h2>
              <div className="bg-purple-500/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/10">
                <p className="mb-4">The program is open to students majoring in the following STEM fields:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    "Applied Biomedical Sciences",
                    "Biology",
                    "Biomedical Engineering",
                    "Chemical Engineering",
                    "Chemistry",
                    "Civil Engineering",
                    "Computer Engineering",
                    "Computer Science",
                    "Electrical Engineering",
                    "Environmental Science",
                    "Exercise Science",
                    "Mathematics",
                    "Mechanical Engineering",
                    "Nutritional Science",
                    "Pharmaceutical Sciences",
                    "Physics",
                    "Plastics Engineering",
                    "Public Health"
                  ].map((major, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <span className="text-purple-400">•</span>
                      <span>{major}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Program Structure Section */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white mb-6
                           [text-shadow:_0_0_15px_rgb(168_85_247_/_40%)]
                           border-l-4 border-white/50 pl-4">
                Program Structure
              </h2>
              <div className="bg-purple-500/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/10">
                <p className="text-lg leading-relaxed">
                  Students begin with the experiential learning course "Exploring Teaching and Learning in STEM," 
                  providing early guided teaching experience in a middle school classroom. As they progress, students 
                  gain further experience teaching in high school classrooms, including organizing and leading field trips. 
                  UTeach courses focus on teaching math, science, and engineering content using the inquiry-based 5E 
                  instructional model: Engage, Explore, Explain, Elaborate, and Evaluate.
                </p>
              </div>
            </div>

            {/* Licensure Section */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white mb-6
                           [text-shadow:_0_0_15px_rgb(168_85_247_/_40%)]
                           border-l-4 border-white/50 pl-4">
                Licensure Opportunity
              </h2>
              <div className="bg-purple-500/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/10">
                <p className="text-lg leading-relaxed">
                  Students can earn Massachusetts initial teacher licensure to teach math, science, or technology/engineering 
                  in middle and high schools. This requires completing a one-semester teaching practicum, during which 
                  students teach full-time in a local secondary school.
                </p>
              </div>
            </div>

            {/* Benefits Section */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white mb-6
                           [text-shadow:_0_0_15px_rgb(168_85_247_/_40%)]
                           border-l-4 border-white/50 pl-4">
                Additional Benefits
              </h2>
              <div className="bg-purple-500/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/10">
                <ul className="space-y-4">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span><strong>Practical Experience:</strong> Pre-service teaching begins with the first exploratory course and continues throughout the program.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span><strong>Unique Internships:</strong> Paid teaching and curriculum development internships provide valuable professional experience.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span><strong>Scholarships:</strong> Students are eligible for awards and scholarships as they progress through the minor and practicum.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Career Prospects Section */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white mb-6
                           [text-shadow:_0_0_15px_rgb(168_85_247_/_40%)]
                           border-l-4 border-white/50 pl-4">
                Career Prospects
              </h2>
              <div className="bg-purple-500/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/10">
                <p className="mb-4 text-lg">
                  There is a critical need for highly qualified STEM teachers, a demand expected to grow over the next decade. 
                  UTeach graduates have secured teaching positions in various Massachusetts school districts, including:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                  {[
                    "Lowell Public Schools",
                    "Chelmsford Public Schools",
                    "Dracut Public Schools",
                    "Fitchburg Public Schools",
                    "Wachusett Public Schools",
                    "Concord-Carlisle Public Schools",
                    "Tyngsborough Public Schools",
                    "The Sizer School Pioneer Science Charter School",
                    "Greater Lowell Technical High School"
                  ].map((school, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <span className="text-purple-400">•</span>
                      <span>{school}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StemMinorPrograms; 
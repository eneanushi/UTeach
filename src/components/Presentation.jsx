import React, { useState, useEffect } from 'react';
import { 
  ChevronLeft, 
  ChevronRight,
  Award,
  BookOpen,
  HelpCircle,
  Target,
  Search,
  Globe,
  Video,
  CheckCircle,
  Star,
  Flag
} from 'react-feather';
import Header from './shared/Header';
import BackgroundCircles from './ui/background-circles';

const AnimatedIcon = ({ Icon }) => (
  <div className="mb-8 opacity-0 scale-90 animate-icon-pop text-cyan-400">
    <Icon size={48} className="animate-float" />
  </div>
);

const AnimatedBulletPoint = ({ children, index }) => (
  <li className="opacity-0 -translate-y-4 animate-slide-in text-xl"
      style={{ animationDelay: `${0.2 + index * 0.15}s` }}>
    {children}
  </li>
);

const AnimatedText = ({ children, delay = 0 }) => (
  <p className="opacity-0 scale-95 animate-fade-in text-xl"
     style={{ animationDelay: `${delay}s` }}>
    {children}
  </p>
);

const slides = [
  {
    title: "Lead the Way to Discovery: UTeach Initiative",
    icon: Award,
    content: (
      <div className="space-y-6">
        <AnimatedText delay={0.2}>Presented by: Enea Nushi</AnimatedText>
      </div>
    )
  },
  {
    title: "Introduction to the Project",
    icon: BookOpen,
    content: (
      <ul className="list-disc list-inside space-y-6">
        <AnimatedBulletPoint index={0}>Honors project supported by UMass Lowell</AnimatedBulletPoint>
        <AnimatedBulletPoint index={1}>Focused on promoting STEM education</AnimatedBulletPoint>
        <AnimatedBulletPoint index={2}>Highlights the essential role of human educators alongside AI</AnimatedBulletPoint>
      </ul>
    )
  },
  {
    title: "Why This Project?",
    icon: HelpCircle,
    content: (
      <ul className="list-disc list-inside space-y-6">
        <AnimatedBulletPoint index={0}>Growing reliance on AI in education</AnimatedBulletPoint>
        <AnimatedBulletPoint index={1}>Importance of preserving human connection in teaching</AnimatedBulletPoint>
        <AnimatedBulletPoint index={2}>Need to attract and inspire future educators</AnimatedBulletPoint>
      </ul>
    )
  },
  {
    title: "Project Objectives Overview",
    icon: Target,
    content: (
      <ul className="list-disc list-inside space-y-6">
        <AnimatedBulletPoint index={0}>Conduct in-depth research on STEM and UTeach</AnimatedBulletPoint>
        <AnimatedBulletPoint index={1}>Develop informative webpage</AnimatedBulletPoint>
        <AnimatedBulletPoint index={2}>Create a compelling promotional video</AnimatedBulletPoint>
      </ul>
    )
  },
  {
    title: "Research Phase",
    icon: Search,
    content: (
      <ul className="list-disc list-inside space-y-6">
        <AnimatedBulletPoint index={0}>Analyzed STEM teaching methods</AnimatedBulletPoint>
        <AnimatedBulletPoint index={1}>Studied impacts and implications of AI in education</AnimatedBulletPoint>
        <AnimatedBulletPoint index={2}>Identified motivations and challenges in STEM education</AnimatedBulletPoint>
      </ul>
    )
  },
  {
    title: "Webpage Development",
    icon: Globe,
    content: (
      <ul className="list-disc list-inside space-y-6">
        <AnimatedBulletPoint index={0}>Comprehensive information on STEM and UTeach</AnimatedBulletPoint>
        <AnimatedBulletPoint index={1}>User-friendly design and clear navigation</AnimatedBulletPoint>
        <AnimatedBulletPoint index={2}>Contact information for further engagement</AnimatedBulletPoint>
      </ul>
    )
  },
  {
    title: "Video Storytelling and Advertisement",
    icon: Video,
    content: (
      <ul className="list-disc list-inside space-y-6">
        <AnimatedBulletPoint index={0}>Creating emotionally engaging content</AnimatedBulletPoint>
        <AnimatedBulletPoint index={1}>Highlighting teachers' human qualities</AnimatedBulletPoint>
        <AnimatedBulletPoint index={2}>Showcasing AI as supportive, not substitutive</AnimatedBulletPoint>
      </ul>
    )
  },
  {
    title: "Achievements and Progress",
    icon: CheckCircle,
    content: (
      <ul className="list-disc list-inside space-y-6">
        <AnimatedBulletPoint index={0}>Completed detailed initial research</AnimatedBulletPoint>
        <AnimatedBulletPoint index={1}>Developed script and storyboard for video</AnimatedBulletPoint>
        <AnimatedBulletPoint index={2}>Structured content and design for webpage</AnimatedBulletPoint>
      </ul>
    )
  },
  {
    title: "Project Impact and Goals",
    icon: Star,
    content: (
      <ul className="list-disc list-inside space-y-6">
        <AnimatedBulletPoint index={0}>Inspire interest and passion in STEM teaching</AnimatedBulletPoint>
        <AnimatedBulletPoint index={1}>Emphasize the critical role of educators</AnimatedBulletPoint>
        <AnimatedBulletPoint index={2}>Enhance visibility and appeal of UTeach at UML</AnimatedBulletPoint>
      </ul>
    )
  },
  {
    title: "Closing and Future Steps",
    icon: Flag,
    content: (
      <ul className="list-disc list-inside space-y-6">
        <AnimatedBulletPoint index={0}>Finalize and launch webpage</AnimatedBulletPoint>
        <AnimatedBulletPoint index={1}>Produce and distribute promotional video</AnimatedBulletPoint>
        <AnimatedBulletPoint index={2}>Evaluate project impact and gather feedback</AnimatedBulletPoint>
      </ul>
    )
  }
];

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1 && !isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide(currentSlide + 1);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0 && !isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide(currentSlide - 1);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentSlide, isTransitioning]);

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-12 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <BackgroundCircles />
      </div>
      
      {/* Additional ambient light */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-radial from-purple-500/10 via-transparent to-transparent"></div>
      </div>

      {/* Header */}
      <Header />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 max-w-6xl h-[calc(100vh-12rem)] flex flex-col">
        <div className="bg-black/40 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-purple-500/20
                      shadow-[0_0_30px_rgba(168,85,247,0.1)] hover:shadow-[0_0_40px_rgba(168,85,247,0.15)]
                      transition-all duration-500 flex-1 flex flex-col">
          
          {/* Slide Content */}
          <div key={currentSlide} className="flex-1 flex flex-col items-center justify-center text-center space-y-12">
            <AnimatedIcon Icon={slides[currentSlide].icon} />
            <h1 className="text-4xl md:text-5xl font-black mb-8 text-white opacity-0 scale-95 animate-title-in
                         [text-shadow:_0_0_30px_rgb(168_85_247_/_40%),_0_0_60px_rgb(168_85_247_/_20%)]">
              {slides[currentSlide].title}
            </h1>
            <div className="max-w-3xl mx-auto w-full">
              {slides[currentSlide].content}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-8">
            <button 
              onClick={prevSlide}
              disabled={currentSlide === 0 || isTransitioning}
              className="p-4 text-cyan-400 hover:text-cyan-300 transition-colors
                       disabled:opacity-50 disabled:cursor-not-allowed
                       hover:scale-110 active:scale-95 transform duration-200"
            >
              <ChevronLeft size={32} />
            </button>
            <div className="text-cyan-400 text-lg">
              Slide {currentSlide + 1} of {slides.length}
            </div>
            <button 
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1 || isTransitioning}
              className="p-4 text-cyan-400 hover:text-cyan-300 transition-colors
                       disabled:opacity-50 disabled:cursor-not-allowed
                       hover:scale-110 active:scale-95 transform duration-200"
            >
              <ChevronRight size={32} />
            </button>
          </div>
        </div>
      </div>

      {/* Add styles for animations */}
      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-1rem);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes titleIn {
          0% {
            opacity: 0;
            transform: scale(0.95) translateY(-1rem);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes iconPop {
          0% {
            opacity: 0;
            transform: scale(0.5);
          }
          70% {
            opacity: 1;
            transform: scale(1.1);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-slide-in {
          animation: slideIn 0.6s ease-out forwards;
        }

        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }

        .animate-title-in {
          animation: titleIn 0.8s ease-out forwards;
        }

        .animate-icon-pop {
          animation: iconPop 0.8s cubic-bezier(0.19, 1, 0.22, 1) forwards;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Presentation; 
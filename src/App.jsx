import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import createScrollObserver from './scroll'
import BackgroundBoxes from './components/ui/background-boxes'
import OpeningAnimation from './components/OpeningAnimation'
import ComingSoon from './components/ComingSoon'

// Header Component
const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 flex items-center justify-between px-6 py-4 bg-black/80 backdrop-blur-sm z-50">
      <div className="text-purple-300 text-2xl font-bold hover:text-purple-200 transition-colors">
        UTeach
      </div>
      <nav>
        <ul className="flex gap-6">
          <li><a href="#programs" className="text-gray-200 hover:text-purple-300 transition-colors">Programs</a></li>
          <li><a href="#features" className="text-gray-200 hover:text-purple-300 transition-colors">Features</a></li>
          <li><a href="#contact" className="text-gray-200 hover:text-purple-300 transition-colors">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

// Hero Component
const Hero = () => {
  const navigate = useNavigate();

  const handleWatchVideo = () => {
    navigate('/coming-soon');
  };

  return (
    <div className="flex flex-col gap-8 px-6 py-20 md:flex-row md:items-center md:py-32 relative overflow-hidden">
      <div className="shape triangle" style={{ top: '10%', left: '5%', animationDelay: '0s' }}></div>
      <div className="shape circle" style={{ top: '20%', right: '10%', animationDelay: '1s' }}></div>
      <div className="shape triangle" style={{ bottom: '15%', right: '5%', animationDelay: '2s' }}></div>
      <div className="shape circle" style={{ bottom: '10%', left: '15%', animationDelay: '3s' }}></div>
      
      <div className="flex flex-col gap-6 md:flex-1">
        <h1 className="text-4xl md:text-6xl font-black text-white leading-tight fade-in
                     [text-shadow:_0_0_30px_rgb(168_85_247_/_40%),_0_0_60px_rgb(168_85_247_/_20%)]">
          AI is shaping industries, but teachers shape humanity
        </h1>
        <p className="text-lg text-gray-200 fade-in drop-shadow-lg" style={{animationDelay: '0.3s'}}>
          The world needs more STEM teachers. Start your journey today.
        </p>
        <div className="flex gap-4 fade-in" style={{animationDelay: '0.6s'}}>
          <button className="btn-primary px-8 py-3 bg-purple-500 text-white rounded-full font-bold">
            Get Started
          </button>
          <button 
            onClick={handleWatchVideo}
            className="btn-primary px-8 py-3 bg-purple-900/30 text-white rounded-full font-bold
                     border-2 border-purple-500/50"
          >
            Watch Video
          </button>
        </div>
      </div>
      <div className="md:flex-1">
        <div 
          className="w-full aspect-video bg-cover bg-center rounded-xl shadow-xl scale-in
                     shadow-purple-500/20 border border-purple-500/20"
          style={{
            backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/e6a4af66-99ef-4dab-bbc2-07013b46600e.png")'
          }}
        ></div>
      </div>
    </div>
  )
}

// Icon Components
const GraduationCap = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
    <path d="M251.76,88.94l-120-64a8,8,0,0,0-7.52,0l-120,64a8,8,0,0,0,0,14.12L32,117.87v48.42a15.91,15.91,0,0,0,4.06,10.65C49.16,191.53,78.51,216,128,216a130,130,0,0,0,48-8.76V240a8,8,0,0,0,16,0V199.51a115.63,115.63,0,0,0,27.94-22.57A15.91,15.91,0,0,0,224,166.29V117.87l27.76-14.81a8,8,0,0,0,0-14.12ZM128,200c-43.27,0-68.72-21.14-80-33.71V126.4l76.24,40.66a8,8,0,0,0,7.52,0L176,143.47v46.34C163.4,195.69,147.52,200,128,200Zm80-33.75a97.83,97.83,0,0,1-16,14.25V134.93l16-8.53ZM188,118.94l-.22-.13-56-29.87a8,8,0,0,0-7.52,14.12L171,128l-43,22.93L25,96,128,41.07,231,96Z" />
  </svg>
)

const Users = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
    <path d="M244.8,150.4a8,8,0,0,1-11.2-1.6A51.6,51.6,0,0,0,192,128a8,8,0,0,1-7.37-4.89,8,8,0,0,1,0-6.22A8,8,0,0,1,192,112a24,24,0,1,0-23.24-30,8,8,0,1,1-15.5-4A40,40,0,1,1,219,117.51a67.94,67.94,0,0,1,27.43,21.68A8,8,0,0,1,244.8,150.4ZM190.92,212a8,8,0,1,1-13.84,8,57,57,0,0,0-98.16,0,8,8,0,1,1-13.84-8,72.06,72.06,0,0,1,33.74-29.92,48,48,0,1,1,58.36,0A72.06,72.06,0,0,1,190.92,212ZM128,176a32,32,0,1,0-32-32A32,32,0,0,0,128,176ZM72,120a8,8,0,0,0-8-8A24,24,0,1,1,87.24,82a8,8,0,1,0,15.5-4A40,40,0,1,0,37,117.51,67.94,67.94,0,0,0,9.6,139.19a8,8,0,1,0,12.8,9.61A51.6,51.6,0,0,1,64,128,8,8,0,0,0,72,120Z" />
  </svg>
)

const Chalkboard = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
    <path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM40,56H216v96H40Z" />
  </svg>
)

const Certificate = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
    <path d="M248,128a56,56,0,1,0-96,39.14V224a8,8,0,0,0,11.58,7.16L192,216.94l28.42,14.22A8,8,0,0,0,232,224V167.14A55.81,55.81,0,0,0,248,128ZM192,88a40,40,0,1,1-40,40A40,40,0,0,1,192,88Zm3.58,112.84a8,8,0,0,0-7.16,0L168,211.06V178.59a55.94,55.94,0,0,0,48,0v32.47ZM136,192a8,8,0,0,1-8,8H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216a16,16,0,0,1,16,16,8,8,0,0,1-16,0H40V184h88A8,8,0,0,1,136,192Zm-16-56a8,8,0,0,1-8,8H72a8,8,0,0,1,0-16h40A8,8,0,0,1,120,136Zm0-32a8,8,0,0,1-8,8H72a8,8,0,0,1,0-16h40A8,8,0,0,1,120,104Z" />
  </svg>
)

const Money = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
    <path d="M128,88a40,40,0,1,0,40,40A40,40,0,0,0,128,88Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,152ZM240,56H16a8,8,0,0,0-8,8V192a8,8,0,0,0,8,8H240a8,8,0,0,0,8-8V64A8,8,0,0,0,240,56ZM193.65,184H62.35A56.78,56.78,0,0,0,24,145.65v-35.3A56.78,56.78,0,0,0,62.35,72h131.3A56.78,56.78,0,0,0,232,110.35v35.3A56.78,56.78,0,0,0,193.65,184ZM232,93.37A40.81,40.81,0,0,1,210.63,72H232ZM45.37,72A40.81,40.81,0,0,1,24,93.37V72ZM24,162.63A40.81,40.81,0,0,1,45.37,184H24ZM210.63,184A40.81,40.81,0,0,1,232,162.63V184Z" />
  </svg>
)

const Briefcase = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
    <path d="M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56ZM96,48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM216,72v41.61A184,184,0,0,1,128,136a184.07,184.07,0,0,1-88-22.38V72Zm0,128H40V131.64A200.19,200.19,0,0,0,128,152a200.25,200.25,0,0,0,88-20.37V200ZM104,112a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16H112A8,8,0,0,1,104,112Z" />
  </svg>
)

// Feature Card Component
const FeatureCard = ({ icon: Icon, title, description, index }) => (
  <div className="feature-card card hover-lift scale-in"
       style={{ animationDelay: `${index * 0.1}s` }}>
    <div className="icon-container">
      <Icon />
    </div>
    <div className="flex flex-col gap-2">
      <h2 className="title">{title}</h2>
      <p className="description">{description}</p>
    </div>
  </div>
)

// Features Component
const Features = () => {
  const features = [
    {
      icon: GraduationCap,
      title: "STEM Teaching Minor",
      description: "Nationally recognized program preparing STEM majors to become teachers."
    },
    {
      icon: Users,
      title: "Wide Eligibility",
      description: "Open to students in various STEM fields including engineering and sciences."
    },
    {
      icon: Chalkboard,
      title: "Hands-on Experience",
      description: "Start with classroom experience immediately through our courses."
    },
    {
      icon: Certificate,
      title: "Teacher Licensure",
      description: "Earn your Massachusetts initial teacher licensure."
    }
  ]

  return (
    <div className="features-container">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 fade-in
                    [text-shadow:_0_0_30px_rgb(168_85_247_/_40%),_0_0_60px_rgb(168_85_247_/_20%)]">
        What you get when you participate
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} index={index} />
        ))}
      </div>
    </div>
  )
}

// Programs Component
const ProgramCard = ({ image, title, description, index }) => (
  <div className="program-card card hover-lift scale-in"
       style={{ animationDelay: `${index * 0.1}s` }}>
    <div className="image-container">
      <div
        className="w-full bg-center bg-no-repeat aspect-video bg-cover"
        style={{ backgroundImage: `url("${image}")` }}
      ></div>
    </div>
    <div className="content">
      <h3 className="title">{title}</h3>
      <p className="description">{description}</p>
    </div>
  </div>
)

const Programs = () => {
  const programs = [
    {
      image: "https://cdn.usegalileo.ai/sdxl10/0fa5a41a-f046-42d6-be6a-f71c587a22e5.png",
      title: "UTeach STEM Minor",
      description: "For undergraduate STEM majors seeking teacher certification"
    },
    {
      image: "https://cdn.usegalileo.ai/sdxl10/122967be-1d2c-4cc3-bcff-0ae94208cc94.png",
      title: "UTeach Accelerate",
      description: "Fast-track program for STEM professionals transitioning to teaching"
    },
    {
      image: "https://cdn.usegalileo.ai/sdxl10/3832a85e-0b37-4be0-80a6-c18ea372186a.png",
      title: "UTeach Maker",
      description: "Integrating hands-on STEM learning and maker education"
    },
    {
      image: "https://cdn.usegalileo.ai/sdxl10/3832a85e-0b37-4be0-80a6-c18ea372186a.png",
      title: "UTeach Research Methods",
      description: "Advanced research and inquiry-based teaching techniques"
    }
  ]

  return (
    <div className="programs-container">
      <h1 className="text-white tracking-light text-[32px] font-bold leading-tight px-4 text-center pb-6 pt-3 fade-in
                    [text-shadow:_0_0_30px_rgb(168_85_247_/_40%),_0_0_60px_rgb(168_85_247_/_20%)]">
        Our programs
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
        {programs.map((program, index) => (
          <ProgramCard key={index} {...program} index={index} />
        ))}
      </div>
      <div className="flex justify-center mt-6 fade-in" style={{animationDelay: '0.6s'}}>
        <button className="btn-primary program-btn flex items-center justify-center">
          <span className="truncate">Explore All Programs</span>
        </button>
      </div>
    </div>
  )
}

// Call to Action Component
const CallToAction = () => {
  return (
    <div className="py-20 px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 fade-in">
        Ready to make a difference?
      </h2>
      <button className="btn-primary text-lg fade-in" style={{animationDelay: '0.3s'}}>
        Apply Now
      </button>
    </div>
  )
}

// FloatingCircles Component
const FloatingCircles = () => {
  useEffect(() => {
    const createCircle = () => {
      const circle = document.createElement('div');
      circle.className = 'floating-circle';
      circle.style.top = `${Math.random() * 100}%`;
      circle.style.animationDuration = `${15 + Math.random() * 10}s`;
      document.querySelector('.floating-circles').appendChild(circle);

      circle.addEventListener('animationend', () => {
        circle.remove();
      });
    };

    const interval = setInterval(createCircle, 3000);
    return () => clearInterval(interval);
  }, []);

  return <div className="floating-circles"></div>;
};

// MainContent Component (moved outside App)
const MainContent = ({ showMainContent }) => (
  <div className={`min-h-screen overflow-hidden bg-black text-white relative transition-opacity duration-1000 ${showMainContent ? 'opacity-100' : 'opacity-0'}`}>
    {/* Background Elements */}
    <BackgroundBoxes />
    
    {/* Content Layer */}
    <div className="relative z-10">
      <Header />
      <main className="container mx-auto max-w-7xl pt-16">
        <section id="hero" data-scroll>
          <Hero />
        </section>

        <section id="programs" data-scroll className="relative">
          <div className="absolute inset-0 bg-purple-500/5 backdrop-blur-md rounded-3xl 
                        border border-purple-500/20 shadow-[0_0_30px_rgba(168,85,247,0.1)]"></div>
          <Programs />
        </section>

        <section id="features" data-scroll>
          <Features />
        </section>

        <section id="contact" data-scroll>
          <CallToAction />
        </section>
      </main>
    </div>

    {/* Additional ambient light */}
    <div className="fixed inset-0 pointer-events-none">
      <div className="absolute inset-0 bg-gradient-radial from-purple-500/5 via-transparent to-transparent"></div>
    </div>
  </div>
);

// Wrap MainContent to handle navigation state
const MainContentWrapper = () => {
  const [showContent, setShowContent] = useState(false);
  const [skipOpening, setSkipOpening] = useState(false);
  const location = useLocation();

  useEffect(() => {
    createScrollObserver();
  }, []);

  useEffect(() => {
    // Check if we're coming back from ComingSoon page
    if (location.state?.fromComingSoon) {
      setShowContent(true);
      setSkipOpening(true);
    }
  }, [location]);

  const handleAnimationComplete = () => {
    setShowContent(true);
  };

  return (
    <>
      {!skipOpening && <OpeningAnimation onComplete={handleAnimationComplete} />}
      <MainContent showMainContent={showContent || skipOpening} />
    </>
  );
};

// Main App Component
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainContentWrapper />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
      </Routes>
    </Router>
  );
}

export default App

import React from 'react';

const BackgroundTriangles = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 [perspective:1000px]">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `
                rotateX(${Math.random() * 360}deg)
                rotateY(${Math.random() * 360}deg)
                translateZ(${Math.random() * 500}px)
              `,
              animation: `float ${10 + Math.random() * 20}s linear infinite`,
              animationDelay: `${-Math.random() * 20}s`,
            }}
          >
            <div 
              className="w-[100px] h-[100px] border-[2px] border-purple-500/30
                       [clip-path:polygon(50%_0%,100%_100%,0%_100%)]
                       animate-pulse-slow"
            >
              <div 
                className="absolute inset-0 bg-gradient-to-b from-purple-500/20 to-transparent
                         [clip-path:polygon(50%_0%,100%_100%,0%_100%)]"
              ></div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Additional ambient triangles with different sizes */}
      {[...Array(15)].map((_, i) => (
        <div
          key={`ambient-${i}`}
          className="absolute opacity-20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${30 + Math.random() * 60}px`,
            height: `${30 + Math.random() * 60}px`,
            transform: `
              rotate(${Math.random() * 360}deg)
              scale(${0.5 + Math.random() * 1.5})
            `,
            animation: `floatReverse ${15 + Math.random() * 25}s linear infinite`,
            animationDelay: `${-Math.random() * 25}s`,
          }}
        >
          <div 
            className="w-full h-full border-[1px] border-purple-400/20
                     [clip-path:polygon(50%_0%,100%_100%,0%_100%)]
                     animate-pulse-slower"
          >
            <div 
              className="absolute inset-0 bg-gradient-to-b from-purple-400/10 to-transparent
                       [clip-path:polygon(50%_0%,100%_100%,0%_100%)]"
            ></div>
          </div>
        </div>
      ))}

      {/* Glowing orbs in the background */}
      {[...Array(10)].map((_, i) => (
        <div
          key={`orb-${i}`}
          className="absolute rounded-full blur-xl"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${40 + Math.random() * 80}px`,
            height: `${40 + Math.random() * 80}px`,
            background: `radial-gradient(circle, rgba(168,85,247,0.2) 0%, rgba(168,85,247,0) 70%)`,
            animation: `float ${20 + Math.random() * 30}s linear infinite`,
            animationDelay: `${-Math.random() * 30}s`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default BackgroundTriangles; 
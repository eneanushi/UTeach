import React from 'react';

const BackgroundBoxes = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-0 bg-black">
      <div className="grid grid-cols-4 gap-4 w-full max-w-7xl mx-auto p-8">
        {Array.from({ length: 16 }).map((_, i) => (
          <div key={i} className="aspect-square relative group animate-float" 
               style={{ animationDelay: `${i * 0.1}s` }}>
            <div className="absolute inset-0 bg-purple-500/5 rounded-lg 
                          transition-all duration-700 ease-in-out
                          group-hover:bg-purple-500/20 group-hover:scale-110
                          border-2 border-purple-500/50
                          shadow-[0_0_30px_rgba(168,85,247,0.3)]
                          group-hover:shadow-[0_0_50px_rgba(168,85,247,0.5)]
                          backdrop-blur-sm
                          animate-pulse-glow">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent
                            opacity-0 group-hover:opacity-100 transition-opacity duration-700
                            animate-shimmer" />
            </div>
          </div>
        ))}
      </div>
      {/* Enhanced glow effects */}
      <div className="absolute inset-0 bg-gradient-radial from-purple-500/20 via-purple-500/5 to-transparent opacity-70 animate-pulse-slow" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_1000px_at_50%_50%,rgba(168,85,247,0.2),transparent)] animate-pulse-slower" />
    </div>
  );
};

export default BackgroundBoxes; 
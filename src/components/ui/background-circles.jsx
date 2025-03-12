import React, { useEffect, useState, useRef } from 'react';

const BackgroundCircles = () => {
  const [circles, setCircles] = useState([]);
  const canvasRef = useRef(null);

  useEffect(() => {
    const createCircle = () => {
      const size = Math.random() * 100 + 60; // Larger circles
      const startX = Math.random() * window.innerWidth;
      const startY = Math.random() * window.innerHeight;
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 1.5 + 0.5;
      const radius = Math.random() * 100 + 50;

      return {
        id: Math.random(),
        size,
        x: startX,
        y: startY,
        angle,
        speed,
        radius,
        centerX: startX,
        centerY: startY,
        glowIntensity: Math.random() * 0.6 + 0.4, // Increased glow intensity
        animationDuration: Math.random() * 4 + 3,
        scale: Math.random() * 0.4 + 0.4, // Larger scale
      };
    };

    // Create initial circles
    const initialCircles = Array.from({ length: 12 }, createCircle); // Fewer but larger circles
    setCircles(initialCircles);

    let animationFrameId;
    let lastTime = 0;

    const drawConnections = (ctx, circles) => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      
      // Draw connections first (behind circles)
      circles.forEach((circle1, i) => {
        circles.slice(i + 1).forEach(circle2 => {
          const dx = circle2.x - circle1.x;
          const dy = circle2.y - circle1.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = 400; // Increased connection distance

          if (distance < maxDistance) {
            const opacity = (1 - distance / maxDistance) * 0.7; // Increased line opacity
            ctx.beginPath();
            ctx.strokeStyle = `rgba(124, 58, 237, ${opacity})`; // More purple color (purple-600)
            ctx.lineWidth = 2; // Thicker lines
            ctx.moveTo(circle1.x + circle1.size / 2, circle1.y + circle1.size / 2);
            ctx.lineTo(circle2.x + circle2.size / 2, circle2.y + circle2.size / 2);
            
            // Enhanced glow effect
            ctx.shadowColor = 'rgba(124, 58, 237, 0.8)';
            ctx.shadowBlur = 15;
            ctx.stroke();
            ctx.shadowBlur = 0;
          }
        });
      });
    };

    const animate = (currentTime) => {
      if (!lastTime) lastTime = currentTime;
      const delta = (currentTime - lastTime) / 1000;
      lastTime = currentTime;

      setCircles(prevCircles => {
        const newCircles = prevCircles.map(circle => {
          const newAngle = circle.angle + circle.speed * delta;
          const x = circle.centerX + Math.cos(newAngle) * circle.radius;
          const y = circle.centerY + Math.sin(newAngle) * circle.radius;

          return {
            ...circle,
            x,
            y,
            angle: newAngle,
            glowIntensity: 0.4 + Math.sin(newAngle) * 0.3, // Increased base glow
          };
        });

        const canvas = canvasRef.current;
        if (canvas) {
          const ctx = canvas.getContext('2d');
          drawConnections(ctx, newCircles);
        }

        return newCircles;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    const updateCanvasSize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
      }
    };

    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);
    animationFrameId = requestAnimationFrame(animate);

    // Add new circles less frequently
    const interval = setInterval(() => {
      setCircles(prev => {
        if (prev.length > 15) { // Maintain fewer circles
          return [...prev.slice(1), createCircle()];
        }
        return [...prev, createCircle()];
      });
    }, 5000);

    return () => {
      cancelAnimationFrame(animationFrameId);
      clearInterval(interval);
      window.removeEventListener('resize', updateCanvasSize);
    };
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
        style={{ background: 'transparent' }}
      />
      {circles.map(circle => (
        <div
          key={circle.id}
          className="absolute rounded-full transition-all duration-300 ease-in-out"
          style={{
            width: circle.size + 'px',
            height: circle.size + 'px',
            left: circle.x + 'px',
            top: circle.y + 'px',
            background: `rgba(124, 58, 237, ${circle.glowIntensity * 0.25})`, // More visible purple
            backdropFilter: 'blur(12px)',
            transform: `scale(${circle.scale})`,
            boxShadow: `
              0 0 ${60 * circle.glowIntensity}px ${30 * circle.glowIntensity}px rgba(124, 58, 237, ${circle.glowIntensity * 0.4}),
              inset 0 0 ${30 * circle.glowIntensity}px ${15 * circle.glowIntensity}px rgba(124, 58, 237, ${circle.glowIntensity * 0.3})
            `, // Enhanced glow with inner shadow
            transition: 'box-shadow 0.5s ease-in-out, background 0.5s ease-in-out',
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundCircles; 
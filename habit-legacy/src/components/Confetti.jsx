import React, { useState, useEffect } from 'react';

const Confetti = ({ active, duration = 2000 }) => {
  const [particles, setParticles] = useState([]);
  
  useEffect(() => {
    if (!active) return;
    
    // Clear existing particles
    setParticles([]);
    
    // Create new particles
    const newParticles = [];
    const colors = ['#ff718d', '#fdbb2d', '#22c1c3', '#83e584', '#ff5e7e', '#45aaf2'];
    
    for (let i = 0; i < 150; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,  // % of parent width
        y: -10 - Math.random() * 20,  // Start above the container
        color: colors[Math.floor(Math.random() * colors.length)],
        size: 3 + Math.random() * 7,
        speed: 3 + Math.random() * 1,
        rotation: Math.random() * 360,
        rotationSpeed: -1 + Math.random() * 2,
      });
    }
    
    setParticles(newParticles);
    
    // Cleanup after duration
    const timer = setTimeout(() => {
      setParticles([]);
    }, duration);
    
    return () => clearTimeout(timer);
  }, [active, duration]);
  
  // Animation frame for falling confetti
  useEffect(() => {
    if (particles.length === 0) return;
    
    const animateParticles = () => {
      setParticles(prevParticles => 
        prevParticles.map(p => ({
          ...p,
          y: p.y + p.speed,
          rotation: p.rotation + p.rotationSpeed
        })).filter(p => p.y < 110) // Remove particles that fall out of view
      );
    };
    
    const animationId = requestAnimationFrame(animateParticles);
    return () => cancelAnimationFrame(animationId);
  }, [particles]);
  
  if (particles.length === 0) return null;
  
  return (
    <div style={{
      position: 'absolute', 
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      pointerEvents: 'none',
      zIndex: 10,
      overflow: 'hidden'
    }}>
      {particles.map(p => (
        <div
          key={p.id}
          style={{
            position: 'absolute',
            top: `${p.y}%`,
            left: `${p.x}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: p.color,
            transform: `rotate(${p.rotation}deg)`,
            transition: 'transform 0.1s linear',
            borderRadius: Math.random() > 0.5 ? '50%' : '0',
          }}
        />
      ))}
    </div>
  );
};

export default Confetti;

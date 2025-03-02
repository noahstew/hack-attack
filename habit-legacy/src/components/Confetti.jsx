import React, { useRef, useEffect } from 'react';

const Confetti = ({ active, duration = 2000 }) => {
  const containerRef = useRef(null);
  const animationRef = useRef(null);
  const particlesRef = useRef([]);
  
  useEffect(() => {
    if (!active) return;
    
    // Clear the container
    if (containerRef.current) {
      containerRef.current.innerHTML = '';
    }
    
    // Stop any existing animation
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    
    // Create particles
    const colors = ['#ff718d', '#fdbb2d', '#22c1c3', '#83e584', '#ff5e7e', '#45aaf2'];
    particlesRef.current = [];
    
    for (let i = 0; i < 100; i++) {
      const particle = document.createElement('div');
      
      // Initial position and properties
      const x = Math.random() * 100; // % of container width
      const y = -10 - Math.random() * 20; // Start above the container
      const size = 3 + Math.random() * 7;
      const color = colors[Math.floor(Math.random() * colors.length)];
      const speed = 2 + Math.random() * 2; // More consistent speed
      const rotation = Math.random() * 360;
      const rotationSpeed = -1 + Math.random() * 2;
      const shape = Math.random() > 0.5 ? 'circle' : 'square';
      
      // Set styles
      particle.style.position = 'absolute';
      particle.style.left = `${x}%`;
      particle.style.top = `${y}%`;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.backgroundColor = color;
      particle.style.borderRadius = shape === 'circle' ? '50%' : '0';
      particle.style.transform = `rotate(${rotation}deg)`;
      
      // Add to container and store reference with metadata
      containerRef.current.appendChild(particle);
      particlesRef.current.push({
        element: particle,
        x,
        y,
        speed,
        rotation,
        rotationSpeed
      });
    }
    
    // Start time for consistent animation speed
    const startTime = Date.now();
    
    // Animation function
    const animate = () => {
      const elapsed = Date.now() - startTime;
      
      // If duration exceeded, clean up
      if (elapsed > duration) {
        if (containerRef.current) {
          containerRef.current.innerHTML = '';
        }
        return;
      }
      
      // Update each particle position
      for (let i = 0; i < particlesRef.current.length; i++) {
        const p = particlesRef.current[i];
        
        // Skip particles that are no longer visible
        if (p.y > 110) continue;
        
        // Update position and rotation
        p.y += p.speed;
        p.rotation += p.rotationSpeed;
        
        // Apply changes to DOM element
        p.element.style.top = `${p.y}%`;
        p.element.style.transform = `rotate(${p.rotation}deg)`;
      }
      
      // Continue animation
      animationRef.current = requestAnimationFrame(animate);
    };
    
    // Start animation
    animationRef.current = requestAnimationFrame(animate);
    
    // Cleanup function
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, [active, duration]);
  
  return (
    <div 
      ref={containerRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 10,
        overflow: 'hidden'
      }}
    />
  );
};

export default Confetti;

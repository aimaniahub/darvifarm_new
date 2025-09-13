import React, { useRef, useEffect } from 'react';

interface Canvas3DProps {
  className?: string;
  variant?: 'farmland-seeds' | 'growing-fields' | 'harvest-particles' | 'organic-flow' | 'geometric-crops';
}

export function Canvas3D({ className = '', variant = 'farmland-seeds' }: Canvas3DProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Array<{
      x: number;
      y: number;
      z: number;
      vx: number;
      vy: number;
      vz: number;
      size: number;
      opacity: number;
      color: string;
      growth?: number;
      angle?: number;
      type?: string;
    }> = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const colors = {
      green: ['#22c55e', '#16a34a', '#15803d', '#166534'],
      earth: ['#92400e', '#a16207', '#ca8a04', '#eab308'],
      growth: ['#84cc16', '#65a30d', '#4d7c0f', '#365314']
    };

    const initParticles = () => {
      particles = [];
      const particleCount = variant === 'farmland-seeds' ? 80 : 60;
      
      for (let i = 0; i < particleCount; i++) {
        const colorPalette = Math.random() < 0.6 ? colors.green : Math.random() < 0.8 ? colors.earth : colors.growth;
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          z: Math.random() * 1000,
          vx: (Math.random() - 0.5) * 0.8,
          vy: (Math.random() - 0.5) * 0.8,
          vz: (Math.random() - 0.5) * 3,
          size: Math.random() * 4 + 2,
          opacity: Math.random() * 0.7 + 0.2,
          color: colorPalette[Math.floor(Math.random() * colorPalette.length)],
          growth: Math.random() * 2 + 1,
          angle: Math.random() * Math.PI * 2,
          type: Math.random() < 0.3 ? 'seed' : Math.random() < 0.6 ? 'leaf' : 'flower'
        });
      }
    };

    const drawFarmlandSeeds = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.z += particle.vz;
        
        if (particle.x < -50) particle.x = canvas.width + 50;
        if (particle.x > canvas.width + 50) particle.x = -50;
        if (particle.y < -50) particle.y = canvas.height + 50;
        if (particle.y > canvas.height + 50) particle.y = -50;
        if (particle.z < 0) particle.z = 1000;
        if (particle.z > 1000) particle.z = 0;
        
        const perspective = 1000 / (1000 - particle.z);
        const projectedX = particle.x * perspective;
        const projectedY = particle.y * perspective;
        const projectedSize = particle.size * perspective;
        
        ctx.save();
        ctx.globalAlpha = particle.opacity * (1 - particle.z / 1200);
        
        // Draw different agricultural elements
        if (particle.type === 'seed') {
          ctx.fillStyle = particle.color;
          ctx.beginPath();
          ctx.arc(projectedX, projectedY, projectedSize, 0, Math.PI * 2);
          ctx.fill();
        } else if (particle.type === 'leaf') {
          ctx.fillStyle = particle.color;
          ctx.beginPath();
          ctx.ellipse(projectedX, projectedY, projectedSize * 0.8, projectedSize * 1.5, particle.angle || 0, 0, Math.PI * 2);
          ctx.fill();
        } else {
          // Flower-like shape
          ctx.strokeStyle = particle.color;
          ctx.lineWidth = 2;
          for (let i = 0; i < 6; i++) {
            const angle = (i / 6) * Math.PI * 2;
            ctx.beginPath();
            ctx.moveTo(projectedX, projectedY);
            ctx.lineTo(
              projectedX + Math.cos(angle) * projectedSize,
              projectedY + Math.sin(angle) * projectedSize
            );
            ctx.stroke();
          }
        }
        
        ctx.restore();
      });
    };

    const drawGrowingFields = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const time = Date.now() * 0.001;
      
      particles.forEach((particle, index) => {
        // Growing animation
        particle.growth = 1 + Math.sin(time + index * 0.1) * 0.5;
        particle.x += particle.vx;
        particle.y += particle.vy * 0.5; // Slower vertical movement
        
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
        
        ctx.save();
        ctx.globalAlpha = particle.opacity * (0.5 + 0.5 * Math.sin(time + index * 0.2));
        
        // Draw growing stalks
        ctx.strokeStyle = particle.color;
        ctx.lineWidth = 2;
        const height = particle.size * particle.growth * 8;
        
        ctx.beginPath();
        ctx.moveTo(particle.x, particle.y);
        ctx.lineTo(particle.x, particle.y - height);
        ctx.stroke();
        
        // Draw leaves along the stalk
        for (let i = 1; i < height / 15; i++) {
          const leafY = particle.y - (i * 15);
          const leafSize = particle.size * (1 - i / 10);
          
          ctx.fillStyle = particle.color;
          ctx.beginPath();
          ctx.ellipse(particle.x - leafSize * 2, leafY, leafSize, leafSize * 0.5, -0.5, 0, Math.PI * 2);
          ctx.fill();
          
          ctx.beginPath();
          ctx.ellipse(particle.x + leafSize * 2, leafY, leafSize, leafSize * 0.5, 0.5, 0, Math.PI * 2);
          ctx.fill();
        }
        
        ctx.restore();
      });
    };

    const drawHarvestParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const time = Date.now() * 0.002;
      
      particles.forEach((particle, index) => {
        // Swirling motion like harvest dust
        particle.angle = (particle.angle || 0) + 0.02;
        particle.x += Math.cos(particle.angle) * 0.5;
        particle.y += Math.sin(particle.angle) * 0.3 + particle.vy;
        
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y > canvas.height) particle.y = -10;
        
        ctx.save();
        ctx.globalAlpha = particle.opacity * (0.6 + 0.4 * Math.sin(time + index * 0.1));
        
        // Draw grain-like particles
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 2
        );
        gradient.addColorStop(0, particle.color);
        gradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.restore();
      });
    };

    const drawOrganicFlow = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const time = Date.now() * 0.001;
      
      particles.forEach((particle, index) => {
        // Organic flowing movement
        const wave = Math.sin(time + index * 0.3) * 30;
        particle.x += particle.vx + Math.sin(time + index * 0.1) * 0.3;
        particle.y += particle.vy + wave * 0.01;
        
        if (particle.x < -100) particle.x = canvas.width + 100;
        if (particle.x > canvas.width + 100) particle.x = -100;
        if (particle.y < -100) particle.y = canvas.height + 100;
        if (particle.y > canvas.height + 100) particle.y = -100;
        
        ctx.save();
        ctx.globalAlpha = particle.opacity * (0.4 + 0.6 * Math.sin(time + index * 0.2));
        
        // Create organic blob shapes
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 4
        );
        gradient.addColorStop(0, particle.color);
        gradient.addColorStop(0.7, particle.color + '80');
        gradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        
        // Draw organic shape
        const points = 8;
        for (let i = 0; i < points; i++) {
          const angle = (i / points) * Math.PI * 2;
          const radius = particle.size * 3 * (1 + 0.3 * Math.sin(time * 2 + angle + index));
          const x = particle.x + Math.cos(angle) * radius;
          const y = particle.y + Math.sin(angle) * radius;
          
          if (i === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.closePath();
        ctx.fill();
        
        ctx.restore();
      });
    };

    const drawGeometricCrops = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
        
        ctx.save();
        ctx.globalAlpha = particle.opacity;
        
        // Draw connections between nearby particles
        particles.forEach((otherParticle, otherIndex) => {
          if (index !== otherIndex) {
            const distance = Math.sqrt(
              Math.pow(particle.x - otherParticle.x, 2) + 
              Math.pow(particle.y - otherParticle.y, 2)
            );
            
            if (distance < 120) {
              ctx.globalAlpha = (120 - distance) / 120 * 0.3;
              ctx.strokeStyle = particle.color;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.stroke();
            }
          }
        });
        
        // Draw geometric crop pattern
        ctx.globalAlpha = particle.opacity;
        ctx.fillStyle = particle.color;
        ctx.strokeStyle = particle.color;
        ctx.lineWidth = 2;
        
        // Draw hexagonal crop pattern
        ctx.beginPath();
        for (let i = 0; i < 6; i++) {
          const angle = (i / 6) * Math.PI * 2;
          const x = particle.x + Math.cos(angle) * particle.size;
          const y = particle.y + Math.sin(angle) * particle.size;
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.fill();
        
        ctx.restore();
      });
    };

    const animate = () => {
      switch (variant) {
        case 'farmland-seeds':
          drawFarmlandSeeds();
          break;
        case 'growing-fields':
          drawGrowingFields();
          break;
        case 'harvest-particles':
          drawHarvestParticles();
          break;
        case 'organic-flow':
          drawOrganicFlow();
          break;
        case 'geometric-crops':
          drawGeometricCrops();
          break;
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    initParticles();
    animate();

    const handleResize = () => {
      resizeCanvas();
      initParticles();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [variant]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ zIndex: 1 }}
    />
  );
}
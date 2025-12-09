'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

interface InteractiveTitleProps {
  lines: string[];
  gradientWords?: number[];
}

export default function InteractiveTitle({ lines, gradientWords = [1] }: InteractiveTitleProps) {
  const containerRef = useRef<HTMLHeadingElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredWord, setHoveredWord] = useState<number | null>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      // Animate each line with stagger - more dramatic entrance
      const allWords = container.querySelectorAll('.word-wrapper');
      
      allWords.forEach((word, index) => {
        const letters = word.querySelectorAll('.letter');
        
        // Staggered letter animation with 3D effect
        gsap.from(letters, {
          opacity: 0,
          y: 120,
          rotationX: -90,
          transformOrigin: '50% 100%',
          duration: 1,
          delay: index * 0.06,
          stagger: 0.03,
          ease: 'back.out(2)',
        });

        // Magnetic effect for words - stronger interaction
        word.addEventListener('mouseenter', () => {
          const wordIndex = Array.from(allWords).indexOf(word);
          setHoveredWord(wordIndex);
          
          gsap.to(word, {
            scale: 1.08,
            y: -8,
            duration: 0.4,
            ease: 'power2.out',
          });

          // Animate letters on hover
          letters.forEach((letter, letterIndex) => {
            gsap.to(letter, {
              y: Math.sin(letterIndex * 0.5) * -8,
              rotationZ: Math.sin(letterIndex) * 5,
              duration: 0.3,
              delay: letterIndex * 0.02,
              ease: 'power2.out',
            });
          });
        });

        word.addEventListener('mouseleave', () => {
          setHoveredWord(null);
          
          gsap.to(word, {
            scale: 1,
            y: 0,
            duration: 0.4,
            ease: 'power2.out',
          });

          // Reset letters
          letters.forEach((letter) => {
            gsap.to(letter, {
              y: 0,
              rotationZ: 0,
              duration: 0.3,
              ease: 'power2.out',
            });
          });
        });
      });
    }, container);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Particles are animated via CSS for better performance

  const splitIntoWords = (text: string) => {
    return text.split(' ');
  };

  return (
    <h1
      ref={containerRef}
      className="relative text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[10rem] font-bold tracking-tighter text-foreground mb-12 leading-[0.85] cursor-default select-none"
      aria-label={lines.join(' ')}
    >
      {/* Cursor glow effect - follows mouse */}
      <div
        className="pointer-events-none fixed w-[500px] h-[500px] rounded-full bg-gradient-radial from-primary/25 via-purple-500/15 to-transparent blur-3xl transition-opacity duration-500 z-0"
        style={{
          left: `${mousePosition.x - 250}px`,
          top: `${mousePosition.y - 250}px`,
          opacity: hoveredWord !== null ? 0.7 : 0.15,
          transform: 'translate(-50%, -50%)',
          willChange: 'transform',
        }}
      />

      {lines.map((line, lineIndex) => {
        const words = splitIntoWords(line);
        const isGradientLine = gradientWords.includes(lineIndex);

        return (
          <span key={lineIndex} className="title-line block relative mb-2 md:mb-4">
            {words.map((word, wordIndex) => {
              const globalWordIndex = lines
                .slice(0, lineIndex)
                .reduce((acc, l) => acc + splitIntoWords(l).length, 0) + wordIndex;
              
              const letters = word.split('');
              const isHovered = hoveredWord === globalWordIndex;

              return (
                <span
                  key={wordIndex}
                  className="word-wrapper inline-block relative mx-1 md:mx-2 group"
                >
                  {/* Hover glow effect - enhanced */}
                  <span
                    className={`absolute inset-0 blur-2xl transition-all duration-500 ${
                      isGradientLine
                        ? 'bg-gradient-to-r from-primary via-purple-500 to-primary'
                        : 'bg-primary'
                    }`}
                    style={{
                      opacity: isHovered ? 0.5 : 0,
                      transform: isHovered ? 'scale(1.2)' : 'scale(1)',
                    }}
                  />

                  {/* Letters with enhanced animations */}
                  <span className="relative inline-block">
                    {letters.map((letter, letterIndex) => (
                      <span
                        key={letterIndex}
                        className={`letter inline-block ${
                          isGradientLine ? 'gradient-text' : ''
                        } transition-all duration-300`}
                        style={{
                          transform: isHovered
                            ? `translateY(${Math.sin(letterIndex * 0.8) * -5}px) rotateZ(${Math.sin(letterIndex) * 3}deg)`
                            : 'translateY(0) rotateZ(0deg)',
                          filter: isHovered ? 'brightness(1.2)' : 'brightness(1)',
                        }}
                      >
                        {letter === ' ' ? '\u00A0' : letter}
                      </span>
                    ))}
                  </span>

                  {/* Decorative underline for gradient words - animated */}
                  {isGradientLine && wordIndex === 0 && (
                    <span 
                      className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-primary via-purple-500 to-primary opacity-50"
                      style={{
                        width: isHovered ? '100%' : '0%',
                        transition: 'width 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                      }}
                    />
                  )}

                  {/* Ripple effect on hover */}
                  {isHovered && (
                    <span className="absolute inset-0 rounded-lg bg-primary/20 animate-ping opacity-75"></span>
                  )}
                </span>
              );
            })}
          </span>
        );
      })}

      {/* Floating particles effect - CSS animated for performance */}
      <div 
        ref={particlesRef}
        className="absolute inset-0 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        {[...Array(25)].map((_, i) => {
          const randomLeft = Math.random() * 100;
          const randomDelay = Math.random() * 5;
          const randomDuration = 3 + Math.random() * 3;
          
          return (
            <div
              key={i}
              className="particle absolute w-1.5 h-1.5 rounded-full bg-primary/30"
              style={{
                left: `${randomLeft}%`,
                top: '100%',
                animationDelay: `${randomDelay}s`,
                animationDuration: `${randomDuration}s`,
              }}
            />
          );
        })}
      </div>

      {/* Subtle background gradient overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none opacity-0 transition-opacity duration-500"
        style={{
          opacity: hoveredWord !== null ? 0.3 : 0,
        }}
      />
    </h1>
  );
}

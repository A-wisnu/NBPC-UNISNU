'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

// Komponen khusus untuk elemen dengan nilai random yang hanya dirender di client
const ClientOnlyParticles = () => {
  const [mounted, setMounted] = useState(false);
  
  // Pastikan hanya dijalankan di client
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  
  // Buat partikel hanya setelah komponen dimounting di client
  const particles = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    size: Math.random() * 6 + 2, // 2-8px
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 15, // 15-35s
    delay: Math.random() * 2,
  }));

  return (
    <>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-[#00B5EF] opacity-40"
          style={{
            width: particle.size,
            height: particle.size,
            top: `${particle.y}%`,
            left: `${particle.x}%`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 40 - 20, 0],
            opacity: [0, 0.4, 0.8, 0.4, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </>
  );
};

const HeroSection = () => {
  return (
    <section className="relative h-hero flex items-center overflow-hidden bg-[#050A24]">
      {/* Animated Background with gradient waves */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute bottom-0 left-0 w-full h-[70%] opacity-30"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(0,181,239,0.4) 0%, rgba(0,102,255,0.2) 70%, rgba(0,0,0,0) 100%)',
          }}
          animate={{ 
            y: [10, -10, 10],
            scale: [1, 1.05, 1],
          }} 
          transition={{ 
            duration: 15,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
        <motion.div 
          className="absolute top-1/3 right-0 w-1/2 h-[40%] opacity-20"
          style={{
            background: 'radial-gradient(circle at center, rgba(0,181,239,0.3) 0%, rgba(0,102,255,0.1) 50%, rgba(0,0,0,0) 100%)',
          }}
          animate={{ 
            x: [10, -10, 10],
            rotate: [0, 5, 0],
          }} 
          transition={{ 
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />

        {/* Floating particles - client-only render */}
        <ClientOnlyParticles />
      </div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="block">UNISNU</span>
              <span className="block">National Business Plan</span>
            </motion.h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <motion.h2
              className="text-4xl md:text-6xl font-bold mb-8"
              style={{
                background: 'linear-gradient(to right, #4F46E5, #0066FF, #00B5EF)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              Competition 2025
            </motion.h2>
          </motion.div>
          
          <motion.div 
            className="text-xl text-white mb-12 relative flex justify-center space-x-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Container untuk seluruh animasi tagline */}
            <motion.div 
              className="flex items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              {/* Kata 1: Bersaing */}
              <motion.span 
                className="inline-block mr-2 relative"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <motion.span
                  className="inline-block relative z-10"
                  animate={{ 
                    color: ["#ffffff", "#00B5EF", "#ffffff"] 
                  }}
                  transition={{ 
                    duration: 3,
                    times: [0, 0.5, 1],
                    repeat: Infinity,
                    repeatDelay: 2
                  }}
                >
                  Bersaing
                </motion.span>
                <motion.span 
                  className="absolute bottom-0 left-0 h-[2px] bg-[#00B5EF]"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ 
                    duration: 0.3, 
                    delay: 0.6,
                    ease: "easeOut"
                  }}
                />
                <motion.span className="text-white">.</motion.span>
              </motion.span>
              
              {/* Kata 2: Berinovasi */}
              <motion.span 
                className="inline-block mr-2 relative"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <motion.span
                  className="inline-block relative z-10"
                  animate={{ 
                    color: ["#ffffff", "#00B5EF", "#ffffff"] 
                  }}
                  transition={{ 
                    duration: 3,
                    times: [0, 0.5, 1],
                    repeat: Infinity,
                    repeatDelay: 2,
                    delay: 1
                  }}
                >
                  Berinovasi
                </motion.span>
                <motion.span 
                  className="absolute bottom-0 left-0 h-[2px] bg-[#00B5EF]"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ 
                    duration: 0.3, 
                    delay: 1.1,
                    ease: "easeOut"
                  }}
                />
                <motion.span className="text-white">.</motion.span>
              </motion.span>
              
              {/* Kata 3: Berprestasi */}
              <motion.span 
                className="inline-block relative"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.3 }}
              >
                <motion.span
                  className="inline-block relative z-10"
                  animate={{ 
                    color: ["#ffffff", "#00B5EF", "#ffffff"] 
                  }}
                  transition={{ 
                    duration: 3,
                    times: [0, 0.5, 1],
                    repeat: Infinity,
                    repeatDelay: 2,
                    delay: 2
                  }}
                >
                  Berprestasi
                </motion.span>
                <motion.span 
                  className="absolute bottom-0 left-0 h-[2px] bg-[#00B5EF]"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ 
                    duration: 0.3, 
                    delay: 1.6,
                    ease: "easeOut"
                  }}
                />
                <motion.span className="text-white">.</motion.span>
              </motion.span>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a href="https://s.id/LinkPendaftaranNBPC" target="_blank" rel="noopener noreferrer">
              <motion.button
                className="bg-[#00B5EF] hover:bg-[#0099CC] text-white font-medium px-8 py-3 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 15px 30px -10px rgba(0, 181, 239, 0.4)" 
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ boxShadow: "0 5px 15px -5px rgba(0, 181, 239, 0.3)" }}
                animate={{
                  boxShadow: ["0 5px 15px -5px rgba(0, 181, 239, 0.3)", "0 15px 30px -8px rgba(0, 181, 239, 0.5)", "0 5px 15px -5px rgba(0, 181, 239, 0.3)"],
                }}
                transition={{
                  boxShadow: {
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }
                }}
              >
                Daftar Sekarang
              </motion.button>
            </a>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative bottom wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          className="w-full h-auto"
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,32L60,42.7C120,53,240,75,360,80C480,85,600,75,720,58.7C840,43,960,21,1080,16C1200,11,1320,21,1380,26.7L1440,32L1440,100L1380,100C1320,100,1200,100,1080,100C960,100,840,100,720,100C600,100,480,100,360,100C240,100,120,100,60,100L0,100Z"
            fill="url(#gradient)"
            opacity="0.1"
            animate={{
              d: [
                "M0,32L60,42.7C120,53,240,75,360,80C480,85,600,75,720,58.7C840,43,960,21,1080,16C1200,11,1320,21,1380,26.7L1440,32L1440,100L1380,100C1320,100,1200,100,1080,100C960,100,840,100,720,100C600,100,480,100,360,100C240,100,120,100,60,100L0,100Z",
                "M0,60L60,55C120,50,240,40,360,45C480,50,600,70,720,75C840,80,960,70,1080,55C1200,40,1320,20,1380,10L1440,0L1440,100L1380,100C1320,100,1200,100,1080,100C960,100,840,100,720,100C600,100,480,100,360,100C240,100,120,100,60,100L0,100Z",
              ],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#4F46E5" />
              <stop offset="50%" stopColor="#0066FF" />
              <stop offset="100%" stopColor="#00B5EF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection; 
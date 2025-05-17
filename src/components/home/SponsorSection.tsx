  'use client';

  import { motion } from 'framer-motion';
  import { useState, useEffect } from 'react';
  import Image from 'next/image';

  const SponsorSection = () => {
    const [isMounted, setIsMounted] = useState(false);
    const [particles, setParticles] = useState<Array<{
      width: string;
      height: string;
      top: string;
      left: string;
      delay: string;
      duration: string;
    }>>([]);
    
    useEffect(() => {
      // Membuat partikel dengan nilai acak hanya di client-side
      const newParticles = Array.from({ length: 20 }).map(() => ({
        width: `${Math.random() * 6 + 2}px`,
        height: `${Math.random() * 6 + 2}px`,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        delay: `${Math.random() * 5}s`,
        duration: `${Math.random() * 10 + 15}s`,
      }));
      
      setParticles(newParticles);
      setIsMounted(true);
    }, []);

    // Animasi container
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: { 
        opacity: 1,
        transition: { 
          staggerChildren: 0.1,
          delayChildren: 0.3
        }
      }
    };

    // Animasi item
    const itemVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: { 
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] }
      }
    };

    // Animasi judul
    const titleVariants = {
      hidden: { opacity: 0, y: -20 },
      visible: { 
        opacity: 1, 
        y: 0, 
        transition: { duration: 0.7, ease: "easeOut" } 
      }
    };

    // Daftar sponsor
    const sponsors = [
      {
        name: "UNISNU",
        logo: "/images/LogoUNISNU.png"
      },
      {
        name: "LPPI",
        logo: "/images/LOGO-lppi.png"
      },
      {
        name: "PKWU",
        logo: "/images/PKWU.png"
      },
      {
        name: "UBC",
        logo: "/images/UBC.png"
      }
    ];

    // Shared rendering function untuk SSR
    function renderSponsorSection() {
      // Gunakan placeholder statis untuk render server
      const staticParticles = Array.from({ length: 20 }).map((_, i) => ({
        width: "4px",
        height: "4px",
        top: `${(i * 5) % 100}%`,
        left: `${(i * 7) % 100}%`,
        delay: "0s",
        duration: "20s",
      }));

      return (
        <section className="py-20 bg-gradient-to-r from-[#003B80] via-[#0078DC] to-[#00A3B4] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-[#00A3C4]/30 to-transparent"></div>
          <div className="absolute inset-0 bg-[url('/images/noise.svg')] opacity-5 mix-blend-soft-light"></div>
          <div className="absolute inset-0 overflow-hidden">
            {staticParticles.map((particle, i) => (
              <div 
                key={i}
                className="absolute rounded-full bg-white/5"
                style={{
                  width: particle.width,
                  height: particle.height,
                  top: particle.top,
                  left: particle.left,
                  animationDelay: particle.delay,
                  animationDuration: particle.duration,
                }}
              />
            ))}
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-center text-white text-3xl md:text-4xl font-bold mb-16 tracking-tight">Didukung Oleh</h2>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-10 lg:gap-16">
              {sponsors.map((sponsor, index) => (
                <div key={index} className="h-12 md:h-16 flex items-center justify-center p-5 sm:p-6 md:p-8 bg-white/5 backdrop-blur-sm rounded-xl">
                  <div className="relative w-[120px] md:w-[130px] h-[40px] md:h-[45px]">
                    <Image
                      src={sponsor.logo}
                      alt={`Logo ${sponsor.name}`}
                      fill
                      className="object-contain"
                      // style={{ filter: "brightness(0) invert(1)" }}
                      sizes="(max-width: 768px) 120px, 130px"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
    }

    // Versi statis untuk SSR
    if (!isMounted) {
      return renderSponsorSection();
    }

    // Versi dengan animasi untuk client-side
    return (
      <section className="py-16 md:py-20 bg-gradient-to-r from-[#003B80] via-[#0078DC] to-[#00A3B4] relative overflow-hidden">
        {/* Efek bubble interaktif */}
        <div className="absolute inset-0 z-0">
          {isMounted && [...Array(8)].map((_, i) => {
            // Konstanta untuk animasi, dibuat di sisi klien
            const width = Math.random() * 300 + 100;
            const height = Math.random() * 300 + 100;
            const topPos = Math.random() * 120 - 20;
            const leftPos = Math.random() * 120 - 20;
            const xMove = Math.random() * 40 - 20;
            const yMove = Math.random() * 40 - 20;
            const scale = Math.random() * 0.2 + 0.9;
            const duration = Math.random() * 20 + 20;
            
            return (
              <motion.div
                key={`bubble-${i}`}
                className="absolute rounded-full bg-gradient-to-t from-blue-400/5 to-cyan-300/10"
                style={{
                  width: `${width}px`,
                  height: `${height}px`,
                  top: `${topPos}%`,
                  left: `${leftPos}%`,
                  filter: 'blur(40px)'
                }}
                animate={{
                  x: [0, xMove],
                  y: [0, yMove],
                  scale: [1, scale, 1]
                }}
                transition={{
                  duration: duration,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
            );
          })}
        </div>
        
        {/* Warp speed effect */}
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 w-full h-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              {isMounted && [...Array(40)].map((_, i) => {
                // Konstanta untuk animasi warp, dibuat di sisi klien
                const width = Math.random() * 200 + 50;
                const topPos = Math.random() * 100;
                const leftPos = Math.random() * 100;
                const rotate = Math.random() * 360;
                const xMove = Math.random() * 200 - 100;
                const duration = Math.random() * 3 + 2;
                const delay = Math.random() * 10;
                
                return (
                  <motion.div
                    key={`warp-${i}`}
                    className="absolute bg-gradient-to-r from-white/0 via-white/10 to-white/0 h-[1px]"
                    style={{
                      width: `${width}px`,
                      top: `${topPos}%`,
                      left: `${leftPos}%`,
                      transform: `rotate(${rotate}deg)`,
                    }}
                    animate={{
                      scaleX: [0, 1],
                      opacity: [0, 0.5, 0],
                      x: [0, xMove]
                    }}
                    transition={{
                      duration: duration,
                      ease: "easeOut",
                      repeat: Infinity,
                      delay: delay
                    }}
                  />
                );
              })}
            </motion.div>
          </div>
        </div>
        
        {/* Pola geometris bergerak */}
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 w-full h-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2.5 }}
            >
              {/* Pola garis horizontal */}
              {isMounted && [...Array(25)].map((_, i) => {
                const duration = 15 + i * 2;
                const delay = i * 0.3;
                
                return (
                  <motion.div
                    key={`line-h-${i}`}
                    className="absolute bg-white/10 h-[1px] w-full"
                    style={{
                      top: `${(i * 100) / 25}%`
                    }}
                    animate={{
                      opacity: [0.2, 0.5, 0.2],
                      scaleX: [1, 0.8, 1]
                    }}
                    transition={{
                      duration: duration,
                      ease: "easeInOut",
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: delay
                    }}
                  />
                );
              })}
              
              {/* Pola garis vertikal */}
              {isMounted && [...Array(25)].map((_, i) => {
                const duration = 20 + i * 1.5;
                const delay = i * 0.2;
                
                return (
                  <motion.div
                    key={`line-v-${i}`}
                    className="absolute bg-white/10 w-[1px] h-full"
                    style={{
                      left: `${(i * 100) / 25}%`
                    }}
                    animate={{
                      opacity: [0.2, 0.4, 0.2],
                      scaleY: [1, 0.9, 1]
                    }}
                    transition={{
                      duration: duration,
                      ease: "easeInOut",
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: delay
                    }}
                  />
                );
              })}
              
              {/* Pola grid diagonal */}
              {isMounted && [...Array(10)].map((_, i) => {
                const duration = 15 + i * 3;
                const delay = i * 0.5;
                
                return (
                  <motion.div
                    key={`diagonal-${i}`}
                    className="absolute bg-white/5 h-[1.5px] w-[200%]"
                    style={{
                      top: `${(i * 120) / 10 - 10}%`,
                      left: "-50%",
                      transform: "rotate(45deg)"
                    }}
                    animate={{
                      opacity: [0.1, 0.3, 0.1],
                    }}
                    transition={{
                      duration: duration,
                      ease: "easeInOut",
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: delay
                    }}
                  />
                );
              })}
            </motion.div>
          </div>
        </div>

        {/* Aurora effect */}
        <motion.div 
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <div className="absolute inset-0 overflow-hidden">
            <motion.div 
              className="absolute w-[200%] h-[200%] -top-1/2 -left-1/2"
              animate={{ 
                rotate: 360,
              }}
              transition={{ 
                duration: 60, 
                ease: "linear", 
                repeat: Infinity 
              }}
            >
              <div className="absolute top-[40%] left-[30%] w-[70%] h-[25%] bg-[#00C6FF]/10 rounded-full blur-[60px]" />
              <div className="absolute top-[25%] left-[40%] w-[80%] h-[30%] bg-[#0072FF]/10 rounded-full blur-[80px]" />
              <div className="absolute top-[60%] left-[60%] w-[40%] h-[40%] bg-[#00A3C4]/10 rounded-full blur-[60px]" />
            </motion.div>
          </div>
        </motion.div>

        <div className="absolute inset-0 bg-gradient-radial from-transparent via-[#00A3C4]/30 to-transparent"></div>
        <div className="absolute inset-0 bg-[url('/images/noise.svg')] opacity-5 mix-blend-soft-light"></div>
        
        {/* Partikel bergerak */}
        <div className="absolute inset-0 overflow-hidden">
          {isMounted && [...Array(30)].map((_, i) => {
            // Konstanta untuk partikel bergerak, dibuat di sisi klien
            const width = Math.random() * 6 + 2;
            const height = Math.random() * 6 + 2;
            const topPos = Math.random() * 100;
            const leftPos = Math.random() * 100;
            const yMove = Math.random() * -100 - 50;
            const xMove = Math.random() * 50 - 25;
            const duration = Math.random() * 10 + 15;
            
            return (
              <motion.div 
                key={i}
                className="absolute rounded-full bg-white/5"
                style={{
                  width: `${width}px`,
                  height: `${height}px`,
                  top: `${topPos}%`,
                  left: `${leftPos}%`,
                }}
                animate={{
                  y: [0, yMove],
                  x: [0, xMove],
                  opacity: [0.5, 0]
                }}
                transition={{
                  duration: duration,
                  ease: "linear",
                  repeat: Infinity,
                  repeatType: "loop"
                }}
              />
            );
          })}
        </div>
        
        {/* Lingkaran berkilauan */}
        <div className="absolute inset-0 overflow-hidden">
          {isMounted && [...Array(20)].map((_, i) => {
            // Konstanta untuk lingkaran berkilauan, dibuat di sisi klien
            const width = Math.random() * 30 + 10;
            const height = Math.random() * 30 + 10;
            const topPos = Math.random() * 100;
            const leftPos = Math.random() * 100;
            const yMove = Math.random() * 20 - 10;
            const duration = Math.random() * 4 + 6;
            const delay = Math.random() * 5;
            const colorClass = i % 3 === 0 ? 'bg-blue-300/10' : i % 3 === 1 ? 'bg-cyan-200/10' : 'bg-white/10';
            
            return (
              <motion.div 
                key={i}
                className={`absolute rounded-full ${colorClass}`}
                style={{
                  width: `${width}px`,
                  height: `${height}px`,
                  top: `${topPos}%`,
                  left: `${leftPos}%`,
                  filter: 'blur(2px)'
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.1, 0.3, 0.1],
                  y: [0, yMove]
                }}
                transition={{
                  duration: duration,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "loop",
                  delay: delay
                }}
              />
            );
          })}
        </div>
        
        {/* Bintang-bintang kecil */}
        <div className="absolute inset-0 overflow-hidden">
          {isMounted && [...Array(30)].map((_, i) => {
            // Konstanta untuk bintang-bintang kecil, dibuat di sisi klien
            const width = Math.random() * 2 + 1;
            const height = Math.random() * 2 + 1;
            const topPos = Math.random() * 100;
            const leftPos = Math.random() * 100;
            const duration = Math.random() * 2 + 1;
            const delay = Math.random() * 3;
            
            return (
              <motion.div 
                key={`star-${i}`}
                className="absolute rounded-full bg-white/20"
                style={{
                  width: `${width}px`,
                  height: `${height}px`,
                  top: `${topPos}%`,
                  left: `${leftPos}%`,
                }}
                animate={{
                  opacity: [0.2, 0.8, 0.2]
                }}
                transition={{
                  duration: duration,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: delay
                }}
              />
            );
          })}
        </div>
        
        {/* Efek gradient bergerak */}
        <motion.div 
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0.3, 0.5, 0.3], 
          }}
          transition={{ 
            duration: 8, 
            ease: "easeInOut", 
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <div className="w-full h-full bg-gradient-to-br from-[#003B80]/0 via-[#00A3C4]/30 to-[#003B80]/0"></div>
        </motion.div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2 
            className="text-center text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-10 md:mb-16 tracking-tight"
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Didukung Oleh
          </motion.h2>
          
          <motion.div 
            className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-10 lg:gap-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {sponsors.map((sponsor, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants} 
                whileHover={{
                  scale: 1.08,
                  boxShadow: "0 0 25px rgba(255, 255, 255, 0.25)",
                  backgroundColor: "rgba(255, 255, 255, 0.15)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{
                  scale: { duration: 0.4, ease: "easeOut" },
                  boxShadow: { duration: 0.4, ease: "easeOut" },
                  backgroundColor: { duration: 0.4, ease: "easeOut" }
                }}
                className="h-12 md:h-16 flex items-center justify-center group p-5 sm:p-6 md:p-8 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/30 shadow-lg shadow-blue-900/10"
              >
                <div className="relative w-[120px] md:w-[130px] h-[40px] md:h-[45px] transition-all duration-300">
                  <Image
                    src={sponsor.logo}
                    alt={`Logo ${sponsor.name}`}
                    fill
                    className="object-contain group-hover:brightness-110"
                    // style={{ filter: "brightness(0) invert(1)" }}
                    sizes="(max-width: 768px) 120px, 130px"
                    priority={index < 2}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    );
  };

  export default SponsorSection;

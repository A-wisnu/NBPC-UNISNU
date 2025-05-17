'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { FiDownload, FiCalendar, FiMapPin } from 'react-icons/fi';

// Komponen untuk partikel animasi
const ParticlesAnimation = () => {
  const [particles, setParticles] = useState<any[]>([]);
  
  useEffect(() => {
    // Buat partikel random hanya di client-side
    setParticles(
      Array.from({ length: 15 }).map((_, i) => ({
        id: i,
        size: Math.random() * 6 + 2, // 2-8px
        x: Math.random() * 100,
        y: Math.random() * 100,
        duration: Math.random() * 20 + 15, // 15-35s
        delay: Math.random() * 2,
      }))
    );
  }, []);

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

const PamphletSection = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="py-24 relative overflow-hidden bg-[#050A24]">
      {/* Background dengan gradient waves */}
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

        {/* Floating particles - hanya dirender di client */}
        {isMounted && <ParticlesAnimation />}
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
          >
            NBP Competition 2025
          </motion.h2>
          
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '8rem' }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-[#00B5EF] to-[#4F46E5] mx-auto mb-8"
          />
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Bergabunglah dalam kompetisi bisnis plan tingkat nasional dan wujudkan ide bisnismu!
          </motion.p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          {/* Pamflet dengan efek hover 3D */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative w-full max-w-sm overflow-hidden"
            whileHover={{ scale: 1.03 }}
          >
            <motion.div
              className="relative w-full h-auto aspect-[3/4] rounded-xl overflow-hidden"
              style={{ 
                boxShadow: '0 20px 50px -5px rgba(0, 0, 0, 0.5), 0 10px 20px -5px rgba(0, 0, 0, 0.2)',
                transformStyle: 'preserve-3d',
                perspective: 1000,
              }}
              whileHover={{ 
                rotateY: 10, 
                rotateX: 5,
              }}
            >
              {/* Glow effect di belakang gambar */}
              <motion.div 
                className="absolute -inset-1 bg-gradient-to-br from-[#00B5EF] to-[#4F46E5] opacity-30 rounded-xl blur-md z-0"
                animate={{ 
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
              />
              
              <Image
                src="/images/pamflet.png"
                alt="NBPC 2025 Pamflet"
                fill
                sizes="(max-width: 768px) 100vw, 384px"
                style={{ objectFit: 'cover' }}
                className="rounded-xl z-10 relative"
                onLoadingComplete={() => setIsImageLoaded(true)}
                priority
              />
            </motion.div>
          </motion.div>

          {/* Detail Informasi */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-gray-900/60 backdrop-blur-md p-8 rounded-xl border border-gray-800 max-w-md w-full"
            style={{
              boxShadow: '0 15px 30px -10px rgba(0, 0, 0, 0.5)',
            }}
          >
            <h3 className="text-2xl font-bold mb-6 text-white">Informasi Kompetisi</h3>
            
            <div className="space-y-6">
              <motion.div 
                className="flex items-start"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="bg-blue-900/70 p-3 rounded-full mr-4 text-[#00B5EF]">
                  <FiCalendar size={22} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Jadwal Penting</h4>
                  <p className="text-gray-300">Pendaftaran: 15 Mei - 30 Juni 2025</p>
                  <p className="text-gray-300">Final & Awarding: 23 Juli 2025</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="bg-indigo-900/70 p-3 rounded-full mr-4 text-[#4F46E5]">
                  <FiMapPin size={22} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Tempat Pelaksanaan</h4>
                  <p className="text-gray-300">Auditorium UNISNU</p>
                  <p className="text-gray-300">Jepara, Jawa Tengah</p>
                </div>
              </motion.div>
            </div>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <motion.a
                href="https://s.id/NBPC-UNISNU-2025"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0, 181, 239, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                className="text-center px-6 py-3 font-bold text-white bg-gradient-to-r from-[#4F46E5] to-[#00B5EF] rounded-full shadow-md hover:shadow-lg transition-all flex-1 flex items-center justify-center gap-2"
              >
                <FiDownload /> Download Booklet
              </motion.a>
              
              <motion.a
                href="/lomba"
                whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(0, 181, 239, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="text-center px-6 py-3 font-bold text-[#00B5EF] border-2 border-[#00B5EF] rounded-full hover:bg-[#00B5EF]/10 transition-all flex items-center justify-center gap-2 flex-1"
              >
                Lihat Detail
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PamphletSection; 
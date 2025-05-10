'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

// Komponen ikon SVG profesional
const InnovationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-10 h-10 text-blue-400">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 10.5a2.25 2.25 0 114.5 0 2.25 2.25 0 01-4.5 0z" />
  </svg>
);

const MentoringIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-10 h-10 text-indigo-400">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
  </svg>
);

const PrizeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-10 h-10 text-purple-400">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
  </svg>
);

const NetworkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-10 h-10 text-cyan-400">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
  </svg>
);

const AboutSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Animasi untuk judul
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.7, ease: "easeOut" } 
    }
  };

  // Animasi untuk teks paragraf
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: [0.25, 0.1, 0.25, 1.0] 
      } 
    }
  };

  // Animasi untuk highlight poin
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    }
  };

  // Fitur-fitur kompetisi dengan ikon SVG
  const features = [
    {
      icon: <InnovationIcon />,
      title: "Inovasi Bisnis",
      description: "Kembangkan ide bisnis inovatif yang memecahkan masalah nyata di masyarakat"
    },
    {
      icon: <MentoringIcon />,
      title: "Mentoring Profesional",
      description: "Dapatkan bimbingan dari mentor berpengalaman di berbagai bidang industri"
    },
    {
      icon: <PrizeIcon />,
      title: "Hadiah Menarik",
      description: "Kesempatan memenangkan hadiah dan pendanaan untuk mengembangkan bisnis Anda"
    },
    {
      icon: <NetworkIcon />,
      title: "Jaringan Luas",
      description: "Bangun koneksi dengan entrepreneur, investor, dan profesional terkemuka"
    }
  ];
  
  // Render server-side dengan nilai statis (tidak menggunakan Math.random())
  if (!isMounted) {
    // Nilai statis untuk bintang
    const staticStars = Array.from({ length: 50 }).map((_, i) => ({
      top: `${(i * 2) % 100}%`,
      left: `${(i * 7) % 100}%`,
      opacity: 0.5
    }));
    
    // Nilai statis untuk garis
    const staticLines = Array.from({ length: 15 }).map((_, i) => ({
      top: `${(i * 100) / 15}%`,
      rotate: i % 2 === 0 ? "0.5deg" : "-0.5deg",
    }));
    
    return (
      <section className="py-24 relative overflow-hidden">
        {/* Background gradient dan efek */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050A24] to-[#0C1445] z-0"></div>
        
        {/* Pola bintang statis */}
        <div className="absolute inset-0 overflow-hidden opacity-30">
          {staticStars.map((star, i) => (
            <div
              key={`star-${i}`}
              className="absolute w-1 h-1 rounded-full bg-white"
              style={{
                top: star.top,
                left: star.left,
                opacity: star.opacity
              }}
            />
          ))}
        </div>
        
        {/* Lingkaran abstrak statis */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-blue-800/10 to-indigo-800/10 blur-3xl"
            style={{ top: '-10%', left: '-10%' }}
          />
          <div
            className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-r from-indigo-900/10 to-purple-900/10 blur-3xl"
            style={{ bottom: '-20%', right: '-10%' }}
          />
        </div>

        {/* Grafik garis statis */}
        <div className="absolute inset-0">
          {staticLines.map((line, i) => (
            <div
              key={`line-${i}`}
              className="absolute h-[1px] bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0"
              style={{
                width: '100%',
                top: line.top,
                transform: `rotate(${line.rotate})`,
                transformOrigin: 'center'
              }}
            />
          ))}
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-indigo-300">
                Tentang NBP Competition
              </h2>
              
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-8" />
              
              <p className="text-lg md:text-xl leading-relaxed text-gray-300 max-w-5xl mx-auto">
              National Business Plan Competition 2025 (NBPC 2025) adalah kompetisi tahunan
              berskala nasional yang diselenggarakan oleh Pusat Kewirausahaan Unisnu dan pada tahun ini
              memasuki penyelenggaraan yang kedua kalinya. Kompetisi ini bertujuan untuk mendorong semangat kewirausahaan
              generasi muda Indonesia melalui pengembangan ide bisnis yang inovatif, aplikatif, dan berkelanjutan.
              </p>
            </div>
            
            {/* Fitur-fitur kompetisi */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-[#0A144D]/30 to-[#0F1F70]/30 p-8 rounded-xl border border-blue-900/30 backdrop-blur-sm hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300"
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-blue-100">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
            
            {/* Call to action */}
            <div className="text-center">
              <p className="text-lg text-gray-300 mb-8">
                Siap mengubah ide inovatifmu menjadi bisnis nyata? Bergabunglah dengan ratusan 
                peserta dari seluruh Indonesia dalam kompetisi bisnis paling bergengsi tahun ini.
              </p>
              
              <a 
                href="https://s.id/LinkPendaftaranNBPC"
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-blue-900/30 transition-all inline-block"
              >
                Daftar Sekarang
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Kode dengan animasi (hanya dijalankan di sisi klien)
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient dan efek */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050A24] to-[#0C1445] z-0"></div>
      
      {/* Pola bintang */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        {[...Array(50)].map((_, i) => {
          // Konstanta untuk bintang, dibuat di client-side
          const topPos = Math.random() * 100;
          const leftPos = Math.random() * 100;
          const opacity = Math.random() * 0.5 + 0.3;
          const scale = Math.random() * 0.2 + 1;
          const duration = Math.random() * 3 + 2;
          const delay = Math.random() * 5;
          
          return (
            <motion.div
              key={`star-${i}`}
              className="absolute w-1 h-1 rounded-full bg-white"
              style={{
                top: `${topPos}%`,
                left: `${leftPos}%`,
                opacity: opacity
              }}
              animate={{
                opacity: [opacity, opacity * 2, opacity],
                scale: [1, scale, 1]
              }}
              transition={{
                duration: duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: delay
              }}
            />
          );
        })}
      </div>
      
      {/* Lingkaran abstrak bergerak */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-blue-800/10 to-indigo-800/10 blur-3xl"
          style={{ top: '-10%', left: '-10%' }}
          animate={{
            x: [0, 20, 0],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-r from-indigo-900/10 to-purple-900/10 blur-3xl"
          style={{ bottom: '-20%', right: '-10%' }}
          animate={{
            x: [0, -30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Grafik garis */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => {
          const duration = 10 + i;
          const rotate = Math.random() * 2 - 1;
          
          return (
            <motion.div
              key={`line-${i}`}
              className="absolute h-[1px] bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0"
              style={{
                width: '100%',
                top: `${(i * 100) / 15}%`,
                transform: `rotate(${rotate}deg)`,
                transformOrigin: 'center'
              }}
              animate={{
                scaleX: [0.8, 1, 0.8],
                opacity: [0.1, 0.2, 0.1]
              }}
              transition={{
                duration: duration,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          );
        })}
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-indigo-300"
              variants={titleVariants}
            >
              Tentang NBP Competition
            </motion.h2>
            
            <motion.div 
              className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-8"
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: 80, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            />
            
            <motion.p 
              className="text-lg md:text-xl leading-relaxed text-gray-300 max-w-5xl mx-auto"
              variants={textVariants}
            >
              National Business Plan Competition 2025 (NBPC 2025) adalah kompetisi tahunan
              berskala nasional yang diselenggarakan oleh Pusat Kewirausahaan Unisnu dan pada tahun ini
              memasuki penyelenggaraan yang kedua kalinya. Kompetisi ini bertujuan untuk mendorong semangat kewirausahaan
              generasi muda Indonesia melalui pengembangan ide bisnis yang inovatif, aplikatif, dan berkelanjutan.  
            </motion.p>
          </motion.div>
          
          {/* Fitur-fitur kompetisi */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className="bg-gradient-to-br from-[#0A144D]/30 to-[#0F1F70]/30 p-8 rounded-xl border border-blue-900/30 backdrop-blur-sm hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300"
                variants={itemVariants}
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1)",
                  scale: 1.01
                }}
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-blue-100">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Call to action */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-300 mb-8">
              Siap mengubah ide inovatifmu menjadi bisnis nyata? Bergabunglah dengan ratusan 
              peserta dari seluruh Indonesia dalam kompetisi bisnis paling bergengsi tahun ini.
            </p>
            
            {/* <motion.a 
              href="https://s.id/LinkPendaftaranNBPC"
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-blue-900/30 transition-all inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Daftar Sekarang
            </motion.a> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 
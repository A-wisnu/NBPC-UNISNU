'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FiCalendar, FiCheck, FiStar, FiAward, FiFileText, FiUsers, FiMic } from 'react-icons/fi';
import { GiTrophy } from 'react-icons/gi';
import { IoClose } from 'react-icons/io5';

// Helper functions (moved outside the components)
// Variasi warna untuk timeline nodes berdasarkan properti color
const getNodeColor = (color: string) => {
  const colors: Record<string, string> = {
    blue: 'border-blue-400 bg-blue-400/10',
    green: 'border-green-400 bg-green-400/10',
    purple: 'border-purple-400 bg-purple-400/10',
    yellow: 'border-yellow-400 bg-yellow-400/10',
    cyan: 'border-cyan-400 bg-cyan-400/10',
    indigo: 'border-indigo-400 bg-indigo-400/10',
    orange: 'border-orange-400 bg-orange-400/10',
    amber: 'border-amber-400 bg-amber-400/10'
  };
  
  return colors[color] || 'border-blue-400 bg-blue-400/10';
};

// Variasi warna untuk judul berdasarkan properti color
const getTitleColor = (color: string) => {
  const colors: Record<string, string> = {
    blue: 'text-blue-400',
    green: 'text-green-400',
    purple: 'text-purple-400',
    yellow: 'text-yellow-400',
    cyan: 'text-cyan-400',
    indigo: 'text-indigo-400',
    orange: 'text-orange-400',
    amber: 'text-amber-400'
  };
  
  return colors[color] || 'text-blue-400';
};

// Variasi shadow untuk hover effect berdasarkan properti color
const getNodeShadow = (color: string) => {
  const shadows: Record<string, string> = {
    blue: 'shadow-blue-400/30',
    green: 'shadow-green-400/30',
    purple: 'shadow-purple-400/30',
    yellow: 'shadow-yellow-400/30',
    cyan: 'shadow-cyan-400/30',
    indigo: 'shadow-indigo-400/30',
    orange: 'shadow-orange-400/30',
    amber: 'shadow-amber-400/30'
  };
  
  return shadows[color] || 'shadow-blue-400/30';
};

// Timeline data
const timelineItems = [
  {
    title: 'Pendaftaran dan Pengumpulan BMC',
    description: 'Registrasi tim dan ide bisnis',
    date: '15 Mei - 30 Juni 2025',
    icon: <FiUsers className="text-blue-400" size={22} />,
    color: 'blue'
  },
  {
    title: 'Selelsi BMC',
    description: 'Tim juri menilai dan menyeleksi dokumen BMC yang telah masuk.',
    date: '01 Juli - 04 Juli 2025',
    icon: <FiCheck className="text-green-400" size={22} />,
    color: 'green'
  },
  {
    title: 'Pengumuman BMC',
    description: 'Hasil seleksi BMC diumumkan kepada peserta.',
    date: '05 Juli 2025',
    icon: <FiCalendar className="text-purple-400" size={22} />,
    color: 'purple'
  },
  {
    title: 'Pengumpulan Proposal',
    description: 'Peserta yang lolos wajib mengumpulkan proposal bisnis lengkap.',
    date: '06 Juli - 11 Juli 2025',
    icon: <FiStar className="text-yellow-400" size={22} />,
    color: 'yellow'
  },
  {
    title: 'Seleksi Proposal',
    description: 'Proposal akan dinilai untuk menentukan finalis.',
    date: '12 Juli - 14 Juli 2025',
    icon: <FiFileText className="text-cyan-400" size={22} />,
    color: 'cyan'
  },
  {
    title: 'Pengumuman Finalis',
    description: 'Peserta terpilih sebagai finalis diumumkan secara resmi.',
    date: '15 Juli 2025',
    icon: <FiAward className="text-indigo-400" size={22} />,
    color: 'indigo'
  },
  {
    title: 'Technical Meeting',
    description: 'Briefing teknis bagi finalis terkait tahap presentasi.',
    date: '16 Juli 2025',
    icon: <FiMic className="text-orange-400" size={22} />,
    color: 'orange'
  },
  {
    title: 'Pengumpulan PPT',
    description: 'Finalis menyerahkan materi presentasi (PPT) untuk dinilai.',
    date: '22 Juli 2025',
    icon: <GiTrophy className="text-amber-400" size={22} />,
    color: 'amber'
  }
];

// Komponen untuk popup detail timeline
const TimelinePopup = ({ item, onClose }) => {
  const getExtraContent = (title) => {
    switch(title) {
      case 'Pendaftaran':
        return (
          <div className="space-y-3">
            <h4 className="font-medium text-gray-300">Persyaratan Pendaftaran:</h4>
            <ul className="list-disc list-inside text-gray-400 space-y-1">
              <li>Tim terdiri dari 3-5 mahasiswa aktif</li>
              <li>Melengkapi formulir pendaftaran online</li>
              <li>Mengunggah proposal awal (executive summary)</li>
              <li>Membayar biaya pendaftaran</li>
            </ul>
            <p className="text-gray-400 mt-2">
              Pendaftaran dibuka secara online melalui website resmi NBPC. 
              Setiap tim harus memiliki satu ketua yang akan menjadi kontak utama dengan panitia.
            </p>
          </div>
        );
      case 'Pengumuman':
        return (
          <div className="space-y-3">
            <h4 className="font-medium text-gray-300">Kriteria Seleksi:</h4>
            <ul className="list-disc list-inside text-gray-400 space-y-1">
              <li>Orisinalitas dan inovasi ide bisnis</li>
              <li>Kelayakan implementasi</li>
              <li>Potensi dampak sosial dan ekonomi</li>
              <li>Kejelasan model bisnis</li>
            </ul>
            <p className="text-gray-400 mt-2">
              Tim yang lolos akan diberitahu melalui email dan diumumkan di website resmi.
              Semua tim akan mendapatkan feedback tertulis dari para juri.
            </p>
          </div>
        );
      case 'Technical Meeting BMC':
        return (
          <div className="space-y-3">
            <h4 className="font-medium text-gray-300">Agenda Technical Meeting:</h4>
            <ul className="list-disc list-inside text-gray-400 space-y-1">
              <li>Pengenalan dan orientasi program</li>
              <li>Workshop Business Model Canvas</li>
              <li>Sesi tanya jawab dengan mentor</li>
              <li>Networking session dengan tim lain</li>
            </ul>
            <p className="text-gray-400 mt-2">
              Technical meeting akan dilaksanakan secara hybrid (online dan offline).
              Setiap tim akan mendapatkan mentor khusus yang akan membimbing pengembangan BMC.
            </p>
          </div>
        );
      case 'Final BMC':
        return (
          <div className="space-y-3">
            <h4 className="font-medium text-gray-300">Format Presentasi:</h4>
            <ul className="list-disc list-inside text-gray-400 space-y-1">
              <li>Durasi: 15 menit presentasi + 10 menit Q&A</li>
              <li>Slide deck maksimal 15 halaman</li>
              <li>Demo produk/prototype (jika ada)</li>
              <li>Semua anggota tim harus hadir</li>
            </ul>
            <p className="text-gray-400 mt-2">
              Presentasi BMC dilakukan di hadapan panel juri yang terdiri dari akademisi, 
              praktisi bisnis, dan investor dari industri terkait.
            </p>
          </div>
        );
      case 'Pengumpulan Proposal':
        return (
          <div className="space-y-3">
            <h4 className="font-medium text-gray-300">Isi Proposal:</h4>
            <ul className="list-disc list-inside text-gray-400 space-y-1">
              <li>Executive Summary</li>
              <li>Analisis Pasar dan Kompetitor</li>
              <li>Strategi Pemasaran dan Penjualan</li>
              <li>Proyeksi Keuangan (3 tahun)</li>
              <li>Rencana Implementasi</li>
              <li>Analisis Risiko</li>
            </ul>
            <p className="text-gray-400 mt-2">
              Proposal lengkap harus dikirimkan dalam format PDF melalui portal NBPC.
              Batas maksimal ukuran file adalah 10MB dengan panjang maksimal 30 halaman.
            </p>
          </div>
        );
      case 'Penentuan 6 Besar':
        return (
          <div className="space-y-3">
            <h4 className="font-medium text-gray-300">Kriteria Penilaian:</h4>
            <ul className="list-disc list-inside text-gray-400 space-y-1">
              <li>Kualitas dan kelengkapan proposal (40%)</li>
              <li>Inovasi dan diferensiasi (25%)</li>
              <li>Kelayakan finansial (20%)</li>
              <li>Potensi dampak dan skalabilitas (15%)</li>
            </ul>
            <p className="text-gray-400 mt-2">
              Enam tim terbaik akan diundang untuk presentasi final dan akan mendapatkan 
              mentoring intensif selama seminggu sebelum babak final.
            </p>
          </div>
        );
      case 'Presentasi Tim':
        return (
          <div className="space-y-3">
            <h4 className="font-medium text-gray-300">Format Presentasi Final:</h4>
            <ul className="list-disc list-inside text-gray-400 space-y-1">
              <li>Durasi: 20 menit presentasi + 15 menit Q&A</li>
              <li>Demo produk/prototype wajib</li>
              <li>Pitch deck profesional</li>
              <li>Sesi pitching akan terbuka untuk publik</li>
            </ul>
            <p className="text-gray-400 mt-2">
              Panel juri final terdiri dari venture capitalist, entrepreneur sukses, 
              dan pakar industri terkemuka. Presentasi akan disiarkan secara live streaming.
            </p>
          </div>
        );
      case 'Final Juara':
        return (
          <div className="space-y-3">
            <h4 className="font-medium text-gray-300">Hadiah Kompetisi:</h4>
            <ul className="list-disc list-inside text-gray-400 space-y-1">
              <li>Juara 1: Rp 50.000.000 + Program Inkubasi</li>
              <li>Juara 2: Rp 30.000.000 + Mentorship</li>
              <li>Juara 3: Rp 15.000.000 + Mentorship</li>
              <li>The Most Innovative: Rp 10.000.000</li>
              <li>The Most Impactful: Rp 10.000.000</li>
            </ul>
            <p className="text-gray-400 mt-2">
              Pengumuman pemenang akan dilakukan dalam malam penghargaan NBPC. 
              Semua finalis akan mendapatkan kesempatan bertemu dengan investor potensial.
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <AnimatePresence>
      <motion.div 
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div 
          className="relative bg-gradient-to-b from-gray-900/95 to-[#071352]/95 rounded-xl border border-gray-700 w-full max-w-2xl p-6 md:p-8 shadow-2xl overflow-y-auto max-h-[90vh]"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: 'spring', damping: 20, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button 
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            onClick={onClose}
          >
            <IoClose size={24} />
          </button>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-6">
            <div className={`w-16 h-16 rounded-full flex items-center justify-center ${getNodeColor(item.color)}`}>
              <motion.div
                initial={{ rotate: -10 }}
                animate={{ rotate: 10 }}
                transition={{ duration: 1, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
              >
                {item.icon}
              </motion.div>
            </div>
            <div>
              <h3 className={`text-2xl md:text-3xl font-bold ${getTitleColor(item.color)}`}>{item.title}</h3>
              <p className="text-gray-300 mt-1">{item.date}</p>
            </div>
          </div>

          <div className="mb-6">
            <div className="bg-gray-800/50 rounded-lg p-4 border-l-4 border-l-blue-500">
              <p className="text-gray-200 text-lg">{item.description}</p>
            </div>
          </div>

          <div className="space-y-6">
            {getExtraContent(item.title)}
            
            <div className="mt-8 pt-6 border-t border-gray-700/50">
              <div className="flex justify-between items-center">
                <p className="text-gray-400 text-sm">NBPC Competition 2025</p>
                <motion.div 
                  className={`text-sm font-medium px-4 py-1 rounded-full ${getNodeColor(item.color)}`}
                  whileHover={{ scale: 1.05 }}
                >
                  <span className={getTitleColor(item.color)}>TAHAP {timelineItems.findIndex(i => i.title === item.title) + 1}/8</span>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const TimelineSection = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Render server-side dengan animasi dasar
  if (!isMounted) {
    return (
      <section className="py-24 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050A24] to-[#071352] z-0"></div>
        
        {/* Grid pattern - static version */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute h-[1px] w-full bg-gray-500/20 top-1/4"></div>
          <div className="absolute h-[1px] w-full bg-gray-500/20 top-2/4"></div>
          <div className="absolute h-[1px] w-full bg-gray-500/20 top-3/4"></div>
          
          <div className="absolute w-[1px] h-full bg-gray-500/20 left-1/4"></div>
          <div className="absolute w-[1px] h-full bg-gray-500/20 left-2/4"></div>
          <div className="absolute w-[1px] h-full bg-gray-500/20 left-3/4"></div>
        </div>

        {/* Abstract shapes - static */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-blue-500/5 blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 rounded-full bg-purple-500/5 blur-3xl"></div>
        
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-indigo-300">
              Timeline Lomba
            </h2>
            
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mt-4 mb-8" />
            
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Berikut adalah rangkaian perjalanan kompetisi NBP dari awal hingga pengumuman pemenang
            </p>
          </div>

          {/* Desktop timeline */}
          <div className="hidden md:block relative">
            {/* Top timeline */}
            <div className="relative flex justify-between mb-24">
              <div className="absolute left-0 right-0 top-1/2 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-yellow-400"></div>
              
              {timelineItems.slice(0, 4).map((item, index) => (
                <div
                  key={`top-${index}`}
                  className="relative z-10 flex flex-col items-center"
                >
                  <div 
                    className={`w-16 h-16 rounded-full border-2 flex items-center justify-center mb-4 ${getNodeColor(item.color)} hover:shadow-lg transition-all duration-300 cursor-pointer`}
                    onClick={() => setActiveItem(item)}
                  >
                    {item.icon}
                  </div>
                  <div className="text-center">
                    <h3 className={`text-lg font-bold mb-1 ${getTitleColor(item.color)}`}>{item.title}</h3>
                    <p className="text-white text-sm text-opacity-80 mb-2">{item.description}</p>
                    <p className="text-gray-400 text-xs font-medium">{item.date}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom timeline */}
            <div className="relative flex justify-between">
              <div className="absolute left-0 right-0 top-1/2 h-1 bg-gradient-to-r from-cyan-400 via-indigo-400 to-orange-400"></div>
              
              {timelineItems.slice(4).map((item, index) => (
                <div
                  key={`bottom-${index}`}
                  className="relative z-10 flex flex-col items-center"
                >
                  <div 
                    className={`w-16 h-16 rounded-full border-2 flex items-center justify-center mb-4 ${getNodeColor(item.color)} hover:shadow-lg transition-all duration-300 cursor-pointer`}
                    onClick={() => setActiveItem(item)}
                  >
                    {item.icon}
                  </div>
                  <div className="text-center">
                    <h3 className={`text-lg font-bold mb-1 ${getTitleColor(item.color)}`}>{item.title}</h3>
                    <p className="text-white text-sm text-opacity-80 mb-2">{item.description}</p>
                    <p className="text-gray-400 text-xs font-medium">{item.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile timeline */}
          <div className="md:hidden relative">
            <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-400 via-purple-400 to-amber-400"></div>
            
            <div className="space-y-12">
              {timelineItems.map((item, index) => (
                <div
                  key={`mobile-${index}`}
                  className="flex items-start space-x-6"
                >
                  <div 
                    className={`flex-shrink-0 w-12 h-12 rounded-full border-2 flex items-center justify-center z-10 ${getNodeColor(item.color)} hover:shadow-lg transition-all duration-300 cursor-pointer`}
                    onClick={() => setActiveItem(item)}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h3 className={`text-lg font-bold mb-1 ${getTitleColor(item.color)}`}>{item.title}</h3>
                    <p className="text-white text-sm text-opacity-80 mb-1">{item.description}</p>
                    <p className="text-gray-400 text-xs font-medium">{item.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  // Main component dengan animasi untuk client-side
  return (
    <section className="py-24 relative overflow-hidden">
      {activeItem && (
        <TimelinePopup 
          item={activeItem} 
          onClose={() => setActiveItem(null)} 
        />
      )}
      
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050A24] to-[#071352] z-0"></div>
      
      {/* Background graphics dengan animasi */}
      <div className="absolute inset-0 opacity-20">
        {/* Grid pattern dengan animasi */}
        {[...Array(8)].map((_, i) => (
          <motion.div 
            key={`h-line-${i}`}
            className="absolute h-[1px] w-full bg-gray-500/20"
            style={{ top: `${(i + 1) * 10}%` }}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 0.2 }}
            transition={{ duration: 1.5, delay: i * 0.1, ease: "easeOut" }}
          />
        ))}
        
        {[...Array(8)].map((_, i) => (
          <motion.div 
            key={`v-line-${i}`}
            className="absolute w-[1px] h-full bg-gray-500/20"
            style={{ left: `${(i + 1) * 10}%` }}
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 0.2 }}
            transition={{ duration: 1.5, delay: i * 0.1, ease: "easeOut" }}
          />
        ))}
        
        {/* Floating particles */}
        {[...Array(30)].map((_, i) => {
          const size = Math.random() * 4 + 2;
          return (
            <motion.div
              key={`particle-${i}`}
              className="absolute rounded-full bg-gray-400/10"
              style={{
                width: size,
                height: size,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -10, 0],
                opacity: [0.1, 0.4, 0.1],
              }}
              transition={{
                duration: Math.random() * 3 + 5,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          );
        })}
      </div>
      
      {/* Abstract blobs dengan animasi */}
      <motion.div 
        className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-blue-500/5 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-1/4 left-1/3 w-80 h-80 rounded-full bg-purple-500/5 blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      
      <div className="container-custom relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-indigo-300"
            initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" }}
            animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
            transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
          >
            Timeline Lomba
          </motion.h2>
          
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mt-4 mb-8"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 96, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
          
          <motion.p 
            className="text-lg text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Berikut adalah rangkaian perjalanan kompetisi NBP dari awal hingga pengumuman pemenang
          </motion.p>
        </motion.div>

        {/* Desktop timeline dengan animasi dan interaktif */}
        <div className="hidden md:block relative">
          {/* Top timeline animasi */}
          <div className="relative flex justify-between mb-24">
            <motion.div 
              className="absolute left-0 right-0 top-1/2 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-yellow-400"
              initial={{ scaleX: 0, transformOrigin: "left" }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />
            
            {timelineItems.slice(0, 4).map((item, index) => (
              <motion.div
                key={`top-${index}`}
                className="relative z-10 flex flex-col items-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <motion.div 
                  className={`w-16 h-16 rounded-full border-2 flex items-center justify-center mb-4 ${getNodeColor(item.color)} cursor-pointer`}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 300, 
                    damping: 15, 
                    delay: 0.5 + index * 0.15 
                  }}
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: `0 0 20px 5px rgba(var(--${item.color}-rgb)/0.3)`,
                    transition: { duration: 0.2 }
                  }}
                  onClick={() => setActiveItem(item)}
                >
                  {item.icon}
                </motion.div>
                <motion.div 
                  className="text-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.15 }}
                >
                  <h3 className={`text-lg font-bold mb-1 ${getTitleColor(item.color)}`}>{item.title}</h3>
                  <p className="text-white text-sm text-opacity-80 mb-2">{item.description}</p>
                  <p className="text-gray-400 text-xs font-medium">{item.date}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Bottom timeline animasi */}
          <div className="relative flex justify-between">
            <motion.div 
              className="absolute left-0 right-0 top-1/2 h-1 bg-gradient-to-r from-cyan-400 via-indigo-400 to-orange-400"
              initial={{ scaleX: 0, transformOrigin: "left" }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeInOut", delay: 0.8 }}
            />
            
            {timelineItems.slice(4).map((item, index) => (
              <motion.div
                key={`bottom-${index}`}
                className="relative z-10 flex flex-col items-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.15 }}
              >
                <motion.div 
                  className={`w-16 h-16 rounded-full border-2 flex items-center justify-center mb-4 ${getNodeColor(item.color)} cursor-pointer`}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 300, 
                    damping: 15, 
                    delay: 1.2 + index * 0.15 
                  }}
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: `0 0 20px 5px rgba(var(--${item.color}-rgb)/0.3)`,
                    transition: { duration: 0.2 }
                  }}
                  onClick={() => setActiveItem(item)}
                >
                  {item.icon}
                </motion.div>
                <motion.div 
                  className="text-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.4 + index * 0.15 }}
                >
                  <h3 className={`text-lg font-bold mb-1 ${getTitleColor(item.color)}`}>{item.title}</h3>
                  <p className="text-white text-sm text-opacity-80 mb-2">{item.description}</p>
                  <p className="text-gray-400 text-xs font-medium">{item.date}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile timeline dengan animasi dan interaktif */}
        <div className="md:hidden relative">
          <motion.div 
            className="absolute left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-400 via-purple-400 to-amber-400"
            initial={{ scaleY: 0, transformOrigin: "top" }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          
          <div className="space-y-12">
            {timelineItems.map((item, index) => (
              <motion.div
                key={`mobile-${index}`}
                className="flex items-start space-x-6"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div 
                  className={`flex-shrink-0 w-12 h-12 rounded-full border-2 flex items-center justify-center z-10 ${getNodeColor(item.color)} cursor-pointer`}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 300, 
                    damping: 15, 
                    delay: 0.3 + index * 0.1 
                  }}
                  whileHover={{ scale: 1.1 }}
                  onClick={() => setActiveItem(item)}
                >
                  {item.icon}
                </motion.div>
                <div className="flex-1">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  >
                    <h3 className={`text-lg font-bold mb-1 ${getTitleColor(item.color)}`}>{item.title}</h3>
                    <p className="text-white text-sm text-opacity-80 mb-1">{item.description}</p>
                    <p className="text-gray-400 text-xs font-medium mb-2">{item.date}</p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Interactive note */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 2 }}
        >
          <p className="text-blue-300 text-sm">
            <span className="inline-block animate-pulse mr-2">✨</span> 
            Klik pada ikon untuk melihat informasi detail
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TimelineSection;
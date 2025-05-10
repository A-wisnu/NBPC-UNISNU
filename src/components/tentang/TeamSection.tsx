'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX } from 'react-icons/fi';

interface TeamMember {
  name: string;
  role?: string;
  image: string;
}

interface Division {
  name: string;
  leader: TeamMember;
  members: TeamMember[];
  description?: string;
  responsibilities?: string[];
}

// Interface untuk popup
interface PopupInfo {
  isOpen: boolean;
  division: Division | null;
}

const TeamSection = () => {
  // State untuk popup
  const [popupInfo, setPopupInfo] = useState<PopupInfo>({
    isOpen: false,
    division: null
  });

  // Data divisi dan anggota tim
  const divisions: Division[] = [
    {
      name: 'Divisi Acara',
      leader: {
        name: 'M. Dalhar Afandi',
        role: 'Koordinator',
        image: '/images/team/d_acara/Dalhar_Afandi.jpeg'
      },
      members: [
        { name: 'Alif Fataya', image: '/images/team/d_acara/alif.jpeg' },
        { name: 'Mohammad Affandi', image: '/images/team/d_acara/m_affandi.jpg' },
        { name: 'Abid Azka Maulana', image: '/images/team/d_acara/abid.jpeg' },
        { name: 'M. Afriza Maula Putra', image: '/images/team/d_acara/afriza.jpeg' }
      ],
      description: 'Divisi Acara bertanggung jawab untuk merencanakan, mengorganisir, dan mengeksekusi seluruh rangkaian acara NBPC.',
      responsibilities: [
        'Menyusun rundown acara secara keseluruhan',
        'Koordinasi dengan pembicara dan juri lomba',
        'Memastikan kelancaran acara pada hari pelaksanaan',
        'Menyiapkan materi teknis seperti presentasi dan dokumen acara',
        'Mengatur jalannya sesi perlombaan sesuai kategori'
      ]
    },
    {
      name: 'Divisi PDD & IT',
      leader: {
        name: 'Wisnu',
        role: 'Koordinator',
        image: 'https://i.pinimg.com/736x/58/78/7d/58787d2c5b21ade822eb0c7af134dcb5.jpg'
      },
      members: [
        { name: 'M. Nabil Machasin', image: '/images/team/d_pdd&it/nabil.jpg' },
        { name: 'Dewi Arum Sari', image: '/images/team/d_pdd&it/arum.jpeg' },
        { name: 'Reihan Saputra', image: '/images/team/d_pdd&it/Reihan.jpeg' },
        { name: 'Dias Putra Kurnia Sandi', image: '/images/team/d_pdd&it/dias.JPG' }
      ],
      description: 'Divisi PDD (Publikasi, Dokumentasi & Dekorasi) dan IT bertanggung jawab untuk aspek visual, dokumentasi, dan teknologi dari keseluruhan acara NBPC.',
      responsibilities: [
        'Mengelola website dan platform digital NBPC',
        'Membuat dan menyebarkan materi publikasi di berbagai platform',
        'Mendokumentasikan seluruh rangkaian acara dalam bentuk foto dan video',
        'Mendesain dan menyiapkan dekorasi venue acara',
        'Menyediakan dukungan teknis IT selama acara berlangsung',
        'Mengelola sistem pendaftaran online peserta'
      ]
    },
    {
      name: 'Divisi Humas',
      leader: {
        name: 'Muhammad Farhan Sajid',
        role: 'Koordinator',
        image: '/images/team/d_humas/farhan.jpeg'
      },
      members: [
        { name: 'Muhammad Rafi Chalfian', image: '/images/team/d_humas/.jpg' },
        { name: 'Galeh Kurniawan', image: '/images/team/d_humas/Galih.jpg' },
        { name: 'Syahreza Affandi', image: '/images/team/d_humas/s-affandi.jpeg' }
      ],
      description: 'Divisi Humas (Hubungan Masyarakat) bertanggung jawab untuk membangun dan menjaga hubungan dengan berbagai pihak eksternal dan internal.',
      responsibilities: [
        'Mencari dan menjalin kerjasama dengan sponsor',
        'Koordinasi dengan instansi dan mitra eksternal',
        'Menangani komunikasi media dan publikasi acara',
        'Menyiapkan dan mendistribusikan undangan acara',
        'Menjadi liaison antara panitia dengan peserta lomba',
        'Mengelola layanan informasi dan help desk selama acara'
      ]
    },
    {
      name: 'Divisi Konsumsi',
      leader: {
        name: 'Farah Najwa Safitri',
        role: 'Koordinator',
        image: '/images/team/d_konsum/Farah.jpeg'
      },
      members: [
        { name: 'Anisa Saili Rifqoh', image: '/images/team/d_konsum/anisa.jpeg' },
        { name: 'Latifatul Asna', image: '/images/team/d_konsum/asna.jpeg' },
        { name: 'Alyssa Dwi Septiani', image: '/images/team/d_konsum/.jpg' }
      ],
      description: 'Divisi Konsumsi bertanggung jawab untuk menyediakan dan mengelola kebutuhan makanan dan minuman selama rangkaian acara NBPC.',
      responsibilities: [
        'Merencanakan menu makanan dan minuman untuk seluruh rangkaian acara',
        'Melakukan survei dan pemilihan vendor catering',
        'Mengatur distribusi konsumsi kepada peserta, juri, dan panitia',
        'Memastikan ketersediaan konsumsi tepat waktu selama acara',
        'Menangani kebutuhan khusus terkait makanan (vegetarian, alergi, dll)',
        'Mengatur pengemasan dan penyajian yang higienis dan menarik'
      ]
    }
  ];

  // Penanggung jawab acara
  const eventLead = {
    name: 'SARWIDO, S.E., M.M.',
    role: 'Penanggung Jawab',
    image: '/images/team/sarwido.jpg'
  };

  // Pembina
  const pembina = {
    name: 'M. Mujab Juhaini',
    role: 'Pembina',
    image: '/images/team/mujap.JPG'
  };

  // Ketua divisi
  const divisionHead = {
    name: 'Muchammad Dwi Rivaldo',
    role: 'Ketua',
    image: '/images/team/rival.jpeg'
  };

  // Sekretariat
  const secretariat = [
    {
      name: 'Muhamad Rizal Nurdin',
      role: 'Sekretariat',
      image: '/images/team/rizal.jpeg'
    },
    {
      name: 'Fenti Siti Fatimah',
      role: 'Sekretariat',
      image: '/images/team/placeholder.jpg'
    }
  ];

  // Lokasi acara
  const eventLocation = 'Universitas Islam Nahdlatul Ulama (UNISNU) Jepara';

  // State untuk animasi elemen floating
  const [floatingElements, setFloatingElements] = useState<Array<{
    width: number;
    height: number;
    top: string;
    left: string;
    yOffset: number;
    duration: number;
  }>>([]);

  // Generate floating elements hanya pada sisi klien
  useEffect(() => {
    const elements = Array.from({ length: 20 }).map(() => ({
      width: Math.random() * 40 + 15,
      height: Math.random() * 40 + 15,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      yOffset: Math.random() * 40 - 20,
      duration: Math.random() * 15 + 15
    }));
    
    setFloatingElements(elements);
  }, []);

  // Fungsi untuk membuka popup
  const openPopup = (division: Division) => {
    setPopupInfo({
      isOpen: true,
      division
    });
  };

  // Fungsi untuk menutup popup
  const closePopup = () => {
    setPopupInfo({
      isOpen: false,
      division: null
    });
  };

  return (
    <section className="py-32 relative overflow-hidden bg-gradient-to-b from-blue-100 via-blue-50 to-white">
      {/* Background pattern dengan desain yang lebih profesional */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid pattern dengan opacity yang lebih rendah */}
        <div className="absolute inset-0 opacity-[0.02] z-0">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-blue-900"/>
              </pattern>
              <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
                <rect width="100" height="100" fill="url(#smallGrid)"/>
                <path d="M 100 0 L 0 0 0 100" fill="none" stroke="currentColor" strokeWidth="1" className="text-blue-800"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        {/* Color accents yang lebih besar dan lebih soft */}
        <div className="absolute -top-40 -right-40 w-[35rem] h-[35rem] rounded-full bg-gradient-to-b from-blue-400 to-blue-500 opacity-[0.07] blur-3xl"></div>
        <div className="absolute top-1/3 -left-20 w-[30rem] h-[30rem] rounded-full bg-gradient-to-b from-blue-500 to-blue-600 opacity-[0.07] blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-[32rem] h-[32rem] rounded-full bg-gradient-to-r from-blue-300 to-blue-400 opacity-[0.07] blur-3xl"></div>

        {/* Animated floating elements yang lebih bervariasi */}
        {floatingElements.map((element, i) => (
          <motion.div
            key={`shape-${i}`}
            className={`absolute ${i % 3 === 0 ? 'rounded-md' : i % 3 === 1 ? 'rounded-full' : 'rounded-sm'} bg-blue-500 opacity-[0.04] ${i % 2 === 0 ? 'rotate-45' : ''}`}
            style={{
              width: element.width,
              height: element.height,
              top: element.top,
              left: element.left,
            }}
            animate={{
              y: [0, element.yOffset],
              rotate: i % 2 === 0 ? [45, 90, 45] : [0, 45, 0],
              opacity: [0.04, 0.06, 0.04]
            }}
            transition={{
              duration: element.duration,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header dengan animasi dan desain yang lebih menarik */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-28"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-5 text-transparent bg-clip-text bg-gradient-to-r from-blue-950 via-blue-800 to-blue-700">
              Tim Kami
            </h2>
            <div className="w-40 h-1.5 mx-auto mb-8 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div>
          </motion.div>
          <p className="text-blue-800 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-light">
            Kenali orang-orang hebat di balik penyelenggaraan kompetisi NBPC
          </p>
        </motion.div>

        {/* Main leadership dengan desain kartu yang lebih premium */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20 max-w-5xl mx-auto mb-20">
          {/* Penanggung Jawab Acara */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, type: "spring", stiffness: 50 }}
            className="flex justify-center"
          >
            <motion.div 
              className="relative w-full max-w-sm bg-white rounded-xl shadow-2xl overflow-hidden"
              whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.25)" }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              {/* Card header dengan gradient yang lebih bold */}
              <div className="h-28 bg-gradient-to-r from-blue-800 to-blue-600"></div>
              
              <div className="flex flex-col items-center px-8 pt-0 pb-10">
                {/* Profile image dengan efek hover yang lebih menarik */}
                <div className="relative w-36 h-36 -mt-20 mb-6 rounded-full overflow-hidden border-4 border-white shadow-xl group">
                  <Image 
                    src={eventLead.image} 
                    alt={eventLead.name} 
                    fill 
                    style={{ objectFit: 'cover' }}
                    className="filter brightness-105 transition-transform duration-700 group-hover:scale-110"
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-b from-blue-500/0 to-blue-600/30"
                    whileHover={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                
                {/* Content dengan desain tipografi yang lebih baik */}
                <h3 className="text-2xl font-bold text-blue-950 mb-3 text-center">{eventLead.name}</h3>
                <div className="mb-5 bg-gradient-to-r from-blue-700 to-blue-600 text-white font-medium px-5 py-2 rounded-lg text-sm shadow-lg">
                  {eventLead.role}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Pembina */}
          <motion.div 
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, type: "spring", stiffness: 50, delay: 0.1 }}
            className="flex justify-center"
          >
            <motion.div 
              className="relative w-full max-w-sm bg-white rounded-xl shadow-2xl overflow-hidden"
              whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.25)" }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <div className="h-28 bg-gradient-to-r from-blue-700 to-blue-500"></div>
              
              <div className="flex flex-col items-center px-8 pt-0 pb-10">
                <div className="relative w-36 h-36 -mt-20 mb-6 rounded-full overflow-hidden border-4 border-white shadow-xl group">
                  <Image 
                    src={pembina.image} 
                    alt={pembina.name} 
                    fill 
                    style={{ objectFit: 'cover' }}
                    className="filter brightness-105 transition-transform duration-700 group-hover:scale-110"
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-b from-blue-500/0 to-blue-600/30"
                    whileHover={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                
                <h3 className="text-2xl font-bold text-blue-950 mb-3 text-center">{pembina.name}</h3>
                <div className="mb-5 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium px-5 py-2 rounded-lg text-sm shadow-lg">
                  {pembina.role}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Ketua */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, type: "spring", stiffness: 50, delay: 0.2 }}
            className="flex justify-center"
          >
            <motion.div 
              className="relative w-full max-w-sm bg-white rounded-xl shadow-2xl overflow-hidden"
              whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.25)" }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <div className="h-28 bg-gradient-to-r from-blue-600 to-blue-500"></div>
              
              <div className="flex flex-col items-center px-8 pt-0 pb-10">
                <div className="relative w-36 h-36 -mt-20 mb-6 rounded-full overflow-hidden border-4 border-white shadow-xl group">
                  <Image 
                    src={divisionHead.image} 
                    alt={divisionHead.name} 
                    fill 
                    style={{ objectFit: 'cover' }}
                    className="filter brightness-105 transition-transform duration-700 group-hover:scale-110"
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-b from-blue-500/0 to-blue-600/30"
                    whileHover={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                
                <h3 className="text-2xl font-bold text-blue-950 mb-3 text-center">{divisionHead.name}</h3>
                <div className="mb-5 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium px-5 py-2 rounded-lg text-sm shadow-lg">
                  {divisionHead.role}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Sekretariat */}
        <div className="mb-24">
          <motion.h3 
            className="text-3xl font-bold text-center mb-12 text-blue-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Sekretariat
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 max-w-3xl mx-auto gap-10">
            {secretariat.map((member, idx) => (
            <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex justify-center"
              >
                  <motion.div
                  className="flex items-center bg-white rounded-xl shadow-lg p-5 gap-6 w-full"
                  whileHover={{ y: -5, boxShadow: "0 15px 30px -12px rgba(59, 130, 246, 0.2)" }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <div className="relative w-16 h-16 overflow-hidden rounded-full border-2 border-blue-200 flex-shrink-0">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">{member.name}</h4>
                    <p className="text-sm text-blue-600">{member.role}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
                </div>
              </div>

        {/* Divisi-divisi */}
        <div className="mb-24">
          {divisions.map((division, idx) => (
            <div key={division.name} className="mb-24">
              <motion.h3 
                className="text-3xl font-bold text-center mb-12 text-blue-800"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                {division.name}
              </motion.h3>
              
              <div className="max-w-5xl mx-auto">
                {/* Koordinator */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="flex justify-center mb-12"
                >
                    <motion.div 
                    className="flex items-center bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl shadow-lg p-6 gap-6 w-full max-w-md border border-blue-200 cursor-pointer"
                    whileHover={{ y: -5, boxShadow: "0 15px 30px -12px rgba(59, 130, 246, 0.2)" }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    onClick={() => openPopup(division)}
                  >
                    <div className="relative w-20 h-20 overflow-hidden rounded-full border-2 border-blue-300 flex-shrink-0">
                      {division.name === 'Divisi PDD & IT' && division.leader.name === 'Wisnu' ? (
                        <img 
                          src="https://i.pinimg.com/736x/58/78/7d/58787d2c5b21ade822eb0c7af134dcb5.jpg"
                          alt={division.leader.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                      <Image 
                        src={division.leader.image} 
                        alt={division.leader.name} 
                        fill 
                        style={{ objectFit: 'cover' }}
                      />
                      )}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 text-lg">{division.leader.name}</h4>
                      <p className="text-blue-600">{division.leader.role}</p>
                  </div>
                  </motion.div>
                </motion.div>

                {/* Anggota */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {division.members.map((member, memberIdx) => (
                  <motion.div 
                      key={memberIdx}
                      initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: memberIdx * 0.1 }}
                    className="flex justify-center"
                  >
                    <motion.div
                        className="flex items-center bg-white rounded-xl shadow-md p-5 gap-4 w-full cursor-pointer"
                        whileHover={{ y: -3, boxShadow: "0 10px 20px -10px rgba(59, 130, 246, 0.25)" }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        onClick={() => openPopup(division)}
                    >
                        <div className="relative w-12 h-12 overflow-hidden rounded-full border-2 border-blue-100 flex-shrink-0">
                          <Image 
                            src={member.image} 
                            alt={member.name} 
                            fill 
                            style={{ objectFit: 'cover' }}
                          />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-800">{member.name}</h4>
                          <p className="text-sm text-blue-500">Anggota</p>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
              </div>
            </div>
          ))}
        </div>

        {/* Location - lebih sederhana dan informatif */}
        <motion.div 
          className="text-center max-w-3xl mx-auto text-blue-800 text-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p>NBPC diselenggarakan di <strong>{eventLocation}</strong></p>
        </motion.div>
      </div>

      {/* Popup untuk menampilkan detail tupoksi divisi */}
      <AnimatePresence>
        {popupInfo.isOpen && popupInfo.division && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
            onClick={closePopup}
          >
                <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-4xl w-full max-h-[85vh] flex flex-col md:flex-row"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Bagian gambar (kiri) */}
              <div className="md:w-2/5 bg-gradient-to-br from-blue-700 to-blue-500 p-8 flex flex-col justify-center items-center text-white">
                <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                    <h3 className="text-blue-700 font-bold text-2xl">{popupInfo.division.name.charAt(0)}</h3>
                  </div>
                </div>
                <h2 className="text-2xl font-bold mb-3 text-center">{popupInfo.division.name}</h2>
                <p className="text-white/80 text-center mb-6">Tim NBPC 2023</p>
                
                <div className="mt-4 w-full max-w-xs bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <h4 className="font-semibold mb-2 text-white/90">Anggota Tim:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-white rounded-full"></span>
                      <span className="font-medium">{popupInfo.division.leader.name} (Koordinator)</span>
                    </li>
                    {popupInfo.division.members.map((member, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-white rounded-full"></span>
                        <span>{member.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Bagian konten (kanan) */}
              <div className="md:w-3/5 p-8 overflow-y-auto">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-800">Tugas dan Tanggung Jawab</h3>
                  <button 
                    onClick={closePopup}
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                  >
                    <FiX className="text-gray-600" size={20} />
                  </button>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3 text-blue-700">Deskripsi:</h4>
                  <p className="text-gray-700 leading-relaxed">
                    {popupInfo.division.description}
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-blue-700">Tugas Pokok:</h4>
                  <ul className="space-y-3">
                    {popupInfo.division.responsibilities?.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="mt-1 w-5 h-5 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                        </div>
                        <p className="text-gray-700">{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
        </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default TeamSection; 
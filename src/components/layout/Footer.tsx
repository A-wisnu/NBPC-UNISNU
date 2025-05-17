'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { BsWhatsapp } from 'react-icons/bs';
import { FaInstagram } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { IoClose } from 'react-icons/io5';

type PopupType = 'privacy' | 'terms' | 'faq' | null;

interface FooterPopupProps {
  title: string;
  content: React.ReactNode;
  onClose: () => void;
}

// Komponen popup
const FooterPopup = ({ title, content, onClose }: FooterPopupProps) => {
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

          <div className="mb-6">
            <h3 className="text-2xl md:text-3xl font-bold text-blue-300">{title}</h3>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mt-2 mb-6"></div>
          </div>

          <div className="prose prose-invert max-w-none">
            {content}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const Footer = () => {
  const [activePopup, setActivePopup] = useState<PopupType>(null);
  
  const renderPopupContent = (type: PopupType): React.ReactNode => {
    switch (type) {
      case 'privacy':
        return (
          <>
            <h4 className="text-xl font-semibold mb-4">Kebijakan Privasi NBPC</h4>
            <p className="mb-4">
              Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi 
              informasi pribadi Anda saat Anda menggunakan layanan kami.
            </p>
            
            <h5 className="text-lg font-medium mt-6 mb-3">Informasi yang Kami Kumpulkan</h5>
            <p className="mb-3">
              Kami mengumpulkan informasi berikut saat Anda mendaftar dan berpartisipasi dalam kompetisi NBPC:
            </p>
            <ul className="list-disc pl-5 mb-4 space-y-2">
              <li>Informasi identitas (nama, alamat email, nomor telepon)</li>
              <li>Informasi akademis (institusi pendidikan, program studi)</li>
              <li>Data terkait ide dan proposal bisnis yang Anda kirimkan</li>
              <li>Feedback dan komunikasi yang Anda berikan kepada kami</li>
            </ul>
            
            <h5 className="text-lg font-medium mt-6 mb-3">Bagaimana Kami Menggunakan Informasi Anda</h5>
            <p className="mb-3">Kami menggunakan informasi yang dikumpulkan untuk:</p>
            <ul className="list-disc pl-5 mb-4 space-y-2">
              <li>Mengelola pendaftaran dan partisipasi Anda dalam kompetisi</li>
              <li>Berkomunikasi dengan Anda tentang acara dan kegiatan terkait</li>
              <li>Meningkatkan pengalaman pengguna dan layanan kami</li>
              <li>Tujuan analitis dan statistik dalam bentuk agregat</li>
            </ul>
            
            <h5 className="text-lg font-medium mt-6 mb-3">Keamanan Data</h5>
            <p className="mb-4">
              Kami berkomitmen untuk melindungi keamanan data Anda dan mengambil langkah-langkah yang 
              wajar untuk melindungi informasi pribadi Anda dari akses, penggunaan, atau pengungkapan yang tidak sah.
            </p>
          </>
        );
      case 'terms':
        return (
          <>
            <h4 className="text-xl font-semibold mb-4">Syarat dan Ketentuan NBPC</h4>
            <p className="mb-4">
              Dengan mendaftar dan berpartisipasi dalam NBPC, Anda menyetujui syarat dan ketentuan berikut:
            </p>
            
            <h5 className="text-lg font-medium mt-6 mb-3">Persyaratan Peserta</h5>
            <ul className="list-disc pl-5 mb-4 space-y-2">
              <li>Peserta adalah mahasiswa aktif di perguruan tinggi Indonesia</li>
              <li>Setiap tim terdiri dari 3-5 anggota dari institusi yang sama</li>
              <li>Peserta dapat mengikuti hanya dalam satu tim</li>
              <li>Peserta wajib mengikuti seluruh rangkaian acara</li>
            </ul>
            
            <h5 className="text-lg font-medium mt-6 mb-3">Hak Kekayaan Intelektual</h5>
            <p className="mb-3">
              Seluruh hak kekayaan intelektual atas ide dan proposal bisnis tetap menjadi milik peserta. 
              Namun, NBPC berhak untuk:
            </p>
            <ul className="list-disc pl-5 mb-4 space-y-2">
              <li>Mempublikasikan nama tim, institusi, dan ringkasan non-konfidensial dari ide bisnis</li>
              <li>Menggunakan foto dan video selama kompetisi untuk keperluan publikasi</li>
              <li>Memperkenalkan tim ke investor atau pihak ketiga dengan persetujuan tim</li>
            </ul>
            
            <h5 className="text-lg font-medium mt-6 mb-3">Penilaian dan Keputusan</h5>
            <p className="mb-4">
              Keputusan juri bersifat final dan tidak dapat diganggu gugat. Kriteria penilaian akan 
              diinformasikan kepada peserta sebelum kompetisi dimulai.
            </p>
          </>
        );
      case 'faq':
        return (
          <>
            <h4 className="text-xl font-semibold mb-4">Pertanyaan yang Sering Diajukan (FAQ)</h4>
            
            <div className="space-y-6">
              <div>
                <h5 className="text-lg font-medium mb-2 text-blue-300">Apakah ada biaya pendaftaran untuk mengikuti NBPC?</h5>
                <p>
                  Ya, terdapat biaya pendaftaran sebesar Rp 200.000 per tim. Biaya ini digunakan untuk 
                  administrasi, materiel kompetisi, dan sertifikat peserta.
                </p>
              </div>
              
              <div>
                <h5 className="text-lg font-medium mb-2 text-blue-300">Apakah saya bisa mendaftar sebagai individu?</h5>
                <p>
                  Tidak, NBPC adalah kompetisi berbasis tim. Setiap tim harus terdiri dari 3-5 mahasiswa 
                  aktif dari institusi yang sama.
                </p>
              </div>
              
              <div>
                <h5 className="text-lg font-medium mb-2 text-blue-300">Apakah boleh mengubah anggota tim setelah pendaftaran?</h5>
                <p>
                  Perubahan anggota tim diperbolehkan maksimal 1 orang dan hanya sebelum tahap pengumpulan 
                  proposal final. Perubahan harus diinformasikan kepada panitia melalui email.
                </p>
              </div>
              
              <div>
                <h5 className="text-lg font-medium mb-2 text-blue-300">Apakah ide bisnis harus benar-benar baru?</h5>
                <p>
                  Ide bisnis tidak harus 100% baru, tapi harus memiliki elemen inovasi atau pendekatan baru 
                  terhadap masalah yang ada. Tim harus dapat menunjukkan keunikan dan nilai tambah dari solusi yang ditawarkan.
                </p>
              </div>
              
              <div>
                <h5 className="text-lg font-medium mb-2 text-blue-300">Bagaimana jika saya melewatkan salah satu deadline?</h5>
                <p>
                  Keterlambatan pengumpulan akan mengurangi nilai tim dan dapat menyebabkan diskualifikasi 
                  jika melewati batas toleransi yang ditentukan. Pastikan untuk mengikuti timeline yang telah 
                  ditetapkan.
                </p>
              </div>
              
              <div>
                <h5 className="text-lg font-medium mb-2 text-blue-300">Apakah acara akan berlangsung secara online atau offline?</h5>
                <p>
                  NBPC 2025 akan diselenggarakan secara hybrid. Tahap awal (pendaftaran dan seleksi) akan 
                  dilakukan secara online, sementara tahap final akan diadakan secara tatap muka di UNISNU Jepara.
                </p>
              </div>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <footer className="relative bg-gradient-to-b from-[#071352] to-[#050A24] text-white pt-16 pb-8 overflow-hidden">
      {/* Popup Kebijakan Privasi, Syarat & Ketentuan, FAQ */}
      {activePopup && (
        <FooterPopup 
          title={
            activePopup === 'privacy' ? 'Kebijakan Privasi' : 
            activePopup === 'terms' ? 'Syarat & Ketentuan' : 'FAQ'
          }
          content={renderPopupContent(activePopup)}
          onClose={() => setActivePopup(null)}
        />
      )}

      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-20">
        <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-blue-400/30 to-transparent top-0"></div>
        <div className="absolute w-72 h-72 rounded-full bg-blue-500/5 blur-3xl -top-20 -right-20"></div>
        <div className="absolute w-72 h-72 rounded-full bg-indigo-500/5 blur-3xl -bottom-10 -left-10"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              {/* Logo placeholder - replace with actual logo */}
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 w-10 h-10 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">N</span>
              </div>
              <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-indigo-300">NBPC</h3>
            </div>
            
            <p className="text-gray-300 text-sm mb-6 max-w-xs">
              Unisnu Business Plan Competition, ajang kompetisi bisnis yang membantu generasi muda Indonesia mengembangkan ide bisnis inovatif mereka.
            </p>
            
            <div className="flex space-x-3 mb-8">
              <a 
                href="https://www.instagram.com/nbpcunisnu?igsh=MTZtOG80bzNkYWs4Mg==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-gray-800/50 flex items-center justify-center text-gray-300 hover:text-white hover:bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-300"
                aria-label="Instagram"
              >
                <FaInstagram size={16} />
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <h3 className="text-base font-semibold mb-5 text-white uppercase tracking-wider">Navigasi</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-blue-300 transition-colors text-sm flex items-center group">
                  <span className="inline-block w-0 group-hover:w-2 h-[1px] bg-blue-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/tentang" className="text-gray-300 hover:text-blue-300 transition-colors text-sm flex items-center group">
                  <span className="inline-block w-0 group-hover:w-2 h-[1px] bg-blue-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Tentang
                </Link>
              </li>
              <li>
                <Link href="/lomba" className="text-gray-300 hover:text-blue-300 transition-colors text-sm flex items-center group">
                  <span className="inline-block w-0 group-hover:w-2 h-[1px] bg-blue-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Informasi Lomba
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="lg:col-span-1">
            <h3 className="text-base font-semibold mb-5 text-white uppercase tracking-wider">Kontak Kami</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <HiOutlineMail className="text-blue-400 mt-1 flex-shrink-0" size={16} />
                <div>
                  <p className="text-gray-300 text-sm">Email:</p>
                  <a href="mailto:unisnubisniscomunity@gmail.com" className="text-white hover:text-blue-300 transition-colors text-sm">unisnubisniscomunity@gmail.com</a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <BsWhatsapp className="text-blue-400 mt-1 flex-shrink-0" size={16} />
                <div>
                  <p className="text-gray-300 text-sm">WhatsApp:</p>
                  <a href="https://wa.me/89504014732" className="text-white hover:text-blue-300 transition-colors text-sm">+62 895-0401-4732</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-xs mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} by Unisnu Business Community.
          </p>
          <div className="flex flex-wrap justify-center space-x-4 text-xs text-gray-500">
            <button 
              onClick={() => setActivePopup('privacy')}
              className="hover:text-blue-300 transition-colors mb-2 md:mb-0 cursor-pointer"
            >
              Kebijakan Privasi
            </button>
            <button 
              onClick={() => setActivePopup('terms')} 
              className="hover:text-blue-300 transition-colors mb-2 md:mb-0 cursor-pointer"
            >
              Syarat & Ketentuan
            </button>
            <button 
              onClick={() => setActivePopup('faq')}
              className="hover:text-blue-300 transition-colors mb-2 md:mb-0 cursor-pointer"
            >
              FAQ
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
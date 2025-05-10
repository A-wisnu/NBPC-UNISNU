'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiInfo, FiAward, FiHelpCircle, FiPlus, FiMinus, FiX, FiCheck, FiArrowRight } from 'react-icons/fi';
import AnimatedTitle from '@/components/animations/AnimatedTitle';
import AnimatedCard from '@/components/animations/AnimatedCard';
import FadeInSection from '@/components/animations/FadeInSection';

export default function CompetitionPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    if (openFaqIndex === index) {
      setOpenFaqIndex(null);
    } else {
      setOpenFaqIndex(index);
    }
  };

  const openCategoryDetail = (index: number) => {
    setActiveCategory(index);
  };

  const closeCategoryDetail = () => {
    setActiveCategory(null);
  };

  const faqs = [
    {
      question: 'Siapa yang dapat mendaftar di NBPC?',
      answer: 'NBPC terbuka untuk mahasiswa aktif S1 atau D3 dari perguruan tinggi di seluruh Indonesia. Peserta dapat mendaftar dalam tim yang terdiri dari 3-5 orang dari institusi yang sama.'
    },
    {
      question: 'Berapa biaya pendaftaran untuk mengikuti NBPC?',
      answer: 'Biaya pendaftaran untuk mengikuti NBPC adalah Rp 250.000 per tim. Biaya ini sudah termasuk akses ke semua workshop dan mentoring selama kompetisi berlangsung.'
    },
    {
      question: 'Apa saja dokumen yang perlu disiapkan untuk pendaftaran?',
      answer: 'Dokumen yang diperlukan meliputi: formulir pendaftaran, scan kartu mahasiswa setiap anggota tim, bukti pembayaran, dan proposal awal ide bisnis (format dapat diunduh dari website).'
    },
    {
      question: 'Bagaimana sistem penilaian di NBPC?',
      answer: 'Penilaian dilakukan berdasarkan beberapa kriteria: inovasi (30%), potensi pasar (25%), kelayakan implementasi (20%), presentasi (15%), dan dampak sosial/lingkungan (10%).'
    },
    {
      question: 'Apakah peserta akan mendapatkan mentoring selama kompetisi?',
      answer: 'Ya, semua peserta akan mendapatkan akses ke sesi workshop dan mentoring dari para praktisi bisnis dan investor berpengalaman.'
    },
    {
      question: 'Apakah boleh mengikutsertakan ide bisnis yang sudah berjalan?',
      answer: 'Ya, peserta boleh mengikutsertakan bisnis yang sudah berjalan dengan syarat bisnis tersebut belum beroperasi lebih dari 1 tahun dan pendapatan tahunan belum melebihi Rp 50 juta.'
    }
  ];

  const categories = [
    {
      title: 'Teknologi Digital',
      description: 'Ide bisnis berbasis teknologi seperti aplikasi, platform, atau solusi digital',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      icon: '💻',
      fullDescription: 'Kategori Teknologi Digital mencakup berbagai inovasi berbasis teknologi yang bertujuan untuk menyelesaikan masalah atau meningkatkan efisiensi melalui solusi digital.',
      examples: [
        'Aplikasi mobile untuk manajemen bisnis kecil',
        'Platform e-learning dengan teknologi AI',
        'Solusi IoT untuk Smart City',
        'Platform fintech untuk inklusi keuangan',
        'Aplikasi berbasis blockchain untuk supply chain'
      ],
      criteria: [
        'Inovasi teknologi yang digunakan',
        'Kemampuan untuk menyelesaikan masalah nyata',
        'Potensi skalabilitas dan pertumbuhan',
        'Keunggulan kompetitif dibanding solusi yang ada',
        'Kelayakan teknis implementasi'
      ],
      image: '/public/images/categories/tech.jpg'
    },
    {
      title: 'Sosial & Lingkungan',
      description: 'Bisnis dengan dampak sosial atau lingkungan yang positif dan berkelanjutan',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      icon: '🌱',
      fullDescription: 'Kategori Sosial & Lingkungan fokus pada bisnis yang memberikan dampak positif pada masyarakat dan lingkungan sekitar, dengan model bisnis yang berkelanjutan.',
      examples: [
        'Bank sampah digital dengan sistem reward',
        'Bisnis daur ulang plastik menjadi produk bernilai tinggi',
        'Platform crowdfunding untuk proyek lingkungan',
        'Bisnis sosial untuk pemberdayaan masyarakat prasejahtera',
        'Solusi energi terbarukan untuk daerah terpencil'
      ],
      criteria: [
        'Besaran dampak sosial/lingkungan yang dihasilkan',
        'Keberlanjutan model bisnis',
        'Inovasi dalam pendekatan penyelesaian masalah',
        'Potensi untuk meningkatkan kualitas hidup masyarakat',
        'Keterlibatan komunitas lokal'
      ],
      image: '/public/images/categories/social.jpg'
    },
    {
      title: 'Produk & Jasa',
      description: 'Pengembangan produk fisik atau jasa inovatif dengan nilai tambah',
      color: 'from-yellow-500 to-yellow-600',
      bgColor: 'bg-yellow-50',
      icon: '🛍️',
      fullDescription: 'Kategori Produk & Jasa mencakup inovasi dalam pembuatan produk fisik atau penyediaan jasa yang menawarkan nilai tambah bagi konsumen.',
      examples: [
        'Produk ramah lingkungan dengan desain inovatif',
        'Jasa konsultasi dengan pendekatan unik',
        'Produk kesehatan dengan teknologi terkini',
        'Jasa personal yang memanfaatkan teknologi',
        'Produk lokal dengan standar internasional'
      ],
      criteria: [
        'Keunikan nilai proposisi produk/jasa',
        'Potensi pasar dan permintaan konsumen',
        'Tingkat inovasi dan kreativitas',
        'Strategi pemasaran dan distribusi',
        'Kelayakan produksi atau penyediaan layanan'
      ],
      image: '/public/images/categories/product.jpg'
    },
    {
      title: 'Kreatif & Budaya',
      description: 'Bisnis di sektor ekonomi kreatif dan kearifan lokal',
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50',
      icon: '🎨',
      fullDescription: 'Kategori Kreatif & Budaya berfokus pada bisnis yang mengembangkan sektor ekonomi kreatif dan melestarikan kearifan lokal Indonesia melalui pendekatan modern.',
      examples: [
        'Platform marketplace untuk produk seni lokal',
        'Solusi AR/VR untuk wisata budaya virtual',
        'Studio animasi dengan konten budaya Indonesia',
        'Fashion dengan sentuhan kearifan lokal',
        'Aplikasi pembelajaran budaya interaktif'
      ],
      criteria: [
        'Integrasi nilai budaya dalam model bisnis',
        'Inovasi dalam memperkenalkan budaya ke pasar modern',
        'Dampak terhadap pelestarian budaya lokal',
        'Potensi menarik minat generasi muda',
        'Kualitas artistik dan eksekusi kreatif'
      ],
      image: '/public/images/categories/creative.jpg'
    },
    {
      title: 'Kuliner & Agribisnis',
      description: 'Inovasi di bidang makanan, pertanian, dan pengolahan hasil tani',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      icon: '🍲',
      fullDescription: 'Kategori Kuliner & Agribisnis mencakup inovasi dalam industri makanan, pertanian modern, dan pengolahan hasil pertanian menjadi produk bernilai tambah.',
      examples: [
        'Aplikasi manajemen rantai pasok pertanian',
        'Produk olahan pangan inovatif',
        'Sistem pertanian vertikal di perkotaan',
        'Bisnis makanan berbasis subscription',
        'Teknologi untuk meningkatkan hasil panen'
      ],
      criteria: [
        'Inovasi dalam produk atau proses produksi',
        'Keberlanjutan dan dampak lingkungan',
        'Potensi meningkatkan pendapatan petani',
        'Kontribusi pada ketahanan pangan',
        'Kualitas dan keamanan produk pangan'
      ],
      image: '/public/images/categories/culinary.jpg'
    },
    {
      title: 'Open Category',
      description: 'Kategori terbuka untuk ide bisnis inovatif lainnya',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      icon: '💡',
      fullDescription: 'Open Category adalah kategori khusus untuk ide bisnis inovatif yang tidak termasuk dalam kategori lain namun memiliki potensi dampak dan keunikan yang signifikan.',
      examples: [
        'Bisnis hibrid yang menggabungkan beberapa sektor',
        'Inovasi dalam industri pendidikan',
        'Solusi untuk tantangan kesehatan',
        'Platform untuk industri hiburan',
        'Teknologi baru yang belum masuk kategori spesifik'
      ],
      criteria: [
        'Tingkat inovasi dan kebaruan ide',
        'Potensi disruptif dalam industri terkait',
        'Proposisi nilai yang jelas',
        'Kelayakan implementasi',
        'Potensi skalabilitas bisnis'
      ],
      image: '/public/images/categories/open.jpg'
    }
  ];

  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-28 bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-[url('/pattern-dots.svg')] bg-repeat"></div>
          <div className="absolute right-0 bottom-0 w-96 h-96 bg-gradient-to-t from-blue-500 to-transparent rounded-full filter blur-3xl opacity-20 transform translate-x-1/3 translate-y-1/3"></div>
          <div className="absolute left-0 top-0 w-96 h-96 bg-gradient-to-b from-indigo-500 to-transparent rounded-full filter blur-3xl opacity-20 transform -translate-x-1/3 -translate-y-1/3"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <AnimatedTitle
              title="Informasi Lomba"
              subtitle=""
              textColor="text-white"
              align="center"
              size="xl"
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="max-w-3xl mx-auto mt-8 text-center"
          >
            <p className="text-white/90 text-xl italic font-light">
              "Transformasi Ide Menjadi Inovasi Bisnis Berkelanjutan"
            </p>
            
            <div className="mt-12 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <motion.a 
                href="#persyaratan" 
                className="px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-full border border-white/20 hover:bg-white/20 transition-all flex items-center justify-center shadow-lg shadow-blue-900/20"
                whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(30, 58, 138, 0.3)" }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <FiInfo className="mr-2" /> Persyaratan
              </motion.a>
              <motion.a 
                href="#kategori" 
                className="px-8 py-4 bg-white text-blue-900 rounded-full hover:bg-blue-50 transition-all shadow-lg shadow-blue-900/20 flex items-center justify-center"
                whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(30, 58, 138, 0.3)" }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <FiAward className="mr-2" /> Kategori Lomba
              </motion.a>
            </div>
          </motion.div>
          
          {/* Floating elements */}
          <div className="absolute left-10 bottom-20 w-24 h-24 opacity-30">
            <motion.div
              className="w-full h-full bg-blue-400 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          </div>
          <div className="absolute right-20 top-32 w-16 h-16 opacity-20">
            <motion.div
              className="w-full h-full bg-purple-400 rounded-full"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
                delay: 1
              }}
            />
          </div>
        </div>
      </section>

      {/* Syarat dan Ketentuan */}
      <section id="persyaratan" className="section bg-white relative overflow-hidden py-24">
        <div className="absolute right-0 top-1/4 w-64 h-64 bg-blue-100 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute left-0 bottom-1/4 w-64 h-64 bg-purple-100 rounded-full filter blur-3xl opacity-30"></div>
        
        <motion.div 
          className="container-custom relative z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <AnimatedTitle
            title="Syarat & Ketentuan"
            subtitle="Berikut adalah persyaratan untuk mengikuti kompetisi NBPC"
            align="center"
            className="mb-16"
          />

          <FadeInSection>
            <div className="max-w-4xl mx-auto">
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              >
                <AnimatedCard className="border border-gray-100 shadow-2xl rounded-2xl overflow-hidden bg-white backdrop-blur-sm">
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 flex items-center">
                    <div className="p-3 rounded-full bg-white/20 backdrop-blur-sm mr-4">
                      <FiInfo size={32} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">Persyaratan Peserta</h3>
                  </div>

                  <div className="p-8">
                    <ul className="space-y-6 pl-4">
                      <li className="flex items-start">
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-bold flex-shrink-0 mr-4 mt-0.5">1</span>
                        <div>
                          <p className="font-medium">Setiap peserta NBPC UNISNU 2025 merupakan mahasiswa aktif D3, D4/S1 di seluruh Indonesia</p>
                          <p className="text-gray-500 text-sm mt-1">dibuktikan dengan melampirkan scan/foto KTM (Kartu Tanda Mahasiswa) saat proses pendaftaran.</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-bold flex-shrink-0 mr-4 mt-0.5">2</span>
                        <div>
                          <p className="font-medium">Tim terdiri dari 3-5 orang dari institusi yang sama</p>
                          <p className="text-gray-500 text-sm mt-1">Diperkenankan berbeda jurusan/prodi namun berasal dari satu perguruan tinggi yang sama.</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-bold flex-shrink-0 mr-4 mt-0.5">3</span>
                        <div>
                          <p className="font-medium">Setiap mahasiswa hanya boleh terdaftar dalam 1 tim</p>
                          <p className="text-gray-500 text-sm mt-1">Tidak diperkenankan menjadi anggota di lebih dari satu tim</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-bold flex-shrink-0 mr-4 mt-0.5">4</span>
                        <div>
                          <p className="font-medium">Ide yang di daftarkan belum pernah/sedang diikutkan dalam kompetisi lain</p>
                          <p className="text-gray-500 text-sm mt-1">Jika terdeteksi demikian, maka peserta akan di diskualifikasi.</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-bold flex-shrink-0 mr-4 mt-0.5">5</span>
                        <div>
                          <p className="font-medium">Melunasi biaya pendaftaran sebesar Rp 250.000/tim</p>
                          <p className="text-gray-500 text-sm mt-1">Pembayaran dapat dilakukan melalui transfer bank atau e-wallet</p>
                        </div>
                      </li>
                    </ul>

                    <div className="mt-12 mb-4">
                      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-6 -mx-8 flex items-center">
                        <div className="p-3 rounded-full bg-white/20 backdrop-blur-sm mr-4">
                          <FiInfo size={32} className="text-white" />
                        </div>
                        <h3 className="text-2xl font-bold">Ketentuan Proposal</h3>
                      </div>

                      <div className="px-0 pt-8">
                        <ul className="space-y-6 pl-4">
                          <li className="flex items-start">
                            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-purple-100 text-purple-600 font-bold flex-shrink-0 mr-4 mt-0.5">1</span>
                            <div>
                              <p className="font-medium">Proposal bisnis ditulis dalam Bahasa Indonesia</p>
                              <p className="text-gray-500 text-sm mt-1">Gunakan bahasa yang baik, formal, dan mudah dipahami</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-purple-100 text-purple-600 font-bold flex-shrink-0 mr-4 mt-0.5">2</span>
                            <div>
                              <p className="font-medium">Proposal maksimal 20 halaman (tidak termasuk lampiran)</p>
                              <p className="text-gray-500 text-sm mt-1">Gunakan ukuran font 12 pt dengan spasi 1.5</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-purple-100 text-purple-600 font-bold flex-shrink-0 mr-4 mt-0.5">3</span>
                            <div>
                              <p className="font-medium">Format file: PDF</p>
                              <p className="text-gray-500 text-sm mt-1">Ukuran file tidak melebihi 10MB</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-purple-100 text-purple-600 font-bold flex-shrink-0 mr-4 mt-0.5">4</span>
                            <div>
                              <p className="font-medium">Mengikuti template yang disediakan panitia</p>
                              <p className="text-gray-500 text-sm mt-1">Template dapat diunduh dari website resmi NBPC</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-purple-100 text-purple-600 font-bold flex-shrink-0 mr-4 mt-0.5">5</span>
                            <div>
                              <p className="font-medium">Dikumpulkan sesuai deadline yang ditentukan</p>
                              <p className="text-gray-500 text-sm mt-1">Keterlambatan pengumpulan akan mengurangi penilaian</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </AnimatedCard>
              </motion.div>
            </div>
          </FadeInSection>
        </motion.div>
      </section>

      {/* Kategori Lomba */}
      <section id="kategori" className="section bg-gradient-to-b from-gray-50 to-white relative py-24 overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-white to-transparent z-0"></div>
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-white to-transparent z-0"></div>
        
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-blue-50 rounded-full filter blur-3xl opacity-70"></div>
          <div className="absolute bottom-20 right-10 w-64 h-64 bg-purple-50 rounded-full filter blur-3xl opacity-70"></div>
          <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-indigo-50 rounded-full filter blur-3xl opacity-70"></div>
        </div>
        
        <motion.div 
          className="container-custom relative z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <AnimatedTitle
            title="Kategori Lomba"
            subtitle="NBPC memiliki beberapa kategori lomba yang dapat kamu ikuti"
            align="center"
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <AnimatedCard 
                  delay={index * 0.1} 
                  className={`transform transition-all duration-500 h-full group overflow-hidden rounded-2xl border border-gray-100 shadow-xl ${category.bgColor} hover:shadow-2xl`}
                >
                  <div className="relative p-8 h-full flex flex-col">
                    <div className="absolute top-0 right-0 w-32 h-32 -mt-10 -mr-10 rounded-full bg-gradient-to-br opacity-20"></div>
                    <div className="mb-6 flex items-center">
                      <div className={`flex-shrink-0 w-14 h-14 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <span className="text-3xl">{category.icon}</span>
                      </div>
                      <h3 className="ml-4 text-xl font-bold group-hover:text-blue-600 transition-colors duration-300">{category.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-6 flex-grow">{category.description}</p>
                    <div className="pt-4 border-t border-gray-100 mt-auto">
                      <button 
                        onClick={() => openCategoryDetail(index)}
                        className="text-blue-600 font-medium inline-flex items-center group-hover:translate-x-2 transition-transform duration-300"
                      >
                        Pelajari lebih lanjut
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:ml-2 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </AnimatedCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Hadiah */}
      <section className="section py-28 bg-white relative overflow-hidden">
        <div className="absolute right-0 top-0 w-full h-64 bg-gradient-to-b from-gray-50 to-white"></div>
        <div className="absolute right-0 top-1/4 w-64 h-64 bg-yellow-100 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute left-0 bottom-1/4 w-64 h-64 bg-blue-100 rounded-full filter blur-3xl opacity-30"></div>
        
        <motion.div 
          className="container-custom relative z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <AnimatedTitle
            title="Hadiah Juara"
            subtitle="Raih hadiah menarik dengan mengikuti NBPC"
            align="center"
            className="mb-20"
          />

          <div className="relative max-w-5xl mx-auto">
            <div className="absolute top-[60%] left-0 right-0 h-40 bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 rounded-3xl -z-10 transform -rotate-1"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { 
                  position: 'Juara 1', 
                  prize: 'Rp 25.000.000', 
                  extras: ['Mentoring bisnis selama 6 bulan', 'Kesempatan pitching ke investor', 'Sertifikat & Trophy Eksklusif', 'Media coverage'],
                  delay: 0,
                  transform: 'md:transform md:-translate-y-4 md:scale-110 z-10',
                  className: 'bg-gradient-to-b from-yellow-50 to-yellow-100 border-yellow-300 shadow-[0_0_40px_rgba(251,191,36,0.3)]',
                  ribbon: true,
                  ribbonText: 'BEST PRIZE'
                },
                { 
                  position: 'Juara 2', 
                  prize: 'Rp 15.000.000', 
                  extras: ['Mentoring bisnis selama 3 bulan', 'Sertifikat & Trophy', 'Media exposure'],
                  delay: 0.2,
                  transform: '',
                  className: 'bg-gradient-to-b from-gray-50 to-gray-100 border-gray-300'
                },
                { 
                  position: 'Juara 3', 
                  prize: 'Rp 10.000.000', 
                  extras: ['Mentoring bisnis selama 1 bulan', 'Sertifikat & Trophy', 'Media exposure'],
                  delay: 0.4,
                  transform: 'md:transform md:translate-y-4',
                  className: 'bg-gradient-to-b from-orange-50 to-orange-100 border-orange-300'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className={item.transform}
                >
                  <motion.div
                    whileHover={{ y: -10 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className={`relative overflow-hidden rounded-2xl border shadow-2xl ${item.className} group h-full`}
                  >
                    {item.ribbon && (
                      <div className="absolute top-0 right-0 bg-yellow-500 text-white text-xs font-bold py-1.5 px-4 transform rotate-0 origin-top-right rounded-bl-lg z-20">
                        {item.ribbonText}
                      </div>
                    )}
                    
                    <div className="p-8 text-center h-full flex flex-col">
                      <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full border-4 border-opacity-20 border-current">
                        {index === 0 ? (
                          <motion.svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="h-10 w-10 text-yellow-500" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                            animate={{ rotate: [0, 10, 0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                          </motion.svg>
                        ) : index === 1 ? (
                          <motion.svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="h-10 w-10 text-gray-500" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                          </motion.svg>
                        ) : (
                          <motion.svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="h-10 w-10 text-orange-500" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                            animate={{ opacity: [1, 0.7, 1] }}
                            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                          </motion.svg>
                        )}
                      </div>
                      <motion.div 
                        className="mb-2 text-xl font-bold uppercase tracking-wider"
                        whileHover={{ scale: 1.05 }}
                      >
                        {item.position}
                      </motion.div>
                      <motion.div 
                        className="mb-8 text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600"
                        whileHover={{ scale: 1.05 }}
                      >
                        {item.prize}
                      </motion.div>
                      <ul className="space-y-3 text-left flex-grow">
                        {item.extras.map((extra, i) => (
                          <motion.li 
                            key={i} 
                            className="flex items-center"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + (i * 0.1) }}
                          >
                            <span className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 text-green-500 flex items-center justify-center mr-3">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                              </svg>
                            </span> 
                            <span className="text-gray-700">{extra}</span>
                          </motion.li>
                        ))}
                      </ul>
                      
                      <motion.button
                        className="mt-8 py-3 w-full rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Daftar Sekarang
                      </motion.button>
                    </div>
                    
                    <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div 
            className="mt-16 text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <motion.div 
              className="p-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-100 relative overflow-hidden shadow-lg"
              whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(30, 58, 138, 0.2)" }}
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full -mt-20 -mr-20 opacity-50"></div>
              <div className="relative z-10">
                <p className="text-lg text-gray-700">
                  <span className="font-semibold text-blue-700">Bonus:</span> Semua finalis juga akan mendapatkan sertifikat, merchandise eksklusif, dan kesempatan mengikuti workshop eksklusif bersama pakar bisnis terkemuka!
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* FAQ */}
      <section className="section py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern-grid.svg')] bg-repeat opacity-5"></div>
        
        <motion.div 
          className="container-custom relative z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <AnimatedTitle
            title="Frequently Asked Questions"
            subtitle="Jawaban untuk pertanyaan yang sering diajukan"
            align="center"
            className="mb-16"
          />

          <motion.div 
            className="max-w-3xl mx-auto"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 }
                }}
                className="mb-5"
              >
                <motion.div 
                  className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  <button
                    className="w-full px-8 py-5 flex items-center justify-between focus:outline-none transition-all"
                    onClick={() => toggleFaq(index)}
                  >
                    <h3 className="text-lg font-semibold text-left">{faq.question}</h3>
                    <motion.span 
                      className="ml-4 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-gray-100 group-hover:bg-blue-100 transition-all"
                      animate={{ rotate: openFaqIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {openFaqIndex === index ? (
                        <FiMinus size={18} className="text-blue-600" />
                      ) : (
                        <FiPlus size={18} className="text-blue-600" />
                      )}
                    </motion.span>
                  </button>
                  <AnimatePresence>
                    {openFaqIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-8 pb-6 text-gray-600 border-t border-gray-100 pt-4">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-28 bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-[url('/pattern-dots.svg')] bg-repeat"></div>
          <div className="absolute right-0 bottom-0 w-96 h-96 bg-gradient-to-t from-blue-500 to-transparent rounded-full filter blur-3xl opacity-20 transform translate-x-1/3 translate-y-1/3"></div>
          <div className="absolute left-0 top-0 w-96 h-96 bg-gradient-to-b from-indigo-500 to-transparent rounded-full filter blur-3xl opacity-20 transform -translate-x-1/3 -translate-y-1/3"></div>
        </div>
        
        <div className="container-custom text-center relative z-10">
          <FadeInSection>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-10 border border-white/20 shadow-2xl"
            >
              <motion.h2 
                className="text-4xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                Siap Menjadi Juara?
              </motion.h2>
              <motion.p 
                className="text-white/90 mb-10 max-w-2xl mx-auto text-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                Jangan lewatkan kesempatan untuk menunjukkan potensi ide bisnismu dan memenangkan hadiah menarik!
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-5 justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <motion.a 
                  href="https://s.id/LinkPendaftaranNBPC" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn bg-white text-blue-900 transition-all shadow-xl px-8 py-4 rounded-full font-bold flex items-center justify-center"
                  whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(0, 0, 0, 0.3)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                  </svg>
                  Daftar Sekarang
                </motion.a>
                <motion.a 
                  href="#" 
                  className="btn bg-transparent text-white border-2 border-white/30 hover:border-white/70 transition-all px-8 py-4 rounded-full font-bold flex items-center justify-center"
                  whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Pelajari Lebih Lanjut
                </motion.a>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="mt-16 text-white/70 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <p>Untuk informasi lebih lanjut, hubungi panitia di <a href="mailto:info@nbpc.ac.id" className="text-white underline hover:text-blue-200 transition-colors">info@nbpc.ac.id</a></p>
            </motion.div>
          </FadeInSection>
        </div>
      </section>

      {/* Category Detail Popup */}
      <AnimatePresence>
        {activeCategory !== null && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeCategoryDetail}
            ></motion.div>
            
            <motion.div 
              className="relative w-full max-w-5xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden z-10"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <div className="absolute top-4 right-4 z-20">
                <button 
                  onClick={closeCategoryDetail}
                  className="w-10 h-10 rounded-full bg-white/90 shadow-md backdrop-blur-md flex items-center justify-center text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  <FiX size={24} />
                </button>
              </div>
              
              <div className="flex flex-col lg:flex-row max-h-[90vh] overflow-auto">
                {/* Left Panel - Colored sidebar */}
                <div className={`lg:w-1/3 bg-gradient-to-br ${categories[activeCategory].color} text-white p-5 sm:p-8 relative flex flex-col`}>
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="absolute inset-0 overflow-hidden">
                    <motion.div 
                      className="absolute inset-0 opacity-10"
                      animate={{ 
                        backgroundPosition: ['0% 0%', '100% 100%'],
                      }}
                      transition={{ 
                        duration: 20, 
                        repeat: Infinity, 
                        repeatType: "reverse" 
                      }}
                      style={{
                        backgroundImage: `url('/pattern-dots.svg')`,
                        backgroundSize: '30%',
                      }}
                    />
                  </div>
                  
                  <div className="relative z-10 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="mb-6 flex flex-col sm:flex-row sm:items-center">
                        <div className="w-16 h-16 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-3 sm:mb-0 sm:mr-4">
                          <span className="text-4xl">{categories[activeCategory].icon}</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-bold">{categories[activeCategory].title}</h2>
                      </div>
                      
                      <div className="mb-8">
                        <h3 className="text-xl font-semibold mb-4">Contoh Ide Bisnis:</h3>
                        <ul className="space-y-3">
                          {categories[activeCategory].examples.map((example, idx) => (
                            <motion.li 
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.1 * idx, duration: 0.5 }}
                              className="flex items-start"
                            >
                              <FiCheck className="mr-2 mt-1 flex-shrink-0" />
                              <span className="text-sm sm:text-base">{example}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                      className="mt-auto"
                    >
                      <a 
                        href="https://s.id/LinkPendaftaranNBPC" 
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={closeCategoryDetail}
                        className="inline-flex items-center justify-center w-full py-3 px-6 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors group"
                      >
                        Daftar untuk kategori ini
                        <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </motion.div>
                  </div>
                </div>
                
                {/* Right Panel - Content */}
                <div className="lg:w-2/3 p-5 sm:p-8 overflow-y-auto">
                  <div className="max-w-2xl mx-auto">
                    <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900 mt-2 lg:mt-0">Tentang Kategori {categories[activeCategory].title}</h3>
                    
                    <div className="prose prose-sm sm:prose-base lg:prose-lg text-gray-600 mb-6 sm:mb-8">
                      <p>{categories[activeCategory].fullDescription}</p>
                    </div>
                    
                    <div className="mb-6 sm:mb-8">
                      <h4 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-800">Kriteria Penilaian:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                        {categories[activeCategory].criteria.map((criterion, idx) => (
                          <motion.div 
                            key={idx}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * idx, duration: 0.4 }}
                            className={`p-3 sm:p-4 rounded-lg ${categories[activeCategory].bgColor} flex items-start`}
                          >
                            <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r ${categories[activeCategory].color} flex-shrink-0 flex items-center justify-center text-white mr-3`}>
                              <span className="text-xs sm:text-sm font-bold">{idx + 1}</span>
                            </div>
                            <div>
                              <p className="text-sm sm:text-base font-medium text-gray-800">{criterion}</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-6 sm:mb-8">
                      <h4 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-800">Tips Sukses:</h4>
                      <div className="p-4 sm:p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-100">
                        <ul className="space-y-2 sm:space-y-3">
                          <li className="flex items-start">
                            <span className="inline-flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-blue-100 text-blue-600 font-bold flex-shrink-0 mr-2 sm:mr-3">1</span>
                            <p className="text-sm sm:text-base">Fokuslah pada masalah nyata yang ingin diselesaikan oleh bisnis Anda</p>
                          </li>
                          <li className="flex items-start">
                            <span className="inline-flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-blue-100 text-blue-600 font-bold flex-shrink-0 mr-2 sm:mr-3">2</span>
                            <p className="text-sm sm:text-base">Lakukan riset pasar yang mendalam dan validasi ide Anda</p>
                          </li>
                          <li className="flex items-start">
                            <span className="inline-flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-blue-100 text-blue-600 font-bold flex-shrink-0 mr-2 sm:mr-3">3</span>
                            <p className="text-sm sm:text-base">Buatlah model bisnis yang jelas dan berkelanjutan</p>
                          </li>
                          <li className="flex items-start">
                            <span className="inline-flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-blue-100 text-blue-600 font-bold flex-shrink-0 mr-2 sm:mr-3">4</span>
                            <p className="text-sm sm:text-base">Tunjukkan bagaimana bisnis Anda memiliki keunggulan kompetitif</p>
                          </li>
                          <li className="flex items-start">
                            <span className="inline-flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-blue-100 text-blue-600 font-bold flex-shrink-0 mr-2 sm:mr-3">5</span>
                            <p className="text-sm sm:text-base">Persiapkan presentasi yang meyakinkan dan jawaban untuk pertanyaan juri</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 sm:justify-end mt-6 sm:mt-10">
                      <button 
                        onClick={closeCategoryDetail}
                        className="px-6 py-3 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors text-sm sm:text-base"
                      >
                        Tutup
                      </button>
                      <a 
                        href="https://s.id/LinkPendaftaranNBPC"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={closeCategoryDetail}
                        className={`px-6 py-3 rounded-lg text-white bg-gradient-to-r ${categories[activeCategory].color} hover:shadow-lg transition-shadow text-sm sm:text-base`}
                      >
                        Daftar Sekarang
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 
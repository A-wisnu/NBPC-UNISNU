'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const path = window.location.pathname;
    setActiveLink(path);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'Tentang', href: '/tentang' },
    { label: 'Informasi Lomba', href: '/lomba' },
  ];

  const navbarClasses = `fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
    isScrolled 
      ? 'bg-white shadow-[0_2px_15px_rgba(0,0,0,0.05)] py-3' 
      : 'bg-gradient-to-b from-[#050A24]/80 to-[#050A24]/40 backdrop-blur-md py-5'
  }`;

  const menuItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  const letterVariants = {
    initial: { y: 0 },
    hover: (i: number) => ({
      y: -3,
      transition: {
        duration: 0.3,
        delay: i * 0.02,
        type: "spring",
        stiffness: 200,
        damping: 10
      }
    })
  };

  const logoVariants = {
    initial: { opacity: 0, x: -20 },
    animate: { 
      opacity: 1, 
      x: 0, 
      transition: { 
        duration: 0.6,
        type: "spring",
        stiffness: 100 
      } 
    }
  };

  return (
    <nav className={navbarClasses}>
      <div className="container-custom flex items-center justify-between">
        <motion.div
          variants={logoVariants}
          initial="initial"
          animate="animate"
          className="flex items-center"
        >
          <Link href="/" className="flex items-center">
            <div className="h-[50px] w-[100px] relative flex items-center">
              <Image
                src="/images/logo.png"
                alt="NBPC Logo"
                width={100}
                height={30}
                className="transition-all duration-300 object-contain"
                priority
              />
            </div>
          </Link>
        </motion.div>

        {/* Desktop Menu - Centered */}
        <div className="hidden md:flex items-center justify-center flex-1 px-4">
          <div className="flex items-center justify-center space-x-12">
            {menuItems.map((item, i) => (
              <motion.div
                key={item.label}
                custom={i}
                variants={menuItemVariants}
                initial="hidden"
                animate="visible"
                onHoverStart={() => setHoveredItem(item.label)}
                onHoverEnd={() => setHoveredItem(null)}
              >
                <Link 
                  href={item.href}
                  className={`text-base font-medium relative ${
                    isScrolled ? 'text-dark-gray hover:text-primary-blue' : 'text-white hover:text-[#00B5EF]'
                  } transition-colors duration-500`}
                >
                  <span className="inline-block overflow-hidden">
                    {item.label.split('').map((letter, index) => (
                      <motion.span
                        key={index}
                        custom={index}
                        variants={letterVariants}
                        initial="initial"
                        animate={hoveredItem === item.label ? "hover" : "initial"}
                        className={`inline-block ${hoveredItem === item.label ? (isScrolled ? 'text-primary-blue' : 'text-[#00B5EF]') : ''}`}
                      >
                        {letter}
                      </motion.span>
                    ))}
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <a href="https://s.id/LinkPendaftaranNBPC" target="_blank" rel="noopener noreferrer">
            <motion.button 
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 10px 25px -5px rgba(0, 181, 239, 0.4)" 
              }} 
              whileTap={{ scale: 0.95 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 15
              }}
              className={`${isScrolled ? 'bg-primary-blue text-white' : 'bg-transparent border border-[#00B5EF] text-white'} px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300`}
            >
              Daftar Sekarang
            </motion.button>
          </a>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.div 
          className="md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`p-2 ${isScrolled ? 'text-dark-gray' : 'text-white'}`}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-md absolute top-full left-0 w-full overflow-hidden"
          >
            <div className="container-custom py-4 flex flex-col space-y-4">
              {menuItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link 
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-dark-gray hover:text-primary-blue font-medium py-2 block"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="pt-2"
              >
                <a href="https://s.id/LinkPendaftaranNBPC" target="_blank" rel="noopener noreferrer" className="w-full">
                  <button 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-full bg-primary-blue text-white rounded-full py-3 font-medium shadow-md hover:shadow-lg transition-shadow"
                  >
                    Daftar Sekarang
                  </button>
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar; 
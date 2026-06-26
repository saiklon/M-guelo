import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled ? 'bg-white/95 backdrop-blur-md border-zinc-200 py-4' : 'bg-white border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">
        <a 
          href="#" 
          className="font-sans font-medium text-2xl tracking-[0.1em] text-zinc-900 lowercase"
        >
          migueloopticas
        </a>

        <div className="hidden md:flex gap-10">
          {['Colecciones', 'Servicios', 'Contacto'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-xs font-medium tracking-[0.1em] uppercase text-zinc-500 hover:text-zinc-900 transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}

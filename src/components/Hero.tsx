import { motion } from 'motion/react';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden pt-20">
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-5">
        <div className="w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900 via-transparent to-transparent blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 text-center lg:text-left mt-12 lg:mt-0">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs font-semibold tracking-[0.2em] text-zinc-400 uppercase mb-6"
          >
            Nueva Temporada
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-6xl md:text-7xl lg:text-8xl font-serif text-zinc-900 mb-8 leading-[1.1]"
          >
            Visión <br /> <span className="italic text-zinc-500">sin límites</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-zinc-500 font-sans font-light max-w-xl mx-auto lg:mx-0 mb-12"
          >
            Descubra nuestra nueva colección. Diseño vanguardista, precisión óptica y elegancia en cada detalle.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <a 
              href="#colecciones" 
              className="inline-flex items-center justify-center bg-zinc-900 text-white px-10 py-4 font-sans tracking-[0.1em] text-xs font-medium uppercase hover:bg-zinc-800 transition-all duration-300 rounded-none"
            >
              Ver Colección
            </a>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex-1 w-full max-w-lg lg:max-w-none relative"
        >
          <div className="aspect-[4/5] relative overflow-hidden bg-zinc-100">
            <img 
              src="https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&q=80&w=2000" 
              alt="Modelo joven con gafas modernas"
              className="object-cover w-full h-full"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

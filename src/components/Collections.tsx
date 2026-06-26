import { motion } from 'motion/react';

const collections = [
  {
    id: 'graduado',
    title: 'Colección Óptica',
    description: 'Monturas vanguardistas para el día a día',
    image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80&w=2000',
  },
  {
    id: 'sol',
    title: 'Colección Solar',
    description: 'Elegancia atemporal bajo el sol',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=2000',
  }
];

export default function Collections() {
  return (
    <section id="colecciones" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-semibold tracking-[0.2em] text-zinc-400 uppercase mb-4"
            >
              Catálogo
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl lg:text-5xl font-serif text-zinc-900 leading-tight"
            >
              Colecciones que <br/> <span className="italic text-zinc-500">marcan tendencia</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <a href="#" className="text-xs font-semibold tracking-[0.1em] uppercase text-zinc-900 border-b border-zinc-900 pb-1 hover:text-zinc-500 hover:border-zinc-500 transition-colors duration-300">
              Ver todas las gafas
            </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-zinc-100 mb-8">
                <img 
                  src={collection.image} 
                  alt={collection.title}
                  className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              <h3 className="text-2xl font-serif text-zinc-900 mb-2">
                {collection.title}
              </h3>
              <p className="text-zinc-500 font-sans font-light">
                {collection.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

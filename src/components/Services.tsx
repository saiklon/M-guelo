import { motion } from 'motion/react';
import { Eye, Glasses, UserCheck } from 'lucide-react';

const services = [
  {
    title: 'Examen Visual Personalizado',
    description: 'Evaluación optométrica exhaustiva utilizando tecnología de vanguardia para garantizar la máxima precisión en su diagnóstico visual.',
    icon: Eye,
  },
  {
    title: 'Graduación de Lentes Premium',
    description: 'Adaptación de lentes con tratamientos antirreflejantes de alta gama y filtros protectores, diseñados específicamente para su estilo de vida.',
    icon: Glasses,
  },
  {
    title: 'Asesoramiento de Imagen',
    description: 'Nuestros expertos le guiarán de forma exclusiva en la selección de la montura perfecta que armonice con sus facciones y resalte su personalidad.',
    icon: UserCheck,
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-32 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-semibold tracking-[0.2em] text-zinc-400 uppercase mb-4"
          >
            Excelencia Clínica
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-serif text-zinc-900 leading-tight"
          >
            Servicios de <span className="italic text-zinc-500">vanguardia</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="flex flex-col items-center text-center group bg-white p-12 border border-zinc-100 hover:border-zinc-300 hover:shadow-xl hover:shadow-zinc-200/20 transition-all duration-500"
              >
                <div className="mb-10 text-zinc-300 group-hover:text-zinc-900 transition-colors duration-500">
                  <Icon className="w-10 h-10" strokeWidth={1} />
                </div>
                <h3 className="text-xl font-serif text-zinc-900 mb-4">{service.title}</h3>
                <p className="text-sm text-zinc-500 font-sans font-light leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-8 w-8 h-[1px] bg-zinc-200 group-hover:w-16 group-hover:bg-zinc-900 transition-all duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

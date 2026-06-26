import { motion } from 'motion/react';
import { Instagram, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white text-zinc-900 py-16 lg:py-24 font-sans border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h2 className="text-2xl font-sans tracking-[0.1em] mb-6 lowercase">migueloopticas</h2>
            <p className="text-sm text-zinc-500 font-light leading-relaxed mb-6">
              Excelencia visual y diseño exclusivo. Nuestra pasión es cuidar de su visión mientras realzamos su estilo personal.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-wider uppercase mb-6 text-zinc-400">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm font-light text-zinc-600">
                <MapPin className="w-5 h-5 text-zinc-400 shrink-0" strokeWidth={1} />
                <span>Av. de la Excelencia, 123<br />28001 Madrid</span>
              </li>
              <li className="flex items-center gap-3 text-sm font-light text-zinc-600">
                <Phone className="w-5 h-5 text-zinc-400 shrink-0" strokeWidth={1} />
                <span>+34 600 000 000</span>
              </li>
              <li className="flex items-center gap-3 text-sm font-light text-zinc-600">
                <Mail className="w-5 h-5 text-zinc-400 shrink-0" strokeWidth={1} />
                <span>info@migueloopticas.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-wider uppercase mb-6 text-zinc-400">Horario</h3>
            <ul className="space-y-3 text-sm font-light text-zinc-600">
              <li className="flex justify-between border-b border-zinc-100 pb-2">
                <span>Lunes - Viernes</span>
                <span>10:00 - 20:30</span>
              </li>
              <li className="flex justify-between border-b border-zinc-100 pb-2">
                <span>Sábado</span>
                <span>10:00 - 14:00</span>
              </li>
              <li className="flex justify-between text-zinc-400 pb-2">
                <span>Domingo</span>
                <span>Cerrado</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-wider uppercase mb-6 text-zinc-400">Síganos</h3>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-500 hover:bg-zinc-900 hover:text-white hover:border-zinc-900 transition-all duration-300">
                <Instagram className="w-4 h-4" />
              </a>
              {/* Add more social icons here if needed */}
            </div>
          </div>

        </div>

        <div className="border-t border-zinc-100 mt-20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light text-zinc-500">
          <p>&copy; {new Date().getFullYear()} migueloopticas. Todos los derechos reservados.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-zinc-900 transition-colors">Aviso Legal</a>
            <a href="#" className="hover:text-zinc-900 transition-colors">Política de Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

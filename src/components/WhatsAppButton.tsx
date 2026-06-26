import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const phoneNumber = "34600000000"; // Replace with actual phone number
  const message = "Hola, me gustaría recibir más información sobre sus servicios y colecciones.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 flex items-center justify-center w-14 h-14 bg-zinc-900 text-white rounded-full shadow-xl hover:bg-zinc-800 hover:scale-105 transition-all duration-300"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Collections from './components/Collections';
import Services from './components/Services';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans text-zinc-900 selection:bg-zinc-900 selection:text-white">
      <Navigation />
      <main>
        <Hero />
        <Collections />
        <Services />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

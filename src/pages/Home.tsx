import { motion } from 'motion/react';

export default function Home() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen pt-20"
    >
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=2000" 
            alt="Hero" 
            className="w-full h-full object-cover opacity-90"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/10"></div>
        </div>
        
        <div className="relative z-10 text-center text-white">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-8xl font-serif mb-6"
          >
            Maison Été
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl font-sans tracking-[0.2em] uppercase italic"
          >
            L'essence du minimalisme
          </motion.p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-serif">Notre Philosophie</h2>
            <p className="text-gray-600 leading-relaxed max-w-md">
              Nous croyons en une beauté intemporelle, façonnée par la simplicité et l'excellence des matériaux. Chaque pièce est une ode à la lumière et au calme.
            </p>
            <button className="border-b border-brand-charcoal pb-1 text-sm tracking-widest uppercase hover:text-brand-stone transition-colors">
              Découvrir plus
            </button>
          </div>
          <div className="aspect-[4/5] bg-brand-stone/20">
            <img 
              src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=1200" 
              alt="Philosophy" 
              className="w-full h-full object-cover grayscale-[20%]"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>
    </motion.div>
  );
}

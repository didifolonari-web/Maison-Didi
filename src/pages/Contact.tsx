import { motion } from 'motion/react';

export default function Contact() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen pt-32 px-6 max-w-7xl mx-auto"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
        <div>
          <h1 className="text-5xl font-serif mb-12">Contactez-nous</h1>
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="border-b border-gray-300 pb-2">
              <input 
                type="text" 
                placeholder="NOM COMPLET" 
                className="w-full bg-transparent outline-none text-xs tracking-widest placeholder:text-gray-400"
              />
            </div>
            <div className="border-b border-gray-300 pb-2">
              <input 
                type="email" 
                placeholder="E-MAIL" 
                className="w-full bg-transparent outline-none text-xs tracking-widest placeholder:text-gray-400"
              />
            </div>
            <div className="border-b border-gray-300 pb-12">
              <textarea 
                placeholder="MESSAGE" 
                rows={4}
                className="w-full bg-transparent outline-none text-xs tracking-widest placeholder:text-gray-400 resize-none"
              ></textarea>
            </div>
            <button className="bg-brand-charcoal text-white w-full py-4 text-xs tracking-[0.3em] uppercase hover:bg-opacity-90 transition-all">
              Envoyer
            </button>
          </form>
        </div>

        <div className="space-y-12">
          <div>
            <h3 className="text-xs tracking-widest uppercase text-gray-400 mb-4">Boutique Paris</h3>
            <p className="font-serif text-xl">24 Rue du Faubourg Saint-Honoré<br />75008 Paris, France</p>
          </div>
          <div>
            <h3 className="text-xs tracking-widest uppercase text-gray-400 mb-4">Presse & Partenariats</h3>
            <p className="font-serif text-xl underline">press@maisonete.com</p>
          </div>
          <div>
            <h3 className="text-xs tracking-widest uppercase text-gray-400 mb-4">Suivez-nous</h3>
            <div className="flex gap-6 mt-2">
              {['Instagram', 'Pinterest', 'Vimeo'].map(social => (
                <a key={social} href="#" className="text-xs tracking-widest uppercase hover:text-brand-stone transition-colors">{social}</a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

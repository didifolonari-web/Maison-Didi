import { motion } from 'motion/react';

export default function OurStory() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen pt-32 pb-24"
    >
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-6xl font-serif mb-16 text-center italic">Notre Histoire</h1>
        
        <div className="space-y-24">
          <section className="editorial-grid">
            <div className="col-span-12 md:col-span-12 mb-8">
              <img 
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=2000" 
                alt="Studio" 
                className="w-full h-[60vh] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="col-span-12 md:col-span-7 flex flex-col justify-center">
              <h2 className="text-3xl font-serif mb-6">L'Atelier</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                Fondée à Paris, Maison Été est née d'un désir de revenir à l'essentiel. Notre atelier travaille exclusivement avec des artisans locaux pour garantir une qualité irréprochable et un impact minimal sur l'environnement.
              </p>
            </div>
          </section>

          <section className="editorial-grid">
            <div className="col-span-12 md:col-span-5 md:col-start-8">
              <h2 className="text-3xl font-serif mb-6">Engagement</h2>
              <p className="text-gray-600 leading-relaxed">
                Chaque textile est scrupuleusement sélectionné. Nous privilégions les fibres naturelles : lin, coton biologique et soie sauvage. Pour nous, le luxe réside dans la durabilité.
              </p>
            </div>
          </section>
        </div>
      </div>
    </motion.div>
  );
}

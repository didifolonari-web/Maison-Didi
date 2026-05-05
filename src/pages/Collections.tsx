import { motion } from 'motion/react';

const products = [
  { id: 1, name: 'Linen Shirt', price: '$240', image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=800' },
  { id: 2, name: 'Stone Trousers', price: '$310', image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&q=80&w=800' },
  { id: 3, name: 'Silk Scarf', price: '$120', image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=800' },
  { id: 4, name: 'Minimal Coat', price: '$850', image: 'https://images.unsplash.com/photo-1539533721387-a25e9858718a?auto=format&fit=crop&q=80&w=800' },
];

export default function Collections() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen pt-32 px-6 max-w-7xl mx-auto"
    >
      <header className="mb-16">
        <h1 className="text-5xl font-serif mb-4">Collections</h1>
        <div className="flex gap-8 text-xs tracking-widest uppercase text-gray-400">
          <button className="text-brand-charcoal border-b border-brand-charcoal">Tout</button>
          <button className="hover:text-brand-charcoal transition-colors">Été 2024</button>
          <button className="hover:text-brand-charcoal transition-colors">Essentiels</button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
        {products.map((product) => (
          <motion.div 
            key={product.id}
            whileHover={{ y: -10 }}
            className="group cursor-pointer"
          >
            <div className="aspect-[3/4] overflow-hidden bg-brand-stone/10 mb-4">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
            </div>
            <h3 className="font-sans text-sm tracking-wide uppercase">{product.name}</h3>
            <p className="text-gray-500 text-sm mt-1">{product.price}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

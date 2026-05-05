import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ShoppingBag } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Collections', path: '/collections' },
    { name: 'Notre Histoire', path: '/story' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 py-6 md:px-12 flex justify-between items-center ${
          isScrolled ? 'bg-brand-cream/80 backdrop-blur-md py-4' : 'bg-transparent'
        }`}
      >
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden"
          >
            <Menu className="w-6 h-6" />
          </button>
          <nav className="hidden md:flex gap-8 text-[10px] tracking-[0.2em] uppercase font-sans">
            {navLinks.map(link => (
              <Link 
                key={link.name} 
                to={link.path}
                className="hover:text-brand-stone transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        <Link to="/" className="absolute left-1/2 -translate-x-1/2">
          <h1 className="text-2xl md:text-3xl font-serif tracking-tighter">Maison Été</h1>
        </Link>

        <div className="flex items-center gap-6">
          <button className="text-[10px] tracking-[0.2em] uppercase hidden md:block">Rechercher</button>
          <button className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5" />
            <span className="text-[10px] tracking-[0.2em] font-sans">0</span>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="fixed inset-0 z-[60] bg-brand-cream flex flex-col p-8"
          >
            <div className="flex justify-end">
              <button onClick={() => setIsMenuOpen(false)}>
                <X className="w-8 h-8" />
              </button>
            </div>
            <nav className="flex flex-col gap-8 mt-20">
              <Link to="/" className="text-4xl font-serif">Accueil</Link>
              {navLinks.map(link => (
                <Link key={link.name} to={link.path} className="text-4xl font-serif">
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

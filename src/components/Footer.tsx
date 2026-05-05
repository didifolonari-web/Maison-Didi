import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-brand-charcoal text-brand-cream pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <h2 className="text-4xl md:text-6xl font-serif italic mb-16 text-center">Inspiration Minimaliste</h2>
        
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
          <div>
            <h4 className="text-[10px] tracking-[0.3em] uppercase opacity-50 mb-6">Navigation</h4>
            <ul className="space-y-4 text-xs tracking-widest uppercase">
              <li><Link to="/collections">Collections</Link></li>
              <li><Link to="/story">Notre Histoire</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><a href="#">Boutiques</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] tracking-[0.3em] uppercase opacity-50 mb-6">Aide</h4>
            <ul className="space-y-4 text-xs tracking-widest uppercase">
              <li><a href="#">Livraison</a></li>
              <li><a href="#">Retours</a></li>
              <li><a href="#">Taille</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>
          <div className="col-span-2 md:col-span-2 flex flex-col items-end">
            <h4 className="text-[10px] tracking-[0.3em] uppercase opacity-50 mb-6 block w-full text-right">Newsletter</h4>
            <div className="flex border-b border-brand-stone/30 pb-2 w-full max-w-sm">
              <input 
                type="email" 
                placeholder="VOTRE E-MAIL" 
                className="bg-transparent text-xs tracking-widest outline-none flex-grow"
              />
              <button className="text-[10px] tracking-[0.3em] uppercase hover:text-brand-stone transition-colors">S'inscrire</button>
            </div>
          </div>
        </div>

        <div className="w-full pt-12 border-t border-brand-stone/10 flex flex-col md:flex-row justify-between items-center gap-6 opacity-40">
          <p className="text-[9px] tracking-widest uppercase">&copy; 2024 Maison Été. Tous droits réservés.</p>
          <div className="flex gap-8 text-[9px] tracking-widest uppercase">
            <a href="#">Mentions Légales</a>
            <a href="#">Confidentialité</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

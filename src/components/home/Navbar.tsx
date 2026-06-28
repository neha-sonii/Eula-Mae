import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { EulaLogo } from "@/components/EulaLogo";
import { useLocation } from "wouter";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [, setLocation] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (target: string) => {
    setMenuOpen(false);
    if (target === 'menu') {
      setLocation('/menu');
    } else {
      const el = document.getElementById(target);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-colors duration-300 ${scrolled ? 'bg-[#1A0A00] shadow-md py-2' : 'bg-transparent py-2'}`}>
      <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
        <div className="cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <EulaLogo size="sm" variant="light" className="scale-75 origin-left" />
        </div>
        
        <div className="hidden md:flex space-x-8 text-white font-sans text-sm tracking-widest uppercase">
          <button onClick={() => handleNav('signature')} className="hover:text-[#C8392B] transition-colors">Signature Dishes</button>
          <button onClick={() => handleNav('story')} className="hover:text-[#C8392B] transition-colors">Our Story</button>
          <button onClick={() => handleNav('reviews')} className="hover:text-[#C8392B] transition-colors">Reviews</button>
          <button onClick={() => handleNav('menu')} className="hover:text-[#C8392B] transition-colors">Menu</button>
          <button onClick={() => handleNav('menu')} className="hover:text-[#C8392B] transition-colors">Catering</button>
          <button onClick={() => handleNav('reserve')} className="bg-[#C8392B] hover:bg-[#A62F24] text-white px-5 py-2 rounded-full transition-colors">Reserve</button>
        </div>

        <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full bg-[#1A0A00] shadow-lg flex flex-col items-center py-6 space-y-6 text-white font-sans uppercase tracking-widest text-sm"
          >
            <button onClick={() => handleNav('signature')} className="hover:text-[#C8392B] transition-colors">Signature Dishes</button>
            <button onClick={() => handleNav('story')} className="hover:text-[#C8392B] transition-colors">Our Story</button>
            <button onClick={() => handleNav('reviews')} className="hover:text-[#C8392B] transition-colors">Reviews</button>
            <button onClick={() => handleNav('menu')} className="hover:text-[#C8392B] transition-colors">Menu</button>
            <button onClick={() => handleNav('menu')} className="hover:text-[#C8392B] transition-colors">Catering</button>
            <button onClick={() => handleNav('reserve')} className="bg-[#C8392B] hover:bg-[#A62F24] text-white px-6 py-2.5 rounded-full transition-colors">Reserve</button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
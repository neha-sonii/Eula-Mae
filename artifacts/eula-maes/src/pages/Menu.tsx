import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SiInstagram, SiFacebook } from "react-icons/si";
import { Menu as MenuIcon, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EulaLogo } from "@/components/EulaLogo";
import { useLocation } from "wouter";

const Navbar = () => {
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
      setLocation('/');
      // Need a slight delay to allow navigation to complete before scrolling
      setTimeout(() => {
        const el = document.getElementById(target);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-colors duration-300 ${scrolled ? 'bg-[#1A0A00] shadow-md py-3' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
        <div className="cursor-pointer" onClick={() => setLocation('/')}>
          <EulaLogo size="sm" variant="light" className="scale-75 origin-left" />
        </div>
        
        <div className="hidden md:flex space-x-8 text-white font-sans text-sm tracking-widest uppercase">
          <button onClick={() => handleNav('story')} className="hover:text-[#C8392B] transition-colors">Our Story</button>
          <button onClick={() => handleNav('reviews')} className="hover:text-[#C8392B] transition-colors">Reviews</button>
          <button onClick={() => handleNav('menu')} className="hover:text-[#C8392B] transition-colors">Menu</button>
          <button onClick={() => handleNav('reserve')} className="hover:text-[#C8392B] transition-colors">Reserve</button>
        </div>

        <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <MenuIcon size={28} />}
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
            <button onClick={() => handleNav('story')} className="hover:text-[#C8392B] transition-colors">Our Story</button>
            <button onClick={() => handleNav('reviews')} className="hover:text-[#C8392B] transition-colors">Reviews</button>
            <button onClick={() => handleNav('menu')} className="hover:text-[#C8392B] transition-colors">Menu</button>
            <button onClick={() => handleNav('reserve')} className="hover:text-[#C8392B] transition-colors">Reserve</button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default function Menu() {
  const [, setLocation] = useLocation();

  const scrollToCategory = (id: string) => {
    const el = document.getElementById(`category-${id}`);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#F5EFE0] min-h-screen text-[#1A0A00] font-sans selection:bg-[#C8392B] selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 flex flex-col items-center justify-center text-center px-4 sm:px-6 bg-[#1A0A00] text-white">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#6B4C2A] via-[#1A0A00] to-[#1A0A00]" />
        
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-5xl md:text-6xl lg:text-[80px] leading-tight tracking-wide mb-6"
          >
            Our Menu
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[#F5EFE0] text-lg md:text-xl font-medium tracking-wide mb-10 italic font-serif"
          >
            Made from scratch. Every single day.
          </motion.p>
          <button onClick={() => setLocation('/')} className="text-[#C8392B] hover:text-white transition-colors flex items-center space-x-2">
            <span>←</span> <span>Back to Home</span>
          </button>
        </div>
      </section>

      {/* Category Tabs */}
      <div className="sticky top-[80px] md:top-[90px] z-40 bg-[#F5EFE0]/90 backdrop-blur-md border-b border-[#6B4C2A]/20">
        <div className="container mx-auto px-4 overflow-x-auto scrollbar-hide">
          <div className="flex justify-start md:justify-center space-x-8 py-4 font-serif text-lg md:text-xl text-[#6B4C2A] whitespace-nowrap min-w-max">
            <button onClick={() => scrollToCategory('starters')} className="hover:text-[#C8392B] transition-colors">Starters</button>
            <button onClick={() => scrollToCategory('mains')} className="hover:text-[#C8392B] transition-colors">Mains</button>
            <button onClick={() => scrollToCategory('desserts')} className="hover:text-[#C8392B] transition-colors">Desserts</button>
            <button onClick={() => scrollToCategory('sides')} className="hover:text-[#C8392B] transition-colors">Sides & Biscuits</button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-16 md:py-24 space-y-24 max-w-5xl">
        {/* Starters */}
        <section id="category-starters">
          <h2 className="font-serif text-3xl md:text-4xl text-[#1A0A00] border-b border-[#6B4C2A]/20 pb-4 mb-8">Starters</h2>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div className="flex flex-col sm:flex-row gap-6 bg-[#FFF8EC] rounded-xl overflow-hidden shadow-sm p-6">
              <div className="w-full sm:w-32 sm:h-32 aspect-square bg-[#6B4C2A]/10 rounded-lg flex-shrink-0 relative overflow-hidden">
                <img src="/dishes/cheese-balls.png" alt="Fried Cheese Balls" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="flex flex-col justify-center flex-grow">
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="font-serif font-bold text-xl text-[#1A0A00]">Fried Cheese Balls</h3>
                  <span className="text-[#C8392B] font-medium text-lg ml-4">$8</span>
                </div>
                <p className="text-[#6B4C2A] leading-relaxed text-sm md:text-base">Golden, gooey, and impossible to share. Served with our house-made dipping sauce.</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 bg-[#FFF8EC] rounded-xl overflow-hidden shadow-sm p-6">
              <div className="w-full sm:w-32 sm:h-32 aspect-square bg-[#6B4C2A]/10 rounded-lg flex-shrink-0 flex items-center justify-center text-[#6B4C2A]/40 font-serif italic">
                Eula's
              </div>
              <div className="flex flex-col justify-center flex-grow">
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="font-serif font-bold text-xl text-[#1A0A00]">Eula Mae's Special</h3>
                  <span className="text-[#C8392B] font-medium text-lg ml-4">$12</span>
                </div>
                <p className="text-[#6B4C2A] leading-relaxed text-sm md:text-base">The dish that started it all. Ask your server about today's preparation.</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 bg-[#FFF8EC] rounded-xl overflow-hidden shadow-sm p-6">
               <div className="w-full sm:w-32 sm:h-32 aspect-square bg-[#6B4C2A]/10 rounded-lg flex-shrink-0 flex items-center justify-center text-[#6B4C2A]/40 font-serif italic">
                Eula's
              </div>
              <div className="flex flex-col justify-center flex-grow">
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="font-serif font-bold text-xl text-[#1A0A00]">Wings</h3>
                  <span className="text-[#C8392B] font-medium text-lg ml-4">$10</span>
                </div>
                <p className="text-[#6B4C2A] leading-relaxed text-sm md:text-base">Crispy, sauced to your liking, and worth every single napkin.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Mains */}
        <section id="category-mains">
          <h2 className="font-serif text-3xl md:text-4xl text-[#1A0A00] border-b border-[#6B4C2A]/20 pb-4 mb-8">Mains</h2>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div className="flex flex-col sm:flex-row gap-6 bg-[#FFF8EC] rounded-xl overflow-hidden shadow-sm p-6">
              <div className="w-full sm:w-32 sm:h-32 aspect-square bg-[#6B4C2A]/10 rounded-lg flex-shrink-0 relative overflow-hidden">
                <img src="/dishes/chicken-tenders.png" alt="Chicken Tender Dinner" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="flex flex-col justify-center flex-grow">
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="font-serif font-bold text-xl text-[#1A0A00]">Chicken Tender Dinner</h3>
                  <span className="text-[#C8392B] font-medium text-lg ml-4">$14</span>
                </div>
                <p className="text-[#6B4C2A] leading-relaxed text-sm md:text-base">Hand-breaded in-house daily. Served with two sides and our signature sauce.</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 bg-[#FFF8EC] rounded-xl overflow-hidden shadow-sm p-6">
              <div className="w-full sm:w-32 sm:h-32 aspect-square bg-[#6B4C2A]/10 rounded-lg flex-shrink-0 relative overflow-hidden">
                <img src="/dishes/ribeye-sandwich.png" alt="Ribeye Sandwich" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="flex flex-col justify-center flex-grow">
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="font-serif font-bold text-xl text-[#1A0A00]">Ribeye Sandwich</h3>
                  <span className="text-[#C8392B] font-medium text-lg ml-4">$18</span>
                </div>
                <p className="text-[#6B4C2A] leading-relaxed text-sm md:text-base">A half-pound of premium ribeye on a toasted brioche bun. No substitutions.</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 bg-[#FFF8EC] rounded-xl overflow-hidden shadow-sm p-6">
              <div className="w-full sm:w-32 sm:h-32 aspect-square bg-[#6B4C2A]/10 rounded-lg flex-shrink-0 relative overflow-hidden">
                <img src="/dishes/hamburger-steak.png" alt="Hamburger Steak" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="flex flex-col justify-center flex-grow">
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="font-serif font-bold text-xl text-[#1A0A00]">Hamburger Steak</h3>
                  <span className="text-[#C8392B] font-medium text-lg ml-4">$15</span>
                </div>
                <p className="text-[#6B4C2A] leading-relaxed text-sm md:text-base">A true Southern classic, smothered in rich onion gravy.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Desserts */}
        <section id="category-desserts">
          <h2 className="font-serif text-3xl md:text-4xl text-[#1A0A00] border-b border-[#6B4C2A]/20 pb-4 mb-8">Desserts</h2>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div className="flex flex-col sm:flex-row gap-6 bg-[#FFF8EC] rounded-xl overflow-hidden shadow-sm p-6">
              <div className="w-full sm:w-32 sm:h-32 aspect-square bg-[#6B4C2A]/10 rounded-lg flex-shrink-0 relative overflow-hidden">
                <img src="/dishes/key-lime-pie.png" alt="Key Lime Pie" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="flex flex-col justify-center flex-grow">
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="font-serif font-bold text-xl text-[#1A0A00]">Key Lime Pie</h3>
                  <span className="text-[#C8392B] font-medium text-lg ml-4">$7</span>
                </div>
                <p className="text-[#6B4C2A] leading-relaxed text-sm md:text-base">Tart, creamy, and made fresh daily with a graham cracker crust.</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 bg-[#FFF8EC] rounded-xl overflow-hidden shadow-sm p-6">
              <div className="w-full sm:w-32 sm:h-32 aspect-square bg-[#6B4C2A]/10 rounded-lg flex-shrink-0 flex items-center justify-center text-[#6B4C2A]/40 font-serif italic">
                Eula's
              </div>
              <div className="flex flex-col justify-center flex-grow">
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="font-serif font-bold text-xl text-[#1A0A00]">Red Velvet Cake</h3>
                  <span className="text-[#C8392B] font-medium text-lg ml-4">$6</span>
                </div>
                <p className="text-[#6B4C2A] leading-relaxed text-sm md:text-base">Three layers. Rich cream cheese frosting. Grandma-level perfection.</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 bg-[#FFF8EC] rounded-xl overflow-hidden shadow-sm p-6">
               <div className="w-full sm:w-32 sm:h-32 aspect-square bg-[#6B4C2A]/10 rounded-lg flex-shrink-0 flex items-center justify-center text-[#6B4C2A]/40 font-serif italic">
                Eula's
              </div>
              <div className="flex flex-col justify-center flex-grow">
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="font-serif font-bold text-xl text-[#1A0A00]">Mason Jar Cheesecake</h3>
                  <span className="text-[#C8392B] font-medium text-lg ml-4">$8</span>
                </div>
                <p className="text-[#6B4C2A] leading-relaxed text-sm md:text-base">Our famous creamy cheesecake served beautifully in a glass mason jar.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Sides & Biscuits */}
        <section id="category-sides">
          <h2 className="font-serif text-3xl md:text-4xl text-[#1A0A00] border-b border-[#6B4C2A]/20 pb-4 mb-8">Sides & Biscuits</h2>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div className="flex flex-col sm:flex-row gap-6 bg-[#FFF8EC] rounded-xl overflow-hidden shadow-sm p-6">
              <div className="w-full sm:w-32 sm:h-32 aspect-square bg-[#6B4C2A]/10 rounded-lg flex-shrink-0 relative overflow-hidden">
                <img src="/dishes/biscuits.png" alt="Fresh Biscuits w/ Apple Butter" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="flex flex-col justify-center flex-grow">
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="font-serif font-bold text-xl text-[#1A0A00]">Fresh Biscuits w/ Apple Butter</h3>
                  <span className="text-[#C8392B] font-medium text-lg ml-4">$4</span>
                </div>
                <p className="text-[#6B4C2A] leading-relaxed text-sm md:text-base">Made every morning. Served piping hot with our sweet apple butter.</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 bg-[#FFF8EC] rounded-xl overflow-hidden shadow-sm p-6">
              <div className="w-full sm:w-32 sm:h-32 aspect-square bg-[#6B4C2A]/10 rounded-lg flex-shrink-0 flex items-center justify-center text-[#6B4C2A]/40 font-serif italic">
                Eula's
              </div>
              <div className="flex flex-col justify-center flex-grow">
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="font-serif font-bold text-xl text-[#1A0A00]">Mashed Potatoes</h3>
                  <span className="text-[#C8392B] font-medium text-lg ml-4">$4</span>
                </div>
                <p className="text-[#6B4C2A] leading-relaxed text-sm md:text-base">Creamy, buttery, and whipped to perfection.</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 bg-[#FFF8EC] rounded-xl overflow-hidden shadow-sm p-6">
               <div className="w-full sm:w-32 sm:h-32 aspect-square bg-[#6B4C2A]/10 rounded-lg flex-shrink-0 flex items-center justify-center text-[#6B4C2A]/40 font-serif italic">
                Eula's
              </div>
              <div className="flex flex-col justify-center flex-grow">
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="font-serif font-bold text-xl text-[#1A0A00]">Seasonal Vegetables</h3>
                  <span className="text-[#C8392B] font-medium text-lg ml-4">$4</span>
                </div>
                <p className="text-[#6B4C2A] leading-relaxed text-sm md:text-base">Fresh from the market, prepared simply to let the flavors shine.</p>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center pt-16">
          <h3 className="font-serif text-3xl mb-4 text-[#1A0A00]">Can't decide? Let us surprise you.</h3>
          <Button 
            onClick={() => {
              setLocation('/');
              setTimeout(() => {
                const el = document.getElementById('reserve');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            size="lg"
            className="mt-6 bg-[#C8392B] hover:bg-[#A62F24] text-white w-full sm:w-auto rounded-full px-10 py-7 text-lg font-medium tracking-wide transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
          >
            Reserve Your Table <span className="ml-2 font-serif text-xl">→</span>
          </Button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#1A0A00] py-16 px-6 text-[#F5EFE0] text-center border-t border-[#6B4C2A]/20">
        <div className="container mx-auto flex flex-col items-center">
          <div className="mb-8">
            <EulaLogo variant="light" size="md" />
          </div>
          
          <div className="text-[#F5EFE0]/80 space-y-2 mb-8 text-lg">
            <p>110 Calhoun St, Suite 105</p>
            <p>Alexander City, AL 35010</p>
            <p>(256) 392-4999</p>
          </div>

          <p className="font-serif italic text-[#6B4C2A] text-xl mb-10 max-w-md">
            "Named for a woman who cooked with her whole heart."
          </p>

          <div className="flex space-x-6 mb-12">
            <a href="#" className="text-[#F5EFE0]/60 hover:text-[#C8392B] transition-colors">
              <SiInstagram size={24} />
            </a>
            <a href="#" className="text-[#F5EFE0]/60 hover:text-[#C8392B] transition-colors">
              <SiFacebook size={24} />
            </a>
          </div>

          <div className="text-[#F5EFE0]/40 text-sm">
            © {new Date().getFullYear()} Eula Mae's. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
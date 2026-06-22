import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import heroBg from "@assets/529716721_122099979026968132_2831643898620695669_n_1781178589939.jpg";
import signBg from "@assets/593549384_122136744758968132_3042940980227367526_n_1782036609528.jpg";
import { SiInstagram, SiFacebook } from "react-icons/si";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { EulaLogo } from "@/components/EulaLogo";
import { useLocation } from "wouter";

const CardinalDivider = ({ className = "", light = false }: { className?: string; light?: boolean }) => (
  <div className={`flex items-center justify-center w-full py-8 ${className}`}>
    <div className={`h-[1px] flex-grow max-w-[100px] ${light ? 'bg-white/20' : 'bg-[#6B4C2A]/30'}`} />
    <svg width="40" height="20" viewBox="0 0 100 50" className="mx-4" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(10, 10)">
        <path d="M15 10 C20 5, 25 5, 30 10 C35 15, 35 20, 30 25 L35 28 L25 25 C20 30, 15 30, 10 25 C5 20, 5 15, 10 10 Z" fill="#C8392B"/>
        <path d="M25 5 L28 -2 L30 5 Z" fill="#C8392B"/>
        <circle cx="28" cy="13" r="1.5" fill="#1A0A00"/>
        <path d="M32 13 L40 15 L32 18 Z" fill="#E6A822"/>
        <path d="M5 30 C10 25, 15 25, 20 30 L12 40 Z" fill="#992C22"/>
      </g>
      <g transform="translate(90, 10) scale(-1, 1)">
        <path d="M15 10 C20 5, 25 5, 30 10 C35 15, 35 20, 30 25 L35 28 L25 25 C20 30, 15 30, 10 25 C5 20, 5 15, 10 10 Z" fill="#C8392B"/>
        <path d="M25 5 L28 -2 L30 5 Z" fill="#C8392B"/>
        <circle cx="28" cy="13" r="1.5" fill="#1A0A00"/>
        <path d="M32 13 L40 15 L32 18 Z" fill="#E6A822"/>
        <path d="M5 30 C10 25, 15 25, 20 30 L12 40 Z" fill="#992C22"/>
      </g>
      <path d="M0 35 Q 50 45 100 35" fill="none" stroke={light ? "rgba(255,255,255,0.4)" : "#6B4C2A"} strokeWidth="1.5"/>
    </svg>
    <div className={`h-[1px] flex-grow max-w-[100px] ${light ? 'bg-white/20' : 'bg-[#6B4C2A]/30'}`} />
  </div>
);

const FaintCardinal = () => (
  <svg 
    viewBox="0 0 100 100" 
    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-5 pointer-events-none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M40 30 C50 20, 60 20, 70 30 C80 40, 80 50, 70 60 L80 65 L60 60 C50 70, 40 70, 30 60 C20 50, 20 40, 30 30 Z" fill="#C8392B"/>
    <path d="M60 20 L65 5 L70 20 Z" fill="#C8392B"/>
    <path d="M75 35 L90 40 L75 45 Z" fill="#E6A822"/>
    <path d="M20 70 C30 60, 40 60, 50 70 L35 90 Z" fill="#992C22"/>
  </svg>
);

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
      const el = document.getElementById(target);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-colors duration-300 ${scrolled ? 'bg-[#1A0A00] shadow-md py-3' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
        <div className="cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <EulaLogo size="sm" variant="light" className="scale-75 origin-left" />
        </div>
        
        <div className="hidden md:flex space-x-8 text-white font-sans text-sm tracking-widest uppercase">
          <button onClick={() => handleNav('signature')} className="hover:text-[#C8392B] transition-colors">Signature Dishes</button>
          <button onClick={() => handleNav('story')} className="hover:text-[#C8392B] transition-colors">Our Story</button>
          <button onClick={() => handleNav('reviews')} className="hover:text-[#C8392B] transition-colors">Reviews</button>
          <button onClick={() => handleNav('menu')} className="hover:text-[#C8392B] transition-colors">Menu</button>
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
            <button onClick={() => handleNav('reserve')} className="bg-[#C8392B] hover:bg-[#A62F24] text-white px-6 py-2.5 rounded-full transition-colors">Reserve</button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default function Home() {
  const [, setLocation] = useLocation();

  const scrollToReserve = () => {
    document.getElementById("reserve")?.scrollIntoView({ behavior: "smooth" });
  };

  const reviews = [
    { name: "Travis", text: "Best food in town. The chicken tenders are hand-breaded and come with the best dipping sauce. My kids ask to come here every week.", color: "#C8392B", img: "/gallery/dining.jpg" },
    { name: "Clint", text: "Gary and his team hosted our 40-person party without a hitch. The ribeye sandwich is unreal. Food was out fast and everything was hot.", color: "#6B4C2A", img: "/gallery/event-table.jpg" },
    { name: "Emily", text: "The mason jar cheesecake is worth the trip alone. Everything tastes homemade because it is. This place is a treasure for Alexander City.", color: "#A62F24", img: "/gallery/entrance.jpg" },
    { name: "John", text: "Came in on a Tuesday for lunch and it felt like a Sunday dinner at grandma's. The biscuits with apple butter are incredible. Highly recommend.", color: "#4A3019", img: "/gallery/kitchen.jpg" }
  ];

  return (
    <div className="bg-[#F5EFE0] min-h-screen text-[#1A0A00] font-sans selection:bg-[#C8392B] selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[100dvh] flex flex-col items-center justify-center text-center px-4 sm:px-6 overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 z-0 bg-black/70" />
        
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center mt-16">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-serif text-white text-4xl sm:text-5xl md:text-6xl lg:text-[80px] leading-[1.1] tracking-wide mb-6"
          >
            Cooked with soul.<br/>Named with love.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-[#F5EFE0] text-base md:text-xl font-medium tracking-wide mb-10"
          >
            Breakfast · Lunch · Dinner · Events — Alexander City, AL
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="w-full sm:w-auto"
          >
            <Button 
              onClick={scrollToReserve}
              size="lg"
              className="w-full sm:w-auto bg-[#C8392B] hover:bg-[#A62F24] text-white rounded-full px-8 py-7 text-lg font-medium tracking-wide transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
            >
              Reserve Your Table <span className="ml-2 font-serif text-xl">→</span>
            </Button>
          </motion.div>
        </div>
        
        <div className="absolute bottom-10 left-0 w-full z-10">
          <CardinalDivider light />
        </div>
      </section>

      {/* Signature Dishes Section */}
      <section id="signature" className="py-16 md:py-24 px-4 sm:px-6 bg-[#F5EFE0]">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#1A0A00] mb-4"
            >
              Signature Dishes
            </motion.h2>
            <p className="font-serif italic text-[#6B4C2A] text-lg md:text-xl mt-4">
              Made from scratch. Every single day.
            </p>
          </div>

          <div className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide snap-x snap-mandatory pb-6 -mx-4 px-4 sm:-mx-6 sm:px-6">
            {[
              { title: "Fried Cheese Balls", desc: "Golden fried cheese balls with a gooey pepper jack center. Served with our signature marinara.", price: "$7", img: "/dishes/cheese-balls-real.jpg" },
              { title: "Hamburger Steak", desc: "Smothered in rich mushroom onion gravy. Served with two sides.", price: "$10", img: "/dishes/hamburger-steak-real.jpg" },
              { title: "Wings", desc: "Crispy fried wings hand tossed in your choice of sauce — HOT, BBQ, Lemon Pepper, Garlic Parm, and more.", price: "$9", img: "/dishes/wings-real.jpg" },
              { title: "Fresh Biscuits", desc: "Homemade biscuits served warm with house-made jam and apple butter.", price: "$4", img: "/dishes/biscuits-real.jpg" },
              { title: "Spring Salad", desc: "Spring mix with strawberries, blackberries, feta, and raspberry vinaigrette. Add grilled chicken.", price: "$5", img: "/dishes/spring-salad.jpg" },
              { title: "Red Velvet Cake", desc: "Individual round of homemade red velvet with rich cream cheese frosting.", price: "$5", img: "/dishes/red-velvet.jpg" },
              { title: "Chicken Salad & Pimento Cheese", desc: "Homemade chicken salad and pimento cheese served with crackers, tomato, and pickles.", price: "$7", img: "/dishes/chicken-pimento.jpg" },
            ].map((dish, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#FFF8EC] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex-none w-[75vw] sm:w-[320px] lg:w-[340px] snap-start flex flex-col"
              >
                <div className="w-full aspect-square relative bg-[#6B4C2A]/10">
                  <img src={dish.img} alt={dish.title} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-serif font-bold text-xl text-[#1A0A00] pr-4">{dish.title}</h3>
                    <span className="text-[#C8392B] font-medium text-lg shrink-0">{dish.price}</span>
                  </div>
                  <p className="text-[#6B4C2A] text-sm md:text-base mt-auto">{dish.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 md:mt-24">
          <CardinalDivider />
        </div>
      </section>

      {/* Lunch Specials Section */}
      <section className="py-16 md:py-20 px-4 sm:px-6 bg-[#1A0A00]">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-3"
            >
              Daily Lunch Specials
            </motion.h2>
            <p className="font-serif italic text-[#F5EFE0]/60 text-lg">Mon – Fri · 11am – 2pm</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { day: "Monday", item: "Ribeye Sandwich", note: "with Fries and Drink", price: "$11" },
              { day: "Tuesday", item: "6oz Hamburger Steak", note: "with Fries and Drink", price: "$9" },
              { day: "Wednesday", item: "Chicken Salad or Pimento Cheese", note: "with Crackers and Drink", price: "$7" },
              { day: "Friday", item: "Chicken Tender Snack", note: "with Fries and Drink", price: "$8" },
            ].map((special, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center gap-5 bg-white/5 border border-white/10 hover:border-[#C8392B]/40 rounded-xl p-5 transition-colors"
              >
                <div className="shrink-0 bg-[#C8392B] text-white text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-lg text-center min-w-[80px]">
                  {special.day}
                </div>
                <div className="flex-1">
                  <p className="font-serif font-bold text-white text-lg leading-snug">{special.item}</p>
                  <p className="text-[#F5EFE0]/50 text-sm">{special.note}</p>
                </div>
                <div className="text-[#C8392B] font-bold text-xl shrink-0">{special.price}</div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <CardinalDivider light />
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-16 md:py-24 px-4 sm:px-6 bg-[#F5EFE0]">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#6B4C2A] mb-4"
            >
              A few words from our guests
            </motion.h2>
            <p className="font-serif text-[#C8392B] text-lg md:text-2xl mt-6">
              Rated 5<span className="text-[#C8392B] text-xl mx-1">★</span> on Google
            </p>
          </div>

          <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 overflow-x-auto scroll-smooth scrollbar-hide snap-x snap-mandatory pb-8 -mx-4 px-4 sm:-mx-6 sm:px-6 md:mx-0 md:px-0 md:pb-0 md:overflow-visible">
            {reviews.map((review, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="bg-[#FFF8EC] p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow min-w-[85vw] sm:min-w-[300px] md:min-w-0 snap-start flex flex-col"
              >
                <div className="text-[#C8392B] tracking-widest text-lg mb-4">
                  ★★★★★
                </div>
                <p className="text-[#1A0A00] mb-6 text-base md:text-lg leading-relaxed flex-grow">
                  "{review.text}"
                </p>
                <div className="mt-auto flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-[#C8392B]/20">
                    <img src={review.img} alt={review.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-bold text-[#1A0A00]">{review.name}</p>
                    <p className="text-[#6B4C2A] text-sm">via Google</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 md:mt-24">
          <CardinalDivider />
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 md:py-24 px-4 sm:px-6 bg-[#1A0A00]">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-4"
            >
              The Heart of Alexander City
            </motion.h2>
            <p className="font-serif italic text-[#F5EFE0]/70 text-lg md:text-xl mt-4">
              Where every table feels like home.
            </p>
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {[
              { src: "/gallery/panoramic.jpg", alt: "Dining room panoramic view" },
              { src: "/gallery/event-table.jpg", alt: "Elegant holiday table setting" },
              { src: "/gallery/atmosphere.jpg", alt: "Café atmosphere with string lights" },
              { src: "/gallery/event-room.jpg", alt: "Private event room with fireplace" },
              { src: "/gallery/dining.jpg", alt: "Dining room with welcome sign" },
              { src: "/gallery/private-dining.jpg", alt: "Private dining with antler chandeliers" },
              { src: "/gallery/wall-decor.jpg", alt: "Good food · Good friends · Good times" },
              { src: "/gallery/entrance.jpg", alt: "Rustic café entrance" },
              { src: "/gallery/catering.jpg", alt: "Eula Mae's catering spread" },
              { src: "/gallery/team.jpg", alt: "The Eula Mae's team" },
              { src: "/gallery/kitchen.jpg", alt: "Interior with kitchen bar" },
              { src: "/gallery/beverage.jpg", alt: "Beverage station" },
            ].map((img, i) => (
              <div key={i} className="break-inside-avoid relative rounded-xl overflow-hidden group">
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 duration-300" />
                <img 
                  src={img.src} 
                  alt={img.alt}
                  className="w-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 md:mt-24">
          <CardinalDivider light />
        </div>
      </section>

      {/* Story Section */}
      <section id="story" className="relative py-16 md:py-32 px-4 sm:px-6 bg-white overflow-hidden">
        <FaintCardinal />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div>
              <span className="font-serif italic text-[#6B4C2A] text-lg mb-4 block">Our Story</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight mb-8 text-[#1A0A00]">
                Named for the woman who taught us everything
              </h2>
              
              <div className="space-y-6 text-[#1A0A00] text-base md:text-lg leading-relaxed">
                <p>
                  Gary Tapley opened Eula Mae's in 2022 when he retired after 35 years — fulfilling a dream he'd carried since his mother was alive. 
                </p>
                <p>
                  Eula Mae was known for her cooking above all else. She passed before she could see her son run a restaurant, but her recipes, her warmth, and her spirit live in every dish served at 110 Calhoun Street.
                </p>
              </div>

              <blockquote className="mt-10 pl-6 border-l-4 border-[#C8392B]">
                <p className="font-serif italic text-[#C8392B] text-xl md:text-3xl leading-snug">
                  "I may not be able to cook with my mom anymore — but I can cook for a few hundred people in her name."
                </p>
              </blockquote>
              
              <p className="mt-6 text-[#6B4C2A] italic text-sm md:text-base">
                Those two red cardinals? That's them — watching over every plate we serve.
              </p>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative">
                <img 
                  src={signBg} 
                  alt="Eula Mae's illustrated sign with cardinals" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 md:mt-24">
          <CardinalDivider />
        </div>
      </section>

      {/* Menu Teaser Section */}
      <section id="menu" className="py-16 md:py-24 px-4 sm:px-6 bg-[#1A0A00] text-[#F5EFE0]">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-4"
            >
              What's Cooking
            </motion.h2>
            <p className="font-serif italic text-[#F5EFE0]/60 text-lg">Breakfast · Lunch · Dinner — all made from scratch.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
            {[
              {
                label: "Breakfast",
                hours: "Mornings",
                photo: "/gallery/kitchen.jpg",
                items: ["Breakfast Plate — $9", "Bologna Biscuit — $4", "Biscuits & Gravy — $4", "Beignets — $9"],
              },
              {
                label: "Lunch",
                hours: "Mon–Sat · 11am–2pm",
                photo: "/gallery/dining.jpg",
                items: ["Chicken Tender Dinner — $11", "Ribeye Sandwich — $12", "Fried Cheese Balls — $7", "Hamburger Steak — $10"],
              },
              {
                label: "Dinner",
                hours: "Mon–Sat · 5pm–9pm",
                photo: "/gallery/event-table.jpg",
                items: ["Ribeye Steak — $35", "Filet — $43", "Pork Chops — $24", "Wing & Tender Combo — $14"],
              },
            ].map((meal, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="rounded-2xl overflow-hidden bg-[#FFF8EC]/5 border border-white/10 hover:border-[#C8392B]/40 transition-colors group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={meal.photo}
                    alt={meal.label}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-5">
                    <h3 className="font-serif text-2xl text-white">{meal.label}</h3>
                    <p className="text-[#F5EFE0]/70 text-xs tracking-widest uppercase mt-0.5">{meal.hours}</p>
                  </div>
                </div>
                <div className="p-6 space-y-3">
                  {meal.items.map((item, j) => (
                    <div key={j} className="flex justify-between items-baseline text-sm border-b border-white/10 pb-2 last:border-0 last:pb-0">
                      <span className="text-[#F5EFE0]/90">{item.split(' — ')[0]}</span>
                      <span className="text-[#C8392B] font-medium ml-3 shrink-0">{item.split(' — ')[1]}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <p className="italic mb-8 text-base md:text-lg text-[#F5EFE0]/70">Explore our full scratch-made menu — Breakfast through Dinner.</p>
            <Button 
              onClick={() => setLocation('/menu')}
              size="lg"
              className="w-full sm:w-auto bg-[#C8392B] hover:bg-[#A62F24] text-white rounded-full px-10 py-6 text-lg font-medium tracking-wide transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              View Full Menu <span className="ml-2 font-serif text-xl">→</span>
            </Button>
          </div>
        </div>

        <div className="mt-16 md:mt-24">
          <CardinalDivider light />
        </div>
      </section>

      {/* Reserve Section */}
      <section id="reserve" className="py-16 md:py-24 px-4 sm:px-6 bg-[#F5EFE0]">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#1A0A00] mb-8 leading-tight">
                We'd love to have you at our table.
              </h2>
              
              <div className="space-y-6 text-[#1A0A00] text-base md:text-lg">
                <div>
                  <h4 className="font-bold mb-2">Hours</h4>
                  <p>Lunch: Mon–Sat 11am–2pm</p>
                  <p>Dinner: Mon–Sat 5pm–9pm</p>
                  <p className="text-[#C8392B] font-medium">Sunday Closed</p>
                </div>
                
                <div>
                  <h4 className="font-bold mb-2">Location</h4>
                  <p>110 Calhoun St, Suite 105</p>
                  <p>Alexander City, AL 35010</p>
                </div>
                
                <div>
                  <h4 className="font-bold mb-2">Phone</h4>
                  <p>(256) 392-4999</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 md:p-10 rounded-2xl shadow-xl">
              <a 
                href="tel:2563924999" 
                className="w-full block text-center bg-[#C8392B] hover:bg-[#A62F24] text-white rounded-full px-6 py-5 text-lg md:text-xl font-medium tracking-wide transition-all shadow-md hover:shadow-lg mb-10"
              >
                📞 Call to Reserve
              </a>

              <div className="relative mb-10">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-[#6B4C2A]/20"></div>
                </div>
                <div className="relative flex justify-center">
                  <span className="bg-white px-4 text-[#6B4C2A] text-sm">Or send us a note:</span>
                </div>
              </div>

              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.currentTarget);
                  const name = formData.get('name');
                  const size = formData.get('size');
                  const date = formData.get('date');
                  const subject = `Reservation Request: ${name}`;
                  const body = `Name: ${name}%0D%0AParty Size: ${size}%0D%0APreferred Date/Time: ${date}`;
                  window.location.href = `mailto:garytapley@gmail.com?subject=${subject}&body=${body}`;
                }}
                className="space-y-6"
              >
                <div>
                  <Label htmlFor="name" className="text-[#1A0A00]">Name</Label>
                  <Input id="name" name="name" required className="mt-2 bg-[#F5EFE0] border-transparent focus-visible:ring-[#C8392B]" />
                </div>
                <div>
                  <Label htmlFor="size" className="text-[#1A0A00]">Party Size</Label>
                  <Input id="size" name="size" type="number" min="1" required className="mt-2 bg-[#F5EFE0] border-transparent focus-visible:ring-[#C8392B]" />
                </div>
                <div>
                  <Label htmlFor="date" className="text-[#1A0A00]">Preferred Date & Time</Label>
                  <Input id="date" name="date" required className="mt-2 bg-[#F5EFE0] border-transparent focus-visible:ring-[#C8392B]" />
                </div>
                <Button type="submit" className="w-full bg-[#1A0A00] hover:bg-[#2A1000] text-white py-6 text-lg rounded-xl transition-colors">
                  Request a Reservation
                </Button>
              </form>
              
              <p className="text-center text-[#6B4C2A] text-sm mt-6">
                Prefer to call? We love that too.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-16 md:mt-24">
          <CardinalDivider />
        </div>
      </section>

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
import { useState, useEffect, memo } from "react";
import { motion, AnimatePresence, color } from "framer-motion";
import heroBg from "../../public/hero-background.mp4";
import signBg from "@assets/sign.png";
import { SiInstagram, SiFacebook } from "react-icons/si";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { EulaLogo } from "@/components/EulaLogo";
import { useLocation } from "wouter";

const CardinalDivider = memo(({ className = "", light = false }: { className?: string; light?: boolean }) => (
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
));
CardinalDivider.displayName = 'CardinalDivider';

const FaintCardinal = memo(() => (
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
));
FaintCardinal.displayName = 'FaintCardinal';

const ReviewText = ({
  text,
  expanded,
  onToggle,
  maxWords,
}: {
  text: string
  expanded: boolean
  onToggle: () => void
  maxWords: number
}) => {
  const words = text.split(/\s+/).filter(Boolean)
  const needsTruncate = words.length > maxWords
  const preview = words.slice(0, maxWords).join(" ")

  return (
    <p className="text-[#1A0A00] mb-6 text-base md:text-lg leading-relaxed flex-grow">
      "{expanded || !needsTruncate ? text : `${preview}...`}"
      {needsTruncate ? (
        <button
          type="button"
          onClick={onToggle}
          className="mt-2 inline-block text-[#6f6f6f] font-semibold underline underline-offset cursor-pointer"
        >
          {expanded ? "show less" : "read more..."}
        </button>
      ) : null}
    </p>
  )
}

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
  const [expandedReviews, setExpandedReviews] = useState<Record<number, boolean>>({});

  const scrollToReserve = () => {
    document.getElementById("reserve")?.scrollIntoView({ behavior: "smooth" });
  };

  const MAX_REVIEW_WORDS = 40;

  const reviews = [
    { name: "Reign", text: "This place is a hidden gem tucked away in Alex City.  They are located inside 'The Square', a walk through area of boutique stores with an ambiance reminiscent of New Orleans.  The restaurant is tucked away inside the very cool ornate space. The food is delicious.  Southern cuisine done right.  The cheese balls were wonderful with the spicy marinara and ranch.  The ribeye sandwich was also very good.  A well seasoned and welled cooked steak with mushrooms and Swiss cheese and a brioche bun.  The homemade mini biscuits were a nice surprise.  I thoroughly enjoyed the apple butter, apple jelly and cinnamon butter. The service was great at this family run business.  The chef Gary came out to check on us and offered some warm conversation.  Our sever, his daughter, was very attentive.  It was a pleasant positive experience across the board.  I will be back again for sure.", img: "/gallery/dining.jpg" },
    { name: "Travis Chiasson", text: "My wife and I eat here twice during our stay in Alexander City.  The atmosphere was cozy and homey.  The owner, his wife and staff were very friendly and accommodating. The food was delicious.  The first night we had the Eula Mae special for an appetizer which was different and delicious.  Our entrees were grilled pork chops and chicken.  We returned the following night and I had the filet mignon and my wife had a cheeseburger. We had the cheescake for dessert and it was served in a mason chilled jar.  Each night they also brought out fresh hot homemade mini biscuits with homemade apple butter, strawberry and peach jalapeño preserves. The atmosphere, service and food quality were exceptional and we will be back again!", img: "/gallery/event-table.jpg" },
    { name: "Emily Oliver", text: "Me and my fiance heard about this place and went a tried it out! And it became our new favorite spot!! The service was wonderful! They were extremely friendly and made it feel like home, the food was great and the atmosphere of the restaurant was very beautiful. We will definitely be telling family and friends about this place and going back!", img: "/gallery/entrance.jpg" },
    { name: "John Phillips", text: "What a treat we had at Eula Mae’s this evening! From the quaint surroundings to the friendly smiles that took excellent care of us, it was a wonderful dining experience! The spring salad was fresh and delicious as was the hamburger steak dinner and hand breaded chicken fingers  with okra. Oh and the tiny biscuits with apple butter and homemade preserves were a perfect way to begin our meal.  This is a special place filled with love and care, not a chain restaraunt filled with pre-made processed food.  We will be back!!! Thank you!", img: "/gallery/kitchen.jpg" },
    { name: "Jayelle Kaye", text: "I have dined here a lot since their opening. It is mine and my kids favorite place to eat!! The wings are cooked perfect every time.  The spring salad is refreshing. They have cool bottles of water they bring to the table too. There's so much good i can say about here. They are very attentive as well when it comes to waiting on you!!", img: "/gallery/beverage.jpg" },
    { name: "Clint Chappell", text: "This place was absolutely awesome! They accommodated us on short notice for a 40-person Christmas party, and everything turned out fantastic. The food, service, and atmosphere were all top-notch. Huge thank you to the staff and owners for such an amazing experience.", img: "/gallery/panoramic.jpg" },
    { name: "Kevin Parrish", text: "Great locally owned spot.  The owner came around talked with us.  He even gave us a bite of their pork chops which were really good.  Our server was very kind and attentive. She even sent us home with some extra fresh baked biscuits.  Which you also get a basket of when you sit down.  You can really tell that they care about what they are doing", img: "/gallery/atmosphere.jpg" },
    { name: "Leigh Gross", text: "We have eaten here several times always look forward to the next visit. Love the food and the atmosphere. Very friendly staff and the owners are personable. Highly recommend adding this to your shop local rotation.", img: "/gallery/wall-decor.jpg" },
    { name: "Steve Youde, KW Capital Realty", text: "Eula Mae’s is the finest restaurant with the finest people and the finest food in Alexander city. The atmosphere is quaint and creative. The owner Gary and his wife Melissa put so much care into everything that they do here. If you’re a local or just driving through, you owe it to yourself to come here and be loved in your stomach and your heart. So good.", img: "/gallery/event-room.jpg" },
    { name: "Avery Johnson", text: "All of it is just so wonderful and the people who run it take good care of their guests. When me and my group of friends came in they had most of the restaurant reserved for other guests but said “We want y'all to eat with us so we will figure something out.” Such lovely people who make incredible home made food and an unforgettable dining experience.", img: "/gallery/private-dining.jpg" },
    { name: "Krystal Cummings", text: "Exceptional and prompt service…excellent food… chicken fingers were wonderful!  I had the hamburger steak tonight and it was perfect 🤗.  Atmosphere was welcoming and staff was super friendly!  Can’t wait to go back… This will be one of our weekly dining venues!  So glad to have them in town 🥰", img: "/gallery/private-dining.jpg" },
    { name: "Janet Austin", text: "Our Women’s Circle gathered at Eula Mae’s for our February meeting, and it was truly a treat.Gary and Melissa Tapley went above and beyond, showcasing exceptional food, outstanding service, and a welcoming atmosphere that made our time together even more special. If you haven’t had the chance to visit Eula Mae’s yet, we highly recommend stopping by and enjoying a fabulous meal—you won’t be disappointed!", img: "/gallery/private-dining.jpg" },
    { name: "Stafenfx", text: "Perfect little restaurant. Service was excellent. The workers are very friendly. The portions were nice size and the food was great.", img: "/gallery/private-dining.jpg" },
    { name: "Calrla Culligan", text: "I love Eula Mae’s.  The food, the owners and the servers are the best! Cheese balls No. 1! Chicken wings No. 1! Hamburger Steak No. 1.  Steaks and pork chops No. 1.They serve breakfast, lunch and dinner. Come try it!!", img: "/gallery/private-dining.jpg" },
    { name: "Nathan C", text: "Everything is amazing, from the sweet tea to the entrees, wings, hamburger steak, even the fried okra. Service was excellent. 10/10 recommend.", img: "/gallery/private-dining.jpg" },
    { name: "Amy Clark", text: "Delicious food. The okra was the best I’ve ever tasted! Wonderful atmosphere. Small town charm. Try it! You will love it!", img: "/gallery/private-dining.jpg" },
    { name: "Becky", text: "Wonderful little place in the back of an antique shop. All 4 of us enjoyed our tasty lunch. We will return!!", img: "/gallery/private-dining.jpg" },
    { name: "Bruce Bright", text: "Stopped by after dental appointment to learn about this establishment.   We both enjoyed our meals and took home 3 small desserts.", img: "/gallery/private-dining.jpg" },
    { name: "Rebecca Lowry", text: "If your looking for your new date night spot this is definitely the place amazing food ! Amazing service ! The best atmosphere ! I absolutely love all the antiques as decoration it’s so cozy ! My husband and i loved this place and definitely will be coming back! The owner his wife and the waitress were absolutely the sweetest people ! ♥️ 10 out of 10 recommend!!!", img: "/gallery/private-dining.jpg" },
    { name: "Anthony Thorn", text: "The food is always great and the Tapley family and staff are always friendly and accommodating!  I suggest the ribeye steak!", img: "/gallery/private-dining.jpg" },
    { name: "Haley Browning", text: "We have enjoyed every experience at Eula Mae’s and the food has been nothing short of amazing! The owners are so welcoming and kind! This truly is an amazing addition to our community!", img: "/gallery/private-dining.jpg" },
  ];

  return (
    <div className="bg-[#F5EFE0] min-h-screen text-[#1A0A00] font-sans selection:bg-[#C8392B] selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[100dvh] flex flex-col items-center justify-center text-center px-4 sm:px-6 overflow-hidden">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src={heroBg} type="video/mp4" />
        </video>
        <div className="absolute inset-0 z-0 bg-black/70" />
        
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center mt-16">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="font-serif text-white text-4xl sm:text-5xl md:text-6xl lg:text-[80px] leading-[1.1] tracking-wide mb-6"
          >
            Quality Food,<br/>Cooked with love.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="text-[#F5EFE0] text-base md:text-xl font-medium tracking-wide mb-10"
          >
            The flavors of home, the warmth of family, and the legacy of Eula Mae.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="w-full sm:w-auto"
          >
            <Button 
              onClick={scrollToReserve}
              size="lg"
              className="w-full sm:w-auto bg-[#C8392B] hover:bg-[#A62F24] text-white rounded-full px-6 py-4 text-lg font-medium tracking-wide transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
            >
              Reserve Your Table <span className="ml-2 font-serif text-xl">→</span>
            </Button>
          </motion.div>
        </div>
        
        <div className="absolute bottom-8 left-0 w-full z-10">
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
                transition={{ delay: i * 0.05 }}
                className="bg-[#FFF8EC] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex-none w-[75vw] sm:w-[320px] lg:w-[340px] snap-start flex flex-col"
              >
                <div className="w-full aspect-[4/3] relative overflow-hidden bg-[#6B4C2A]/10">
                  <img src={dish.img} alt={dish.title} className="absolute inset-0 w-full h-full object-cover object-center" loading="lazy" />
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
                transition={{ delay: i * 0.04 }}
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
                  If you know me, you know that <span style={{ color: "#C8392B" }} >Eula Mae's</span> is named after my mom. <br/> She was a precious soul who loved everyone she met, and she loved to cook. My dad, "Penny", shared that same love for people and food. Together,<span style={{ color: "#C8392B" }} > they taught me that the best meals are made with heart.</span>
                </p>
                <p>
                  As the youngest child, I was lucky enough to spend more time in the kitchen with my mom, dad, and grandma than my older siblings. <br/> That's where I learned to cook — not just recipes, but the love and care that go into feeding people.
                </p>
                <p>
                  After retiring from my IT career, I felt called back home to pursue a dream of opening a restaurant.
                </p>
              </div>

              <blockquote className="mt-10 pl-6 border-l-4 border-[#C8392B]">
                <p className="font-serif italic text-[#C8392B] text-xl md:text-3xl leading-snug">
                  "I may not be able to cook with my mom anymore — but I can cook for a few hundred people in her name."
                </p>
              </blockquote>
              
              <p className="mt-6 text-[#6B4C2A] italic text-sm md:text-base">
                Those two red cardinals? That's my Mom & Dad, watching over every plate we serve.
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

          <div className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide snap-x snap-mandatory pb-8 -mx-4 px-4 sm:-mx-6 sm:px-6">
            {reviews.map((review, i) => {
              const firstName = review.name.split(" ")[0];
              const badgeColors = [
                "bg-[#C8392B]",
                "bg-[#A62F24]",
                "bg-[#6B4C2A]",
                "bg-[#D19D45]",
                "bg-[#8B4513]",
                "bg-[#4E2E1D]",
                "bg-[#7B523A]",
                "bg-[#2F1A0E]",
              ];
              const badgeColor = badgeColors[i % badgeColors.length];

              return (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: Math.min(i * 0.03, 0.2), duration: 0.4 }}
                  className="bg-[#FFF8EC] p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow flex-none w-[88vw] sm:w-[380px] snap-start flex flex-col"
                >
                  <div className="text-[#C8392B] tracking-widest text-lg mb-4">
                    ★★★★★
                  </div>
                  <ReviewText
                    text={review.text}
                    expanded={!!expandedReviews[i]}
                    onToggle={() =>
                      setExpandedReviews((prev) => ({
                        ...prev,
                        [i]: !prev[i],
                      }))
                    }
                    maxWords={MAX_REVIEW_WORDS}
                  />
                  <div className="mt-auto flex items-center gap-4">
                    <div className={`flex items-center justify-center w-10 h-10 rounded-full ${badgeColor} text-white text-2xl font-bold ring-2 ring-[#C8392B]/20`}>
                      {firstName.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-[#1A0A00]">{review.name}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
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
              // { src: "/gallery/panoramic.jpg", alt: "Dining room panoramic view" },
              { src: "/gallery/event-table.jpg", alt: "Elegant holiday table setting" },
              { src: "/gallery/atmosphere.jpg", alt: "Café atmosphere with string lights" },
              { src: "/gallery/event-room.jpg", alt: "Private event room with fireplace" },
              // { src: "/gallery/dining.jpg", alt: "Dining room with welcome sign" },
              { src: "/gallery/private-dining.jpg", alt: "Private dining with antler chandeliers" },
              { src: "/gallery/wall-decor.jpg", alt: "Good food · Good friends · Good times" },
              { src: "/gallery/entrance.jpg", alt: "Rustic café entrance" },
              { src: "/gallery/catering.jpg", alt: "Eula Mae's catering spread" },
              { src: "/gallery/team.jpg", alt: "The Eula Mae's team" },
              // { src: "/gallery/kitchen.jpg", alt: "Interior with kitchen bar" },
              // { src: "/gallery/beverage.jpg", alt: "Beverage station" },
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
            <p className="font-serif italic text-[#F5EFE0]/60 text-lg">Lunch · Dinner — all made from scratch.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-16 max-w-3xl mx-auto w-full">
            {[
              {
                label: "Lunch",
                hours: "Mon–Fri · 11am–2pm",
                photo: "/gallery/event-table.jpg",
                items: ["Chicken Tender Dinner — $11", "Ribeye Sandwich — $12", "Fried Cheese Balls — $7", "Hamburger Steak — $10"],
              },
              {
                label: "Dinner",
                hours: "Mon–Fri · 4:30pm–9pm",
                photo: "/gallery/interior.png",
                items: ["Ribeye Steak — $35", "Filet — $43", "Pork Chops — $24", "Wing & Tender Combo — $14"],
              },
            ].map((meal, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
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
            <p className="italic mb-8 text-base md:text-lg text-[#F5EFE0]/70">Explore our full scratch-made menu — Lunch through Dinner.</p>
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
                  <p>Lunch: Mon–Fri 11:00am – 2:00pm</p>
                  <p>Dinner: Mon–Fri 4:30pm – 9:00pm</p>
                  <p className="text-[#C8392B] font-medium">Saturday & Sunday Closed</p>
                </div>
                
                <div>
                  <h4 className="font-bold mb-2">Location</h4>
                  <p>
                    <a
                      href="https://maps.app.goo.gl/kuBkscJEovrtYFYU6"
                      rel="noreferrer"
                      className="text-[#1A0A00] hover:text-[#C8392B] transition-colors"
                    >
                      110 Calhoun St, Suite 105
                    </a>
                  </p>
                  <p>
                    <a
                      href="https://maps.app.goo.gl/kuBkscJEovrtYFYU6"
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#1A0A00] hover:text-[#C8392B] transition-colors"
                    >
                      Alexander City, AL 35010
                    </a>
                  </p>
                </div>
                
                <div>
                  <h4 className="font-bold mb-2">Phone</h4>
                  <p>
                    <a href="tel:+12563924999" className="text-[#1A0A00] hover:text-[#C8392B] transition-colors">
                      (+1) 256-392-4999
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 md:p-10 rounded-2xl shadow-xl">
              <a 
                href="tel:+12563924999" 
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
                  e.currentTarget.reset();
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
            <p>(+1) 256-392-4999</p>
          </div>

          <p className="font-serif italic text-[#6B4C2A] text-xl mb-10 max-w-md">
            "Named for a woman who cooked with her whole heart."
          </p>

          <div className="flex space-x-6 mb-12">
            <a href="#" className="text-[#F5EFE0]/60 hover:text-[#C8392B] transition-colors">
              <SiInstagram size={24} />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61579043976499" className="text-[#F5EFE0]/60 hover:text-[#C8392B] transition-colors">
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
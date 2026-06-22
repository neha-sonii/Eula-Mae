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
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (target: string) => {
    setMenuOpen(false);
    if (target === 'menu') {
      setLocation('/menu');
    } else {
      setLocation('/');
      setTimeout(() => {
        const el = document.getElementById(target);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-colors duration-300 ${scrolled ? 'bg-[#1A0A00] shadow-md py-3' : 'bg-[#1A0A00] py-4'}`}>
      <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
        <div className="cursor-pointer" onClick={() => setLocation('/')}>
          <EulaLogo size="sm" variant="light" className="scale-75 origin-left" />
        </div>
        <div className="hidden md:flex space-x-8 text-white font-sans text-sm tracking-widest uppercase">
          <button onClick={() => handleNav('signature')} className="hover:text-[#C8392B] transition-colors">Signature Dishes</button>
          <button onClick={() => handleNav('story')} className="hover:text-[#C8392B] transition-colors">Our Story</button>
          <button onClick={() => handleNav('reviews')} className="hover:text-[#C8392B] transition-colors">Reviews</button>
          <button onClick={() => handleNav('menu')} className="text-[#C8392B]">Menu</button>
          <button onClick={() => handleNav('reserve')} className="bg-[#C8392B] hover:bg-[#A62F24] text-white px-5 py-2 rounded-full transition-colors">Reserve</button>
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
            <button onClick={() => handleNav('signature')} className="hover:text-[#C8392B] transition-colors">Signature Dishes</button>
            <button onClick={() => handleNav('story')} className="hover:text-[#C8392B] transition-colors">Our Story</button>
            <button onClick={() => handleNav('reviews')} className="hover:text-[#C8392B] transition-colors">Reviews</button>
            <button onClick={() => handleNav('menu')} className="text-[#C8392B]">Menu</button>
            <button onClick={() => handleNav('reserve')} className="bg-[#C8392B] hover:bg-[#A62F24] text-white px-6 py-2.5 rounded-full transition-colors">Reserve</button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

type TabId = 'lunch' | 'dinner' | 'catering';

const MenuItem = ({ name, desc, price, note }: { name: string; desc?: string; price: string; note?: string }) => (
  <div className="flex items-start justify-between gap-4 py-5 border-b border-[#6B4C2A]/10 last:border-0">
    <div className="flex-1">
      <h4 className="font-serif font-bold text-lg text-[#1A0A00] leading-snug">{name}</h4>
      {desc && <p className="text-[#6B4C2A] text-sm mt-1 leading-relaxed">{desc}</p>}
      {note && <p className="text-[#6B4C2A]/70 text-xs mt-1 italic">{note}</p>}
    </div>
    <span className="text-[#C8392B] font-semibold text-base shrink-0 pt-0.5">{price}</span>
  </div>
);

const SectionHeader = ({ title }: { title: string }) => (
  <h3 className="font-serif text-2xl md:text-3xl text-[#1A0A00] mt-12 mb-2 first:mt-0">{title}</h3>
);

const SidesBox = () => (
  <div className="border border-[#6B4C2A]/30 rounded-xl p-6 mt-8">
    <h4 className="font-serif text-xl text-[#1A0A00] mb-4 text-center tracking-wide uppercase text-sm font-bold">Sides</h4>
    <div className="grid grid-cols-2 gap-x-8 gap-y-1 text-[#6B4C2A] text-sm">
      {['Fries','Green Beans','Roasted Potatoes','Okra','Baked Beans','Salad (House or Spring)'].map(s => (
        <span key={s} className="py-0.5">{s}</span>
      ))}
    </div>
  </div>
);

const BeveragesBox = () => (
  <div className="mt-12 grid md:grid-cols-2 gap-6">
    <div className="bg-[#FFF8EC] rounded-xl p-6">
      <div className="flex justify-between items-baseline mb-4">
        <h4 className="font-serif text-lg font-bold text-[#1A0A00] uppercase tracking-wide text-sm">Beverages</h4>
        <span className="text-[#C8392B] font-semibold">$3.00</span>
      </div>
      <div className="text-[#6B4C2A] text-sm space-y-1">
        {['Sweet Tea','Unsweet Tea','Lemonade','Orange Juice','Coke','Diet Coke','Sprite','Dr. Pepper','Coke Zero','Mello Yello','Strawberry Fanta','Blue Powerade'].map(b => (
          <p key={b}>{b}</p>
        ))}
      </div>
    </div>
    <div className="bg-[#FFF8EC] rounded-xl p-6">
      <div className="flex justify-between items-baseline mb-4">
        <h4 className="font-serif text-lg font-bold text-[#1A0A00] uppercase tracking-wide text-sm">Hot Drinks</h4>
        <span className="text-[#C8392B] font-semibold">$2.00</span>
      </div>
      <div className="text-[#6B4C2A] text-sm space-y-1">
        <p>Coffee</p>
        <p>Hot Chocolate</p>
      </div>
    </div>
  </div>
);

export default function Menu() {
  const [, setLocation] = useLocation();
  const [activeTab, setActiveTab] = useState<TabId>('lunch');

  const tabs: { id: TabId; label: string }[] = [
    { id: 'lunch', label: 'Lunch' },
    { id: 'dinner', label: 'Dinner' },
    { id: 'catering', label: 'Catering' },
  ];

  return (
    <div className="bg-[#F5EFE0] min-h-screen text-[#1A0A00] font-sans selection:bg-[#C8392B] selection:text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 flex flex-col items-center justify-center text-center px-4 sm:px-6 bg-[#1A0A00] text-white">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#6B4C2A] via-[#1A0A00] to-[#1A0A00]" />
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-5xl md:text-6xl lg:text-[80px] leading-tight tracking-wide mb-4"
          >
            Our Menu
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[#F5EFE0] text-lg md:text-xl font-medium tracking-wide mb-8 italic font-serif"
          >
            Made from scratch. Every single day.
          </motion.p>
          <button onClick={() => setLocation('/')} className="text-[#C8392B] hover:text-white transition-colors flex items-center space-x-2 text-sm tracking-widest uppercase font-sans">
            <span>←</span><span>Back to Home</span>
          </button>
        </div>
      </section>

      {/* Tab Bar */}
      <div className="sticky top-0 z-40 bg-[#F5EFE0]/95 backdrop-blur-md border-b border-[#6B4C2A]/20 shadow-sm">
        <div className="container mx-auto px-4 overflow-x-auto scrollbar-hide">
          <div className="flex justify-start md:justify-center gap-1 py-3 whitespace-nowrap min-w-max">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2.5 rounded-full font-sans text-sm tracking-widest uppercase transition-all ${
                  activeTab === tab.id
                    ? 'bg-[#C8392B] text-white shadow-md'
                    : 'text-[#6B4C2A] hover:text-[#C8392B]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Content */}
      <div className="container mx-auto px-4 sm:px-6 py-12 md:py-20 max-w-3xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
          >

            {/* ── LUNCH ── */}
            {activeTab === 'lunch' && (
              <div>
                <p className="font-serif italic text-[#6B4C2A] text-lg mb-8">Mon – Sat · 11:00am – 3:00pm</p>

                {/* Daily Specials Banner */}
                <div className="mb-10 rounded-2xl overflow-hidden border border-[#C8392B]/20 bg-[#1A0A00]">
                  <div className="px-6 pt-6 pb-3">
                    <h3 className="font-serif text-2xl text-white mb-1">Daily Lunch Specials</h3>
                    <p className="text-[#F5EFE0]/50 text-sm italic mb-5">Mon – Fri · 11am – 2pm · Includes drink</p>
                    <div className="grid sm:grid-cols-2 gap-3 mb-4">
                      {[
                        { day: "Mon", item: "Ribeye Sandwich", note: "with Fries & Drink", price: "$11" },
                        { day: "Tue", item: "6oz Hamburger Steak", note: "with Fries & Drink", price: "$9" },
                        { day: "Wed", item: "Chicken Salad or Pimento Cheese", note: "with Crackers & Drink", price: "$7" },
                        { day: "Fri", item: "Chicken Tender Snack", note: "with Fries & Drink", price: "$8" },
                      ].map(s => (
                        <div key={s.day} className="flex items-center gap-3 bg-white/5 rounded-lg px-4 py-3">
                          <span className="bg-[#C8392B] text-white text-xs font-bold tracking-wider px-2 py-1 rounded shrink-0">{s.day}</span>
                          <div className="flex-1 min-w-0">
                            <p className="text-white font-serif font-semibold text-sm leading-tight">{s.item}</p>
                            <p className="text-[#F5EFE0]/40 text-xs">{s.note}</p>
                          </div>
                          <span className="text-[#C8392B] font-bold text-base shrink-0">{s.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <SectionHeader title="Starters" />
                <div>
                  <MenuItem name="Homemade Fried Cheese Balls" price="$7.00" desc="Crispy golden brown cheese balls with a gooey pepper jack cheese center and spicy marinara sauce." />
                  <MenuItem name="Eula Mae's Special" price="$14.00" desc="Conecuh sausage with homemade pimento cheese, wickles pickles. Served with pita bread." />
                  <MenuItem name="Wings" price="$9.00" desc="Our classic crispy fried wings hand tossed. Choice of HOT, MILD, REGULAR BBQ, SWEET HEAT BBQ, LEMON PEPPER, OR GARLIC PARM. Served with ranch or Eula Mae's Sauce." />
                  <MenuItem name="Fried Okra" price="$6.00" desc="Breaded and deep fried until golden brown." />
                  <MenuItem name="Fries" price="$6.00" desc="Golden brown fries. Add lemon pepper or Eula Mae's sprinkles." />
                  <MenuItem name="Pimento Cheese & Crackers" price="$8.00" desc="Homemade pimento cheese served with your choice of crackers or pitta bread." />
                </div>

                <SectionHeader title="Entrees" />
                <div>
                  <MenuItem name="Chicken Tender Dinner" price="$11.00" desc="4 Tenders fried/grilled with a choice of sauce and french fries." />
                  <MenuItem name="Chicken Tender Snack" price="$9.00" desc="2 Tenders fried/grilled with a choice of sauce and french fries." />
                  <MenuItem name="Wing Basket – Fried" price="$12.00" desc="10 Classic crispy fried wings hand tossed. Choice of HOT, MILD, REGULAR BBQ, SWEET HEAT BBQ, LEMON PEPPER, OR GARLIC PARM, OR HONEY MUSTARD." />
                  <MenuItem name="Wing & Chicken Tender Combo" price="$14.00" desc="5 Wings and 3 Tenders with fries and your choice of sauce." />
                  <MenuItem name="Ribeye Sandwich" price="$12.00" desc="Tender marbled ribeye served on a brioche bun." />
                  <MenuItem name="Cheeseburger / Hamburger" price="$12.00" desc="2.3 OZ Handmade patties served with melted American cheese, fresh lettuce, onion, and tomato." note="+ Add homemade pimento cheese $2.00" />
                  <MenuItem name="Hamburger Steak" price="$10 / $13" desc="6 OZ or 8 OZ Ground beef patty served with brown gravy and sautéed onions." />
                </div>

                <BeveragesBox />
              </div>
            )}

            {/* ── DINNER ── */}
            {activeTab === 'dinner' && (
              <div>
                <p className="font-serif italic text-[#6B4C2A] text-lg mb-8">Mon – Sat · 4:30pm – 9:00pm · Entrees served with two sides.</p>

                <SectionHeader title="Starters" />
                <div>
                  <MenuItem name="Homemade Fried Cheese Balls" price="$7.00" desc="Crispy golden brown cheese balls with a gooey pepper jack cheese center and spicy marinara sauce." />
                  <MenuItem name="Eula Mae's Special" price="$14.00" desc="Conecuh sausage with homemade pimento cheese, wickles pickles. Served with pita bread." />
                  <MenuItem name="Wings" price="$9.00" desc="Classic crispy fried wings hand tossed — HOT, MILD, REGULAR BBQ, SWEET HEAT BBQ, LEMON PEPPER, OR GARLIC PARM." />
                  <MenuItem name="Fried Okra" price="$8.00" desc="Breaded and deep fried until golden brown." />
                  <MenuItem name="Fries" price="$6.00" desc="Golden brown fries. Add lemon pepper or Eula Mae's sprinkles." />
                  <MenuItem name="Pimento Cheese & Crackers" price="$8.00" desc="Homemade pimento cheese served with your choice of crackers or pitta bread." />
                </div>

                <SectionHeader title="Salads" />
                <div>
                  <MenuItem name="House Salad" price="$5.00" desc="Lettuce, tomato, onions, and your choice of ranch, thousand island, blue cheese, honey mustard, or raspberry vinaigrette." />
                  <MenuItem name="+ Add Ribeye Steak or Porkchop" price="$7.00" />
                  <MenuItem name="Spring Salad" price="$5.00" desc="Spring mix with strawberries, blackberries, raspberries, and feta cheese with a raspberry vinaigrette." />
                  <MenuItem name="+ Add Fried or Grilled Chicken" price="$5.00" />
                </div>

                <SectionHeader title="Entrees" />
                <p className="text-[#6B4C2A] text-sm italic mb-4">All entrees served with two sides.</p>
                <div>
                  <MenuItem name="Cheeseburger / Hamburger" price="$11.00" desc="2.3 OZ Handmade patties with melted American cheese, fresh lettuce, onion, and tomato." note="+ Add homemade pimento cheese $2.00" />
                  <MenuItem name="Hamburger Steak" price="$10 / $13" desc="6 OZ or 8 OZ Ground beef patty served with brown gravy and sautéed onions." />
                  <MenuItem name="Chicken Tender Dinner" price="$11.00" desc="4 Tenders fried/grilled with a choice of sauce and french fries." />
                  <MenuItem name="Chicken Tender Snack" price="$9.00" desc="2 Tenders fried/grilled with a choice of sauce and french fries." />
                  <MenuItem name="Wing Basket – Fried" price="$12.00" desc="10 Classic crispy fried wings — HOT, MILD, REGULAR BBQ, SWEET HEAT BBQ, LEMON PEPPER, OR GARLIC PARM, OR HONEY MUSTARD." />
                  <MenuItem name="Wing & Chicken Tender Combo" price="$14.00" desc="5 Wings and 3 Tenders with fries and your choice of sauce." />
                  <MenuItem name="Ribeye Sandwich" price="$12.00" desc="Tender marbled ribeye served on a brioche bun." />
                  <MenuItem name="Ribeye Steak" price="$35.00" desc="14–16 OZ Tender handcut aged ribeye." />
                  <MenuItem name="Filet" price="$43.00" desc="7–9 OZ Tender handcut filet." />
                  <MenuItem name="Pork Chops" price="$24.00" desc="Two grilled to perfection boneless pork chops." />
                </div>

                <SidesBox />

                <SectionHeader title="Kids Meals" />
                <p className="text-[#6B4C2A] text-sm italic mb-4">With fries and a drink.</p>
                <div>
                  <MenuItem name="Burger" price="$8.00" desc="With fries and a drink." />
                  <MenuItem name="Chicken Tenders" price="$8.00" desc="2 Fried chicken tenders with fries and a drink." />
                  <MenuItem name="Kids Wing Basket" price="$8.00" desc="4 Fried chicken wings with fries and a drink. Your choice of sauce." />
                  <MenuItem name="Grilled Cheese" price="$7.00" desc="With fries and a drink." />
                </div>

                <SectionHeader title="Desserts" />
                <div>
                  <MenuItem name="Key Lime Pie" price="$5.00" />
                  <MenuItem name="Red Velvet" price="$5.00" />
                  <MenuItem name="Tiramisu" price="$5.00" />
                  <MenuItem name="Peanut Butter Pie" price="$5.00" />
                  <MenuItem name="Dessert Trio" price="$15.00" desc="Choice of any three: key lime, red velvet, or tiramisu." />
                  <MenuItem name="Homemade Fried Apple or Pecan Pies" price="Market" />
                </div>

                <BeveragesBox />
              </div>
            )}

            {/* ── CATERING ── */}
            {activeTab === 'catering' && (
              <div>
                <p className="font-serif italic text-[#6B4C2A] text-lg mb-8">Events, parties, and gatherings — big or small. Call us to plan yours.</p>

                {/* Catering Hero Photo */}
                <div className="mb-10 rounded-2xl overflow-hidden aspect-[16/7] relative">
                  <img
                    src="/gallery/catering.jpg"
                    alt="Eula Mae's Catering spread"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A0A00]/60 via-transparent to-transparent flex items-end p-6">
                    <p className="font-serif text-white text-xl italic">"Where every event feels like family."</p>
                  </div>
                </div>

                <SectionHeader title="Breakfast" />
                <div className="grid sm:grid-cols-2 gap-x-12">
                  <div>
                    {['Meats (Bacon, Sausage, Ribeye, or Bologna)','Eggs','Beignets','Mini Pancakes'].map(item => (
                      <div key={item} className="py-3 border-b border-[#6B4C2A]/10 font-serif text-[#1A0A00]">{item}</div>
                    ))}
                  </div>
                  <div>
                    {['Biscuits & Gravy','Homemade Biscuits'].map(item => (
                      <div key={item} className="py-3 border-b border-[#6B4C2A]/10 font-serif text-[#1A0A00]">{item}</div>
                    ))}
                  </div>
                </div>

                <SectionHeader title="Starters & Stations" />
                <div className="grid sm:grid-cols-2 gap-x-12">
                  <div>
                    {['Homemade Fried Cheese Balls','Eula Mae\'s Special','Wings','Fries','Pimento Cheese & Crackers / Pita Bread'].map(item => (
                      <div key={item} className="py-3 border-b border-[#6B4C2A]/10 font-serif text-[#1A0A00]">{item}</div>
                    ))}
                  </div>
                  <div>
                    {['Fruit Trays','Charcuterie Trays (can be individually wrapped)','Grazing Tables'].map(item => (
                      <div key={item} className="py-3 border-b border-[#6B4C2A]/10 font-serif text-[#1A0A00]">{item}</div>
                    ))}
                  </div>
                </div>

                <SectionHeader title="Salads" />
                <div className="grid sm:grid-cols-2 gap-x-12">
                  <div>
                    {['Spring Salad','House Salad'].map(item => (
                      <div key={item} className="py-3 border-b border-[#6B4C2A]/10 font-serif text-[#1A0A00]">{item}</div>
                    ))}
                  </div>
                </div>

                <SectionHeader title="Entrees" />
                <div className="grid sm:grid-cols-2 gap-x-12">
                  <div>
                    {['Chicken Tenders (Grilled or Fried)','Chicken Alfredo','Wings','Mini Ribeye Sandwiches','Cheeseburgers','Hamburgers','BBQ'].map(item => (
                      <div key={item} className="py-3 border-b border-[#6B4C2A]/10 font-serif text-[#1A0A00]">{item}</div>
                    ))}
                  </div>
                  <div>
                    {['Filets','Ribeyes','Pork Chops','Hamburger Steak','Shrimp Boil'].map(item => (
                      <div key={item} className="py-3 border-b border-[#6B4C2A]/10 font-serif text-[#1A0A00]">{item}</div>
                    ))}
                  </div>
                </div>

                <SectionHeader title="Sides" />
                <div className="grid sm:grid-cols-2 gap-x-12">
                  <div>
                    {['Macaroni & Cheese','Green Beans','Roasted Potatoes','Okra','Fries','Baked Beans'].map(item => (
                      <div key={item} className="py-3 border-b border-[#6B4C2A]/10 font-serif text-[#1A0A00]">{item}</div>
                    ))}
                  </div>
                </div>

                <SectionHeader title="Desserts" />
                <div className="grid sm:grid-cols-2 gap-x-12">
                  <div>
                    {['Key Lime Pie','Red Velvet','Tiramisu','Peanut Butter Pie'].map(item => (
                      <div key={item} className="py-3 border-b border-[#6B4C2A]/10 font-serif text-[#1A0A00]">{item}</div>
                    ))}
                  </div>
                  <div>
                    {['Homemade Fried Apple or Pecan Pies','Homemade Strawberry Cake','Homemade Pound Cake'].map(item => (
                      <div key={item} className="py-3 border-b border-[#6B4C2A]/10 font-serif text-[#1A0A00]">{item}</div>
                    ))}
                  </div>
                </div>

                <div className="mt-12 bg-[#1A0A00] rounded-2xl p-8 text-center text-white">
                  <h3 className="font-serif text-2xl md:text-3xl mb-3">Planning an event?</h3>
                  <p className="text-[#F5EFE0]/80 mb-6 font-serif italic">We'd love to be a part of it. Give us a call to talk through the details.</p>
                  <a href="tel:2563924999" className="inline-block bg-[#C8392B] hover:bg-[#A62F24] text-white rounded-full px-8 py-4 text-lg font-medium tracking-wide transition-all shadow-md hover:shadow-lg">
                    📞 (256) 392-4999
                  </a>
                </div>
              </div>
            )}

          </motion.div>
        </AnimatePresence>

        <div className="text-center pt-20 pb-4">
          <p className="font-serif italic text-[#6B4C2A] text-lg mb-6">Can't decide? Let us surprise you.</p>
          <Button
            onClick={() => {
              setLocation('/');
              setTimeout(() => {
                const el = document.getElementById('reserve');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            size="lg"
            className="bg-[#C8392B] hover:bg-[#A62F24] text-white w-full sm:w-auto rounded-full px-10 py-7 text-lg font-medium tracking-wide transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
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

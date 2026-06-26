import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import OptimizedImage from "@/components/OptimizedImage";
import { useLocation } from "wouter";

const featuredMeals = [
  {
    label: "Steaks & Chops",
    photo: "/menu/steaks.jpg",
  },
  {
    label: "Southern Classics",
    photo: "/menu/classics.jpg",
  },
  {
    label: "Fresh Seafood",
    photo: "/menu/seafood.jpg",
  },
];

export const MenuTeaser = () => {
  const [, setLocation] = useLocation();

  return (
    <section id="menu-teaser" className="py-16 md:py-24 bg-[#F5EFE0]">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#1A0A00] mb-4">
            A Taste of Our Menu
          </h2>
          <p className="font-serif italic text-[#6B4C2A] text-lg md:text-xl mt-4">
            Crafted with care, served with pride.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {featuredMeals.map((meal, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="relative h-48 overflow-hidden rounded-lg shadow-md">
                <OptimizedImage
                  src={meal.photo}
                  alt={meal.label}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <h3 className="text-white font-serif text-2xl">{meal.label}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button
            onClick={() => setLocation("/menu")}
            size="lg"
            className="bg-transparent border-2 border-[#C8392B] text-[#C8392B] hover:bg-[#C8392B] hover:text-white rounded-full px-8 py-3 text-lg font-medium tracking-wide transition-all"
          >
            View Full Menu
          </Button>
        </div>
      </div>
    </section>
  );
};
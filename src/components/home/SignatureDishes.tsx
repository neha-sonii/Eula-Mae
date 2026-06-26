import { motion } from "framer-motion";
import OptimizedImage from "@/components/OptimizedImage";

const dishes = [
  { title: "Fried Cheese Balls", desc: "Golden fried cheese balls with a gooey pepper jack center. Served with our signature marinara.", price: "$7", img: "/dishes/cheese-balls-real.jpg" },
  { title: "Hamburger Steak", desc: "Smothered in rich mushroom onion gravy. Served with two sides.", price: "$10", img: "/dishes/hamburger-steak-real.jpg" },
  { title: "Wings", desc: "Crispy fried wings hand tossed in your choice of sauce — HOT, BBQ, Lemon Pepper, Garlic Parm, and more.", price: "$9", img: "/dishes/wings-real.jpg" },
  { title: "Fresh Biscuits", desc: "Homemade biscuits served warm with house-made jam and apple butter.", price: "$4", img: "/dishes/biscuits-real.jpg" },
  { title: "Spring Salad", desc: "Spring mix with strawberries, blackberries, feta, and raspberry vinaigrette. Add grilled chicken.", price: "$5", img: "/dishes/spring-salad.jpg" },
  { title: "Red Velvet Cake", desc: "Individual round of homemade red velvet with rich cream cheese frosting.", price: "$5", img: "/dishes/red-velvet.jpg" },
  { title: "Chicken Salad & Pimento Cheese", desc: "Homemade chicken salad and pimento cheese served with crackers, tomato, and pickles.", price: "$7", img: "/dishes/chicken-pimento.jpg" },
];

export const SignatureDishes = () => (
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
        {dishes.map((dish, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="bg-[#FFF8EC] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex-none w-[75vw] sm:w-[320px] lg:w-[340px] snap-start flex flex-col"
          >
            <div className="w-full aspect-[4/3] relative overflow-hidden bg-[#6B4C2A]/10">
              <OptimizedImage src={dish.img} alt={dish.title} className="absolute inset-0 w-full h-full object-cover object-center" loading="lazy" />
            </div>
            <div className="p-5 flex flex-col flex-grow">
              <h3 className="font-serif text-xl text-[#1A0A00] mb-2">{dish.title}</h3>
              <p className="text-[#6B4C2A] text-sm flex-grow mb-4">{dish.desc}</p>
              <p className="font-serif text-lg text-[#C8392B]">{dish.price}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
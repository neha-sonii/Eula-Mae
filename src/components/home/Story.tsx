import { motion } from "framer-motion";
import OptimizedImage from "@/components/OptimizedImage";
import signBg from "@assets/sign.png";
import { CardinalDivider } from "./CardinalDivider";

export const Story = () => (
  <section id="story" className="py-16 md:py-24 bg-[#FFF8EC]">
    <div className="container mx-auto max-w-6xl">
      <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative">
              <OptimizedImage
                src={signBg}
                alt="Eula Mae's illustrated sign with cardinals"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#1A0A00] mb-6">
            Our Story
          </h2>
          <div className="space-y-5 text-[#6B4C2A] text-base md:text-lg leading-relaxed">
            <p>
              Eula Mae's is a tribute to my grandmother, a woman whose kitchen was the heart of our home. Her recipes, passed down through generations, were more than just food—they were expressions of love, comfort, and family.
            </p>
            <p>
              Here, we honor her legacy by recreating those cherished dishes, using fresh, locally-sourced ingredients to bring you the authentic taste of southern hospitality. Every meal is a celebration of tradition and the simple joy of sharing good food with good company.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
    <CardinalDivider />
  </section>
);
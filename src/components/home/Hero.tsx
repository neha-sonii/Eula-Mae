import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CardinalDivider } from "./CardinalDivider";
import OptimizedImage from "@/components/OptimizedImage";
import heroBg from "../../../public/hero-background.mp4";


const scrollToReserve = () => {
  document.getElementById("reserve")?.scrollIntoView({ behavior: "smooth" });
};

export const Hero = () => (
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
        Quality Food,<br />Cooked with love.
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
);
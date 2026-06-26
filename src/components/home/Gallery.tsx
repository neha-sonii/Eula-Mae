import { motion } from "framer-motion";
import OptimizedImage from "@/components/OptimizedImage";

const galleryImages = [
  { src: "/gallery/dining.jpg", alt: "Cozy dining area with warm lighting" },
  { src: "/gallery/event-table.jpg", alt: "Beautifully set table for an event" },
  { src: "/gallery/entrance.jpg", alt: "Welcoming entrance of the restaurant" },
  { src: "/gallery/kitchen.jpg", alt: "Action shot of the kitchen staff" },
  { src: "/gallery/beverage.jpg", alt: "Refreshing beverage on a rustic table" },
  { src: "/gallery/panoramic.jpg", alt: "Panoramic view of the restaurant interior" },
  { src: "/gallery/atmosphere.jpg", alt: "Guests enjoying the friendly atmosphere" },
  { src: "/gallery/wall-decor.jpg", alt: "Artistic wall decor" },
  { src: "/gallery/event-room.jpg", alt: "Spacious room set up for an event" },
  { src: "/gallery/private-dining.jpg", alt: "Intimate private dining area" },
];

export const Gallery = () => (
  <section id="gallery" className="py-16 md:py-24 bg-[#FFF8EC]">
    <div className="container mx-auto max-w-7xl px-4 sm:px-6">
      <div className="text-center mb-16">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#1A0A00] mb-4">
          A Glimpse Inside
        </h2>
        <p className="font-serif italic text-[#6B4C2A] text-lg md:text-xl mt-4">
          Where every corner tells a story.
        </p>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="columns-2 md:columns-3 lg:columns-4 gap-4 lg:gap-6 space-y-4 lg:space-y-6"
      >
        {galleryImages.map((img, i) => (
          <div key={i} className="break-inside-avoid relative rounded-xl overflow-hidden group">
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 duration-300" />
            <OptimizedImage
              src={img.src}
              alt={img.alt}
              className="w-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SiInstagram, SiFacebook } from "react-icons/si";
import { CardinalDivider } from "./CardinalDivider";

export const Reserve = () => (
  <section id="reserve" className="py-16 md:py-24 bg-[#1A0A00] text-white">
    <div className="container mx-auto max-w-4xl px-4 sm:px-6">
      <div className="text-center mb-12">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-4">
          Reserve Your Table
        </h2>
        <p className="font-serif italic text-[#F5EFE0]/70 text-lg md:text-xl mt-4">
          Join us for an unforgettable dining experience.
        </p>
      </div>

      <motion.form
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-[#F5EFE0]/5 p-8 rounded-xl border border-white/10 max-w-2xl mx-auto"
      >
        <div className="grid sm:grid-cols-2 gap-6 mb-6">
          <div>
            <Label htmlFor="name" className="text-white/80 mb-2 block">Full Name</Label>
            <Input id="name" placeholder="John Doe" className="bg-white/10 border-white/20 text-white" />
          </div>
          <div>
            <Label htmlFor="phone" className="text-white/80 mb-2 block">Phone</Label>
            <Input id="phone" type="tel" placeholder="(123) 456-7890" className="bg-white/10 border-white/20 text-white" />
          </div>
          <div>
            <Label htmlFor="date" className="text-white/80 mb-2 block">Date</Label>
            <Input id="date" type="date" className="bg-white/10 border-white/20 text-white" />
          </div>
          <div>
            <Label htmlFor="time" className="text-white/80 mb-2 block">Time</Label>
            <Input id="time" type="time" className="bg-white/10 border-white/20 text-white" />
          </div>
          <div className="sm:col-span-2">
            <Label htmlFor="guests" className="text-white/80 mb-2 block">Number of Guests</Label>
            <Input id="guests" type="number" placeholder="2" className="bg-white/10 border-white/20 text-white" />
          </div>
        </div>
        <Button
          type="submit"
          size="lg"
          className="w-full bg-[#C8392B] hover:bg-[#A62F24] text-white rounded-full py-3 text-lg font-medium tracking-wide transition-all"
        >
          Book Reservation
        </Button>
      </motion.form>

      <div className="text-center mt-16">
        <p className="text-lg text-white/90 mb-2">Or call us at:</p>
        <a href="tel:123-456-7890" className="text-2xl font-bold text-[#E6A822] hover:underline">
          (123) 456-7890
        </a>
        <CardinalDivider light />
        <div className="flex justify-center space-x-6">
          <a href="#" className="text-white/70 hover:text-white transition-colors">
            <SiInstagram size={24} />
          </a>
          <a href="#" className="text-white/70 hover:text-white transition-colors">
            <SiFacebook size={24} />
          </a>
        </div>
      </div>
    </div>
  </section>
);
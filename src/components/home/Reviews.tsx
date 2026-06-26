import { useState } from "react";
import { motion } from "framer-motion";
import OptimizedImage from "@/components/OptimizedImage";
import { FaintCardinal } from "./FaintCardinal";

const MAX_REVIEW_WORDS = 40;

const reviews = [
    { name: "Reign", text: "This place is a hidden gem tucked away in Alex City.  They are located inside 'The Square', a walk through area of boutique stores with an ambiance reminiscent of New Orleans.  The restaurant is tucked away inside the very cool ornate space. The food is delicious.  Southern cuisine done right.  The cheese balls were wonderful with the spicy marinara and ranch.  The ribeye sandwich was also very good.  A well seasoned and welled cooked steak with mushrooms and Swiss cheese and a brioche bun.  The homemade mini biscuits were a nice surprise.  I thoroughly enjoyed the apple butter, apple jelly and cinnamon butter. The service was great at this family run business.  The chef Gary came out to check on us and offered some warm conversation.  Our sever, his daughter, was very attentive.  It was a pleasant positive experience across the board.  I will be back again for sure.", img: "/gallery/dining.jpg" },
    { name: "Travis Chiasson", text: "My wife and I eat here twice during our stay in Alexander City.  The atmosphere was cozy and homey.  The owner, his wife and staff were very friendly and accommodating. The food was delicious.  The first night we had the Eula Mae special for an appetizer which was different and delicious.  Our entrees were grilled pork chops and chicken.  We returned the following night and I had the filet mignon and my wife had a cheeseburger. We had the cheescake for dessert and it was served in a mason chilled jar.  Each night they also brought out fresh hot homemade mini biscuits with homemade apple butter, strawberry and peach jalapeño preserves. The atmosphere, service and food quality were exceptional and we will be back again!", img: "/gallery/event-table.jpg" },
    { name: "Emily Oliver", text: "Me and my fiance heard about this place and went a tried it out! And it became our new favorite spot!! The service was wonderful! They were extremely friendly and made it feel like home, the food was great and the atmosphere of the restaurant was very beautiful. We will definitely be telling family and friends about this place and going back!", img: "/gallery/entrance.jpg" },
    { name: "John Phillips", text: "What a treat we had at Eula Mae’s this evening! From the quaint surroundings to the friendly smiles that took excellent care of us, it was a wonderful dining experience! The spring salad was fresh and delicious as was the hamburger steak dinner and hand breaded chicken fingers  with okra. Oh and the tiny biscuits with apple butter and homemade preserves were a perfect way to begin our meal.  This is a special place filled with love and care, not a chain restaraunt filled with pre-made processed food.  We will be back!!! Thank you!", img: "/gallery/kitchen.jpg" },
    { name: "Jayelle Kaye", text: "I have dined here a lot since their opening. It is mine and my kids favorite place to eat!! The wings are cooked perfect every time.  The spring salad is refreshing. They have cool bottles of water they bring to the table too. There's so much good i can say about here. They are very attentive as well when it comes to waiting on you!!", img: "/gallery/beverage.jpg" },
    { name: "Clint Chappell", text: "This place was absolutely awesome! They accommodated us on short notice for a 40-person Christmas party, and everything turned out fantastic. The food, service, and atmosphere were all top-notch. Huge thank you to the staff and owners for such an amazing experience.", img: "/gallery/panoramic.jpg" },
];

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

export const Reviews = () => {
  const [expandedReviews, setExpandedReviews] = useState<Record<number, boolean>>({});

  const toggleReview = (index: number) => {
    setExpandedReviews(prev => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <section id="reviews" className="py-16 md:py-24 bg-[#F5EFE0] relative overflow-hidden">
      <FaintCardinal />
      <div className="container mx-auto max-w-6xl relative">
        <div className="text-center mb-16 px-4 sm:px-6">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#1A0A00] mb-4">
            What Folks Are Saying
          </h2>
          <p className="font-serif italic text-[#6B4C2A] text-lg md:text-xl mt-4">
            Straight from the heart of our beloved customers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#FFF8EC] rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col"
            >
              <div className="flex items-start mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-[#C8392B]/50">
                  <OptimizedImage src={review.img} alt={review.name} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="flex-grow">
                  <h3 className="font-serif text-xl text-[#1A0A00]">{review.name}</h3>
                  <div className="flex text-[#E6A822]">
                    {'★'.repeat(5)}
                  </div>
                </div>
              </div>
              <ReviewText
                text={review.text}
                expanded={!!expandedReviews[i]}
                onToggle={() => toggleReview(i)}
                maxWords={MAX_REVIEW_WORDS}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
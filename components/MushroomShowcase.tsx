"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const mushrooms = [
  {
    name: "Pleurote Gris",
    image: "https://images.unsplash.com/photo-1585868884365-3e244a5effc3?w=600&q=80",
    description: "Texture délicate et goût subtil, parfait pour toutes vos recettes.",
  },
  {
    name: "Crinière de Lion",
    image: "https://images.unsplash.com/photo-1617214616100-3c2a0d8ca6c1?w=600&q=80",
    description: "Champignon médicinal reconnu pour ses bienfaits exceptionnels.",
  },
  {
    name: "Pleurote du Panicaut",
    image: "https://images.unsplash.com/photo-1580013759032-c96505e24c1f?w=600&q=80",
    description: "Chair ferme et charnue, idéal pour remplacer la viande.",
  },
  {
    name: "Pleurote Jaune",
    image: "https://images.unsplash.com/photo-1614888545423-f9ca9901e8e6?w=600&q=80",
    description: "Couleur éclatante et saveur légèrement sucrée unique.",
  },
];

export default function MushroomShowcase() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-earth-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-earth-darkgreen mb-4">
            Nos Champignons
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Découvrez notre sélection de champignons biologiques cultivés localement avec soin et passion.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {mushrooms.map((mushroom, index) => (
            <motion.div
              key={mushroom.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={mushroom.image}
                    alt={mushroom.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-2xl font-bold text-earth-darkgreen mb-3">
                    {mushroom.name}
                  </h3>
                  <p className="text-gray-700 mb-4">
                    {mushroom.description}
                  </p>
                  <Link
                    href="/champignons"
                    className="inline-flex items-center text-primary font-bold hover:text-primary/80 transition-colors duration-300"
                  >
                    En savoir plus
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/champignons"
            className="inline-block bg-primary hover:bg-primary/90 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Voir Tous Nos Champignons
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

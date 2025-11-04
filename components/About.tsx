"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-96 md:h-[500px] rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1565192332385-639eb4fd8e53?w=800&q=80"
              alt="À propos de Champisphère"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-earth-darkgreen">
              Agriculture Durable à Forbach
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Champisphère est une ferme urbaine de champignons biologiques implantée au cœur de Forbach.
              Notre mission est de produire des champignons de qualité exceptionnelle tout en respectant
              l'environnement et les cycles naturels.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Nous cultivons nos champignons sans pesticides ni produits chimiques, dans des conditions
              optimales qui respectent leur développement naturel. Chaque champignon est récolté à la main
              au moment idéal pour garantir fraîcheur et saveur.
            </p>

            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-gray-600">Bio</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">Local</div>
                <div className="text-sm text-gray-600">Production</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">4</div>
                <div className="text-sm text-gray-600">Variétés</div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="pt-4"
            >
              <a
                href="/a-propos"
                className="inline-block bg-earth-darkgreen hover:bg-earth-darkgreen/90 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                En Savoir Plus
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

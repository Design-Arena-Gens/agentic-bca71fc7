"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-earth-darkgreen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-white"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Prêt à Découvrir Nos Champignons ?
          </h2>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto opacity-90">
            Rejoignez-nous dans notre passion pour les champignons biologiques.
            Commandez dès maintenant ou contactez-nous pour plus d'informations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/champignons"
              className="inline-block bg-white text-primary hover:bg-gray-100 font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              Voir Nos Champignons
            </Link>
            <Link
              href="/contact"
              className="inline-block bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              Nous Contacter
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

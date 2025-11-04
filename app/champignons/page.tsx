import Image from "next/image";
import Link from "next/link";

const mushrooms = [
  {
    id: "pleurote",
    name: "Pleurote Gris",
    scientificName: "Pleurotus ostreatus",
    image: "https://images.unsplash.com/photo-1585868884365-3e244a5effc3?w=800&q=80",
    description: "Le pleurote gris est l'un des champignons les plus appréciés pour sa texture délicate et son goût subtil. Riche en protéines et en fibres, il s'adapte parfaitement à de nombreuses préparations culinaires.",
    benefits: [
      "Riche en protéines végétales",
      "Source de vitamines B",
      "Faible en calories",
      "Texture tendre et goût délicat"
    ],
    uses: "Poêlé, en sauce, dans les risottos, les omelettes"
  },
  {
    id: "criniere-lion",
    name: "Crinière de Lion",
    scientificName: "Hericium erinaceus",
    image: "https://images.unsplash.com/photo-1617214616100-3c2a0d8ca6c1?w=800&q=80",
    description: "La crinière de lion est un champignon médicinal reconnu pour ses propriétés neuroprotectrices. Son apparence unique et son goût rappelant le homard en font un produit d'exception.",
    benefits: [
      "Soutient la santé cognitive",
      "Propriétés anti-inflammatoires",
      "Renforce le système immunitaire",
      "Goût unique rappelant les fruits de mer"
    ],
    uses: "Poêlé, en substitut de fruits de mer, en bouillon"
  },
  {
    id: "pleurote-panicaut",
    name: "Pleurote du Panicaut",
    scientificName: "Pleurotus eryngii",
    image: "https://images.unsplash.com/photo-1580013759032-c96505e24c1f?w=800&q=80",
    description: "Le pleurote du panicaut, également connu sous le nom de King Oyster, possède une chair ferme et charnue. C'est le plus gros des pleurotes avec un pied épais et savoureux.",
    benefits: [
      "Texture charnue exceptionnelle",
      "Riche en antioxydants",
      "Source de potassium",
      "Excellente source de protéines"
    ],
    uses: "Grillé, en steaks végétaux, rôti au four"
  },
  {
    id: "pleurote-jaune",
    name: "Pleurote Jaune",
    scientificName: "Pleurotus citrinopileatus",
    image: "https://images.unsplash.com/photo-1614888545423-f9ca9901e8e6?w=800&q=80",
    description: "Le pleurote jaune se distingue par sa couleur éclatante et son goût légèrement sucré. Plus rare que ses cousins, il apporte une touche de couleur et d'originalité à vos plats.",
    benefits: [
      "Couleur vibrante pour présentation",
      "Saveur délicate et sucrée",
      "Riche en vitamines",
      "Texture tendre"
    ],
    uses: "Poêlé, en garniture, dans les salades"
  }
];

export default function ChampignonsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-earth-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-earth-darkgreen mb-6">
            Nos Champignons
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Découvrez notre sélection de champignons biologiques cultivés avec soin à Forbach.
            Chaque variété est choisie pour ses qualités gustatives et nutritionnelles exceptionnelles.
          </p>
        </div>

        <div className="space-y-20">
          {mushrooms.map((mushroom, index) => (
            <div
              key={mushroom.id}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center bg-white rounded-3xl shadow-xl overflow-hidden p-8 md:p-12 hover:shadow-2xl transition-shadow duration-300`}
            >
              <div className="w-full md:w-1/2 relative h-80 rounded-2xl overflow-hidden">
                <Image
                  src={mushroom.image}
                  alt={mushroom.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="w-full md:w-1/2 space-y-6">
                <div>
                  <h2 className="font-serif text-4xl font-bold text-earth-darkgreen mb-2">
                    {mushroom.name}
                  </h2>
                  <p className="text-sm italic text-gray-500">{mushroom.scientificName}</p>
                </div>

                <p className="text-lg text-gray-700 leading-relaxed">
                  {mushroom.description}
                </p>

                <div>
                  <h3 className="font-serif text-2xl font-bold text-primary mb-3">
                    Bienfaits
                  </h3>
                  <ul className="space-y-2">
                    {mushroom.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg className="w-6 h-6 text-primary mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-serif text-xl font-bold text-earth-darkgreen mb-2">
                    Utilisations culinaires
                  </h3>
                  <p className="text-gray-700">{mushroom.uses}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center bg-primary/10 rounded-3xl p-12">
          <h2 className="font-serif text-3xl font-bold text-earth-darkgreen mb-4">
            Intéressé par nos champignons ?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Contactez-nous pour passer commande ou obtenir plus d'informations.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary hover:bg-primary/90 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Nous Contacter
          </Link>
        </div>
      </div>
    </div>
  );
}

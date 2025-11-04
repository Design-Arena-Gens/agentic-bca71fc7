import Image from "next/image";

export default function AProposPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-earth-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-earth-darkgreen mb-6">
            À Propos de Champisphère
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Une passion pour la culture de champignons biologiques au cœur de Forbach
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1565192332385-639eb4fd8e53?w=800&q=80"
              alt="Ferme de champignons"
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-6">
            <h2 className="font-serif text-4xl font-bold text-earth-darkgreen">
              Notre Histoire
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Champisphère est née d'une passion pour l'agriculture durable et la mycologie.
              Implantée à Forbach, notre ferme urbaine de champignons s'est donnée pour mission
              de produire des champignons biologiques de qualité exceptionnelle tout en respectant
              l'environnement et les cycles naturels.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Nous croyons fermement que l'alimentation de demain passe par des productions locales,
              responsables et nutritives. Nos champignons sont cultivés sans pesticides ni produits
              chimiques, dans des conditions optimales qui respectent leur développement naturel.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-12 mb-20">
          <h2 className="font-serif text-4xl font-bold text-earth-darkgreen text-center mb-12">
            Nos Valeurs
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl font-bold text-earth-darkgreen">
                Durabilité
              </h3>
              <p className="text-gray-700">
                Production respectueuse de l'environnement avec des pratiques agricoles durables
                et un circuit court de distribution.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl font-bold text-earth-darkgreen">
                Qualité
              </h3>
              <p className="text-gray-700">
                Sélection rigoureuse des souches, contrôle constant des conditions de culture
                pour garantir des champignons frais et savoureux.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl font-bold text-earth-darkgreen">
                Local
              </h3>
              <p className="text-gray-700">
                Ancrage fort dans le territoire de Forbach, création d'emplois locaux
                et contribution à l'économie régionale.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 order-2 md:order-1">
            <h2 className="font-serif text-4xl font-bold text-earth-darkgreen">
              Notre Engagement Bio
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Tous nos champignons sont certifiés biologiques. Nous n'utilisons aucun pesticide,
              fongicide ou engrais chimique. Notre substrat de culture est composé de matières
              organiques locales et recyclées.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Cette approche garantit non seulement des champignons plus sains et plus savoureux,
              mais contribue également à la préservation de notre écosystème et à la réduction
              de notre empreinte carbone.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="bg-primary/20 px-6 py-3 rounded-full">
                <span className="font-bold text-earth-darkgreen">100% Bio</span>
              </div>
              <div className="bg-primary/20 px-6 py-3 rounded-full">
                <span className="font-bold text-earth-darkgreen">Local</span>
              </div>
              <div className="bg-primary/20 px-6 py-3 rounded-full">
                <span className="font-bold text-earth-darkgreen">Sans pesticides</span>
              </div>
            </div>
          </div>

          <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl order-1 md:order-2">
            <Image
              src="https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=800&q=80"
              alt="Culture biologique"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

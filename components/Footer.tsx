import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-earth-darkgreen text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C10.896 2 10 2.896 10 4C10 4.738 10.402 5.376 11 5.723V7C11 7.552 11.448 8 12 8C12.552 8 13 7.552 13 7V5.723C13.598 5.376 14 4.738 14 4C14 2.896 13.104 2 12 2ZM7 8C5.343 8 4 9.343 4 11C4 12.302 4.839 13.402 6 13.816V15C6 16.657 7.343 18 9 18H15C16.657 18 18 16.657 18 15V13.816C19.161 13.402 20 12.302 20 11C20 9.343 18.657 8 17 8H16C15.448 8 15 8.448 15 9C15 9.552 15.448 10 16 10H17C17.552 10 18 10.448 18 11C18 11.552 17.552 12 17 12C16.448 12 16 12.448 16 13V15C16 15.552 15.552 16 15 16H9C8.448 16 8 15.552 8 15V13C8 12.448 7.552 12 7 12C6.448 12 6 11.552 6 11C6 10.448 6.448 10 7 10H8C8.552 10 9 9.552 9 9C9 8.448 8.552 8 8 8H7Z"/>
                </svg>
              </div>
              <span className="font-serif text-xl font-bold">Champisphère</span>
            </div>
            <p className="text-sm text-gray-300">
              Champignons biologiques cultivés avec passion à Forbach, France.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-lg font-bold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-primary transition-colors duration-300">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/champignons" className="text-gray-300 hover:text-primary transition-colors duration-300">
                  Nos Champignons
                </Link>
              </li>
              <li>
                <Link href="/a-propos" className="text-gray-300 hover:text-primary transition-colors duration-300">
                  À Propos
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-primary transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-bold mb-4">Nos Champignons</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Pleurote Gris</li>
              <li>Crinière de Lion</li>
              <li>Pleurote du Panicaut</li>
              <li>Pleurote Jaune</li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Forbach, France 57600</li>
              <li>contact@champisphere.fr</li>
              <li>+33 (0)3 XX XX XX XX</li>
            </ul>
            <div className="flex space-x-3 mt-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-gray-300">
          <p>&copy; {currentYear} Champisphère. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}

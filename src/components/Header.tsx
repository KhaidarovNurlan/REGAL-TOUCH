import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900 text-white backdrop-blur-sm shadow-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br rounded flex items-center justify-center">
              <img
                src="../../logo.png"
                alt="REGAL TOUCH logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight">REGAL TOUCH</h1>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="hover:text-amber-600 transition-colors font-medium"
            >
              О компании
            </button>
            <button
              onClick={() => scrollToSection("products")}
              className="hover:text-amber-600 transition-colors font-medium"
            >
              Продукция
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="hover:text-amber-600 transition-colors font-medium"
            >
              Цены
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="hover:text-amber-600 transition-colors font-medium"
            >
              Контакты
            </button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left text-gray-700 hover:text-amber-600 transition-colors font-medium"
            >
              О компании
            </button>
            <button
              onClick={() => scrollToSection("products")}
              className="block w-full text-left text-gray-700 hover:text-amber-600 transition-colors font-medium"
            >
              Продукция
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="block w-full text-left text-gray-700 hover:text-amber-600 transition-colors font-medium"
            >
              Цены
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left text-gray-700 hover:text-amber-600 transition-colors font-medium"
            >
              Контакты
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}

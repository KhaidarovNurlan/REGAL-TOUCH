export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br rounded flex items-center justify-center">
                <img
                  src="../../logo.png"
                  alt="REGAL TOUCH logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold">REGAL TOUCH</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Инновационная качественная торговая марка строительной и
              дизайнерской краски из Казахстана.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Продукция</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#products"
                  className="text-gray-400 hover:text-amber-500 transition-colors"
                >
                  Интерьерная краска
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="text-gray-400 hover:text-amber-500 transition-colors"
                >
                  Интерьерная моющая
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="text-gray-400 hover:text-amber-500 transition-colors"
                >
                  Фасадная краска
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Компания</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-amber-500 transition-colors"
                >
                  О нас
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-gray-400 hover:text-amber-500 transition-colors"
                >
                  Цены
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-amber-500 transition-colors"
                >
                  Контакты
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 REGAL TOUCH. Все права защищены.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-gray-400 text-sm">Сертификация:</span>
              <span className="bg-amber-500/20 text-amber-500 px-3 py-1 rounded-full text-sm font-medium">
                ISO 9001:2008
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

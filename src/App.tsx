import { Menu, X, Award, Droplet, Shield, Minimize2, Sun, Flame, Home, Sparkles, Building2, Check, MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";

function App() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const products = [
    {
      icon: Home,
      title: "Интерьерная краска",
      sizes: ["9л (14кг)", "18л (20кг)"],
      description1:
        "Высококачественная, экономичная водно-дисперсионная акриловая краска, без запаха, не содержащая органических растворителей, для внутренней отделки. Колеруется по системам «Monicolor», «NCS», «RAL». Высокоукрывистая.",
      description2:
        "Краска по бетонным, оштукатуренным, зашпатлеванным, кирпичным, древесноволокнистым и древесно-стружечным поверхностям, гипсокартону и стеклообоям. Супер моющаяся.",
      features: [
        "18 л — в среднем до 200 м² при нанесении в 1 слой",
        "9 л — в среднем до 90 м²",
        "Полное высыхание: ~24 часа",
        "Более 7000 оттенков по системам RAL, NCS, PANTONE",
        "Возможность индивидуального подбора цвета",
      ],
      application:
        "Краска по бетонным, оштукатуренным, зашпатлеванным, кирпичным, древесноволокнистым и древесно-стружечным поверхностям, гипсокартону и стеклообоям. Супер моющаяся. Образует прочное матовое покрытие, которое не препятствует газообмену, позволяя стенам «дышать», обладающее повышенной стойкостью к мытью и воздействию слабых щелочей и растворителей. Рекомендуется к применению в помещениях с высокими эксплуатационными требованиями к стойкости покрытия. С хорошей укрывистной способностью, краска может наноситься в один слой. Благодаря высокой экологичности, воздухопроницаемости, допускается использование краски для внутренней отделки детских учреждений, предприятий общественного питания, больниц.",
      volume: "20кг",
      priceWholesale: "200 тг/кг",
      priceRetail: "300 тг/кг",
    },
    {
      icon: Sparkles,
      title: "Моющая краска",
      sizes: ["9л (14кг)", "18л (20кг)"],
      description1:
        "Высококачественная, экономичная водно-дисперсионная акриловая краска, почти без запаха, не содержащая органических растворителей, для внутренней отделки. Колеруется по системам «Monicolor», «NCS», «RAL». Высокоукрывистая.",
      description2:
        "Краска по бетонным, оштукатуренным, зашпатлеванным, кирпичным, древесноволокнистым и древесно-стружечным поверхностям, гипсокартону и стеклообоям. Супер моющаяся.",
      features: [
        "18 л — в среднем до 200 м² при нанесении в 1 слой",
        "9 л — в среднем до 90 м²",
        "Полное высыхание: ~24 часа",
        "Более 7000 оттенков по системам RAL, NCS, PANTONE",
        "Возможность индивидуального подбора цвета",
        "Класс стойкости к влажной уборке: 1 (высший класс по EN13300)",
        "Не оставляет следов после чистки",
      ],
      application:
        "Краска по бетонным, оштукатуренным, зашпатлеванным, кирпичным, древесноволокнистым и древесно-стружечным поверхностям, гипсокартону и стеклообоям. Супер моющаяся. Образует прочное матовое покрытие, которое не препятствует газообмену, позволяя стенам «дышать», обладающее повышенной стойкостью к мытью и воздействию слабых щелочей и растворителей. Рекомендуется к применению в помещениях с высокими эксплуатационными требованиями к стойкости покрытия. С хорошей укрывистной способностью, краска может наноситься в один слой. Благодаря высокой экологичности, воздухопроницаемости, допускается использование краски для внутренней отделки детских учреждений, предприятий общественного питания и больниц.",
      volume: "20кг",
      priceWholesale: "700 тг/кг",
      priceRetail: "900 тг/кг",
    },
    {
      icon: Building2,
      title: "Фасадная краска",
      sizes: ["9л (14кг)", "18л (20кг)"],
      description1:
        "Водно-дисперсионная акриловая краска для наружной и внутренней отделки. Не содержит органических растворителей, матовая, устойчивая к погоде и свету. Белый или цветной по каталогу (более 7.000 цветов и оттенков). Высокоукрывистая.",
      description2:
        "Краска для окраски фасадов зданий по кирпичным, бетонным, оштукатуренным, деревянным и другим пористым поверхностям (кроме полов), по загрунтованной поверхности металла.",
      features: [
        "18 л — в среднем до 180 м² при нанесении в 1 слой",
        "9 л — в среднем до 90 м²",
        "Полное высыхание: ~24 часа",
        "Более 7000 оттенков по системам RAL, NCS, PANTONE",
        "Возможность индивидуального подбора цвета",
      ],
      application:
        "Фасадная краска предназначена для окраски фасадов жилых домов, торговых, производственных и складских зданий по кирпичным, бетонным, оштукатуренным, деревянным и другим пористым поверхностям (кроме полов), по загрунтованной поверхности металла. С хорошей укрывистной способностью, краска может наноситься в один слой. При нанесении образует матовое покрытие, обладающее хорошей атмосферо- и морозостойкостью.",
      volume: "20кг",
      priceWholesale: "1000 тг/кг",
      priceRetail: "1200 тг/кг",
    },
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900 text-white backdrop-blur-sm shadow-sm">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br rounded flex items-center justify-center">
                <img
                  src="/logo.png"
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
                className="block w-full text-left hover:text-amber-600 transition-colors font-medium"
              >
                О компании
              </button>
              <button
                onClick={() => scrollToSection("products")}
                className="block w-full text-left hover:text-amber-600 transition-colors font-medium"
              >
                Продукция
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className="block w-full text-left hover:text-amber-600 transition-colors font-medium"
              >
                Цены
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left hover:text-amber-600 transition-colors font-medium"
              >
                Контакты
              </button>
            </div>
          )}
        </nav>
      </header>

      {/* Hero */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-amber-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-12 md:mb-0">
              <div className="inline-flex items-center space-x-2 bg-amber-100 px-4 py-2 rounded-full mb-6">
                <Award size={20} className="text-amber-600" />
                <span className="text-amber-800 font-medium">
                  Премиум качество
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Инновационные
                <br />
                <span className="text-amber-600">краски</span> для Вас
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Высококачественная строительная и дизайнерская краска из
                Казахстана. Долговечность, насыщенные цвета и экологичность.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() =>
                    document
                      .getElementById("products")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="px-8 py-4 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-all hover:shadow-lg font-medium"
                >
                  Наша продукция
                </button>
                <button
                  onClick={() =>
                    document
                      .getElementById("about")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="px-8 py-4 bg-white text-gray-800 rounded-lg hover:bg-gray-50 transition-all border-2 border-gray-200 font-medium"
                >
                  Узнать больше
                </button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full opacity-20 absolute -top-10 -left-10"></div>
                <div className="relative bg-white p-8 rounded-2xl shadow-2xl">
                  <div className="w-64 h-64 rounded-xl flex items-center justify-center">
                    <img
                      src="/paint_bucket.png"
                      alt="REGAL TOUCH paint"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-amber-500 text-white px-6 py-3 rounded-lg shadow-lg">
                    <p className="text-sm font-medium">ISO 9001:2008</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              О компании
            </h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              <span className="font-bold text-amber-600">REGAL TOUCH</span> — это
              инновационная, качественная торговая марка для сегмента строительной
              и дизайнерской краски. Вся наша продукция изготавливается только из
              высококачественного сырья и компонентов, поставляемых крупными
              заводами Казахстана.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Бренд REGAL TOUCH постоянно совершенствуется и обновляется. Прежде
              чем приступить к разработке новых рецептур и технологий, наши
              специалисты и маркетологи тщательно изучают потребности современного
              рынка строительной и дизайнерской краски, чтобы предложить лучшие
              решения для профессионалов и частных пользователей.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Вся продукция компании специально разработана для использования на
              казахстанском строительном рынке. Ассортимент строительных и
              дизайнерских красок учитывает новейшие научные достижения мировых
              производителей химии, обеспечивая долговечность, насыщенные цвета и
              устойчивость к внешним воздействиям. Краски устойчивы к износу,
              климатическим нагрузкам и безопасны для здоровья. Вся деятельность
              нашей компании соответствует высоким санитарно-эпидемиологическим
              требованиям, а также мировым стандартам ISO 9001-2011 (ISO
              9001:2008).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { icon: Droplet, title: "Супергидрофобность" },
              { icon: Shield, title: "Антибактериальный эффект" },
              { icon: Minimize2, title: "Нанотехнологии" },
              { icon: Sun, title: "UV-стойкость" },
              { icon: Flame, title: "Пожаробезопасность" },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-amber-50 p-8 rounded-xl hover:shadow-lg transition-all border border-gray-100"
              >
                <div className="w-20 h-20 bg-amber-500 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon size={38} className="text-white" />
                </div>
                <h3 className="text-sm font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Products */}
      <section
        id="products"
        className="py-20 bg-gradient-to-br from-gray-50 to-amber-50"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Наша продукция
            </h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden"
              >
                <div className="bg-gradient-to-br from-amber-500 to-amber-600 p-8 text-white">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4">
                    <product.icon size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{product.title}</h3>
                  <div className="flex gap-3">
                    {product.sizes.map((size, idx) => (
                      <span
                        key={idx}
                        className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {size}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-8">
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {product.description1}
                  </p>

                  <h4 className="font-bold text-gray-900 mb-3">Свойства:</h4>
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-600 text-sm leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="bg-amber-50 p-4 rounded-lg border border-amber-100">
                    <h4 className="font-bold text-gray-900 mb-2 text-sm">
                      Область применения:
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {product.application}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Pricing */}
      <section id="pricing" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Прайс-лист
            </h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {products.map((item, index) => (
              <div
                key={index}
                className={`rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all : ''
                }`}
              >
                <div
                  className={`bg-gradient-to-br from-amber-500 to-amber-600 p-8 text-white`}
                >
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-sm opacity-90">Объем:</span>
                    <span className="text-xl font-bold">{item.volume}</span>
                  </div>
                </div>

                <div className="p-8 bg-white">
                  <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                    {item.description2}
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <span className="text-sm text-gray-600 block mb-1">
                          Оптом
                        </span>
                        <span className="text-2xl font-bold text-gray-900">
                          {item.priceWholesale}
                        </span>
                      </div>
                      <Check className="text-green-500" size={24} />
                    </div>

                    <div className="flex items-center justify-between p-4 bg-amber-50 rounded-lg border border-amber-200">
                      <div>
                        <span className="text-sm text-gray-600 block mb-1">
                          Розница
                        </span>
                        <span className="text-2xl font-bold text-gray-900">
                          {item.priceRetail}
                        </span>
                      </div>
                      <Check className="text-amber-500" size={24} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 max-w-3xl mx-auto">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 p-6 rounded-r-lg">
              <p className="text-xl text-gray-700 font-medium text-center">
                Цена колерованной краски зависит от кода цвета!
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-br from-gray-50 to-amber-50"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Контакты
            </h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-4"></div>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Наши контакты
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-amber-600" size={24} />
                    </div>
                    <div className="ml-4">
                      <h4 className="font-bold text-gray-900 mb-1">Адрес</h4>
                      <p className="text-gray-600">...</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="text-amber-600" size={24} />
                    </div>
                    <div className="ml-4">
                      <h4 className="font-bold text-gray-900 mb-1">Телефон</h4>
                      <p className="text-gray-600">...</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="text-amber-600" size={24} />
                    </div>
                    <div className="ml-4">
                      <h4 className="font-bold text-gray-900 mb-1">Email</h4>
                      <p className="text-gray-600">...</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="text-amber-600" size={24} />
                    </div>
                    <div className="ml-4">
                      <h4 className="font-bold text-gray-900 mb-1">
                        Режим работы
                      </h4>
                      <p className="text-gray-600">...</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Напишите нам
                </h3>

                <form className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Ваше имя
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                      placeholder="Иван Иванов"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                      placeholder="ivan@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Телефон
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                      placeholder="+7 (XXX) XXX-XX-XX"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Сообщение
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all resize-none"
                      placeholder="Ваше сообщение..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-lg font-medium hover:from-amber-600 hover:to-amber-700 transition-all shadow-md hover:shadow-lg"
                  >
                    Отправить сообщение
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex justify-center">
            <p className="text-gray-400 text-sm text-center">
              © 2025 REGAL TOUCH. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

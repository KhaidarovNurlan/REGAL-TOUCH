import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  return (
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
                    <p className="text-gray-600">Казахстан</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-amber-600" size={24} />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-gray-900 mb-1">Телефон</h4>
                    <p className="text-gray-600">+7 (XXX) XXX-XX-XX</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-amber-600" size={24} />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600">info@regaltouch.kz</p>
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
                    <p className="text-gray-600">Пн-Пт: 9:00 - 18:00</p>
                    <p className="text-gray-600">Сб: 10:00 - 15:00</p>
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
  );
}

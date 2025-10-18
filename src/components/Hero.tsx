import { Award } from "lucide-react";

export default function Hero() {
  return (
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
                <div className="w-64 h-64 bg-gradient-to-br to-gray-900 rounded-xl flex items-center justify-center">
                  <img
                    src="../../paint_bucket.png"
                    alt="REGAL TOUCH bucket"
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
  );
}

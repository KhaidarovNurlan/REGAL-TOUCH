import { Check } from "lucide-react";

export default function Pricing() {
  const pricingData = [
    {
      title: "Краска интерьерная",
      description:
        "Краска по бетонным, оштукатуренным, зашпатлеванным, кирпичным, древесноволокнистым и древесно-стружечным поверхностям, гипсокартону и стеклообоям. Супер моющаяся.",
      volume: "20кг",
      priceWholesale: "200 тг/кг",
      priceRetail: "300 тг/кг",
      gradient: "from-amber-500 to-amber-600",
    },
    {
      title: "Краска моющая",
      description:
        "Краска по бетонным, оштукатуренным, зашпатлеванным, кирпичным, древесноволокнистым и древесно-стружечным поверхностям, гипсокартону и стеклообоям. Супер моющаяся.",
      volume: "20кг",
      priceWholesale: "700 тг/кг",
      priceRetail: "900 тг/кг",
      gradient: "from-amber-500 to-amber-600",
      featured: true,
    },
    {
      title: "Краска фасадная",
      description:
        "Краска для окраски фасадов зданий по кирпичным, бетонным, оштукатуренным, деревянным и другим пористым поверхностям (кроме полов), по загрунтованной поверхности металла.",
      volume: "20кг",
      priceWholesale: "1000 тг/кг",
      priceRetail: "1200 тг/кг",
      gradient: "from-amber-500 to-amber-600",
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Прайс-лист
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingData.map((item, index) => (
            <div
              key={index}
              className={`rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all : ''
              }`}
            >
              <div
                className={`bg-gradient-to-br ${item.gradient} p-8 text-white`}
              >
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-sm opacity-90">Объем:</span>
                  <span className="text-xl font-bold">{item.volume}</span>
                </div>
              </div>

              <div className="p-8 bg-white">
                <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                  {item.description}
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
  );
}

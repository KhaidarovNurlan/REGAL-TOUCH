import { Droplet, Shield, Minimize2, Sun, Flame } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: Droplet,
      title: "Супергидрофобность",
    },
    {
      icon: Shield,
      title: "Антибактериальный эффект",
    },
    {
      icon: Minimize2,
      title: "Нанотехнологии",
    },
    {
      icon: Sun,
      title: "UV-стойкость",
    },
    {
      icon: Flame,
      title: "Пожаробезопасность",
    },
  ];

  return (
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
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-amber-50 p-8 rounded-xl hover:shadow-lg transition-all border border-gray-100"
            >
              <div className="w-20 h-20 bg-amber-500 rounded-lg flex items-center justify-center mb-4">
                <feature.icon size={32} className="text-white" />
              </div>
              <h3 className="text-md font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

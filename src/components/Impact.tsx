"use client";

import { motion } from "framer-motion";
import { Leaf, Recycle, Wind } from "lucide-react";

export default function Impact() {
  const stats = [
    {
      label: "Karbon Ayak İzi",
      value: "%40 Azalma",
      icon: <Wind className="text-blue-500" />,
      desc: "Lojistik optimizasyonu ve atık yönetimi ile sağlanan tasarruf."
    },
    {
      label: "Plastik Kullanımı",
      value: "15 Ton/Yıl",
      icon: <Recycle className="text-green-500" />,
      desc: "Sentetik filtreler yerine biyolojik çözümlerin tercih edilmesi."
    },
    {
      label: "Yeşil Enerji",
      value: "%100 Verim",
      icon: <Leaf className="text-primary" />,
      desc: "Doğal malzemelerin endüstriyel süreçlere tam entegrasyonu."
    }
  ];

  return (
    <section id="impact" className="py-24 bg-mint relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-navy mb-4">
              Gelecek İçin <span className="text-primary">Yeşil Etki</span>
            </h2>
            <p className="text-navy/60">
              Sadece temizlemiyoruz, ekosistemi onarıyoruz. Verilerimizle ölçülebilir ve sürdürülebilir bir gelecek inşa ediyoruz.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-white p-8 rounded-3xl shadow-xl shadow-primary/5 text-center border border-primary/10"
              >
                <div className="w-16 h-16 bg-mint rounded-2xl flex items-center justify-center mx-auto mb-6">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-navy mb-2">{stat.value}</div>
                <div className="text-lg font-bold text-primary mb-4">{stat.label}</div>
                <p className="text-sm text-navy/50">{stat.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 p-8 bg-navy rounded-[2rem] text-white flex flex-col md:flex-row items-center justify-between gap-8"
          >
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">Net-Zero Hedefine Doğru</h3>
              <p className="text-white/60">Manisa OSB ve limanlarımızda 2030 karbon hedeflerine bir adım daha yakınız.</p>
            </div>
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-12 h-12 rounded-full border-2 border-navy bg-primary flex items-center justify-center font-bold text-xs">
                  {i}
                </div>
              ))}
              <div className="w-12 h-12 rounded-full border-2 border-navy bg-accent flex items-center justify-center font-bold text-xs text-navy">
                +50
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

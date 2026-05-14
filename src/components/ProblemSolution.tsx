"use client";

import { motion } from "framer-motion";
import { ArrowRight, Droplets, Scissors, ShieldCheck } from "lucide-react";

export default function ProblemSolution() {
  return (
    <section id="solution" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-heading font-bold text-navy mb-4">
            Kirlilikten <span className="text-primary">Temizliğe</span> Dönüşüm
          </h2>
          <p className="text-navy/60 max-w-2xl mx-auto">
            Atık olarak görülen saçların, denizlerimizi felaketlerden koruyan yüksek teknolojili bir savunma hattına dönüşme hikayesi.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Problem 1 */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-mint/30 p-8 rounded-3xl border border-primary/5"
          >
            <div className="w-12 h-12 bg-red-100 text-red-600 rounded-xl flex items-center justify-center mb-6">
              <Droplets size={24} />
            </div>
            <h3 className="text-xl font-bold text-navy mb-3">Petrol Sızıntıları</h3>
            <p className="text-navy/60">
              Limanlarda ve deniz trafiğinde meydana gelen sızıntılar ekosistemi geri dönülemez şekilde yok ediyor.
            </p>
          </motion.div>

          {/* Plus Sign / Arrow */}
          <div className="hidden md:flex flex-col items-center justify-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <Scissors size={24} />
            </div>
            <div className="h-20 w-px bg-gradient-to-b from-primary/10 via-primary to-primary/10" />
            <div className="text-sm font-bold text-primary uppercase tracking-widest">İnovasyon</div>
          </div>

          {/* Problem 2 - Reuse */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-mint/30 p-8 rounded-3xl border border-primary/5"
          >
            <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center mb-6">
              <Scissors size={24} />
            </div>
            <h3 className="text-xl font-bold text-navy mb-3">Atık Saç Problemi</h3>
            <p className="text-navy/60">
              Her yıl tonlarca saç atığı değerlendirilmeden çöpe gidiyor. Oysa saç, yağı emen doğal bir mucize.
            </p>
          </motion.div>
        </div>

        {/* The Solution */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-navy to-primary p-1 rounded-3xl"
        >
          <div className="bg-white rounded-[22px] p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-2/3">
              <div className="flex items-center space-x-2 text-primary font-bold mb-4">
                <ShieldCheck size={20} />
                <span>AKILLI SAÇ FİLTRE</span>
              </div>
              <h3 className="text-3xl lg:text-4xl font-heading font-bold text-navy mb-6">
                İkisini Birleştirdik, <br className="hidden lg:block" />
                Geleceği Kurtardık.
              </h3>
              <p className="text-lg text-navy/70 leading-relaxed mb-8">
                Atık saçlardan ürettiğimiz özel filtreler, kendi ağırlığının 5 katı petrolü hapseder. IoT sensörlerimizle bu filtrelerin doluluk oranını anlık takip eder, doymuş filtrelerin zamanında değiştirilmesini sağlarız.
              </p>
              <ul className="grid sm:grid-cols-2 gap-4">
                {['%100 Geri Dönüştürülebilir', 'AI Destekli Tahminleme', 'Düşük Maliyet', 'Yüksek Verimlilik'].map((item) => (
                  <li key={item} className="flex items-center space-x-2 text-navy/80 font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-1/3 w-full">
              <div className="aspect-square bg-mint rounded-2xl flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10 transition-opacity" />
                <div className="text-center p-6">
                  <div className="text-5xl font-bold text-primary mb-2">5X</div>
                  <div className="text-navy font-bold uppercase tracking-wider text-sm">Yağ Emme Kapasitesi</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

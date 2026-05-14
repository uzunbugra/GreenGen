"use client";

import { motion } from "framer-motion";
import { Cpu, Database, Network, Search, Share2, Terminal } from "lucide-react";

export default function Technology() {
  const steps = [
    {
      title: "IoT Sensörleri",
      desc: "Limanlardaki filtrelerin içine yerleştirilen hassas basınç ve nem sensörleri.",
      icon: <Cpu className="w-6 h-6" />,
      color: "bg-blue-500"
    },
    {
      title: "Apache Kafka",
      desc: "Anlık verilerin kayıpsız ve yüksek hızda akışını sağlayan dijital omurga.",
      icon: <Network className="w-6 h-6" />,
      color: "bg-orange-500"
    },
    {
      title: "AI & Analitik",
      desc: "Doygunluk oranlarını analiz eden ve doyma zamanını tahminleyen modeller.",
      icon: <Terminal className="w-6 h-6" />,
      color: "bg-primary"
    },
    {
      title: "Gerçek Zamanlı Takip",
      desc: "Manisa OSB ve liman operasyonları için anlık izleme ve bildirim paneli.",
      icon: <Share2 className="w-6 h-6" />,
      color: "bg-accent"
    }
  ];

  return (
    <section id="tech" className="py-24 bg-mint/50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-navy mb-6">
              The <span className="text-primary italic">Twin Transition</span>
            </h2>
            <p className="text-xl text-navy/70 mb-8 leading-relaxed">
              Yeşil dönüşümü dijital güçle birleştiriyoruz. Sadece filtre değil, verinin gücüyle yönetilen bir ekosistem kuruyoruz.
            </p>
            
            <div className="space-y-6">
              {steps.map((step, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-4 group"
                >
                  <div className={`mt-1 w-10 h-10 rounded-lg ${step.color} text-white flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform`}>
                    {step.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-navy">{step.title}</h4>
                    <p className="text-navy/60">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 w-full relative">
            <div className="aspect-square relative flex items-center justify-center">
              {/* Central AI Node */}
              <motion.div 
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="w-48 h-48 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white z-20 shadow-2xl"
              >
                <div className="text-center">
                  <Database size={48} className="mx-auto mb-2" />
                  <span className="font-bold text-sm">MERKEZİ VERİ</span>
                </div>
              </motion.div>

              {/* Orbiting Elements */}
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0"
                >
                  <div 
                    className="absolute w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center text-primary"
                    style={{ 
                      top: '0%', 
                      left: '50%', 
                      transform: `translate(-50%, -50%) rotate(${-90 * i}deg)`,
                      marginTop: `${i % 2 === 0 ? '5%' : '15%'}`
                    }}
                  >
                    <Search size={20} />
                  </div>
                </motion.div>
              ))}

              {/* Connecting Lines */}
              <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
                <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

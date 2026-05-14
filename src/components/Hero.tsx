"use client";

import { motion } from "framer-motion";
import { ChevronRight, Waves, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Illustration Simulation */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-mint via-accent/5 to-primary/10" />
        {/* Waves simulation */}
        <motion.div 
          animate={{ 
            x: [0, 50, 0],
            y: [0, 20, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-10%] left-[-10%] w-[120%] h-[40%] bg-primary/5 blur-3xl rounded-full"
        />
        <motion.div 
          animate={{ 
            x: [0, -40, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] right-[-5%] w-[60%] h-[60%] bg-accent/10 blur-3xl rounded-full"
        />
        
        {/* Fiber lines simulation */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-primary to-transparent w-full"
              style={{ top: `${20 * i + 10}%`, transform: "rotate(-5deg)" }}
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 8 + i, repeat: Infinity, ease: "linear" }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              <Zap size={16} />
              <span>Hackathon 2026 Favorisi</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-heading font-extrabold text-navy leading-tight mb-6">
              Doğanın Gücü,<br />
              <span className="text-primary italic">Verinin Zekası.</span>
            </h1>
            <p className="text-xl text-navy/70 mb-8 max-w-lg leading-relaxed">
              Manisa OSB ve Türkiye'nin stratejik limanları için geliştirilen, saç filtre teknolojisi ile deniz kirliliğini durduran AI destekli gerçek zamanlı takip sistemi.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-primary text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-primary/30 flex items-center justify-center group">
                Bilgi Al
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <a 
                href="/insan_saci_yag_adsorpsiyon_raporu.docx" 
                download 
                className="bg-white border-2 border-primary/20 text-navy px-8 py-4 rounded-full font-bold text-lg hover:bg-mint transition-colors flex items-center justify-center"
              >
                Teknik Raporu İndir
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 bg-white/40 backdrop-blur-xl p-4 rounded-3xl border border-white/50 shadow-2xl">
              <div className="bg-navy rounded-2xl overflow-hidden aspect-video relative">
                {/* Simulated Wave/Fiber Illustration */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Waves className="text-accent w-32 h-32 animate-pulse opacity-50" />
                  <div className="absolute inset-0 flex flex-col justify-between p-8">
                    <div className="flex justify-between">
                      <div className="h-4 w-24 bg-primary/40 rounded animate-pulse" />
                      <div className="h-4 w-12 bg-accent/40 rounded animate-pulse" />
                    </div>
                    <div className="space-y-4">
                      <div className="h-2 w-full bg-primary/20 rounded" />
                      <div className="h-2 w-3/4 bg-primary/20 rounded" />
                      <div className="h-2 w-1/2 bg-accent/20 rounded" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Floating stats */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-lg border border-primary/10 z-20"
            >
              <div className="text-sm font-bold text-navy/50">Doygunluk</div>
              <div className="text-2xl font-bold text-primary">%84.2</div>
            </motion.div>
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-lg border border-primary/10 z-20"
            >
              <div className="text-sm font-bold text-navy/50">Atık Toplama</div>
              <div className="text-2xl font-bold text-accent">12.4 Ton</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

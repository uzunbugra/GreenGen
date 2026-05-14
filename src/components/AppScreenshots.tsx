"use client";

import { motion } from "framer-motion";
import { BarChart3, LayoutDashboard, Smartphone } from "lucide-react";

export default function AppScreenshots() {
  return (
    <section id="dashboard" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-heading font-bold text-navy mb-4">
            Operasyonel <span className="text-primary">Mükemmellik</span>
          </h2>
          <p className="text-navy/60 max-w-2xl mx-auto">
            Karmaşık verileri, operasyon ekiplerinin anında aksiyon alabileceği sade ve güçlü arayüzlere dönüştürdük.
          </p>
        </div>

        <div className="relative">
          {/* Desktop Mockup */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10 mx-auto max-w-5xl bg-navy p-2 rounded-2xl shadow-2xl border border-primary/20"
          >
            <div className="bg-mint rounded-xl overflow-hidden aspect-[16/9] relative">
              <div className="absolute inset-0 p-6">
                <div className="flex justify-between items-center mb-8">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-amber-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="flex items-center space-x-2 text-navy/40 font-bold text-xs">
                    <LayoutDashboard size={14} />
                    <span>MANİSA LİMAN DASHBOARD v2.4</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-white p-4 rounded-xl shadow-sm border border-primary/5">
                      <div className="h-2 w-12 bg-primary/20 rounded mb-2" />
                      <div className="h-6 w-20 bg-primary/10 rounded" />
                    </div>
                  ))}
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-primary/5 h-48 flex items-end space-x-2">
                  {[40, 70, 45, 90, 65, 80, 50, 95, 60, 85].map((h, i) => (
                    <motion.div 
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${h}%` }}
                      className="flex-1 bg-gradient-to-t from-primary/80 to-accent rounded-t-sm"
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Mobile Mockup */}
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="absolute -bottom-12 -right-4 lg:-right-12 z-20 hidden md:block w-64 bg-navy p-3 rounded-[3rem] shadow-2xl border-4 border-white/20"
          >
            <div className="bg-white rounded-[2.5rem] overflow-hidden aspect-[9/19] relative">
              <div className="absolute inset-0 p-6 flex flex-col">
                <div className="w-12 h-1 bg-navy/10 mx-auto rounded-full mb-8" />
                <div className="flex items-center justify-between mb-8">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <BarChart3 size={20} />
                  </div>
                  <Smartphone size={20} className="text-navy/20" />
                </div>
                <div className="space-y-4">
                  <div className="h-4 w-3/4 bg-navy/5 rounded" />
                  <div className="h-32 bg-mint rounded-2xl p-4">
                    <div className="flex justify-between items-end h-full space-x-1">
                      {[30, 50, 70, 90, 60, 40].map((h, i) => (
                        <div key={i} className="flex-1 bg-primary rounded-t-sm" style={{ height: `${h}%` }} />
                      ))}
                    </div>
                  </div>
                  <div className="h-4 w-full bg-navy/5 rounded" />
                  <div className="h-4 w-1/2 bg-navy/5 rounded" />
                  <button className="w-full py-3 bg-primary text-white rounded-xl font-bold text-xs mt-4">
                    ALERTLERİ GÖR
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { FileText, Download, Mail, Globe, Link } from "lucide-react";

export default function Documentation() {
  return (
    <>
      <section id="docs" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-mint/30 rounded-[3rem] p-12 lg:p-20 border border-primary/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <FileText size={200} />
            </div>
            
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-4xl font-heading font-bold text-navy mb-6">
                Teknik Detaylara <span className="text-primary">Hakim Olun.</span>
              </h2>
              <p className="text-xl text-navy/60 mb-10 leading-relaxed">
                Projemizin mühendislik detaylarını, veri mimarisini ve sürdürülebilirlik raporunu içeren kapsamlı teknik raporumuzu indirin.
              </p>
              <a 
                href="/insan_saci_yag_adsorpsiyon_raporu.docx" 
                download 
                className="inline-flex items-center space-x-3 bg-primary text-white px-10 py-5 rounded-full font-bold text-lg shadow-2xl shadow-primary/30 hover:bg-primary/90 transition-all transform hover:scale-105"
              >
                <Download size={24} />
                <span>Teknik Raporu İndir</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-navy pt-20 pb-10 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <span className="text-3xl font-heading font-bold text-primary mb-6 block">GreenGen</span>
              <p className="text-white/50 max-w-md leading-relaxed">
                Akıllı Filtre Doygunluk Takip Sistemi. Denizlerimizi korumak için doğanın mucizesini verinin gücüyle birleştiriyoruz.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-6 uppercase tracking-wider text-sm">Hızlı Erişim</h4>
              <ul className="space-y-4 text-white/60">
                <li><a href="#solution" className="hover:text-primary transition-colors">Çözüm</a></li>
                <li><a href="#tech" className="hover:text-primary transition-colors">Teknoloji</a></li>
                <li><a href="#impact" className="hover:text-primary transition-colors">Yeşil Etki</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 uppercase tracking-wider text-sm">İletişim</h4>
              <ul className="space-y-4 text-white/60">
                <li className="flex items-center space-x-2">
                  <Mail size={16} />
                  <span>info@greengen.tech</span>
                </li>
                <li className="flex space-x-4 pt-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors"><Link size={20} /></a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors"><Globe size={20} /></a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center text-sm text-white/30">
            <p>© 2026 GreenGen. Tüm hakları saklıdır.</p>
            <p className="mt-4 md:mt-0 font-bold text-primary/50">Hackathon 2026 Projesi</p>
          </div>
        </div>
      </footer>
    </>
  );
}

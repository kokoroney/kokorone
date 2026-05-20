/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Phone, MessageCircle, MapPin, Clock, Info, CheckCircle2, Sparkles, Instagram, AlertTriangle } from 'lucide-react';
import conceptImage from './assets/concept-image.jpg';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-brand-300 selection:text-brand-900">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-brand-100/90 backdrop-blur-sm z-50 border-b border-brand-200">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-serif text-xl font-medium tracking-wider text-brand-800">
            心音<span className="text-sm ml-1 text-brand-600 tracking-widest">~kokorone~</span>
          </div>
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-widest text-brand-700">
            <a href="#concept" className="hover:text-brand-900 transition-colors">CONCEPT</a>
            <a href="#menu" className="hover:text-brand-900 transition-colors">MENU</a>
            <a href="#info" className="hover:text-brand-900 transition-colors">INFO</a>
            <a href="#reservation" className="hover:text-brand-900 transition-colors">RESERVE</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity" aria-label="Instagram">
              <div className="flex items-center justify-center p-1.5 rounded-lg bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] shadow-sm">
                <Instagram className="w-4 h-4 text-white" />
              </div>
            </a>
          </div>
          <div className="flex items-center space-x-4 md:hidden">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity" aria-label="Instagram">
              <div className="flex items-center justify-center p-1.5 rounded-lg bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] shadow-sm">
                <Instagram className="w-4 h-4 text-white" />
              </div>
            </a>
            <a 
              href="#reservation"
              className="text-xs font-medium bg-brand-800 text-brand-100 px-4 py-2 rounded-full tracking-wider"
            >
              ご予約
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-brand-900">
          <img 
            src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=2000" 
            alt="Relaxing massage background" 
            className="absolute inset-0 w-full h-full object-cover object-center opacity-75"
          />
          <div className="absolute inset-0 bg-brand-900/30 pointer-events-none"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-brand-100 pointer-events-none"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 mt-16 flex flex-col items-center h-full justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="bg-white/40 p-8 md:p-14 rounded-3xl backdrop-blur-md border border-white/50 shadow-xl"
          >
            <p className="font-serif text-lg md:text-2xl mb-6 tracking-[0.2em] text-brand-800 drop-shadow-md">
              心地よい温もりに、身をゆだねて。
            </p>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-4 tracking-widest text-brand-900 drop-shadow-md">
              心音
            </h1>
            <p className="text-brand-700 tracking-[0.3em] text-sm md:text-base font-medium mb-12 drop-shadow-sm">
              KOKORONE
            </p>
            <div className="flex items-center justify-center space-x-4 mb-4 text-brand-800">
              <span className="h-[1px] w-8 bg-brand-500"></span>
              <p className="tracking-widest text-sm md:text-base font-medium">出張オイルマッサージ</p>
              <span className="h-[1px] w-8 bg-brand-500"></span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Concept Section */}
      <section id="concept" className="py-32 md:py-48 px-6 relative overflow-hidden bg-[#faf8f5]">
        {/* Decorative elements - Ripple / Wave effect */}
        <div className="absolute top-1/2 left-[30%] -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-20 z-0">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
            transition={{ duration: 8, ease: "easeInOut", repeat: Infinity }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full border-[1.5px] border-brand-300"
          ></motion.div>
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.05, 0.2] }}
            transition={{ duration: 10, ease: "easeInOut", repeat: Infinity, delay: 1 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[900px] md:h-[900px] rounded-full border-[1px] border-brand-400"
          ></motion.div>
          <motion.div
            animate={{ scale: [1, 1.4, 1], opacity: [0.1, 0, 0.1] }}
            transition={{ duration: 12, ease: "easeInOut", repeat: Infinity, delay: 2 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] md:w-[1200px] md:h-[1200px] rounded-full border-[1px] border-brand-200"
          ></motion.div>
        </div>
        
        <div className="absolute top-20 right-10 w-64 h-64 bg-brand-200/20 rounded-full blur-3xl z-0"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-brand-200/20 rounded-full blur-3xl z-0"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            
            {/* Image Content (Left) */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="order-1 lg:w-1/2 w-full flex justify-center lg:justify-end"
            >
              <div className="relative w-full max-w-[280px] md:max-w-[380px] lg:max-w-[460px] mr-0 lg:mr-8">
                {/* Decorative border */}
                <div className="absolute -inset-4 md:-inset-6 border border-brand-300/50 rounded-tl-[80px]  rounded-br-[80px] rounded-tr-[30px] rounded-bl-[30px] z-0 transform translate-x-4 translate-y-5"></div>
                {/* Main image */}
                <div className="relative z-10 aspect-[4/3] md:aspect-[5/4] rounded-tl-[80px] rounded-br-[80px] rounded-tr-[30px] rounded-bl-[30px] overflow-hidden shadow-2xl">
                  <motion.img 
                    animate={{ scale: [1.02, 1.08, 1.02] }}
                    transition={{ duration: 25, ease: "easeInOut", repeat: Infinity }}
                    src={conceptImage}
                    alt="心地よいオイルマッサージのイメージ"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-brand-900/10 pointer-events-none"></div>
                </div>
              </div>
            </motion.div>

            {/* Text Content (Right) */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="order-2 lg:w-1/2"
            >
              <div className="flex items-center gap-6 mb-12">
                <span className="text-brand-400 tracking-[0.4em] text-sm font-medium uppercase">Concept</span>
                <span className="h-[1px] w-12 bg-brand-300"></span>
              </div>
              
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-brand-900 mb-12 tracking-[0.15em] leading-[1.6]">
                広くて温かい、<br />
                <span className="text-brand-700 italic block mt-4">てのひらが導く深い癒し</span>
              </h2>
              
              <div className="space-y-8 text-brand-700/80 leading-[2.4] tracking-widest text-sm md:text-base font-light">
                <p>
                  心音～kokorone～は、高知県内を対象とした<br className="hidden md:block" />出張型のオイルマッサージサロンです。
                </p>
                <p>
                  男性セラピストならではの、しっかりとした圧と、<br className="hidden md:block" />
                  優しく包み込むような「広いてのひら」。<br />
                  点ではなく面で捉えるなめらかなストロークが、<br className="hidden md:block" />
                  凝り固まった身体と心をゆったりとしたリズムで解きほぐしていきます。
                </p>
                <p>
                  ご自宅やご滞在先のホテルなど、<br className="hidden md:block" />あなたのご指定の場所が、そのまま癒しのプライベート空間に。<br />
                  忙しい日常から少しだけ離れて、心と身体の「音」に耳を傾ける、<br className="hidden md:block" />特別な時間をお過ごしください。
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-24 bg-white/50 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-3xl text-brand-900 tracking-widest mb-4">MENU</h2>
            <p className="text-brand-600 tracking-wider text-sm">お客様のその日の体調に合わせたケアをご提供いたします</p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            <MenuCard 
              title="トータルオイルケア 80分"
              price="8,000円"
              desc="全身のオイルマッサージで極上のリラックスを。指先から足先まで、滞った流れをスムーズにし、心身のバランスを整えます。"
            />
            <MenuCard 
              title="下半身集中ケア 60分"
              price="6,000円"
              desc="足のむくみや冷え、立ち仕事での疲れが気になる方に。重点的なアプローチで、軽やかな足取りを取り戻します。"
            />
            <MenuCard 
              title="上半身集中ケア 60分"
              price="6,000円"
              desc="デスクワークやスマホ操作による首、肩、背中の張りが辛い方に。広いてのひらで、こわばった筋肉をじっくりと緩めます。"
            />
            <MenuCard 
              title="お試し 45分"
              price="4,000円"
              desc="初めての方におすすめのショートコース。背面を中心としたオイルマッサージで、当店の施術の手技や心地よさを手軽にご体感いただけます。"
            />
          </motion.div>

          <motion.div 
            className="mt-12 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <p className="text-brand-800 tracking-widest font-medium bg-brand-100/50 inline-block px-6 py-3 rounded-full shadow-sm border border-brand-200">
              ※交通費：1,000円〜 詳細は出張エリア参照
            </p>
          </motion.div>
        </div>
      </section>

      {/* Info Section */}
      <section id="info" className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <h2 className="font-serif text-3xl text-brand-900 tracking-widest text-center mb-12">INFORMATION</h2>
            
            <div className="bg-brand-100/50 rounded-2xl p-8 md:p-12 border border-brand-200">
              <ul className="space-y-8">
                <InfoItem icon={<MapPin className="w-5 h-5" />} title="出張エリア・交通費">
                  <div className="space-y-4 md:space-y-3 mt-3 md:mt-2 text-sm md:text-base">
                    <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-4 border-b border-brand-200/60 pb-3 md:pb-2">
                      <span className="font-medium text-brand-800 shrink-0 md:w-20">1,000円</span>
                      <span className="text-brand-700 leading-relaxed">高知市・南国市・いの町・土佐市・四万十市・黒潮町</span>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-4 border-b border-brand-200/60 pb-3 md:pb-2">
                      <span className="font-medium text-brand-800 shrink-0 md:w-20">2,000円</span>
                      <span className="text-brand-700 leading-relaxed">香美市・香南市・須崎市・四万十町・宿毛市・土佐清水市</span>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-4 pb-1">
                      <span className="font-medium text-brand-800 shrink-0 md:w-20">その他</span>
                      <span className="text-brand-700">上記以外の地域は応相談となります。お気軽にお問い合わせください。</span>
                    </div>
                  </div>
                </InfoItem>
                <InfoItem icon={<Clock className="w-5 h-5" />} title="当日予約について">
                  ご希望時間の<strong className="mx-1 text-brand-800">3時間前まで</strong>にご連絡をお願いいたします。
                </InfoItem>
                <InfoItem icon={<Sparkles className="w-5 h-5" />} title="ご利用対象">
                  女性のお客様を中心に、男性のお客様もご予約いただけます。どなた様も心よりお待ちしております。
                </InfoItem>
                <InfoItem icon={<CheckCircle2 className="w-5 h-5" />} title="ご準備など">
                  ご自宅での施術にあたり、特別にご用意いただくものはございません。リラックスできる服装でお待ちください。
                </InfoItem>
                <InfoItem icon={<AlertTriangle className="w-5 h-5" />} title="キャンセルポリシー">
                  ご予約時間の<strong className="mx-1 text-brand-800">2時間以内</strong>の無断キャンセル・直前キャンセルにつきましては、<strong className="mx-1 text-brand-800">料金の100%</strong>をご請求させていただきます。予めご了承ください。
                </InfoItem>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Reservation Section */}
      <section id="reservation" className="py-24 bg-brand-800 text-brand-100 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <h2 className="font-serif text-3xl tracking-widest mb-6">RESERVATION</h2>
            <p className="mb-12 tracking-wider leading-relaxed text-brand-200 text-sm md:text-base">
              心音～kokorone～ で、至福のひとときを。<br />
              ご予約・お問い合わせは、公式LINEまたはお電話にて承っております。<br className="hidden md:block"/>
              <span className="text-xs md:text-sm text-brand-300 mt-4 inline-block">※施術中は電話に出られない場合がございます。公式LINEでのご連絡を推奨しております。</span>
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href="#" 
                className="w-full sm:w-auto flex items-center justify-center space-x-3 bg-[#06C755] hover:bg-[#05b34c] text-white px-8 py-4 rounded-full font-medium tracking-wider transition-all transform hover:-translate-y-1 shadow-lg"
              >
                <MessageCircle className="w-5 h-5" />
                <span>公式LINEで予約・相談する</span>
              </a>
              <a 
                href="tel:000-0000-0000" 
                className="w-full sm:w-auto flex items-center justify-center space-x-3 bg-brand-100 text-brand-900 hover:bg-white px-8 py-4 rounded-full font-medium tracking-wider transition-all transform hover:-translate-y-1 shadow-lg"
              >
                <Phone className="w-5 h-5" />
                <span>電話で予約する</span>
              </a>
            </div>
            
            <div className="mt-12 flex justify-center">
              <a 
                href="https://instagram.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-3 text-brand-200 hover:text-white transition-opacity hover:opacity-80"
              >
                <div className="flex items-center justify-center p-2 rounded-lg bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] shadow-md">
                  <Instagram className="w-5 h-5 text-white" />
                </div>
                <span className="text-sm tracking-wider">Instagramをみる</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-900 text-brand-300 py-12 text-center text-sm tracking-wider">
        <p className="font-serif mb-4 text-lg">心音～kokorone～</p>
        <p className="text-xs opacity-70">&copy; {new Date().getFullYear()} kokorone. All rights reserved.</p>
      </footer>
    </div>
  );
}

// Subcomponents

function MenuCard({ title, price, desc }: { title: string; price: string; desc: string }) {
  return (
    <motion.div 
      variants={fadeIn}
      className="bg-brand-50 p-8 md:p-10 rounded-2xl shadow-sm border border-brand-200/50 hover:shadow-md transition-shadow group flex flex-col h-full"
    >
      <div className="w-10 h-10 rounded-full bg-brand-200 flex items-center justify-center text-brand-700 mb-6 group-hover:bg-brand-300 transition-colors">
        <Info className="w-5 h-5" />
      </div>
      <h3 className="font-serif text-xl text-brand-900 mb-2 tracking-wider">{title}</h3>
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <span className="bg-brand-800 text-brand-100 text-xs px-2 py-1 rounded tracking-wider shadow-sm">オープン記念価格</span>
        <span className="font-serif text-xl text-brand-800 tracking-wider">{price}</span>
      </div>
      <p className="text-brand-700 leading-relaxed text-sm tracking-wide flex-grow">
        {desc}
      </p>
    </motion.div>
  );
}

function InfoItem({ icon, title, children }: { icon: React.ReactNode, title: string, children: React.ReactNode }) {
  return (
    <li className="flex items-start">
      <div className="flex-shrink-0 mt-1 bg-brand-200 text-brand-700 p-2 rounded-full">
        {icon}
      </div>
      <div className="ml-4">
        <h4 className="font-medium text-brand-900 mb-2 tracking-wide font-serif">{title}</h4>
        <div className="text-sm text-brand-700 leading-relaxed tracking-wide">
          {children}
        </div>
      </div>
    </li>
  );
}

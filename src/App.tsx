import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Youtube, Cloud } from 'lucide-react';
import { AudioPlayer } from './components/AudioPlayer';

// 대표 참여작 목록입니다.
// 각 항목의 'image' 속성 값에 원하시는 이미지 링크를 넣으시면 됩니다.
// 예: image: 'https://내이미지링크.com/image.jpg'
const WORKS = [
  { id: '01', title: '𝕸𝖆𝖈𝖌𝖚𝖋𝖋𝖎𝖓', role: '청강문화산업대학교(2024)', year: '2023', image: 'https://od.lk/s/OF8yMDI2MjEzNzhf/1.jpg' },
  { id: '02', title: '아모레퍼시픽 : 북촌 조향사의 집 展 (2023)', role: 'Amore Pacific', year: '2023', image: 'https://od.lk/s/OF8yMDI2Mzk4MTRf/amorepacific.webp' },
  { id: '03', title: 'The devil within : SATGAT', role: 'Newcore games', year: '2024', image: 'https://od.lk/s/OF8yMDI2MjEzNzVf/2.jpg' },
  { id: '04', title: 'Maplestory M : Kanna PV', role: 'NEXON games', year: '2023', image: 'https://od.lk/s/OF8yMDI2MjEzNzdf/3.jpg' },
  { id: '05', title: 'Dawn Of Llight', role: '계명대학교(2026)', year: '2025', image: 'https://od.lk/s/OF8yMDI2MjEzNzZf/4.jpg' },
];

export default function App() {
  const [activeTab, setActiveTab] = useState('main');
  const [vipPassword, setVipPassword] = useState('');
  const NAV_ITEMS = ['main', 'type 1', 'type 2', 'Notes & Refunds'];

  return (
    <div className="min-h-screen text-[#e5e5e5] selection:bg-blue-500/30 selection:text-white">
      <div className="noise-bg pointer-events-none"></div>
      
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#0a0a0a]/30 backdrop-blur-xl border-b border-white/[0.02] transition-all">
        <div className="absolute inset-0 halftone-overlay opacity-20"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-end relative z-10">
          <ul className="flex gap-4 md:gap-8 text-mono text-xs tracking-widest uppercase">
            {NAV_ITEMS.map((item) => (
              <li key={item}>
                <button 
                  onClick={() => {
                    setActiveTab(item);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`flex items-center gap-2 transition-all duration-300 ${activeTab === item ? 'text-white' : 'text-[#666] hover:text-[#2266f0]'}`}
                >
                  {activeTab === item && (
                    <motion.div layoutId="nav-indicator" className="w-1.5 h-1.5 bg-[#2266f0]"></motion.div>
                  )}
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Top Right Halftone Gradient */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none z-0 opacity-40">
        <div className="absolute inset-0 bg-gradient-to-bl from-[#2266f0]/20 to-transparent blur-3xl"></div>
        <div className="absolute inset-0 halftone-overlay" style={{ maskImage: 'radial-gradient(circle at top right, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 70%)', WebkitMaskImage: 'radial-gradient(circle at top right, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 70%)' }}></div>
      </div>
      
      <main className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
        
        <AnimatePresence mode="wait">
          {activeTab === 'main' && (
            <motion.div
              key="main"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {/* Hero Section */}
        <section className="min-h-[70vh] flex flex-col justify-center relative">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <h1 className="text-display uppercase flex flex-col items-start w-full max-w-4xl">
              <span className="text-[8vw] md:text-[4.5vw] leading-none font-bold tracking-[0.2em] scale-y-110 transform origin-left">
                CAIN
              </span>
              <span className="text-[#2266f0] text-[9vw] md:text-[6.5vw] leading-none tracking-widest font-bold scale-x-100 transform origin-left mt-2 md:mt-4">
                _LITTLEDEATH
              </span>
              <span className="text-[#2266f0]/70 text-[4.5vw] md:text-[2.5vw] leading-none tracking-[0.3em] font-medium mt-4 md:mt-6">
                COMMISSION
              </span>
            </h1>
          </motion.div>
          
          <motion.div 
            className="mt-8 md:mt-12 relative overflow-hidden pl-6 md:pl-8"
            initial={{ opacity: 0, x: -20, filter: 'blur(4px)' }}
            animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
          >
            {/* Avant-garde decorative line */}
            <div className="absolute left-0 top-1 bottom-1 w-[1px] bg-white/20">
              <div className="absolute top-0 left-[-2px] w-[5px] h-[5px] bg-[#2266f0]"></div>
              <div className="absolute bottom-0 left-[-2px] w-[5px] h-[5px] bg-[#2266f0]"></div>
            </div>
            
            <div className="relative z-10">
              <div className="text-lg md:text-xl font-light leading-relaxed max-w-2xl break-keep space-y-4">
                <p>상상하던 것을 구현합니다.</p>
                <p>감정의 흐름을 따라, 기억에 각인되는 음악을 만듭니다. </p>
              </div>
            </div>
          </motion.div>

          {/* Expertise & Strengths Section */}
          <motion.div 
            className="mt-20 md:mt-28"
            initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: false, margin: "-10%" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-2">
              <div className="w-1.5 h-1.5 bg-[#2266f0]"></div>
              <h3 className="text-mono text-xs text-[#666] tracking-widest uppercase">Expertise & Strengths</h3>
            </div>
            
            <div className="relative overflow-hidden pl-6 md:pl-8 mt-6">
              {/* Avant-garde decorative line */}
              <div className="absolute left-0 top-1 bottom-1 w-[1px] bg-white/20">
                <div className="absolute top-0 left-[-2px] w-[5px] h-[5px] bg-[#2266f0]"></div>
                <div className="absolute bottom-0 left-[-2px] w-[5px] h-[5px] bg-[#2266f0]"></div>
              </div>
              
              <div className="relative z-10">
                <div className="text-sm md:text-base font-light leading-relaxed max-w-2xl break-keep space-y-3 text-[#a0a0a0]">
                  {/* 아래 문구들을 원하시는 강점 소개로 수정하시면 됩니다. */}
                  <p>탄탄한 전공지식을 토대로, 깊이있고 독특한 음악을 만듭니다.</p>
                  <p>수많은 외주와 커미션으로 다져진 경험을 통해, 클라이언트의 니즈를 파악합니다.</p>
                  <p>소규모 실내악부터 거대한 오케스트라와 국악, 하이브리드의 결합 등 오케스트라 기반의 장르라면 무엇이든 소화 가능.</p>
                  <p>락·메탈, EDM, 힙합 등 다장르 작업 가능합니다.</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Specs / Education / Awards Section */}
          <motion.div 
            className="mt-32 md:mt-48"
            initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: false, margin: "-10%" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3 mb-4 border-b border-white/10 pb-2">
              <div className="w-1.5 h-1.5 bg-[#2266f0]"></div>
              <h3 className="text-mono text-xs text-[#666] tracking-widest uppercase">Background & Awards</h3>
            </div>
            <ul className="space-y-2 text-sm font-light text-[#a0a0a0]">
              <li className="flex justify-between items-start gap-4">
                <span className="text-white">2019 국제 안토닌 드보르작 작곡콩쿨 실내악 부문 특별상</span>
                <span className="text-mono text-xs text-[#666] shrink-0">2019</span>
              </li>
              <li className="flex justify-between items-start gap-4">
                <span>한국예술종합학교 음악원 작곡과</span>
                <span className="text-mono text-xs text-[#666] shrink-0">2016 - 2020</span>
              </li>
            </ul>
          </motion.div>
        </section>

        {/* Combined Projects & Work Section */}
        <motion.section 
          className="mt-24 md:mt-32"
          initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: false, margin: "-10%" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {/* Projects Sub-section */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-2">
              <div className="w-1.5 h-1.5 bg-[#2266f0]"></div>
              <h3 className="text-mono text-xs text-[#666] tracking-widest uppercase">Projects & Experience</h3>
            </div>

            <ul className="space-y-2 text-sm font-light text-[#a0a0a0] mt-4">
              {[
                { year: '2026', title: '≪Dawn of light≫ 외 인디 애니메이션 다수', role: 'Animation' },
                { year: '2025', title: '≪The devil within - SATGAT≫', role: 'Game' },
                { year: '2025', title: 'SANDY FLOOR - ≪Great toy showdown≫', role: 'Game' },
                { year: '2024', title: '메이플스토리 M - 칸나 PV', role: 'Animation' },
                { year: '2023', title: '아모레퍼시픽 - 북촌 조향사의 집 展', role: 'Promotion' },
                { year: '2022 ~ 2024', title: '≪Macguffin≫ 외 인디 애니메이션 다수', role: 'Animation' },
              ].map((item, idx) => (
                <li key={idx} className="flex justify-between items-start gap-4 group hover:bg-white/5 transition-colors px-2 -mx-2 rounded-sm py-1">
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                    <span className="text-mono text-xs text-[#2266f0]/80 shrink-0">{item.year}</span>
                    <span className="text-white group-hover:text-[#2266f0] transition-colors">{item.title}</span>
                  </div>
                  <span className="text-mono text-xs text-[#666] shrink-0">{item.role}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Work Sub-section */}
          <div>
            <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-2">
              <div className="w-1.5 h-1.5 bg-[#2266f0]"></div>
              <h3 className="text-mono text-xs text-[#666] tracking-widest uppercase">Work & Commission</h3>
            </div>

            {/* Work Thumbnails (Smaller) */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1.5 h-1.5 bg-[#2266f0]"></div>
                <h4 className="text-display text-lg text-[#2266f0] tracking-widest uppercase font-bold">WORKS</h4>
                <div className="flex-1 h-[1px] bg-gradient-to-r from-[#2266f0]/40 to-transparent ml-4"></div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {WORKS.map((work, idx) => (
                  <div key={work.id} className="group">
                    <div className="relative overflow-hidden hardware-border aspect-[4/3] mb-2 bg-[#141414]">
                      <div className="absolute inset-0 bg-[#2266f0]/20 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                      <img 
                        src={work.image} 
                        alt={work.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover opacity-50 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out grayscale group-hover:grayscale-0"
                      />
                    </div>
                    <div className="flex flex-col">
                      <h3 className="text-xs font-medium tracking-wide group-hover:text-[#2266f0] transition-colors truncate">{work.title}</h3>
                      <span className="text-mono text-[10px] text-[#666]">{work.year}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Embed Area for Commission Links */}
            <div className="mt-12 relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1.5 h-1.5 bg-[#2266f0]"></div>
                <h4 className="text-display text-lg text-[#2266f0] tracking-widest uppercase font-bold">SAMPLE</h4>
                <div className="flex-1 h-[1px] bg-gradient-to-r from-[#2266f0]/40 to-transparent ml-4"></div>
              </div>
              
              <div className="grid grid-cols-1 gap-12">
                {/* YouTube Embeds */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-1 h-1 bg-[#2266f0]"></div>
                      <span className="text-xs text-[#666] tracking-widest">TYPE 2. Character theme</span>
                    </div>
                    <div className="w-full aspect-video border border-[#2266f0]/20 rounded-sm overflow-hidden relative group bg-[#0a0a0a]">
                      <iframe 
                        width="100%" 
                        height="100%" 
                        src="https://www.youtube.com/embed/3ECGk95wmAc" 
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                        className="relative z-10 grayscale group-hover:grayscale-0 transition-all duration-500"
                      ></iframe>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-1 h-1 bg-[#2266f0]"></div>
                      <span className="text-xs text-[#666] tracking-widest">TYPE 2. Orchestra</span>
                    </div>
                    <div className="w-full aspect-video border border-[#2266f0]/20 rounded-sm overflow-hidden relative group bg-[#0a0a0a]">
                      <iframe 
                        width="100%" 
                        height="100%" 
                        src="https://www.youtube.com/embed/H-VqncDmwjI" 
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                        className="relative z-10 grayscale group-hover:grayscale-0 transition-all duration-500"
                      ></iframe>
                    </div>
                  </div>
                </div>

                {/* Custom Audio Player */}
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-1 h-1 bg-[#2266f0]"></div>
                    <span className="text-xs text-[#666] tracking-widest">AUDIO TRACKS</span>
                  </div>
                  {/* 외부 음원 링크를 src에 넣으시면 됩니다. */}
                  <AudioPlayer title="TYPE 1. Track 01(Piano solo + ambient)" src="https://od.lk/s/OF8yMDI2MzY2ODFf/Paradox..mp3" />
                  <AudioPlayer title="TYPE 1. Track 02(Commission, Piano solo)" src="https://od.lk/s/OF8yMDI2MzY2NzZf/1-piano.mp3" />
                  <AudioPlayer title="TYPE 1. Track 03(Musicbox)" src="https://od.lk/s/OF8yMDI2MzY2ODBf/2-musicbox.mp3" />
                  <AudioPlayer title="TYPE 2. Track 04(Commission, Chamber + hybrid part only)" src="https://od.lk/s/OF8yMDI2MzY2NzVf/6-chamber%20hybrid.mp3" />
                  <AudioPlayer title="TYPE 2. Track 05(Commission, Metal)" src="https://od.lk/s/OF8yMDI2MzY2Nzdf/4-metal.mp3" />
                  <AudioPlayer title="TYPE 2. Track 06(Commission, Rock + experimental)" src="https://od.lk/s/OF8yMDI2MzY2Nzlf/5-rock.mp3" />
                  <AudioPlayer title="TYPE 2. Track 07(Commission, Dark orchestra)" src="https://od.lk/s/OF8yMDI2MzY2Nzhf/7-darkorch.mp3" />

                </div>
              </div>
            </div>
          </div>
        </motion.section>
            </motion.div>
          )}

          {/* Type 1 Tab */}
          {activeTab === 'type 1' && (
            <motion.div
              key="type1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="min-h-[60vh] relative"
            >
              {/* Brutalist Background Element */}
              <div className="absolute top-10 right-0 -z-10 text-[12vw] leading-none font-bold text-transparent opacity-20 select-none pointer-events-none" style={{ WebkitTextStroke: '1px #2266f0' }}>
                T_01
              </div>

              <div className="flex items-end justify-between mb-12 border-b border-white/10 pb-6">
                <div className="flex items-center gap-4">
                  <div className="w-2.5 h-2.5 bg-[#2266f0]"></div>
                  <h2 className="text-display text-3xl md:text-4xl tracking-tight uppercase">TYPE 1</h2>
                </div>
                <span className="text-mono text-xs text-[#666] tracking-widest hidden md:inline-block">COMMISSION TYPE</span>
              </div>
              
              {/* Brutalist Metadata Tags */}
              <div className="flex flex-wrap gap-2 mb-10">
                <span className="text-mono text-[10px] text-[#2266f0] border border-[#2266f0]/30 px-2 py-1 uppercase tracking-widest">PRICE // 30000</span>
                <span className="text-mono text-[10px] text-[#666] border border-white/10 px-2 py-1 uppercase tracking-widest">LENGTH // 1-2 minute</span>
                <span className="text-mono text-[10px] text-[#666] border border-white/10 px-2 py-1 uppercase tracking-widest">TAT // 2-7 days</span>
              </div>

              <div className="relative overflow-hidden pl-6 md:pl-8">
                {/* Avant-garde decorative line */}
                <div className="absolute left-0 top-1 bottom-1 w-[1px] bg-white/20">
                  <div className="absolute top-0 left-[-2px] w-[5px] h-[5px] bg-[#2266f0]"></div>
                  <div className="absolute bottom-0 left-[-2px] w-[5px] h-[5px] bg-[#2266f0]"></div>
                </div>
                
                <div className="relative z-10">
                  <h3 className="text-xl text-white mb-6 font-medium tracking-wide">Type 1 상세 안내</h3>
                  <div className="text-base md:text-lg font-light leading-relaxed max-w-2xl break-keep space-y-6 text-[#d4d4d4]">
                    <p>피아노, 뮤직박스 등의 단일악기 작업 타입입니다.</p>
                    <p>원하시는 악기가 있으시면 가능한 선에서 맞춰드립니다. </p>
                    <p>이펙트 추가를 원하시면 피드백에 따라 넣어드릴 수 있습니다. </p>
                    <p>악보를 원하시는 경우, 추가금액을 내시면 작업 후 보내드립니다. (페이지당 +2000원) </p>
                  </div>
                  
                  {/* Info Boxes */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
                    <div className="border border-[#2266f0]/30 p-6 relative group hover:bg-[#2266f0]/5 transition-colors">
                      <div className="text-mono text-[10px] text-[#2266f0] mb-2 tracking-widest">PRICE</div>
                      <div className="text-2xl font-light text-white">30,000<span className="text-sm text-[#666] ml-1">KRW</span></div>
                    </div>
                    <div className="border border-white/10 p-6 relative group hover:bg-white/5 transition-colors">
                      <div className="text-mono text-[10px] text-[#666] mb-2 tracking-widest">LENGTH</div>
                      <div className="text-2xl font-light text-white">1-2<span className="text-sm text-[#666] ml-1">MIN</span></div>
                    </div>
                    <div className="border border-white/10 p-6 relative group hover:bg-white/5 transition-colors">
                      <div className="text-mono text-[10px] text-[#666] mb-2 tracking-widest">TURNAROUND</div>
                      <div className="text-2xl font-light text-white">2-7<span className="text-sm text-[#666] ml-1">DAYS</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Type 2 Tab */}
          {activeTab === 'type 2' && (
            <motion.div
              key="type2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="min-h-[60vh] relative"
            >
              {/* Brutalist Background Element */}
              <div className="absolute top-10 right-0 -z-10 text-[12vw] leading-none font-bold text-transparent opacity-20 select-none pointer-events-none" style={{ WebkitTextStroke: '1px #2266f0' }}>
                T_02
              </div>

              <div className="flex items-end justify-between mb-12 border-b border-white/10 pb-6">
                <div className="flex items-center gap-4">
                  <div className="w-2.5 h-2.5 bg-[#2266f0]"></div>
                  <h2 className="text-display text-3xl md:text-4xl tracking-tight uppercase">TYPE 2</h2>
                </div>
                <span className="text-mono text-xs text-[#666] tracking-widest hidden md:inline-block">COMMISSION TYPE</span>
              </div>
              
              {/* Brutalist Metadata Tags */}
              <div className="flex flex-wrap gap-2 mb-10">
                <span className="text-mono text-[10px] text-[#2266f0] border border-[#2266f0]/30 px-2 py-1 uppercase tracking-widest">PRICE // 300000~</span>
                <span className="text-mono text-[10px] text-[#666] border border-white/10 px-2 py-1 uppercase tracking-widest">LENGTH // 2-4 minute</span>
                <span className="text-mono text-[10px] text-[#666] border border-white/10 px-2 py-1 uppercase tracking-widest">TAT // 7-10 days</span>
              </div>

              <div className="relative overflow-hidden pl-6 md:pl-8">
                {/* Avant-garde decorative line */}
                <div className="absolute left-0 top-1 bottom-1 w-[1px] bg-white/20">
                  <div className="absolute top-0 left-[-2px] w-[5px] h-[5px] bg-[#2266f0]"></div>
                  <div className="absolute bottom-0 left-[-2px] w-[5px] h-[5px] bg-[#2266f0]"></div>
                </div>
                
                <div className="relative z-10">
                  <h3 className="text-xl text-white mb-6 font-medium tracking-wide">Type 2 상세 안내</h3>
                  <div className="text-base md:text-lg font-light leading-relaxed max-w-2xl break-keep space-y-6 text-[#d4d4d4]">
                    <p>본격적인 음악을 원하실 때 여기에 신청하실 수 있습니다.</p>
                    <p>원하시는 악기와 장르가 있으시면 견적상담 후 가능한 선에서 맞춰드립니다. </p>
                    <p>외주 신청 시 저작권·계약서 측면을 고려하여 현재 소속된 업체 쪽으로 연결해 드립니다. </p>
                    <p className="text-sm text-[#888] mt-2">(외주 문의는 아래 메일이나 lemonsound.kr로 접속 후 _Littledeath 작곡가를 지목해 주세요.) </p>
                  </div>
                  
                  {/* Info Boxes */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
                    <div className="border border-[#2266f0]/30 p-6 relative group hover:bg-[#2266f0]/5 transition-colors">
                      <div className="text-mono text-[10px] text-[#2266f0] mb-2 tracking-widest">PRICE</div>
                      <div className="text-2xl font-light text-white">300,000~<span className="text-sm text-[#666] ml-1">KRW</span></div>
                    </div>
                    <div className="border border-white/10 p-6 relative group hover:bg-white/5 transition-colors">
                      <div className="text-mono text-[10px] text-[#666] mb-2 tracking-widest">LENGTH</div>
                      <div className="text-2xl font-light text-white">2-4<span className="text-sm text-[#666] ml-1">MIN</span></div>
                    </div>
                    <div className="border border-white/10 p-6 relative group hover:bg-white/5 transition-colors">
                      <div className="text-mono text-[10px] text-[#666] mb-2 tracking-widest">TURNAROUND</div>
                      <div className="text-2xl font-light text-white">7-10<span className="text-sm text-[#666] ml-1">DAYS</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* VIP Tab */}
          {activeTab === 'vip' && (
            <motion.div
              key="vip"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="min-h-[60vh] relative"
            >
              {/* Brutalist Background Element */}
              <div className="absolute top-10 right-0 -z-10 text-[10vw] leading-none font-bold text-transparent opacity-20 select-none pointer-events-none" style={{ WebkitTextStroke: '1px #2266f0' }}>
                VIP
              </div>

              <div className="flex items-end justify-between mb-12 border-b border-[#2266f0]/30 pb-6">
                <div className="flex items-center gap-4">
                  <div className="w-2.5 h-2.5 bg-[#2266f0]"></div>
                  <h2 className="text-display text-3xl md:text-4xl tracking-tight uppercase text-[#2266f0]">VIP LOUNGE</h2>
                </div>
                <span className="text-mono text-xs text-[#2266f0] tracking-widest hidden md:inline-block">SECRET AREA</span>
              </div>
              
              {/* Brutalist Metadata Tags */}
              <div className="flex flex-wrap gap-2 mb-10">
                <span className="text-mono text-[10px] text-[#2266f0] border border-[#2266f0]/30 px-2 py-1 uppercase tracking-widest">Access // Granted</span>
                <span className="text-mono text-[10px] text-[#666] border border-white/10 px-2 py-1 uppercase tracking-widest">Level // Acquaintance</span>
              </div>

              <div className="relative overflow-hidden pl-6 md:pl-8">
                {/* Avant-garde decorative line */}
                <div className="absolute left-0 top-1 bottom-1 w-[1px] bg-[#2266f0]/30">
                  <div className="absolute top-0 left-[-2px] w-[5px] h-[5px] bg-[#2266f0]"></div>
                  <div className="absolute bottom-0 left-[-2px] w-[5px] h-[5px] bg-[#2266f0]"></div>
                </div>
                
                <div className="relative z-10 space-y-12">
                  <div>
                    <h3 className="text-xl text-white mb-6 font-medium tracking-wide flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-[#2266f0]"></div>
                      전용 특별 혜택 안내
                    </h3>
                    <ul className="text-base md:text-lg text-[#d4d4d4] font-light leading-relaxed space-y-4">
                      <li className="flex gap-4"><span className="text-[#2266f0] font-bold">01</span><span>기본 견적에서 할인이 적용됩니다. </span></li>
                      <li className="flex gap-4"><span className="text-[#2266f0] font-bold">02</span><span>작업 완료 후에도 무상 A/S(수정)가 추가 제공됩니다.</span></li>
                      <li className="flex gap-4"><span className="text-[#2266f0] font-bold">03</span><span>우선 작업 배정, 작업 완성 후 후불결제가 가능합니다.</span></li>
                    </ul>
                  </div>
                  
                  {/* VIP Info Boxes */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                    <div className="border border-[#2266f0]/30 p-6 relative group hover:bg-[#2266f0]/5 transition-colors">
                      <div className="text-mono text-[10px] text-[#2266f0] mb-2 tracking-widest">TYPE 1 VIP PRICE</div>
                      <div className="flex items-baseline gap-3">
                        <span className="text-lg text-[#666] line-through">30,000</span>
                        <div className="text-2xl font-light text-white">20,000<span className="text-sm text-[#666] ml-1">KRW</span></div>
                      </div>
                    </div>
                    <div className="border border-[#2266f0]/30 p-6 relative group hover:bg-[#2266f0]/5 transition-colors">
                      <div className="text-mono text-[10px] text-[#2266f0] mb-2 tracking-widest">TYPE 2 VIP PRICE</div>
                      <div className="flex items-baseline gap-3">
                        <span className="text-lg text-[#666] line-through">300,000</span>
                        <div className="text-2xl font-light text-white">200,000<span className="text-sm text-[#666] ml-1">KRW</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Notes & Refunds Tab */}
          {activeTab === 'Notes & Refunds' && (
            <motion.div
              key="notes"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="min-h-[60vh] relative"
            >
              {/* Brutalist Background Element */}
              <div className="absolute top-10 right-0 -z-10 text-[10vw] leading-none font-bold text-transparent opacity-20 select-none pointer-events-none" style={{ WebkitTextStroke: '1px #2266f0' }}>
                INFO
              </div>

              <div className="flex items-end justify-between mb-12 border-b border-white/10 pb-6">
                <div className="flex items-center gap-4">
                  <div className="w-2.5 h-2.5 bg-[#2266f0]"></div>
                  <h2 className="text-display text-3xl md:text-4xl tracking-tight uppercase">NOTES & REFUNDS</h2>
                </div>
                <span className="text-mono text-xs text-[#666] tracking-widest hidden md:inline-block">GUIDELINES</span>
              </div>
              
              {/* Brutalist Metadata Tags */}
              <div className="flex flex-wrap gap-2 mb-10">
                <span className="text-mono text-[10px] text-[#2266f0] border border-[#2266f0]/30 px-2 py-1 uppercase tracking-widest">Doc // Rules</span>
                <span className="text-mono text-[10px] text-[#666] border border-white/10 px-2 py-1 uppercase tracking-widest">Update // 2026</span>
              </div>

              <div className="relative overflow-hidden pl-6 md:pl-8">
                {/* Avant-garde decorative line */}
                <div className="absolute left-0 top-1 bottom-1 w-[1px] bg-white/20">
                  <div className="absolute top-0 left-[-2px] w-[5px] h-[5px] bg-[#2266f0]"></div>
                  <div className="absolute bottom-0 left-[-2px] w-[5px] h-[5px] bg-[#2266f0]"></div>
                </div>
                
                <div className="relative z-10 space-y-12">
                  <div>
                    <h3 className="text-xl text-white mb-6 font-medium tracking-wide flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-[#2266f0]"></div>
                      주의사항 (Notes)
                    </h3>
                    <ul className="text-base md:text-lg text-[#d4d4d4] font-light leading-relaxed space-y-4">
                      <li className="flex gap-4"><span className="text-[#2266f0] font-bold">01</span><span>모든 작업물의 저작권은 작업자에게 있습니다.</span></li>
                      <li className="flex gap-4"><span className="text-[#2266f0] font-bold">02</span><span>상업적 이용 시 추가금이 발생할 수 있습니다.</span></li>
                      <li className="flex gap-4"><span className="text-[#2266f0] font-bold">02</span><span>음원 사용 시(영상 삽입 등), @littledeath 를 표기해주세요.</span></li>
                      <li className="flex gap-4"><span className="text-[#2266f0] font-bold">03</span><span>작업 기간은 입금 확인 후 최소 5일 ~ 최대 20일 소요됩니다.</span></li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl text-white mb-6 font-medium tracking-wide flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-[#2266f0]"></div>
                      환불 규정 (Refunds)
                    </h3>
                    <ul className="text-base md:text-lg text-[#d4d4d4] font-light leading-relaxed space-y-4">
                      <li className="flex gap-4"><span className="text-[#2266f0] font-bold">01</span><span>작업 시작 전: 100% 환불 가능</span></li>
                      <li className="flex gap-4"><span className="text-[#2266f0] font-bold">02</span><span>러프/스케치 단계: 50% 환불 가능</span></li>
                      <li className="flex gap-4"><span className="text-[#2266f0] font-bold">03</span><span>작업 완료 후: 환불 불가</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Links Section (Replacing Sonic Arsenal) */}
        <motion.section 
          className="mt-32"
          initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: false, margin: "-10%" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="flex items-end justify-between mb-8">
            <div className="flex items-center gap-4">
              <div className="w-2.5 h-2.5 bg-[#2266f0]"></div>
              <h2 className="text-display text-3xl md:text-4xl tracking-tight uppercase">S I T E</h2>
            </div>
            <span className="text-mono text-xs text-[#666] tracking-widest hidden md:inline-block">NETWORKS</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* YouTube Card */}
            <a href="https://www.youtube.com/@cain_littledeath" target="_blank" rel="noopener noreferrer" className="group hardware-panel p-8 relative overflow-hidden flex flex-col justify-between min-h-[240px] transition-all hover:border-[#2266f0]/30">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#2266f0]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none group-hover:bg-[#2266f0]/10 transition-colors duration-500"></div>
              <div className="halftone-overlay"></div>
              <div className="flex justify-between items-start z-10">
                <Youtube size={32} strokeWidth={1.5} className="text-[#666] group-hover:text-[#2266f0] transition-colors" />
                <ArrowUpRight size={20} className="text-[#666] group-hover:text-white transition-colors" />
              </div>
              
              <div className="z-10 mt-12">
                <h3 className="text-display text-2xl uppercase mb-2 group-hover:text-white transition-colors">YouTube</h3>
                <p className="text-[#666] text-sm font-light break-keep">개인 작업물</p>
              </div>

              {/* Blue Matrix Accent */}
              <div className="absolute bottom-6 right-6 grid grid-cols-4 grid-rows-4 gap-1.5 opacity-40 group-hover:opacity-100 transition-opacity">
                {[...Array(16)].map((_, i) => (
                  <div key={i} className={`w-1.5 h-1.5 rounded-full ${Math.random() > 0.6 ? 'bg-[#2266f0]' : 'bg-white/10'}`}></div>
                ))}
              </div>
            </a>

            {/* SoundCloud Card */}
            <a href="https://soundcloud.com/cain_soundtrack" target="_blank" rel="noopener noreferrer" className="group hardware-panel p-8 relative overflow-hidden flex flex-col justify-between min-h-[240px] transition-all hover:border-[#2266f0]/30">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#2266f0]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none group-hover:bg-[#2266f0]/10 transition-colors duration-500"></div>
              <div className="halftone-overlay"></div>
              <div className="flex justify-between items-start z-10">
                <Cloud size={32} strokeWidth={1.5} className="text-[#666] group-hover:text-[#2266f0] transition-colors" />
                <ArrowUpRight size={20} className="text-[#666] group-hover:text-white transition-colors" />
              </div>
              
              <div className="z-10 mt-12">
                <h3 className="text-display text-2xl uppercase mb-2 group-hover:text-white transition-colors">SoundCloud</h3>
                <p className="text-[#666] text-sm font-light break-keep">데모 및 포트폴리오</p>
              </div>

              {/* Blue Matrix Accent */}
              <div className="absolute bottom-6 right-6 grid grid-cols-4 grid-rows-4 gap-1.5 opacity-40 group-hover:opacity-100 transition-opacity">
                {[...Array(16)].map((_, i) => (
                  <div key={i} className={`w-1.5 h-1.5 rounded-full ${Math.random() > 0.6 ? 'bg-[#2266f0]' : 'bg-white/10'}`}></div>
                ))}
              </div>
            </a>

            {/* Crepe Card */}
            <a href="https://crepe.cm/@_littledeath" target="_blank" rel="noopener noreferrer" className="group hardware-panel p-8 relative overflow-hidden flex flex-col justify-between min-h-[240px] transition-all hover:border-[#2266f0]/30">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#2266f0]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none group-hover:bg-[#2266f0]/10 transition-colors duration-500"></div>
              <div className="halftone-overlay"></div>
              <div className="flex justify-between items-start z-10">
                <div className="w-8 h-8 rounded-full border-2 border-[#666] group-hover:border-[#2266f0] flex items-center justify-center text-[#666] group-hover:text-[#2266f0] font-bold text-sm transition-colors">C</div>
                <ArrowUpRight size={20} className="text-[#666] group-hover:text-white transition-colors" />
              </div>
              
              <div className="z-10 mt-12">
                <h3 className="text-display text-2xl uppercase mb-2 group-hover:text-white transition-colors">Crepe</h3>
                <p className="text-[#666] text-sm font-light break-keep">크레페 커미션 신청</p>
              </div>

              {/* Blue Matrix Accent */}
              <div className="absolute bottom-6 right-6 grid grid-cols-4 grid-rows-4 gap-1.5 opacity-40 group-hover:opacity-100 transition-opacity">
                {[...Array(16)].map((_, i) => (
                  <div key={i} className={`w-1.5 h-1.5 rounded-full ${Math.random() > 0.6 ? 'bg-[#2266f0]' : 'bg-white/10'}`}></div>
                ))}
              </div>
            </a>
          </div>
        </motion.section>

        {/* Footer */}
        <motion.footer 
          className="mt-32 pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8"
          initial={{ opacity: 0, filter: 'blur(4px)' }}
          whileInView={{ opacity: 1, filter: 'blur(0px)' }}
          viewport={{ once: false, margin: "0px" }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <div className="text-display text-2xl uppercase mb-4">C O N T A C T</div>
            <div className="flex flex-col gap-2">
              <a href="mailto:imee1030@naver.com" className="text-mono text-base md:text-lg text-[#a0a0a0] hover:text-[#2266f0] transition-colors flex items-center gap-2">
                imee1030@naver.com <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
          
          <div className="flex gap-8 text-mono text-xs tracking-widest text-[#666] uppercase items-center">
            <span className="opacity-50">© {new Date().getFullYear()} CAIN_LITTLEDEATH</span>
            <form onSubmit={(e) => {
              e.preventDefault();
              if (vipPassword === 'cainvip') {
                setActiveTab('vip');
                setVipPassword('');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              } else {
                alert('비밀번호가 틀렸습니다.');
                setVipPassword('');
              }
            }}>
              <input 
                type="password" 
                value={vipPassword}
                onChange={(e) => setVipPassword(e.target.value)}
                className="bg-transparent border-none outline-none text-[#888] focus:text-[#2266f0] w-12 text-center transition-colors placeholder:text-[#666] hover:placeholder:text-[#2266f0] cursor-pointer focus:cursor-text"
                placeholder="•••"
                title="Secret Area"
              />
            </form>
          </div>
        </motion.footer>

      </main>
    </div>
  );
}
